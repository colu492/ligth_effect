const luz = document.querySelector('.luz');

window.addEventListener('mousemove', (e) =>{
luz.style.setProperty('--x',e.clientX + 'px');
luz.style.setProperty('--y',e.clientY + 'px');

})
/* Se agrega un event listener a la ventana del navegador que está pendiente del movimiento del mouse del usuario.
Cuando el mouse se mueve, se ejecuta una función anónima que toma un parámetro de evento (e).
Dentro de esta función, se selecciona un elemento del DOM que tiene la clase "luz" utilizando el método document.querySelector(),
y se almacena en una variable llamada "luz".
Luego, se utiliza el método style.setProperty() para actualizar el valor de dos variables CSS personalizadas,
--x y --y, que se utilizan para definir la posición de la luz en función de la posición del mouse del usuario.
e.clientX y e.clientY son las coordenadas horizontales y verticales del mouse, respectivamente,
y se concatenan con la unidad 'px' para establecer el valor de la propiedad CSS.
En resumen se está actualizando la posición de un elemento en función de la posición del mouse del usuario en tiempo real. */

/* An event listener is added to the browser window that listens for the user's mouse movement.
When the mouse moves, an anonymous function that takes an event parameter (e) is executed.
Within this function, an element in the DOM with the class "luz" is selected using the document.querySelector() method
and stored in a variable called "luz".
Then, the style.setProperty() method is used to update the value of two custom CSS variables, --x and --y,
which are used to define the position of the light based on the user's mouse position.
e.clientX and e.clientY are the horizontal and vertical coordinates of the mouse, respectively,
and are concatenated with the 'px' unit to set the value of the CSS property.
In summary, an element's position is being updated based on the user's mouse position in real time. */