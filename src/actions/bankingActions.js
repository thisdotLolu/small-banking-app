export const deposit=(amount)=>{
    return {type:'DEPOSIT', amount:parseInt(amount)}
}

export const withdraw=(amount)=>{
    return {type:'WITHDRAW',amount:parseInt(amount)}
}

export const CollectInterest=()=>{
    return {type:'COLLECT_INTEREST'}
}
export const deleteAccount=()=>{
    return {type:'DELETE_ACCOUNT'}
}


export const toggleAccount=()=>{
    return {
        type:"ACCOUNT_CHANGE",
    }
}

