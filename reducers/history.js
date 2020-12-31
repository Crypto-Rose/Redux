const defaultState = {
    history: []
}

function reducer(state=[],{type,payload}){
    switch(type){
        case 'findHistory':
            return [ 
                ...state,
                {history:payload}               
            ]        
        default:
            return state;
    }
}
export default reducer;