import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Auth = () => {
    const auth=useSelector(state=>state.auth)
    const dispatch= useDispatch()

    const handleAuth=()=>{
        dispatch({type:"TOGGLE_AUTH"})
    }
  return (
    <div>
        <button  
        onClick={handleAuth}
        className='btn btn-info'>
            {auth.isLoggedIn?'Logout':'Log IN'}
        </button>
    </div>
  )
}

export default Auth