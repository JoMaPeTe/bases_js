const activo =true
// let mensaje=''
// if(activo){
//     mensaje='Activo'
// }else{
//     mensaje="Inactivo"
// }
// const mensaje = (activo)?'Activo':'Inactivo'
// const mensaje = (activo)?'Activo':null
// const mensaje = activo && 'Activo'   si lo primero es true se sigue ejecutando lo demás
const mensaje = !activo && 'Activo'
console.log(mensaje)