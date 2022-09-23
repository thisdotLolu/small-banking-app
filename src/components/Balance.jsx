import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
   const storeBalance = useSelector(state=>state.banking.balance)
  return (
    <div>
        <h1>{storeBalance}</h1>
    </div>
  )
}

export default Balance