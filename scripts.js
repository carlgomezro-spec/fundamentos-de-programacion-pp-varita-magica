//EJERCICIO 1

const links = document.querySelectorAll('a');

for (let link of links) {
  link.addEventListener('click', (event) => {
    event.preventDefault()
  });
}

//EJERCICIO 2
//2.1

const images = document.querySelectorAll('img');

for (let image of images) {
  image.addEventListener('click',() => {
    image.src = "./assets/magic-1.gif"
  });
}

//2.2

const parrafos = document.querySelectorAll('p');

for (let parrafo of parrafos) {
  parrafo.addEventListener('click',() => {
    parrafo.style.color = "#a529a5ff"
    parrafo.style.backgroundColor = "#5bea8fff"
  });
}

//2.3

const secciones = document.querySelectorAll('.post-content');

for (let seccion of secciones) {
  seccion.addEventListener('click',() => {
    seccion.style.backgroundColor = "#d53f21ff"
  });
}

//EJERCICIO 3
//3.1

for (let image of images) {
  image.addEventListener('mouseover',() => {
  image.src = "./assets/abracadabra.gif"});
}

//3.2

for ( let parrafo of parrafos) {
  parrafo.addEventListener('mouseover',() => {
    parrafo.style.color = "#1e929dff"
    parrafo.style.backgroundColor = "#c5e836ff"
  })
}

//3.3

for (let seccion of secciones) {
  seccion.addEventListener('mouseover',() => {
    seccion.style.backgroundColor = "#a11313ff"
  })
}

//BONUS EJERCICIO 4
const colors = ['red', 'blue', 'green']
function getRandom(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("Debes proporcionar un array con al menos un elemento.");
  }

  const randomIndex = Math.floor(Math.random() * array.length); // calculamos el índice aleatorio

  for (const i in array) { // i es el índice como string
    if (Number(i) === randomIndex) {
      return array[i]; // devolvemos el elemento cuando coincide con el índice aleatorio
    }
  }
}

console.log(getRandom(colors))

