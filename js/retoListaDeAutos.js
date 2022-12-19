var games = [
    "halo",
    "doom",
    "csgo",
    "lego",
    "quake",
    "gta",
    "minecraft",
    "tunic",
    "scorn",
    "forza"
];

function juego(game){
    this.game = game;
}

for (var i = 0; i < games.length; i++) {
    var nuevoGame = new juego(games[i]);
    console.log(nuevoGame)
}

var juegof= new juego(games[5]);
console.log(juegof);