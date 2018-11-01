import React from 'react';
import {connect} from 'react-redux';

class TodoList extends React.Component {
    render () {
        const {todoList} = this.props;
        return (
            <div className="comp-todo-list">
                {todoList.map((t) => (
                    <div className="todo-item" key={t.id}>{t.text}</div>
                ))}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        todoList: state.todoList
    };
}

export default connect(mapStateToProps)(TodoList);
