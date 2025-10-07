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
    parrafo.style.color = coloors[getRandom(coloors.length)]
    parrafo.style.backgroundColor = coloors[getRandom(coloors.length)]
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

  const originalSrc = image.src;

  image.addEventListener('mouseover', () => {
    image.src = "./assets/abracadabra.gif";
  });

  image.addEventListener('mouseout', () => {
    image.src = originalSrc; // Volvemos a la original
  });
}

//3.2

for (let parrafo of parrafos) {
  const originalColor = parrafo.style.color;
  const originalBackground = parrafo.style.backgroundColor;

  parrafo.addEventListener('mouseover', () => {
    parrafo.style.color = "#1e929dff";
    parrafo.style.backgroundColor = "#c5e836ff";
  });

  parrafo.addEventListener('mouseout', () => {
    parrafo.style.color = originalColor;
    parrafo.style.backgroundColor = originalBackground;
  });
}


//3.3

for (let seccion of secciones) {
  seccion.addEventListener('mouseover', () => {
    seccion.style.backgroundColor = "#a11313ff";
  });

  seccion.addEventListener('mouseout', () => {
    seccion.style.backgroundColor = ""; // Vuelve al color CSS original
  });
}

//BONUS EJERCICIO 4
const colors = ['red', 'blue', 'green']

function getRandom(arraylongi) {
  const randomIndex = Math.floor(Math.random() * arraylongi)
   // //Math.random genera un numero aleatorio entre 0 y 0,9999.. y lo multiplicamos por la longitud del array. Math floor, redondead a un numero entero por debajo.
   // Así calculamos el índice aleatorio
return randomIndex
}

console.log(colors[getRandom(colors.length)])

// //BONUS EJERCICIO 5

const coloors = ['#51A3A3', '#75485E','#CB904D','#DFCC74','#C3E991']
coloors[getRandom(coloors.length)]