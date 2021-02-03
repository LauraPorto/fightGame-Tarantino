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
        enemigo.vida -= this.fuerza 
    };

    defensa(enemigo){
        
    };

    ataqueEspecial(enemigo){

    };
};

let player1 = new Jugadores("Mia", 200, 50, 20, 30, 8, 15); 
let player2 = new Jugadores("Jules", 200, 60, 30, 30, 6, 11); 
let player3 = new Jugadores("Jackie", 200, 45, 25, 30, 9, 12); 
let player4 = new Jugadores("Hans", 200, 40, 20, 35, 7, 14); 
let player5 = new Jugadores("Mamba", 200, 55, 20, 27, 8, 13); 
let player6 = new Jugadores("Django", 200, 60, 20, 31, 9, 12); 

let team1 = "";
let team2 = "";


//Funciones para el juego
let atacar = () => {
    let turno = Math.floor(Math.random () * 5); 

    if (turno == 0){
        team2.ataque(team1);
        console.log("Ataque a Team 1 !");
    } else {
        team1.ataque(team2);
        console.log("Ataque a Team 2 !"); 
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
