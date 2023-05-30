"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener todos los botones utilizando su clase o ID
y asignarle el evento de mouse "click"

Cuando un botón es presionado, se debe agregar la clase
"fuego" al botón (deberá cambiar de color)

*/

const btn1 = document.getElementById("boton1") /*console.log(btn1)*/
const btn2 = document.getElementById("boton2") /*console.log(btn2)*/
const btn3 = document.getElementById("boton3") /*console.log(btn3)*/

btn1.addEventListener("click", function() {
    btn1.classList.add("fuego");
})

btn2.addEventListener("click", function() {
    btn2.classList.add("fuego");
})

btn3.addEventListener("click", function() {
    btn3.classList.add("fuego");
})
