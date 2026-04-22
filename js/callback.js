const num1= parseInt(prompt('ingrese un numero'))
const num2= parseInt(prompt('ingrese otro numero'))
const operacion=window[prompt('sumar o restar?')]
function sumar(num1, num2){
    return num1+num2
}
 function restar (num1, num2){
 return num1-num2
 }
 function calcular (num1,num2,operacion){
    return operacion(num1,num2)
 }
 const resultado= calcular(num1,num2,operacion)
 console.log(resultado)