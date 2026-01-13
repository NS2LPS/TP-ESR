var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Pages Liminaires",
  "number": "",
  "title": "Avant-propos",
  "body": " Avant-propos   Jérôme Estève, Pierre Grégoire     Le TP se déroule en trois parties:  Dans la première partie, l'objectif est d'apprendre à manipuler un analyseur de réseau vectoriel (VNA) qui est un instrument de mesure fondamental en ingéniérie micro-onde. En particulier, on utilisera le VNA pour caractériser un résonateur diélectrique en KTO (KTa2O3).  Dans la deuxième partie, l'objectif est de réaliser un montage permettant de suivre l'évolution de la fréquence de résonance du résonateur en fonction du temps.  Dans la troisième partie, on couplera le résonateur en KTO à des spins électroniques afin d'observe la résonance de spin en mesurant le décalage induit sur la fréquence de résonance du résonateur.      Introduction  L'objectif de la séance est de mettre en évidence le phénomène de résonance paramagnétique électronique. Ce phénomène également appelé résonance de spin électronique ou Electron Paramagnetic Resonance (EPR) en anglais, est une technique de spectroscopie utilisée pour étudier les espèces chimiques possédant des électrons non appariés. Elle est particulièrement adaptée à l’analyse des radicaux libres, des ions de métaux de transition et de certains défauts paramagnétiques dans les solides. Le principe de la RPE repose sur l’interaction entre le moment magnétique de l’électron et un champ magnétique externe. Lorsqu’un échantillon paramagnétique est soumis à ce champ et irradié par des micro-ondes, une transition entre les niveaux d’énergie des spins électroniques peut se produire si la condition de résonance est satisfaite.  Cette condition de résonance s'écrit où est le rapport gyromagnétique de l'électron (ou facteur de Landé) et est le magnéton de Bohr. Pour un électron dans le vide, et la fréquence de résonance est d'environ 2.8 MHz\/G.  Pour observer cette résonance, nous allons coupler les spins électroniques à un résonateur diélectrique réalisé en KTa2O3 (KTO), un matériau de grande constante diélectrique ( ) et observer la modification de la résonance du résonateur induite par la présence des spins. En rampant le champ magnéitique, la fréquence de résonance des spins augmente et lorsqu'elle traverse celle du résonateur, on observe un croisement évité, permettant d'identifier la résonance de spin électronique.   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "Caractérisation d’un résonateur diélectrique avec un analyseur de réseau",
  "body": " Caractérisation d'un résonateur diélectrique avec un analyseur de réseau   Un analyseur de réseau vectoriel permet de mesurer les paramètres de scattering d'un dispositif micro-onde à un ou deux ports. Si l'appareil mesure un coefficient de réflexion, et si $i\\neq j$ un coefficient de transmission. Par exemple, pour mesurer , l'appareil émet un signal par le port 2 et mesure sur le port 1. Le VNA permet de mesurer le module et le phase de chaque paramètre en fonction de la fréquence.    Calibration du VNA  Avant d'utiliser le VNA pour faire des mesures, il faut le calibrer pour s'affranchir de la propagation dans les cables entre le VNA et lle dispositif à caractériser. Pour effectuer cette calibration, on applique des standards (open, short, match) sur chaque port puis on mesure la transmission entre les deux ports (through).   Brancher deux câbles sur le VNA et connecter les deux cables avec un \"I\". Appuyer sur \"Preset\" pour utiliser les paramètres de mesure par défaut.    Observer le signal mesuré en transmission et en réflexion ( ou ).    Enlever le I, et effectuer la calibration \"TOSM\" en appuyant sur la touche \"CAL\".    Enlever le dispositif de calibration et observer les coefficients de réflexion en phase et module.    Connecter à nouveau les deux cables avec un I et observer la transmission en phase et module.          "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "2",
  "title": "My Additional Section",
  "body": " My Additional Section  foo   The graph made by TikZ   A 5-cycle     bar  "
},
{
  "id": "figure-tikz-example-diagram",
  "level": "2",
  "url": "section-2.html#figure-tikz-example-diagram",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " The graph made by TikZ   A 5-cycle    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
