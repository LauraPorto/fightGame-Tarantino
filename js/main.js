//clases
class Luchador {

    constructor(nombre,vida,fuerza,defensa,suerte,arma){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.suerte= suerte;
        this.arma = arma;
    };

    ataque(enemigo){
        enemigo.vida -= (this.fuerza - enemigo.defensa) * (enemigo.arma - this.suerte);
    };

    ataqueEspecial(enemigo){
        enemigo.vida -= (this.fuerza * 0.5 + this.arma) - (enemigo.defensa - this.arma);
    };

    defensa(enemigo){
        this.vida -= enemigo.fuerza + (enemigo.arma * 0.5);
    };
};


//Instancias y variables globales
//nombre,vida,fuerza,defensa,suerte
let player1 = new Luchador("django",250,56,29,4,8);

let player2 = new Luchador("jackie",250,65,25,4,9);

let player3 = new Luchador("jules", 250,60,30,6,9);

let player4 = new Luchador("mamba",250,60,32,5,7);

let player5 = new Luchador("hans",250,55,28,6,7);

let player6 = new Luchador("mia",250,58,20,5,9);

let p1 = "";

let p2 = "";

//traductor
let allplayers = {
    "django": player1,
    "jackie": player2,
    "jules": player3,
    "mamba": player4,
    "hans": player5,
    "mia": player6
};

//Funciones 

let inicioGame = () => {

    let vidaInicial = 250;
    
    player1.vida = vidaInicial;
    player2.vida = vidaInicial;

    p1 = "";
    p2 = "";

    console.log("Inicio del juego");
     /*
    document.getElementById(personaje).className = "avatar";
    */
};

let cambiaScreen = (faseAhora,faseFutura) => {
    let pantallaActual = document.getElementById(faseAhora);

    let pantallaDestino = document.getElementById(faseFutura);

    pantallaActual.style.display = "none";
    pantallaDestino.style.display = "block";
};

let selectPersonaje = (personaje) => {
    if(p1 == ""){
        p1 = allplayers[personaje];

        document.getElementById(personaje).className = "avatar2";
        document.getElementById(personaje).onclick = "";


    }else{
        p2 = allplayers[personaje];

        document.getElementById(personaje).className = "avatar2";
        document.getElementById(personaje).onclick = "";


        let showPlayer1 = document.getElementById("contrincante1");
        let showPlayer2 = document.getElementById("contrincante2");

        showPlayer1.innerHTML = `<div ><img class="estilocontrincante" src="img/${p1.nombre}.png"></div>`;
        showPlayer2.innerHTML = `<div ><img class="estilocontrincante" src="img/${p2.nombre}.png"></div>`;

        console.log(showPlayer1.innerHTML);

        console.log(p1);
        console.log(p2);

        resolveIn(1000).then(delay => {

            cambiaScreen("screen1","screen2");
            
        });
    };
};

let atacar = () => {

    let turno = Math.floor(Math.random() * 2);
    let especial = Math.floor(Math.random() * 5);

    if(turno == 0){
        if(especial == 3){
            console.log("ATAQUE ESPECIAL");
            p1.ataqueEspecial(p2);
        }else{

            p1.ataque(p2);
        }
    }else{
        if(especial == 3){
            console.log("ATAQUE ESPECIAL");
            p2.ataqueEspecial(p1);
        }else{
            p2.ataque(p1);

        }
    };

        if(p1.vida <= 0 || p2.vida < 0){
            derrota ();
        }else {
            console.log("Seguimos con vida para siempre O K");
        };


    let showLife1 = document.getElementById("contador1");
    let showLife2 = document.getElementById("contador2");
    showLife1.innerHTML = `¡ ${p1.nombre}  =  ${p1.vida} !`; 
    showLife2.innerHTML = `¡ ${p2.nombre}  =  ${p2.vida} !`; 

};


//funcion de delay...

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));

console.log("Iniciamos el juego y la vida del player 1 es...." + player1.vida);
console.log("Iniciamos el juego y la vida del player 2 es...." + player2.vida);



let derrota = () => {
    if (p1.vida < 0) {
   
        cambiaScreen("screen2","screen3");
            
        let showMensaje1 = document.getElementById("mensajescreen3");
        showMensaje1.innerHTML = `El ganador del combate es ${player1.nombre}`;
        let showWinner = document.getElementById("winner");
        showWinner.innerHTML = `<div><img class="winner" src="img/${p1.nombre}.png"></div>`;

    }else if (p2.vida < 0){

        cambiaScreen("screen2","screen3");

        let showMensaje2 = document.getElementById("mensajescreen3"); 
        showMensaje2.innerHTML = `El ganador del combate es ${p2.nombre}`;
        let showWinner = document.getElementById("winner");
        showWinner.innerHTML = `<div><img class="winner" src="img/${p2.nombre}.png"></div>`;
    };

    inicioGame();

};
