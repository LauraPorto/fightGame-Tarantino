//Clase de los jugadores
class Luchador {

    constructor(nombre, vida, fuerza, defensa, suerte){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.suerte = suerte; 
        this.handicap = suerte - Math.floor(Math.random() * 5);
    };

    ataque(enemigo){
        enemigo.vida -= (this.fuerza - enemigo.defensa) * (this.suerte - this.handicap); 
    };

    ataqueEspecial(enemigo){
        enemigo.vida -= (this.fuerza * 0.5 + this.fuerza) - enemigo.defensa;
    };

    defensa(){

    };
};

console.log(Luchador); 


//Instancias y variables globales
let player1 = new Luchador("Jules", 200, 60, 30, 8);
let player2 = new Luchador("Mamba", 200, 50, 40, 8);
let player3 = new Luchador("Hans", 200, 55, 35, 7); 
let player4 = new Luchador("Mia", 200, 50, 30, 8); 
let player5 = new Luchador("Django", 200, 60, 30, 9); 
let player6 = new Luchador("Jackie", 200, 45, 40, 6); 

let p1 = ""; 
let p2 = ""; 

console.log(player1, player2, player3, player4, player5, player6); 


//Funciones del juego
let inicioGame = () => {

    let vidaInicial = 200; 

    player1.vida = vidaInicial;
    player2.vida = vidaInicial;

}; 


let selectPersonaje = (personaje) => {
    if(p1 == ""){
        p1 = personaje; 

        document.getElementById(personaje).className = "avatar2"; 
        document.getElementById(personaje).onclick = ""; 

    }else{
        p2 = personaje; 

        document.getElementById(personaje).className = "avatar2"; 
        document.getElementById(personaje).onclick = ""; 
        
        //Mensaje
        let mensaje = document.getElementById("mensaje");

        mensaje.innerHTML = `Has escogido al primer personaje que es ${p1} y al segundo que es ${p2}`; 

        //Cargar personas a Screen2
        let showPlayer1 = document.getElementById("contrincante1");
        let showPlayer2 = document.getElementById("contrincante2"); 

        showPlayer1.innerHTML = `<div><img class="estiloContrincante" src="img/${p1}.jpg"></div>`;  
        showPlayer2.innerHTML = `<div><img class="estiloContrincante" src="img/${p2}.jpg"></div>`; 

        //Cambio de pantalla (los personajes ya están cargados), después de esta función se define la función de cambio de pantalla y la función de promesa
        resolveIn(3000).then(delay => {

            cambiaPantalla("screen1", "screen2");

        });
    };
};

        //Función de Delay para el cambio de pantalla (promise)
const resolveIn = delay => 
new Promise(res => setTimeout(() => res(delay), delay)); 

        //Función de cambio de pantalla llamada en la función de selectPersonaje
let cambiaPantalla = (faseAhora, faseFutura) => {
    let pantallaActual = document.getElementById(faseAhora);
    let pantallaDestino = document.getElementById(faseFutura); 

    pantallaActual.style.display = "none"; 
    pantallaDestino.style.display = "block";
};    

        //Función de ataque
let atacar = () => {
        //turno
    let turno = Math.floor(Math.random() * 2); 
    let especial = Math.floor(Math.random() * 5); 

    if(turno == 0){
        if(especial == 3){
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

    console.log("Vida 1: " + player1.vida);
    console.log("Vida 2: " + player2.vida);
}; 