let nombre= prompt('ingresar su nombre')
function saludar (nombre){
    console.log('hola ' +nombre)
    console.log(`hola ${nombre}`)
}
saludar(nombre)

let sumar=(num1, num2)=>{alert(num1+num2)}
let restar=(num1, num2)=>{alert(num1-num2)}
let calcular=(num1, num2, accion)=>{accion(num1, num2)}
calcular(1,2,sumar)