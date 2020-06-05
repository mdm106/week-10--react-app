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

export const updateItem = (state, {index, value}) => {
    return {
        ...state,
        items: state.items.map((val, i) => i===index ? {...val, task: value} : val),
    }
};

export const completeItem = (state, {index}) => {
    return {
        ...state,
        items: state.items.map((val, i) => i===index ? {...val, completed: true} : val),
    }
};

export default (state, action) => {
    switch (action.type) {
        case "NEW_ITEM" : return addItem(state, action);
        case "REMOVE_ITEM" : return removeItem(state, action);
        case "CHANGE_ITEM" : return updateItem(state, action);
        case "MARK_COMPLETED" : return completeItem(state, action);
        default: return state;
    }
};
