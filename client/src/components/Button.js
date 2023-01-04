import React from 'react'
import { Flex } from './Flex/flex-row'
import { FlexColumn } from './Flex/flex-column'
export const Button = () => {
  return (
    <div className='flex flex-col'>
        <button className='w-fit bg-orange-500 text-indigo-100 border border-solid border-slate-600 p-2 rounded-lg font-bold hover:text-zinc-50  transition ease-in-out delay-5000 duration-300 hover:bg-purple-500' >Button</button>
    </div>
  )
}
