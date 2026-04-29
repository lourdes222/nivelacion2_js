let semana=['lunes', 'martes', 'miercoles', 'jueves']
console.log(semana[0])
semana.forEach(dia=>{console.log(dia)})
const parrafos=document.querySelectorAll('.texto')
//ForEach sirve para recorrer un array
let contador=0
const colores=['blue', 'red', 'purple', 'pink', 'green']
parrafos.forEach(p=>{
    p.style.color= colores[contador]
    contador++, p.innerHTML=`texto ${contador}`})
//Cantidad de elementos
const cantidad= colores.length
console.log(`cantidad ${cantidad}`)
//Agregar un elemento
colores.push('brown') 
colores.forEach(c=>console.log(c)) 
console.log(colores)
//Buscar un valor dentro del array
const encontrado=colores.find(c=>c=='green')
console.log(`elemento encontrado ${encontrado}`)
if (encontrado){
    console.log(`${encontrado} existe`)
}
else{
    console.log('el elemento no existe')
}
//Obtener indice dentro de un elemento dentro del array
const nroIndice=colores.findIndex(c=>c=='green')
console.log(`indice ${nroIndice}`)
if(nroIndice != -1){
    console.log(`${nroIndice} existe`)
}
else{
    console.log('el indice no existe')
}

//Modificar valor utilizando nroIndice
colores[nroIndice]= 'purple'
console.log(colores)
//Eliminar un valor utilizando nroIndice
colores.splice(nroIndice,1) //cantidad de elementos a eliminar
console.log(colores)
//Eliminar uno o mas elementos sin modificar el array original
const nuevoColores=colores.filter(c=>c!='pink')
console.log(colores)
console.log(nuevoColores)
//Filtrar numero mayor a 30
const numeros = [20, 4, 5, 32, 40]
const mayorATreinta=numeros.filter(n=>n>30)
console.log(mayorATreinta)
//.map crea un nuevo array aplicando una funcion a todos los elementos del array original
const numeros2=[2, 4 ,8, 7, 10]
const cuadrados = numeros.map (n=> n*n)
console.log (numeros)
console.log (cuadrados)