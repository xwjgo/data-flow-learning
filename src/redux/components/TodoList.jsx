import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions';
import CONST from '../../constants';
import classnames from 'classnames';

class TodoList extends React.Component {

    handleToggleFinish = (id) => () => {
        this.props.toggleTodo(id);
    };

    render () {
        const {todoList} = this.props;
        return (
            <div className="comp-todo-list">
                {todoList.map((t) => {
                    const itemCls = classnames('todo-item', {
                        finish: t.finish
                    });
                    return (
                        <div
                            className={itemCls}
                            key={t.id}
                            onClick={this.handleToggleFinish(t.id)}
                        >
                            {t.text}
                        </div>
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps (state) {
    let todoList = [];
    const {ALL, ACTIVE, FINISH} = CONST.FILTER_TYPE;
    switch (state.filterType) {
        case ALL:
            todoList = state.todoList;
            break;
        case ACTIVE:
            todoList = state.todoList.filter(t => !t.finish);
            break;
        case FINISH:
            todoList = state.todoList.filter(t => t.finish);
            break;
        default:
            break;
    }
    return { todoList };
}

function mapDispatchToProps (dispatch) {
    return {
        toggleTodo: (id) => dispatch(toggleTodo(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
