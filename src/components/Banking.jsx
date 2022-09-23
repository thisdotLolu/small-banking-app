import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deposit } from '../actions/bankingActions';
import { CollectInterest,withdraw,deleteAccount,toggleAccount} from '../actions/bankingActions';


const Banking = () => {
    const[amount,setAmount]=useState('');
    const dispatch=useDispatch()

    const handleDeposit=()=>{
        dispatch(deposit(amount))
    }
    const handleWithdraw=()=>{
        dispatch(withdraw(amount))
    }
    const handleCollectInterest=()=>{
        dispatch(CollectInterest())
    }
    const handleDelete=()=>{
        dispatch(deleteAccount())
    }
    const handleAccountChange=()=>{
        dispatch(toggleAccount())
    }
  return (
    <div>
        <div className='form-group'>
            <input 
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            type='text' className='form-control'/>
            <button 
            onClick={handleDeposit}
            className='btn btn-success'> Deposit</button>
            <button 
            onClick={handleWithdraw}
            className='btn btn-primary'>Withdraw</button>
            <button 
            onClick={handleCollectInterest}
            className='btn btn-warning'>Collect interest</button>
            <button 
            onClick={handleDelete}
            className='btn btn-danger'>Delete</button>
            <button 
            onClick={handleAccountChange}
            className='btn btn-secondary'>Change Account Type</button>
            {}
        </div>
    </div>
  )
}

export default Banking