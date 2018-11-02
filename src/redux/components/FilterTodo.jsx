import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {setFilterType} from '../actions';
import CONST from '../constants';

class FilterTodo extends React.Component {

    handleSetFilterType = (type) => () => {
        this.props.setFilterType(type);
    };

    render () {
        const {filterType} = this.props;
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

function mapStateToProps (state) {
    return {
        filterType: state.filterType
    };
}

function mapDispatchToProps (dispatch) {
    return {
        setFilterType: (type) => dispatch(setFilterType(type))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodo);
