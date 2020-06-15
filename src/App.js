import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button';
import Mod from "./components/Mod"
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.close=this.close.bind(this);
    this.open=this.open.bind(this)
  }
  close() {
    this.setState({ showModal: false });
  }

  open(){
    this.setState({ showModal: true });
  }
  render(){
    const {showModal}=this.state;
  return (
    <div className="App">
  <Mod showModal={showModal} close={this.close} open={this.open} />
    </div>
  
  );
}
}

export default App;
