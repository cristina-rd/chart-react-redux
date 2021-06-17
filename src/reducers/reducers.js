const INITIAL_STATE = {
    list: []
}

export function todoApp (state = INITIAL_STATE, action) {
    switch(action.type){
        case 'ADD':
            console.log(state)
            return { list: 
                [...state.list, {
                id: action.payload.id,
                /* number: action.payload.number, */
                text: action.payload.text
            }]}
        default:
            return state
    }
}