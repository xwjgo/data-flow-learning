import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends React.Component {
    state = {
        todoText: ''
    };
    handleAddTodo = () => {
        const {todoText} = this.state;
        if (todoText) {
            this.props.addTodo(todoText);
            this.setState({
                todoText: ''
            });
        }
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

function mapDispatchToProps (dispatch) {
    return {
        addTodo: (text) => dispatch(addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);
