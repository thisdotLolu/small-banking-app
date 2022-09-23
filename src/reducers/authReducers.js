const initAuthState = {
    isLoggedIn: false
}

export const authReducer = (state=initAuthState, action)=>{
    switch (action.type){
        case 'TOGGLE_AUTH':
            return {...state,
            isLoggedIn: !state.isLoggedIn
            }
        default:
            return state
    }
}