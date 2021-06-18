let nextTodoId = 0;

export const add = (number, text) => {
    console.log('ADD ACTION')
    return {
        type: 'ADD',
        payload: {
            id: nextTodoId++,
            text,
            number
        }
    }
}

export const create = (created) => {
    console.log('CREATE ACTION')
    return {
        type: 'CREATE',
        created
    }
}