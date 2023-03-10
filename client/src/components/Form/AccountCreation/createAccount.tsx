import React, {useState} from 'react'
import Input from '../../Input/index'
import Flex  from '../../Flex'
import { Button } from '../../Button'
import axios from 'axios'
import { createUserState } from '../../../interfaces/form-states'


export const CreateAccount = () => {
  

  const [accountInfo, setAccountInfo] = useState<createUserState>({
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    let response = await axios.post('http://localhost:3001/api/user/createUser', {
      accountInfo
    })
    console.log('Response From Handle Submit', response)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountInfo({...accountInfo, [e.target.name]: e.target.value})
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>Create An Account!</div>
        <Flex flexDirection='flex-col'>
          <Input name={'userName'} onChange={handleChange}/>
          <Input name={'password'} onChange={handleChange}/>
          <Input name={'email'} onChange={handleChange} />
          <Button onClick={handleSubmit}>Submit</Button>
        </Flex>
    </form>
  )
}
