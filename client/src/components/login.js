import React, { Component } from 'react';
import Student from './login/userLogin';
import Admin from './login/AdminLogin';
import './login/login.css'
import { Container,Row,Col } from 'react-bootstrap';
class Loginpage extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isLoginOpen: true,
          isRegisterOpen: false
        };
      }
      showLoginBox() {
        this.setState({isLoginOpen: true, isRegisterOpen: false});
      }
    
      showRegisterBox() {
        this.setState({isRegisterOpen: true, isLoginOpen: false});
      }
    render(){
        return(
            <Container className="d-flex justify-content-center align-items-center flex-column">
            <Container className="d-flex justify-content-center align-items-center">
              <Row className="mt-3">
                <Col
                    className={"controller " + (this.state.isLoginOpen
                    ? "selected-controller"
                    : "")}
                    onClick={this
                    .showLoginBox
                    .bind(this)}>
                    <h4>User</h4>
                </Col>
                <Col
                    className={"controller " + (this.state.isRegisterOpen
                    ? "selected-controller"
                    : "")}
                    onClick={this
                    .showRegisterBox
                    .bind(this)}>
                    <h4>Admin</h4>
                </Col></Row>
            </Container>
            <div>
            {this.state.isLoginOpen && <Student/>}
            {this.state.isRegisterOpen && <Admin/>}
           </div>
           </Container>
        );
    }
} 
export default Loginpage;