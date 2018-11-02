import React from 'react';
import '../less/mobx.less';
import AddTodo from './components/AddTodo';
import FilterTodo from './components/FilterTodo';
import TodoList from './components/TodoList';

class MobxTodo extends React.Component {
    render () {
        return (
            <div className="mobx-todo">
                <h1>Mobx APP</h1>
                <AddTodo/>
                <FilterTodo/>
                <TodoList/>
            </div>
        );
    }

}

export default MobxTodo;
