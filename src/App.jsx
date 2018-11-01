import React from 'react';
import ReduxTodo from './redux';

class App extends React.Component {
    render () {
        return (
            <div className="data-flow-learning">
                <ReduxTodo/>
            </div>
        );
    }
}

export default App;
