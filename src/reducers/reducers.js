const INITIAL_STATE = {
    list: [],
    created: false
}

export function todoApp(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD':
            return {
                list:
                    [...state.list, {
                        id: action.payload.id,
                        number: action.payload.number,
                        text: action.payload.text
                    }],
                created: state.created
            }
        case 'CREATE':
            return {
                list: state.list,
                created: true
            }
        default:
            return state
    }
}