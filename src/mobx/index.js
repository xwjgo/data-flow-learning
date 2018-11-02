import React from 'react';
import AddTodo from './components/AddTodo';
import FilterTodo from './components/FilterTodo';
import TodoList from './components/TodoList';
import '../less/mobx.less';

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
