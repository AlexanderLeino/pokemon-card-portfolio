import React, {useState} from 'react'
import {Select} from '../Select'
export const Form = () => {
    const [newCard, setNewCard] = useState({
        name: '', 
        prefix: '', 
        suffix: '', 
        type: '', 
        move1: '',
        damage1: '',
        move1Description: '',
        move2: '',
        move2Description: '',
        artist: '',
        cardType: '',
        originalCardSet: '',
        rarity: '',
        quantity: 1,
    })

    const fetchCardSet = () => {
        fetch('http://localhost:3001/api/')
    }


  return (
    <>
        <div>index</div>
        <Select cardSets={[]}/>

        
    </>
  )
}
