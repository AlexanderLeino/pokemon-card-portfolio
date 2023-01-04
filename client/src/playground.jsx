import React from 'react'
import  {Button}  from './components/Button/index.tsx'
export const Playground = () => {

    const fetchPokemon = async () => {
        console.log('Fetching')
        let response = await fetch('http://localhost:3001/api/card', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        })
        let data = await response.json()
        console.log('DATA', data)
    }

    return (
        <>
            <div className='text-8xl antialiased font-bold text-amber-500 shadow-md w-fit p-2 border-2 border-slate-800 mt-20'>playground</div>
            <Button className='mt-10' onClick={fetchPokemon}>Fetch Pokemon</Button>
        </>
    )
}
