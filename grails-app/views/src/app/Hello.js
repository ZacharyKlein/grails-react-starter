/**
 * Created by zak on 5/13/16.
 */
import React from 'react';
require('./../styles/style.css');

export class Hello extends React.Component{
    render() {
        return <div>
            <h1>Hello from React!</h1>
            <img className="center" src={require('./../images/react.png')} />
            <span className="webpack">&nbsp;</span>
        </div>;
    }
}