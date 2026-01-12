import time
import zhinst.core
import numpy as np

import pyvisa
rm = pyvisa.ResourceManager()

hmp=rm.open_resource('ASRL4::INSTR')

device_id = "dev712"     # ex: 'dev1234'
demod_index = 1           # numéro du démodulateur

server_host = "localhost"
server_port = 8005        # 8004 = HF2 / 8005 = MF / 8006 = UHF
api_level = 1

# =========================
# Connexion au serveur
# =========================
daq = zhinst.core.ziDAQServer(server_host, server_port, api_level)

# Vérifie la connexion au device
daq.connectDevice(device_id, "1gbe")

# =========================
# Configuration DEMOD
# =========================
demod_path = f"/{device_id}/demods/{demod_index}"

daq.setInt(f"{demod_path}/enable", 1)
daq.setDouble(f"{demod_path}/rate", 100)   # 1 kSa/s
daq.setInt(f"{demod_path}/trigger", 0)
daq.setInt(f"{demod_path}/order", 4)

daq.sync()

# =========================
# Acquisition d’un point
# =========================
# Abonnement au noeud sample
sample_path = f"{demod_path}/sample"
daq.subscribe(sample_path)
Npts=100
current = np.linspace(5,6,Npts)
x=np.zeros(Npts)
for i in range(Npts):
    hmp.write(f'SOUR:CURR {current[i]}')
    time.sleep(0.1)
    daq.flush()
    time.sleep(0.1)  # laisse le temps d’acquérir des données
    data = daq.poll(0.1, 100, 0, True)
    xlast = data['/dev712/demods/1/sample']['x']
    print(xlast.shape)
    x[i]=xlast.mean()

daq.unsubscribe(sample_path)
