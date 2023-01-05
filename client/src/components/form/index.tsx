
import React, {useState, useEffect, FC} from 'react'
import {Select} from '../Select'
import { Button } from '../Button'
import { INewCard } from '../../interfaces/newCard'

export const Form:FC = (_props)=> {
    const [newCard, setNewCard] = useState<INewCard>({
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

    const fetchCardSet = async () => {
      let response = await fetch('http://localhost:3001/api/cardSet/findAll')
      let data =await response.json()
    }

  return (
    <>
      <Button backgroundColor={`bg-teal-400`} onClick={fetchCardSet}>Fetch CardSet</Button>
    </>
  )
}
