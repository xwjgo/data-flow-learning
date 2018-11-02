import React from 'react';
import ReduxTodo from './redux';
import MobxTodo from './mobx';
import './less/app.less';

class App extends React.Component {
    render () {
        return (
            <div className="data-flow-learning">
                <ReduxTodo/>
                <MobxTodo/>
            </div>
        );
    }
}

export default App;
