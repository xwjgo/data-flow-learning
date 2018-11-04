import React from 'react';
import classnames from 'classnames';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class TodoList extends React.Component {

    handleToggleFinish = (id) => () => {
        this.props.store.toggleTodo(id);
    };

    render () {
        return (
            <div className="comp-todo-list">
                {this.props.store.todoList.map((t) => {
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
