//Seleccionar el elemento por medio del (id)

//contenedor
const contenedor = document.getElementById('contenedor');
console.log(contenedor);
console.log(typeof contenedor.innerHTML);//innerHTML= muestra el texto interno del contenido
console.log(typeof contenedor);//typeof=muestra el tipo de dato 

//titulo
const titulo = document.getElementById('titulo');
console.log(titulo);
console.log(titulo.tagName);//tagName=muestra el nombre de la etiqueta


//Seleccionar el elemento por medio de su (clase)---------------------

const toppings = document.getElementsByClassName('topping');
console.log(toppings);
console.log(toppings.length);//length=muestra el tamaño (longitud)
console.log(toppings[0]);//por medio de los [] podemos acceder a los elementos individualmente
console.log(toppings[0].id);//accedemos al nombre de id


//Seleccionar un elemento por medio de la etiqueta--------------------

const misToppings = document.getElementsByTagName('li');
console.log(misToppings);


//seleccionar un elemento por medio de un selector (css).------------

//.queryselector()= permite seleccionar el primer elemento que cumpla el criterio.
const aceitunas = document.querySelector('#aceituna');
console.log(aceitunas);//seleccionamos directamente el id aceitunas

const primerClaseTopping = document.querySelector('.topping');
console.log(primerClaseTopping);//seleccionamos directamente la primera clase topping

const primerToppingNaranja= document.querySelector('.topping.fondo-naranja');
console.log(primerToppingNaranja);//seleccionamos  la primera clase topping.fondo-naranja


//.queryselectorAll()= permite seleccionar todos los elementos que cumplan el criterio

const fondosNaranja = document.querySelectorAll('.fondo-naranja');
console.log(fondosNaranja);

/*
//personalizar colores----------------------------------------------- 

const primerTopping = document.querySelector('.topping');//selecciono (aceitunas)
primerTopping.style.backgroundColor = 'blue';//cambio el color de fondo 
primerTopping.style.color = '#5bff00';//cambio el color de letra
primerTopping.style.textTransform = 'uppercase'//cambio a mayuscula

//-----------------------------------------
//formas de acceder al texto de un elemento
const listaDeToppings = document.getElementById('lista-toppings');
console.log('> innerText');
console.log(listaDeToppings.innerText);

console.log('> textContent');
console.log(listaDeToppings.textContent);

console.log('> innerHTML');
console.log(listaDeToppings.innerHTML);



//modificar el texto de un elemento-----------------------------------

const tituloToppings = document.getElementById('titulo');
tituloToppings.innerText = 'mis toppings favoritos';
*/

//modificar un atributo-----------------------------------------
const enlace = document.getElementsByTagName('a');
console.log(enlace[0].getAttribute('href'));//getAttribute()=permite verificar el attributo 


//eliminar un attributo----------------------------------------

console.log(enlace[0].removeAttribute('href'));//remove=elimina el atributo


//asignar un nuevo atributo---------------------
console.log(enlace[0].setAttribute('href', 'https://www.freecodecamp.org'));

//cambiar una clase------------------------------

const primerTopping = document.querySelector('.topping');

console.log(primerTopping.classList);//classList=obtenemos una lista de clase
primerTopping.classList.add('texto-negro');//add= agrega la clase (texto-negro)
primerTopping.classList.remove('texto-negro');//remove=elimina la clase (texto-negro)

console.log(primerTopping.classList.contains('texto-negro'));//contains=verificamos la existencia de una clase.

//crear un elemento desde 0---------------------------------

const listaDeToppingss = document.getElementById('lista-toppings');//selecionamos (lista-toppings).
const toppingNuevo = document.createElement('li');//creamos el elemento(li).
toppingNuevo.classList.add('topping', 'fondo-marron');//agregamos las clases ('topping', 'fondo-marron').
toppingNuevo.innerText = 'Piña con queso Extra';//asignamos el texto interno al (li)
listaDeToppingss.append(toppingNuevo);//creamos un nodo dentro del elemento.
toppingNuevo.remove();//eliminamos todo


/*eventos en el DOM--------------------------------------------------------

#1.avento target= recibe la accion que desencadena el avento.

trigger= desencadenante.

#2.Event handler= la funcion que maneja lo que ocure cuando se desencadena el evento.

#3.Event listener= es la coneccion que hay entre los tres eventos anteriores.
*/
//2.34...


//CREANDO EL EVENTO CLICK por el (id)------------------------------------
/*
const albahaca = document.getElementById('albahaca');
 
function mostrarClick(topping) {
  console.log(topping);
}

albahaca.addEventListener('click', mostrarClick);
*/
const albahaca = document.getElementById('albahaca');
 
function mostrarClick(e) {
  console.log(e.target.innerText);
}

albahaca.addEventListener('click', mostrarClick);

////CREANDO EL EVENTO CLICK PIR MEDIOS DE LA CLASE------------------

//Ejemplo 1.
// llamamos al elemento
const toppingss = document.getElementsByClassName('toppings');

//creamos una funcion que muestre el elemento (y el texto interno) 
function mostrarClick(e) {
  console.log(e.target.innerText);
}
//con un siclo creamos una variable que a su vez nos ayude a mostrar el evento 
for ( const topping of toppings) {
  topping.addEventListener('click', mostrarClick);
}

//Ejemplo 2.

// creando la funcion flecha como segundo argumento  
  for ( const topping of toppings) {
    topping.addEventListener('click', (e) => {
      console.log(e.target.innerText);
    });
  }