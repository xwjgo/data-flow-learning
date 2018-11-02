import React from 'react';
import classnames from 'classnames';
import {observer} from 'mobx-react';
import store from '../store';

@observer
class TodoList extends React.Component {

    handleToggleFinish = (id) => () => {
        console.log(store);
        store.toggleTodo(id);
    };

    render () {
        return (
            <div className="comp-todo-list">
                {store.todoList.map((t) => {
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
