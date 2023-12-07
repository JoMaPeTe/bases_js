// import heroes,{owners} from '../data/heroes_defecto'
import heroes from '../data/heroes_defecto'
// console.log("owners",owners)
// console.log(heroes)

// const getHeroeById = (id) =>{
//     return heroes.find((heroe)=>heroe.id == id);
// }

 export const getHeroeById = (id) =>heroes.find((heroe)=>heroe.id === id);

// console.log(getHeroeById(2))

export const getHeroesByOwner = (owner) => heroes.filter((heroe)=>heroe.owner===owner)
// console.log(getHeroesByOwner('DC'));
// export default getHeroeById;