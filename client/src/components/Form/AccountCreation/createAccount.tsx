import React, {useState} from 'react'
import { Input } from '../../Input'
import { Flex } from '../../Flex'
import { Button } from '../../Button'
interface accountInfo {
  name: string,
  password: string,
}

export const CreateAccount = () => {


  const [accountInfo, setAccountInfo] = useState<accountInfo>({
    name: '',
    password: ''
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Account Info ---->', accountInfo)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountInfo({...accountInfo, [e.target.name]: e.target.value})
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>Create An Account!</div>
        <Flex flexDirection='flex-col'>
          <Input name={'name'} onChange={handleChange}/>
          <Input name={'password'} onChange={handleChange}/>
          <Button onClick={handleSubmit}>Submit</Button>
        </Flex>
    </form>
  )
}
