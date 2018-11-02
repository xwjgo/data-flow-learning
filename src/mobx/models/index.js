import {obeservabel} from 'mobx';
import CONST from '../../constants';
const {ALL} = CONST.FILTER_TYPE;

export default class TodoListModel {
    @obeservabel todoList = [];
    @obeservabel filterType = ALL;
}
