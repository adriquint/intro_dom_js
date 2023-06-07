"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado:

1)
Obtener cada uno de los botones utilizando su ID,
luego cambiar el texto de los botones por:
PEGAR / COPIAR / CORTAR

2)
Obtener todos los botones utilizando la clase "btn",
luego a todos los botones agregar la clase "agua"

*/

let boton1 = document.getElementById("boton1") // console.log(boton1)
let boton2 = document.getElementById("boton2") // console.log(boton2)
let boton3 = document.getElementById("boton3") // console.log(boton3)

boton1.textContent = "PEGAR"
boton2.textContent = "COPIAR"
boton3.textContent = "CORTAR"


const botones = document.getElementsByClassName("btn")
console.log(botones)

botones[0].classList.add("agua")
botones[1].classList.add("agua")
botones[2].classList.add("agua")

/*boton1.classList.add("agua")
boton2.classList.add("agua")
boton3.classList.add("agua")*/