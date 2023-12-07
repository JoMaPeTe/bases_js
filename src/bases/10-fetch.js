const apiKey = process.env.NODE_ENV_REACT_APP_TITLE ;
const urlPeticion= `https:/api.giphy.com/v1/gifs/random?api_key=${apiKey}`
const peticion = fetch(urlPeticion)

peticion
    .then(response => response.json()) // Parsea la respuesta a JSON
    .then(({data})=>{
        console.log(data.images.original.url)
        const {url} = data.images.original
        const img = document.createElement('img');
        img.src = url
        document.body.append(img)
    })
    .catch(console.warn)