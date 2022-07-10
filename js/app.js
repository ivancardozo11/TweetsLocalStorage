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

    const tweetObj = {
        id: Date.now(),
        tweet
    }
    
    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    //Una vez agregado vamos a crear el HTML
    crearHTML();

    //Restart form

    formulario.reset();
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

// Shows a tweet list.
function crearHTML() {

    limpiarHTML();

    if (tweets.length > 0) {
        tweets.forEach( tweet =>{
            //Creates html
            const li = document.createElement('li');

            //adds text
            li.innerText = tweet.tweet ;
            
            // insertarlo en el html
            listaTweets.appendChild(li);
        })
    }
}


function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}