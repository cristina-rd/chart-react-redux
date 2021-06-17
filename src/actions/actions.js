let nextTodoId = 0;

export const add = (number, text) => {
    console.log("ACTION TYPE ADD")
    return {
        type: 'ADD',
        payload: {
            id: nextTodoId++,
            text,
            number
        }
    }
}