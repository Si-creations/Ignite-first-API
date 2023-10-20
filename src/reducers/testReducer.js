const initState  = {
    teststate : [],
}


const testReducer = (state=initState,action) => {
    switch(action.type){
        case "GIVE_DATA":
            return {...state}
        default: return {...state}
    }
}

export default testReducer;