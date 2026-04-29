const productos=['yerba', 'azucar', 'fideos']
document.write("<ol>");
// for(let i=0; i<productos.length;i++){
//     document.write("<li>"+productos[i]+"</li>");
// }
productos.forEach(p=> document.write(`<li>${p}</li>`))
document.write("</ol>");
