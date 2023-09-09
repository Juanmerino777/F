const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorAleatorio() {
  let digitos = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    color += digitos[indiceAleatorio];
  }  
  return color;
}

boton.addEventListener('click', function() {
  let colorAleatorio = generarColorAleatorio();
  //actualizar el texto.
  color.textContent = colorAleatorio;
  //actualizar el color de fondo.
  document.body.style.backgroundColor = colorAleatorio;
})