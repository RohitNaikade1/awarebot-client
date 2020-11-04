import React from "react";
import loginImg from "./admin.jpg";
import './login.css';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, Container, Form, Button } from 'react-bootstrap';
class Register extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col className='col-md-7 mt-3'>
            <Card className="frm">
              <div className="text-center mt-4 mb-4"><h1 className="">Admin login</h1></div>
              <Card.Img varient="top" className="mt-1 col-md-10 col-sm-10 offset-md-1" src={loginImg}></Card.Img>
              <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formGroupEmail">
                    <Row><Col className="col-md-3 offset-md-1"><Form.Label>Email Id:</Form.Label></Col>
                      <Col className="col-md-7"><Form.Control type="email" className="inp" placeholder="Enter Your Email Id" /></Col></Row>
                  </Form.Group>
                  <Row><Col>
                    <Form.Group controlId="formGroupPassword">
                      <Row><Col className="col-md-3 offset-md-1"><Form.Label>Password:</Form.Label></Col>
                        <Col className="col-md-7"><Form.Control type="password" className="inp" placeholder="Enter Your Password" /></Col></Row>
                    </Form.Group></Col></Row>
                  <div className="text-center mt-2"><Button variant="primary" type="submit">Login</Button></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Register;