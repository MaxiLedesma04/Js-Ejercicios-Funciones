// function saludar (nombre){
//     saludo = "Hola me llamo " +(nombre)+", un gusto"
//     return saludo;
// }
// nombre = "Pablo"
// console.log (saludar(nombre))

// function multiplicar (num1, num2){
//     resultado = num1 * num2
//     return resultado;
// }
// num1 = 5
// num2 = 3
// console.log (multiplicar(num1, num2))

// function areaTriangulo (base, altura){
//     resultado = (base*altura)/2
//     return resultado
// }
// base = 5
// altura = 3
// console.log (areaTriangulo(base, altura))

// function perimetroTriangulo(l1, l2, l3){
//     resultadoPerimetro = l1 + l2 +l3
//     return resultadoPerimetro
// }
// l1 = 4
// l2 = 5
// l3 = 6
// console.log(perimetroTriangulo(l1, l2, l3))

// function calcularPrecio(precio, cantidad){
//     if (cantidad > 10 && cantidad <= 20){
//         precioDescuento = precio - ((precio*10)/100)
//     } 
//     else if (cantidad > 20){
//         precioDescuento = precio - ((precio*20)/100)
//     }
//     else{
//         precioDescuento = precio
//     }
//     return precioDescuento
// }
// // precio = 20
// // cantidad = 15
// // precio = 30
// // cantidad = 25
// precio = 20
// cantidad = 5
// console.log(calcularPrecio(precio, cantidad))

// function esMayorDeEdad(edad){
//     if (edad >= 18){
//         console.log("Es mayor de edad")
//     }
//     else{
//         console.log("Es menor de edad")
//     }
// }
// // edad = 14
// // edad = 18
// edad = 29
// esMayorDeEdad(edad)}

// function calcularImpuesto(ingresoAnual){
//     if(ingresoAnual <= 10000){
//         impuesto = ((ingresoAnual*10)/100)
//     }
//     else if (ingresoAnual>10000 && ingresoAnual<=20000){
//         impuesto = ((ingresoAnual*15)/100)
//     }
//     else{
//         impuesto = ((ingresoAnual*20)/100)
//     }
//     return impuesto
// }
// // ingresoAnual = 7000
// // ingresoAnual = 15000
// ingresoAnual = 25000
// console.log (calcularImpuesto(ingresoAnual))


// function verificarDia(dia){
//     switch (dia){
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         console.log ("Es un dia laboral")
//         break
//         case 6:
//         case 7:
//         console.log ("Es fin de semana")
//         break
//         default:
//         console.log ("El valor ingresado es incorrecto")
//         break
//     }
//     return dia  
// }
// dia = 3
// console.log(verificarDia(dia))