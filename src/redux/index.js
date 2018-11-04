import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterTodo from './components/FilterTodo';

class ReduxTodo extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <div className="redux-todo">
                    <h1>Redux APP</h1>
                    <AddTodo/>
                    <FilterTodo/>
                    <TodoList/>
                </div>
            </Provider>
        );
    }
}

export default ReduxTodo;
