// enlace a los colores.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// estrayendo los colores.
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// remplazando el texto de cada color.
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// actualizar color. 
function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

//actualizar color red (Rojo).
inputRojo.addEventListener('change', (e) => {
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

//actualizar color  green (Verde).
inputVerde.addEventListener('change', (e) => {
  verde = e.target.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

//actualizar color  blue (Azul).
inputAzul.addEventListener('change', (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});