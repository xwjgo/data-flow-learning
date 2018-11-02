import React from 'react';
import {observer} from 'mobx-react';
import store from '../store';

@observer
class AddTodo extends React.Component {
    state = {
        todoText: ''
    };

    handleAddTodo = () => {
        console.log('addTodoStore:', store);
        store.addTodo(this.state.todoText);
    };

    handleChange = (e) => {
        this.setState({
            todoText: e.target.value.trim()
        });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleAddTodo();
        }
    };

    render () {
        const {todoText} = this.state;
        return (
            <div className="comp-add-todo">
                <input type="text"
                       value={todoText}
                       onChange={this.handleChange}
                       onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleAddTodo}>添加</button>
            </div>
        );
    }
}

export default AddTodo;
