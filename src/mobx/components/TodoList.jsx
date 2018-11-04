import _ from 'lodash';
import React from 'react';
import classnames from 'classnames';
import {observer, inject} from 'mobx-react';
import CONST from '../../constants';

@inject('store')
@observer
class TodoList extends React.Component {

    handleToggleFinish = (id) => () => {
        this.props.store.toggleTodo(id);
    };

    filterTodoList = () => {
        const {store} = this.props;
        const {ALL, ACTIVE, FINISH} = CONST.FILTER_TYPE;
        switch (store.filterType) {
            case ACTIVE:
                return _.filter(store.todoList, (t) => !t.finish);
            case FINISH:
                return _.filter(store.todoList, (t) => t.finish);
            case ALL:
                return store.todoList;
            default:
                break;
        }
        return store.todoList;
    };

    render () {
        const todoList = this.filterTodoList();
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

export default TodoList;
