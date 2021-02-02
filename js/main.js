
// Clases de los personajes: 
class Luchador {

    constructor (nombres, vida, fuerza, defensa, suerte, velocidad){
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

}

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

        //Screen de emparejamiento de equipos (Promise) 
        
    }
}; 
