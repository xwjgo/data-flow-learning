import React from 'react';
import AddTodo from './components/AddTodo';
import FilterTodo from './components/FilterTodo';
import TodoList from './components/TodoList';
import TodoModel from './models';
import {Provider} from 'mobx-react';

const store = new TodoModel();

class MobxTodo extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <div className="mobx-todo">
                    <h1>Mobx APP</h1>
                    <AddTodo/>
                    <FilterTodo/>
                    <TodoList/>
                </div>
            </Provider>
        );
    }

}

export default MobxTodo;
