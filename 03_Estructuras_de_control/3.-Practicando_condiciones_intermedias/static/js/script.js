console.log("conexión exitosa con js...")

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nombre = "Juan";
    let nota = 6.5;
    if (nota >= 6.0) {
        alert(`El estudiante ${nombre} tiene nota ${nota} y su resultado es: Excelente redimiento`);
    } else if (nota >= 4.0) {
        alert(`El estudiante Juan tiene nota ${nota} y su resultado es: Estudiante aprobado`);
    } else {
        alert(`El estudiante Juan tiene nota ${nota} y su resultado es: Estudiante desaprobado`);
    }
}



// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombreCompleto = "DaNieL PérEz";
    alert(`El nombre convertido es: ${nombreCompleto.toUpperCase()} y tiene ${nombreCompleto.length} caracteres`);
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
    let correo = "ejEmplO@gmAil.com"
    if (correo.length > 15) {
        alert(`El correo convertido es: ${correo.toLowerCase()} y el resultado es: correo válido`);
    } else {
        alert(`El correo convertido es: ${correo.toLowerCase()} y el resultado es: correo demasiado corto`);
    }

}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let frase = "Estoy aprendiendo JavaScript";
    if (frase.length >= 20) {
        alert(`La frase ${frase} tiene ${frase.length} caracteres y corresponde a una frase larga`);
    } else if (frase.length >= 11) {
        alert(`La frase ${frase} tiene ${frase.length} caracteres y corresponde a una frase mediana`);
    } else {
        alert(`La frase ${frase} tiene ${frase.length} caracteres y corresponde a una frase corta`);
    }
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let producto = "teclado";
    let precio = 45000;
    let descuento1 = 45000 * 20 / 100;
    let descuento2 = 45000 * 10 / 100;
    if (precio >= 50000) {
        alert(`El producto ${producto.toUpperCase()} tiene un precio final de ${descuento1} `)
    } else if (precio >= 20000) {
        alert(`El producto ${producto.toUpperCase()} tiene un precio final de ${descuento2}`)
    } else {
        alert(`El producto ${producto.toUpperCase()} tiene un precio final de $45000`)
    }
}


// Ejercicios extras:

// Ejercicio 16: Boleta de compra con clasificación de cliente

// Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
// Convertir el nombre del cliente a mayúsculas
// Determinar el tipo de cliente según el precio:
// Mayor o igual a 100.000 → Cliente Premium (20% descuento)
// Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
// Menor a 50.000 → Cliente Normal (sin descuento)

// Mostrar:
// Nombre del cliente en mayúsculas
// Producto en minúsculas
// Precio original
// Precio final
// Tipo de cliente

function ejercicio16() {
    let cliente = "Catalina"
    let producto = "shAmpoO"
    let precio = 4500;
    let descuento1 = 4500 * 20 / 100;
    let descuento2 = 4500 * 10 / 100;
    if (precio >= 100000) {
        alert(`El ${producto.toLowerCase()} tiene un precio de: ${precio} y el precio final con descuento: ${descuento1} ${cliente.toUpperCase()} es un Cliente Premium`)
    } else if (precio >= 50000) {
        alert(`El ${producto.toLowerCase()} tiene un precio de: ${precio} y el precio final con descuento: ${descuento2} ${cliente.toUpperCase()} es un Cliente Frecuente`)
    } else {
        alert(`El ${producto.toLowerCase()} tiene un precio de: ${precio} y el precio final con descuento: ${descuento1} ${cliente.toUpperCase()} es un Cliente Normal`)
    }
}

// Ejercicio 17: Análisis de frase con puntuación
// Crear una función que almacene una frase y un puntaje numérico. Luego:
// Convertir la frase a minúsculas
// Contar la cantidad de caracteres
// Clasificar el puntaje:
// 90 o más → Excelente
// 70 o más → Bueno
// Menor a 70 → Insuficiente

// Mostrar:
// Frase transformada
// Largo de la frase
// Puntaje
// Clasificación

function ejercicio17() {
    let frase = "Quiero sushi";
    let puntaje = 85;
    if (puntaje >= 90) {
        alert(`La frase ${frase.toLowerCase()} tiene ${frase.length} caracteres \nEl puntaje: ${puntaje} --> Exelente`)
    } else if (puntaje >= 70) {
        alert(`La frase ${frase.toLowerCase()} tiene ${frase.length} caracteres \nEl puntaje: ${puntaje} --> Bueno`)
    } else {
        alert(`La frase ${frase.toLowerCase()} tiene ${frase.length} caracteres \nEl puntaje: ${puntaje} --> Insuficiente`)
    }
}
// Ejercicio 18: Evaluación de tres notas con estado final

// Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

// Calcular el promedio
// Convertir el nombre a mayúsculas
// Determinar el estado:
// Promedio ≥ 6.0 → Destacado
// Promedio ≥ 4.0 → Aprobado
// Promedio < 4.0 → Reprobado

// Además:
// Contar la cantidad de caracteres del nombre

// Mostrar:
// Nombre en mayúsculas
// Cantidad de caracteres del nombre
// Promedio
// Estado final

function ejercicio18() {
    let estudiante = "Diego"
    let nota1 = 6.0;
    let nota2 = 6.7;
    let nota3 = 5.9;
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio >= 6.0) {
        alert(`El estudiante ${estudiante.toUpperCase()} tiene ${estudiante.length} caracteres en su nombre y su promedio es: ${promedio} --> Destacado`)
    } else if (promedio >= 4.0) {
        alert(`El estudiante ${estudiante.toUpperCase()} tiene ${estudiante.length} caracteres en su nombre y su promedio es: ${promedio} --> Aprobado`)
    } else {
        alert(`El estudiante ${estudiante.toUpperCase()} tiene ${estudiante.length} caracteres en su nombre y su promedio es: ${promedio} --> Reprobado`)
    }
}

// Ejercicio 19: Clasificación de desempeño con más niveles
// Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

// Convertir el nombre a mayúsculas
// Clasificar el rendimiento según:
// ≥ 6.5 → Sobresaliente
// ≥ 6.0 → Muy buen rendimiento
// ≥ 5.0 → Buen rendimiento
// ≥ 4.0 → Suficiente
// < 4.0 → Insuficiente

// Además:

// Mostrar la cantidad de caracteres del nombre

function ejercicio19() {
    let nombre = "Catalina"
    let promedio = 6.7
    if (promedio >= 6.5) {
        alert(`La estudiante ${nombre.toUpperCase()} tiene ${nombre.length} caracteres en su nombre y su promedio es: ${promedio} --> Sobresaliente`)
    } else if (promedio >= 6.0) {
        alert(`La estudiante ${nombre.toUpperCase()} tiene ${nombre.length} caracteres en su nombre y su promedio es: ${promedio} --> Muy buen rendimiento`)
    } else if (promedio >= 5.0) {
        alert(`La estudiante ${nombre.toUpperCase()} tiene ${nombre.length} caracteres en su nombre y su promedio es: ${promedio} --> Buen rendimiento`)
    } else if (promedio >= 4.0) {
        alert(`La estudiante ${nombre.toUpperCase()} tiene ${nombre.length} caracteres en su nombre y su promedio es: ${promedio} --> Suficiente`)
    } else {
        alert(`La estudiante ${nombre.toUpperCase()} tiene ${nombre.length} caracteres en su nombre y su promedio es: ${promedio} --> Insuficiente`)
    }
}

// Ejercicio 20: Clasificación de producto con múltiples rangos de precio
// Crear una función que almacene el nombre de un producto y su precio. Luego:

// Convertir el producto a minúsculas
// Clasificar el precio:
// ≥ 200.000 → Producto de lujo
// ≥ 100.000 → Producto premium
// ≥ 50.000 → Producto estándar
// ≥ 20.000 → Producto económico
// < 20.000 → Producto básico

// Además:

// Aplicar descuento:
// Si es ≥ 100.000 → 15%
// Si es ≥ 50.000 → 10%
// Si es menor → sin descuento

// Mostrar:

// Nombre transformado
// Largo del nombre del producto
// Precio original
// Precio final
// Clasificación

function ejercicio20() {
    let producto = "Secadora";
    let precio = 100.000;
    let descuento1 = (precio * 15) / 100;
    let descuento2 = (precio * 10) / 100;
    if (precio >= 200.000) {
        alert(`El producto ${producto.toLowerCase()} tiene ${producto.length} caracteres, su precio es: ${precio} --> Producto de lujo`)
    } else if (precio >= 100.000) {
        alert(`El producto ${producto.toLowerCase()} tiene ${producto.length} caracteres, su precio original era: ${precio} y su precio final con descuento: ${descuento1} --> Producto premium`)
    } else if (precio >= 50.000) {
        alert(`El producto ${producto.toLowerCase()} tiene ${producto.length} caracteres, su precio original era: ${precio} y su precio final con descuento: ${descuento2} --> Producto estándar`)
    } else if (precio >= 20.000) {
        alert(`El producto ${producto.toLowerCase()} tiene ${producto.length} caracteres, su precio es: ${precio} --> Producto económico`)
    } else {
        alert(`El producto ${producto.toLowerCase()} tiene ${producto.length} caracteres, su precio es: ${precio} --> Producto básico`)
    }
}

// Ejercicio 21: Evaluación de frase y puntaje con múltiples condiciones
// Crear una función que almacene una frase y un puntaje. Luego:

// Convertir la frase a mayúsculas
// Contar su largo
// Clasificar el puntaje:
// ≥ 90 → Excelente
// ≥ 80 → Muy bueno
// ≥ 70 → Bueno
// ≥ 60 → Regular
// < 60 → Deficiente

// Además:

// Clasificar la frase por tamaño:

// 30 → Muy larga

// 20 → Larga

// 10 → Mediana

// ≤ 10 → Corta

function ejercicio21() {
    let frase = "Quiero sushi"
    let puntaje = 65
    if (puntaje >= 90) {
        alert(`La frase ${frase.toUpperCase()} tiene ${frase.length} caracteres y su puntaje es: ${puntaje} --> Excelente`)
    } else if (puntaje >= 80) {
        alert(`La frase ${frase.toUpperCase()} tiene ${frase.length} caracteres y su puntaje es: ${puntaje} --> Muy bueno`)
    } else if (puntaje >= 70) {
        alert(`La frase ${frase.toUpperCase()} tiene ${frase.length} caracteres y su puntaje es: ${puntaje} --> Bueno`)
    } else if (puntaje >= 60) {
        alert(`La frase ${frase.toUpperCase()} tiene ${frase.length} caracteres y su puntaje es: ${puntaje} --> Regular`)
    } else {
        alert(`La frase ${frase.toUpperCase()} tiene ${frase.length} caracteres y su puntaje es: ${puntaje} --> Deficiente`)
    } if (frase.length >= 30) {
        alert(`La frase es muy larga`)
    } else if (frase.length >= 20) {
        alert(`la frase es larga`)
    } else if (frase.length >= 10) {
        alert(`La frase es mediana`)
    } else {
        alert(`La frase es corta`)
    }
} 
