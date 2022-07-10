//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];
//Events
eventListeners();

function eventListeners() {
    formulario.addEventListener('submit', agregarTweet);
}

//Functions

function agregarTweet(e) {
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;

    if (tweet ===  '') {
        mostrarError('No puede ir vacio');

        return; //This line is to avoid other lines of code to get executed.
    }
    
    console.log('Agregando tweet');
}


function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');
    

    //Insert content message in error.
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta despues de 3 segundos.
    setTimeout(() =>{
        mensajeError.remove();
    },3000);
}
