from pydata import createh5, increment_file
import time
import zhinst.core
from scipy.signal import medfilt
daq = zhinst.core.ziDAQServer('127.0.0.1', 8005, 1)

    
# Modulation
modulation_freq = daq.getDouble('/dev712/oscs/2/freq')
modulation_vpp  = daq.getDouble('/dev712/sigouts/1/range') * daq.getDouble('/dev712/sigouts/1/amplitudes/7')
tc = daq.getDouble('/dev712/demods/1/timeconstant')

# Microwave
rf_power = float(psg.query('POW?'))
freq = float(psg.query('FREQ?'))
psg.write(':SOUR:FM:STAT 0;:SOUR:PM:STAT 1;:SOUR:PM:DEV 1.6')

# Magnet
g = 4.385633372388799e-09
#current = g*freq + arange(-1.46,1.47,0.01)
current = arange(0, 5000, 0.01)
magnet.write_raw('sour:chan 0\n')
setcurrent(current[0])
time.sleep(5)

fig,ax=subplots()
X = zeros_like(current)*nan
Y = zeros_like(current)*nan
Xpdh = zeros_like(current)*nan
Ypdh = zeros_like(current)*nan

#main
fcenter = freq
def centerpeak(fcenter):
    psg.write(f'FREQ {fcenter}')
    psg.write(':SOUR:PM:STAT 0;:SOUR:FM:STAT 1;:SOUR:FM:DEV 8E6')
    time.sleep(0.01)
    rto.query('RUNS;*OPC?')
    data = rto.query_binary_values('CHAN2:WAV1:DATA:VAL?',container=ndarray)
    fcenter = fcenter + round((argmax(gf(data,50))-5000)/10000*16e6)
    psg.write(f'FREQ {fcenter}')
    return fcenter

for i in range(len(current)):
    setcurrent(current[i])
    time.sleep(0.5)
    res = daq.getSample('/dev712/demods/1/sample')
    X[i] = res['x'][-1]
    Y[i] = res['y'][-1]
    res = daq.getSample('/dev712/demods/0/sample')
    Xpdh[i] = res['x'][-1]
    Ypdh[i] = res['y'][-1]
    ax.cla()
    ax.plot(current*68.2, X*1e6, current*68.2, Y*1e6)
    #draw
    #abort
d=Data(current=current,lockinX=X,lockinY=Y,Xpdh=Xpdh,Ypdh=Ypdh,modulation_vpp=modulation_vpp,modulation_freq=modulation_freq,freq=freq,RF=rf_power,time_constant=tc)
d.save('pdh_zurich_esr_long.h5')
setcurrent(0)