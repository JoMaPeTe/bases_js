// const getImagen = new Promise((resolve)=>resolve('http:/akdask.com'))

// const getImagen = async() =>{
//     return 'http:/akdask.com'
// }
// getImagen().then(console.log)

const getImagen = async()=>{
    try {
        const apiKey ='' ;
        const urlPeticion= `https:/api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        const res =await fetch(urlPeticion)
        const {data:{images:{original:{url}}}}= await res.json()
            const img = document.createElement('img');
            img.src = url
            document.body.append(img)
    } catch (error) {
        console.log(error)
    }
  
}
getImagen();