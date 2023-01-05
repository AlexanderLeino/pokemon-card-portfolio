import React, {ReactNode}from 'react'

interface props {
  children: ReactNode,
  flexDirection?: string,
}

export const Flex = ({children, flexDirection = 'row'}:props) => {
  return (
    <div className={`flex ${flexDirection}`}>{children}</div>
  )
}
