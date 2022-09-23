import React from 'react'
import { useSelector } from 'react-redux'

const AccountStatus = () => {
    const status=useSelector(state=>state.banking.isSavingsAccount)
  return (
    <div>
        <h1>{status?'Savings Account':'Regular Account'}</h1>
    </div>
  )
}

export default AccountStatus