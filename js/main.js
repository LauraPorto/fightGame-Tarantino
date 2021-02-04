//Características de los jugadores
class Jugadores {

    constructor(nombre, vida, fuerza, defensa, suerte, arma){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza; 
        this.defensa = defensa;
        this.suerte = suerte;
        this.arma = arma;
    };

    ataque(enemigo){
        enemigo.vida -= (this.fuerza - enemigo.defensa) * (enemigo.arma - this.suerte);
    };

    defensa(enemigo){
        this.vida -= enemigo.fuerza + (enemigo.arma * 0.5)
    };

    ataqueEspecial(enemigo){
        enemigo.vida -= (this.fuerza * 0.5 + this.arma) - (enemigo.defensa - this.arma);
    };
};



let player1 = new Jugadores("Mia", 250, 58, 20, 5, 9); 
let player2 = new Jugadores("Jules", 250, 60, 30, 6, 9); 
let player3 = new Jugadores("Jackie", 250, 65, 25, 4, 9); 
let player4 = new Jugadores("Hans", 250, 55, 28, 6, 7); 
let player5 = new Jugadores("Mamba", 250, 60, 32, 5, 7); 
let player6 = new Jugadores("Django", 250, 56, 29, 4, 8); 


let allplayers = {
    "Mia": player1, 
    "Jules": player2, 
    "Jackie": player3, 
    "Hans": player4, 
    "Mamba": player5, 
    "Django": player6
};


let team1 = "";
let team2 = "";



//Funciones para el juego
let atacar = () => {
    let turno = Math.floor(Math.random() * 5);
    let especial = Math.floor(Math.random () * 5); 

    if (turno == 0){
        if(especial == 3){
            console.log("ATAQUE ESPECIAL CON ARMA!"); 
            team1.ataqueEspecial(team2);
        }else{
            console.log("Ataque a Team 2 !");
            team1.ataque(team2);
        }

    } else {
        if(especial == 3){
            console.log("ATAQUE ESPECIAL CON ARMA!");
            team2.ataqueEspecial(team1);
        }else{
            console.log("Ataque a Team 1 !");
            team2.ataque(team1);
        }
    };

    console.log("Team 1 : " + team1.vida);
    console.log("Team 2 : " + team2.vida);

}; 

let inicio = () => {
    
    let vidaTotal = 200; 

    team1 = vidaTotal;
    team2 = vidaTotal; 

};

let seleccionJugador = (jugador) => {

    if(team1 == ""){
        team1 = jugador;
    } else {
        team2 = jugador; 

        document.getElementById(jugador).className = "jugadorElegido";
        document.getElementById(jugador).onclick = ""; 

        console.log("Personajes del team elegidos");
        if (team1 != team2){
            //Mensaje
            let mensajeScreen1 = document.getElementById("mensajeScreen1");
            
            mensajeScreen1.innerHTML = `¡Empieza la batalla entre ${team1} y ${team2}!`;

            //Pantalla con el enfrentamiento

            let showTeam1 = document.getElementById("contrincante1");
            let showTeam2 = document.getElementById("contrincante2");

            //Insertamos por innerHTML el div con la imagen de los  contrincantes    del team correspondiente, "cargamos" la     fotoJugador a la screen2
            showTeam1.innerHTML = `<div><img class="estiloContrincantes" src="img/${team1}".jpg></div>`; 
            showTeam2.innerHTML = `<div><img class="estiloContrincantes" src="img/${team2}".jpg></div>`; 

            //Cambio de pantalla con promise

            resolveIn(3000).then(delay => {

                cambiaScreen("screen1", "screen2");

            }); 
        };
    };
};

let cambiaScreen = (faseAntes, faseDespues) => {

    let antes = document.getElementById(faseAntes);
    let despues = document.getElementById(faseDespues);

    antes.style.display = "none"; 
    despues.style.display = "block"; 
};


const resolveIn = delay => 
new Promise(res => setTimeout(() => res(delay), delay)); 


if (team1.vida < 0){
    cambiaScreen('screen2', 'screen3');
    let showMensaje1 = document.getElementById("mensajeScreen3");
    showMensaje1.innerHTML = `El ganador del combate es ${team1}`;
    let showWinner = document.getElementById("winner"); 
    showWinner.innerHTML = `<div><img class="winner" src="img/${team1}".jpg></div>`;

    resolveIn(3000).then(delay => {

        cambiaScreen("screen3", "screenIntro");

    }); 

} else if (team2.vida < 0) {
    cambiaScreen('screen2', 'screen3');
    let showMensaje2 = document.getElementById("mensajeScreen3");
    showMensaje2.innerHTML = `El ganador del combate es ${team2}`;
    let showWinner = document.getElementById("winner");
    showWinner.innerHTML = `<div><img class="winner" src="img/${team2}".jpg></div>`;

    resolveIn(3000).then(delay => {

        cambiaScreen("screen3", "screenIntro");

    }); 

} else {
    console.log("Error!");

};


