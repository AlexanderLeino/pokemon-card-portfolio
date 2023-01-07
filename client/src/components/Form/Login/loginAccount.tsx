import React, {useState} from 'react'
import  Input  from '../../Input'
import  Flex  from '../../Flex'
import { Button } from '../../Button'
import { loginUserState } from '../../../interfaces/form-states'
import axios from 'axios'

export const CreateAccount = () => {
  
  const [loginInfo, setLoginInfo] = useState<loginUserState>({
    userName: '',
    password: '',
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    let response = await axios.post('http://localhost:3001/api/user/createUser', {
      loginInfo
    })
    console.log('Response From Handle Submit', response)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({...loginInfo, [e.target.name]: e.target.value})
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
