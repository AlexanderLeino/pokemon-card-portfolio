import React from 'react'
import { Input } from '../Input'


export const CreateAccount = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>Create An Account!</div>
        <Input onChange={handleChange}/>
    </form>
  )
}
