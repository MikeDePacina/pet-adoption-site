import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import fetchPet from './assets/fetchPet.js'
import Carousel from './components/Carousel.jsx'
const Details = () =>{
    const { id } = useParams()
    const results = useQuery(['details', id], fetchPet)

    if (results.isLoading){
        return(
            <>
            <p>Loading</p>
            </>
        )
    }
    const pet = results.data.pets[0]
    return (
        <>
        <Carousel images={pet.images}/>
        <h1>{pet.name}</h1>
        <h2>
            {pet.animal} - {pet.breed} - {pet.city},{pet.state}
        </h2>
        <p>
            {pet.description}
        </p>
        <button>Adopt {pet.name}</button>
        </>
    )
}

export default Details