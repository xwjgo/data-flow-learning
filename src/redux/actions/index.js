import CONST from '../constants';
const {ADD_TODO, TOGGLE_TODO, SET_FILTER_TYPE} = CONST.ACTION_TYPE;

let nextTodoId = 0;

export function addTodo (text) {
    return {
        type: ADD_TODO,
        id: nextTodoId ++,
        text
    };
}

export function toggleTodo (id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}

export function setFilterType (filterType) {
    return {
        type: SET_FILTER_TYPE,
        filterType
    };
}

