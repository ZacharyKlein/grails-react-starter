/**
 * Created by zak on 5/3/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
require('./../styles/style.css');

class Hello extends React.Component{
    render() {
        return <div>
            <h1>Hello from React!</h1>
            <img className="center" src={require('./../images/react.png')} />
            <span className="webpack">&nbsp;</span>
        </div>;
    }
}

ReactDOM.render(<Hello />, document.getElementById('app'));