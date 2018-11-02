import {createStore} from 'redux';
import reducers from './reducers';

/**
 * @example state
 * {
 *     todoList: [
 *         {id: 0, text: '吃饭', finish: false},
 *         {id: 1, text: '睡觉', finish: false},
 *         {id: 2, text: '玩游戏', finish: true}
 *     ],
 *     filterType: 'finish'
 * }
 */
export default createStore(reducers, {});
