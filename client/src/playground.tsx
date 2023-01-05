import React, {useState, FC} from 'react'
import  {Button}  from './components/Button/index'
export const Playground:FC = () => {

    const [pokemon, setPokemon] = useState<{picture: string; price: string;}>({
        picture: '',
        price: ''
    })
    const fetchPokemon = async () => {
        let response = await fetch('http://localhost:3001/api/cardSet/findAll', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
        let data = await response.json()
        setPokemon({
            price: data?.price,
            picture: data?.picture
        })
    }

    return (
        <>
            <div className='text-8xl antialiased font-bold text-amber-500 shadow-md w-fit p-2 border-2 border-slate-800 mt-20'>playground</div>
            {/* <Button onClick={fetchPokemon}>Fetch Pokemon</Button> */}
            <img src={pokemon?.picture}/>
            <div>{pokemon?.price}</div>
        </>
    )
}
