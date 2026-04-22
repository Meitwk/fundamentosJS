console.log("Conexión exitosa con JS...");

// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en consola.

function edadProyectada() {
    let edad = 16;
    alert(`Mi edad es: ${edad}
        \nEn 5 años tendré: ${edad + 5}
        \nHace 10 años tenía: ${edad - 10}`);
};

// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado

function compraDescuento() {
    let precio = 25000;
    let porcentaje = 20;
    let descuento = precio * porcentaje / 100;
    alert(`El producto cuesta: $${precio}
        \nEL descuento del 20% es: $${precio}
        \nCon descuento: $${precio - descuento}`);
};

// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promedioNotas() {
    let nota1 = 6.5;
    let nota2 = 7.0;
    let nota3 = 6.0;
    let promedio = (nota1 + nota2 + nota3) / 3;
    alert(`El promedio es: ${promedio}
        \nRedondeado seria ${Math.round(promedio)}`);
};

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
//Muestra el resultado final

function calcularTemperatura() {
    let temperatura = 9;
    let aumento = temperatura + 3;
    let disminuir = temperatura - 5;
    let resultado = temperatura + 3 - 5;
    alert(`La temperatura actual es: ${temperatura}
        \nAumentada es: ${aumento}
        \nDisminuida es: ${disminuir}
        \nEl resultado es: ${resultado}`);
};

// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo

function calcularSueldo() {
    let porHora = 8000;
    let cantidadHoras = 45;
    let sueldo = porHora * cantidadHoras;
    let horasExtra = cantidadHoras += 5; // += para incrementar o acumular
    let sueldoNuevo = porHora * cantidadHoras;
    alert(`Su sueldo era: ${sueldo}
        \nSu sueldo ahora es: ${sueldoNuevo}`);
};

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola

function calcularDivision() {
    let numero1 = 4;
    let numero2 = 8;
    let division = 4 / 8;
    let modulo = 4 % 8;
    alert(`La división es: ${division}
        \nEl resto es ${modulo}`);
    alert("El resto de la división se obtiene con el sibolo %")

}

// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10

function comparacionNumeros() {
    let numero1 = 3
    let numero2 = 8
    alert(`${numero1} es mayor a ${numero2}: ${numero1 > numero2}
    \nEl numero: ${numero1} es igual a 10: ${numero1 === 10}
    \nEl numero ${numero2} es igual a 10: ${numero2 === 10}`)
}

// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado

function notacionCientifica() {
    let población = 2e6;
    let division = 2e6 / 4;
    alert(`El resultado de la división de la población es: ${division}`);
}
// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final

function potenciaCalculoCombinado() {
    let num1 = 3;
    let num2 = 4;
    let potencia = 3 ** 4;
    let multiplicación = potencia * 2;
    let resta = multiplicación - 10;
    alert(`${num1} elevado a ${num2} es igual a: ${potencia}
        \nMultiplicado por 2 es igual a: ${multiplicación}
        \nResultado final restado por 10: ${resta}`);
}

// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)

function dadoAleatorio() {
    let dado = Math.floor(Math.random()*6) + 1;
    alert(`El resultado es: ${dado}
        \n${dado} es mayor a 4? ${dado > 4}
        \nEs igual a 4? ${dado === 4}`);
}

