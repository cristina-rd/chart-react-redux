let nextTodoId = 0;

export const add = (text) => {
    console.log("ENTRO EN LA ACCIÓN")
    return {
        type: 'ADD',
        payload: {
            id: nextTodoId++,
            text,
        }
    }
}