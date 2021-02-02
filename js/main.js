
// Clases de los personajes: 
class Luchador {

    constructor (nombre, vida, fuerza, defensa, suerte, velocidad){
        this.nombre = nombre; 
        this.vida = vida; 
        this.fuerza = fuerza; 
        this.defensa = defensa;
        this.suerte = suerte; 
        this.velocidad = velocidad;
    }; 

    ataque(enemigo){
        enemigo.vida -= (this.fuerza - enemigo.defensa);  
    }; 

    ataqueEspecial(enemigo){
        
    };

    defensa(){

    };

};

console.log(Luchador); 


//Instancias y construcción de objetos (personajes)
let player1 = new Luchador ("Mia", 300, 60, 30, 40, 20);
let player2 = new Luchador ("Jules", 300, 50, 40, 20, 30);
let player3 = new Luchador ("Jackie", 300, 45, 35, 10, 15); 
let player4 = new Luchador ("Hans", 300, 50, 35, 20, 15); 
let player5 = new Luchador ("Django", 300, 55, 40, 15, 20);
let player6 = new Luchador ("Mamba", 300, 40, 30, 20, 10);

let p1 = "";
let p2 = ""; 

console.log(player1, player2, player3, player4, player5, player6);

//Las funciones del juego
let selectJugador = (personaje) => {
    if(p1 == ""){
        p1 = personaje;

        document.getElementById(personaje).className = "jugadorElegido"; 
        document.getElementById(personaje).onclick = "";

    } else {
        p2 = personaje; 

        document.getElementById(personaje).className = "jugadorElegido"; 
        document.getElementById(personaje).onclick = "";

        //Mensaje de selección

        let mensaje = document.getElementById("mensaje");

        mensaje.innerHTML = `Has escogido al primer personaje, ${p1}, y al segundo, ${p2}`;

        //Pasar los players al screen2 
        let showPlayer1 = document.getElementById("enemigo1"); 
        let showPlayer2 = document.getElementById("enemigo2"); 

        showPlayer1.innerHTML = `<div><img class="estiloEnemigo" src="img/${p1}.jpg"></div>`;
        showPlayer2.innerHTML = `<div><img class="estiloEnemigo" src="img/${p2}.jpg"></div>`;

        console.log(showPlayer1.innerHTML);

        //Cambiar screen

        resolveIn(2000).then(delay => {
            cambiaPantalla("pantalla1", "pantalla2");

        });
    };
}; 

let atacar = () => {

    //Turno de ataque
    let turno = Math.floor(Math.random() * 2); 
    let especial = Math.floor(Math.random() * 5); 

    if (turno == 0) {
        if(especial == 3) {
            console.log("Ataque Especial"); 
            player1.ataqueEspecial(player2);
        }else{

            player1.ataque(player2);
        }
    }else{
        if(especial == 3){
            console.log("Ataque Especial"); 
            player2.ataqueEspecial(player1);
        }else{
            player2.ataque(player1);
        }
    };

    console.log("Vida 1: + player1.vida"); 
    console.log("Vida 2: + player2.vida");

}; 

let Inicio = () => {
    let vidaInicial = 200; 

    player1.vida = vidaInicial;
    player2.vida = vidaInicial;

    p1 = "";
    p2 = ""; 
}; 

let cambiaPantalla = (fase1, fase2) => {
    let pantallaActual = document.getElementById(fase1);
    let pantallaDestino = document.getElementById(fase2); 

    //cambio de pantalla

    pantallaActual.style.display = "none"; 
    pantallaDestino.style.display = "block"; 
}; 

//Declaración de Inicio del juego
console.log("Iniciamos el juego y la vida del player 1 es..." + player1.vida); 
console.log("Iniciamos el juego y la vida del player 2 es..." + player2.vida);

//Funcion Delay
const resolveIn = delay => new Promise(res => setTimeout(() => res(delay), delay)); 


