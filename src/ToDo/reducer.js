export const addItem = (state, { value }) => {
    return {
        ...state,
        items: [...state.items,{task: value, 
                completed: false}]
    }
};


export const removeItem = (state, { index }) => {
    return {
        ...state,
        items: state.items.filter((_, i) => i !== index),
    }
};

export const updateItem = (state, item) => {
    return {
        ...state,
        items: state.items.map((val, i) => i===item.index ? {...val, task: item.value} : val),
    }
};