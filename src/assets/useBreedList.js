import { useQuery } from 'react-query'
import fetchBreedList from './fetchBreedList.js'



export default function useBreedList(animal){
   const result = useQuery(['animal', animal], fetchBreedList)

    return [result?.data?.breeds ?? [], result.status]
}