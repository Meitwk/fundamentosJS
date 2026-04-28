console.log("Conexión exitosa con JS..."); 

/*
============================
¿Qué es una condición en JS?
============================
Una condición nos permite tomar desiciones en el código. Separando dos caminos, el si(if) y el no(else)

Estructurs básica: ( Sintáxis --> Reglas del lenguaje de programacion)

if (condicion) {
    //código que se ejecuta si la condición es verdadera
} else {
    //código que se ejecuta si la condición es falsa.    
}
*/

//Ejemplo 1: (numérico) -- IF
let edad = 18;

if(edad == 18) { //Condición Si
    console.log("Eres mayor de edad");
}

//Ejemplo 2: Dos caminos posibles
let temperatura = 10;
if (temperatura < 20){
    console.log("Hace calor");
} else {
    console.log("Hace frio");
}

//Ejemplo 3: IF - ELSE IF - ELSE (Multiples condiciones)

let nota = 5.5;

if (nota >= 6.0){
    console.log("Exelente!");
} else if (nota >= 4.0){
    console.log("Aprobado");
} else {
    console.log("Reprobado")
}

// Ejemplo 4: Condiciones con STRING
let nombre = "Catalina";

//Comparación exacta (===)
if (nombre === "Catalina"){
    console.log("Hola, " + nombre);
} else {
    console.log("Tu no eres Catalina");
}

/* 
OPERADORES DE COMPARACIÓN

> mayor que
< menor que
>= mayor o igual
<= menor o igual
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/
// Ejemplo de distinto
let num = 10;
let num2 = 5;
if(num !== num2){
    console.log(`El número: ${num} es distinto que ${num2}`);
} else{
    console.log("Son iguales!");
}