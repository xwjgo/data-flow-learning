import _ from 'lodash';
import {observable, action, configure} from 'mobx';
import CONST from '../../constants';
const {ALL} = CONST.FILTER_TYPE;

configure({
    enforceActions: 'always'
});

let nextTodoId = 0;

export default class TodoListModel {
    @observable todoList = [];
    @observable filterType = ALL;

    @action
    addTodo (text) {
        this.todoList.push({
            id: nextTodoId ++,
            text,
            finish: false
        });
    }

    @action
    toggleTodo (id) {
        const todo = _.find(this.todoList, t => t.id === id);
        todo.finish = !todo.finish;
    }

    @action
    setFilterType (type) {
        this.filterType = type;
    }
}
