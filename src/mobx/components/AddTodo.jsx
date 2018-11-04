import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class AddTodo extends React.Component {
    state = {
        todoText: ''
    };

    handleAddTodo = () => {
        this.props.store.addTodo(this.state.todoText);
        this.setState({
            todoText: ''
        });
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
