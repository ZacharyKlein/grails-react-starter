/**
 * Created by zak on 5/13/16.
 */
import React from 'react';
import Immutable from 'immutable'
import {Modal, Button} from 'react-bootstrap';

require('./../styles/style.css');

class Hello extends React.Component {

    constructor(props) {
        super(props); // must call before "this" is accessed

        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            data: Immutable.fromJS({
                showModal: false
            })
        };
    }

    toggleModal() {
        const data = this.state.data.set('showModal', !this.state.data.get('showModal'));
        this.setState({data});
    }

    render() {
        const showModal = this.state.data.get('showModal');

        return <div>
            <h1>Hello from React!</h1>
            <Button bsStyle="info" onClick={this.toggleModal}>About Us</Button>

            <Modal show={showModal} onHide={this.toggleModal} dialogClassName="about-modal">
                <Modal.Header closeButton>
                    <Modal.Title>About Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Brought to you by React, Webpack & Grails</h4>

                    <p>Using React 15.0.1, webpack 1.13.0, Grails 3.1.6</p>
                    <div className="center">
                        <img className="react-logo" src={require('./../images/react.png')} />
                        <span className="webpack">&nbsp;</span>
                        <span className="grails">&nbsp;</span>
                    </div>


                 </Modal.Body>
                <Modal.Footer>
                    <span className="copyright">Built by Zachary Klein</span><Button onClick={this.toggleModal}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>;
    }
}

export default Hello;