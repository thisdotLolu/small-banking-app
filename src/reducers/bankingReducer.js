const initialState = {
    balance: 0,
    isSavingsAccount:false
}


export const bankingReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'DEPOSIT':
            return {
                ...state,
                balance: state.balance+action.amount
            }
        case 'WITHDRAW':
            return {
                ...state,
                balance:state.balance- action.amount
            }
        case 'COLLECT_INTEREST':
            return {
                ...state,
                balance:state.balance * 1.03
            }
        case "DELETE_ACCOUNT":
            return {
                ...state,
                balance:0
            }
        case 'ACCOUNT_CHANGE':
            return{
                ...state,
                isSavingsAccount:!state.isSavingsAccount
            }
        default:
            return state
    }
}




const deposit={
    type:'DEPOSIT',
    amount:20
}

const withdraw={
    type:'WITHDRAW',
    amount:3
}

const CollectInterest={
    type:'COLLECT_INTEREST',
}

const deleteAccount={
    type:'DELETE_ACCOUNT'
}