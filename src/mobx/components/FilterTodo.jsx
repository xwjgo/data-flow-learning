import _ from 'lodash';
import React from 'react';
import {observer, inject} from 'mobx-react';
import classnames from 'classnames';
import CONST from '../../constants';

@inject('store')
@observer
class FilterTodo extends React.Component {
    handleSetFilterType = (type) => () => {
        this.props.store.setFilterType(type);
    };

    render () {
        const {filterType} = this.props.store;
        const {ALL, ACTIVE, FINISH} = CONST.FILTER_TYPE;
        const filterTypeMap = {
            [ALL]: '全部',
            [ACTIVE]: '未完成的',
            [FINISH]: '已完成的'
        };
        return (
            <div className="comp-filter-todo">
                {_.map(filterTypeMap, (text, key) => {
                    const itemCls = classnames('filter-item', {
                        'select': filterType === key
                    });
                    return (
                        <div className={itemCls} key={key} onClick={this.handleSetFilterType(key)}>
                            {text}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default FilterTodo;
