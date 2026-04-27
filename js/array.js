let semana=['lunes', 'martes', 'miercoles', 'jueves']
console.log(semana[0])
semana.forEach(dia=>{console.log(dia)})
const parrafos=document.querySelectorAll('.texto')
//forEach sirve para recorrer un array
let contador=0
const colores=['blue', 'red', 'purple', 'pink', 'green']
parrafos.forEach(p=>{
    p.style.color= colores[contador]
    contador++, p.innerHTML=`texto ${contador}`})
//cantidad de elementos
const cantidad= colores.length
console.log(`cantidad ${cantidad}`)
//agregar un elemento
colores.push('brown') 
colores.forEach(c=>console.log(c)) 
console.log(colores)
//buscar un valor dentro del array
const encontrado=colores.find(c=>c=='green')
console.log(`elemento encontrado ${encontrado}`)
if (encontrado){
    console.log(`${encontrado} existe`)
}
else{
    console.log('el elemento no existe')
}
//obtener indice dentro de un elemento dentro del array
const nroIndice=colores.findIndex(c=>c=='green')
console.log(`indice ${nroIndice}`)
if(nroIndice != -1){
    console.log(`${nroIndice} existe`)
}
else{
    console.log('el indice no existe')
}

//modificar valor utilizando nroIndice
colores[nroIndice]= 'purple'
console.log(colores)
//Eliminar un valor utilizando nroIndice
colores.splice(nroIndice,1) //cantidad de elementos a eliminar
console.log(colores)