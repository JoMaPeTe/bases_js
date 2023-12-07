//Reestructuracion
//Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad:45,
    clave:'Ironman',
    rango:'Soldado'
}

const {nombre:nombre2, edad, clave}= persona;

console.log(persona.nombre)
console.log(nombre2);
console.log(edad);
console.log(clave)

// const retornaPersona = (usuario)=>{
    // const retornaPersona = ({nombre,edad, rango='Capi'})=>{
    //     const {edad, clave, nombre} = usuario;
    //     console.log(edad, clave, nombre)
    // }
const useContext = ({nombre,edad,clave, rango='Capi'})=>{
    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:14.123,
            lng:-12.323
        }
    }
}
const {nombreClave,anios, latlng:{lat,lng}} = useContext(persona);
const { latlng} = useContext(persona);
const{lat2,lng2} = latlng;
console.log(nombreClave,anios)
console.log(lat,lng)
console.log(lat2,lng2)