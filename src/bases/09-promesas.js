import { getHeroeById } from "./bases/08_import_export";
// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//          const heroe = getHeroeById(2)
//         // resolve(heroe);
//         // console.log("2 seg despues", heroe)
//         reject("No se pudo encontrar el heroe")
//     }, 2000);
// });
// promesa.then((heroe)=>{
//     console.log("then de la promesa", heroe)
// }).catch((err)=>console.warn(err))

const getHeroeByIdAsync = (id) =>{
    return   new Promise((resolve, reject)=>{
        setTimeout(() => {
             const heroe = getHeroeById(id)
             if(heroe){
                resolve(heroe);
             }else{
                reject("No se pudo encontrar el heroe")
             }
            
            // console.log("2 seg despues", heroe)
            // 
        }, 2000);
    });
}
getHeroeByIdAsync(1)
// .then((heroe)=>{console.log(heroe)}
.then(console.log
// }).catch((err)=>console.warn("Error",err))
).catch(console.warn)