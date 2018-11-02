import {combineReducers} from 'redux';
import CONST from '../constants';
const {ADD_TODO, TOGGLE_TODO, SET_FILTER_TYPE} = CONST.ACTION_TYPE;
const {ALL} = CONST.FILTER_TYPE;

function todoList (state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    finish: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        finish: !todo.finish
                    };
                }
                return todo;
            });
        default:
            return state;
    }
}

function filterType (state = ALL, action) {
    if (action.type === SET_FILTER_TYPE) {
         return action.filterType;
    }
    return state;
}

export default combineReducers({
    todoList,
    filterType
});
