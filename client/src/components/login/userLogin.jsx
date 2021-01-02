import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import loginImg from "./student.jpg";
import './login.css';
import { Row, Col, Card, Container, Button, Form} from 'react-bootstrap';
import axiosInstance from '../helpers/axios'
import { Control, LocalForm, Errors } from 'react-redux-form';
import jwt from 'jsonwebtoken';
import history from '../helpers/history';
import { authenticate, isAuth } from '../helpers/auth';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import {credsFetch} from '../Redux/actions/credActions';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const Login = ({props}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("Instructor");
  var data = "";
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch((credsFetch()));  
  })
  const Record=useSelector((state)=>state.creds);
  if(Record?.creds[0]){
    // console.log(Record.creds)
      data=Record.creds.map((data,key)=>{
        return <option key={data.batch}>{data.batch}</option>
      })
  }


  const handleSubmit = (values) => {
    const resData = {
      email,
      password,
      batch: type
    }
    // console.log(resData)
    axiosInstance.post('auth/signin', resData)
      .then((data) => {
        let user = jwt.decode(data.data.data);
        console.log(user)
        authenticate(user, () => {
          isAuth() && isAuth().role === 'admin'
            ? history.push('/admin')
            : history.push('/');
        });
        store.addNotification({
          title: `${user.email},welcome back!`,
          message: 'Now you have privileges to explore!',
          type: "success",
          container: 'top-right',
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 3000,
            showIcon: true
          }
        })
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err.response)
        store.addNotification({
          title: `${err.response.data.warning}`,
          message: "Try again with valid credentials!",
          type: "warning",
          container: 'top-right',
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 5000,
            showIcon: true
          }
        })
        window.location.reload(false);
      })
    // history.push('/')
  }
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col className='col-md-7 mt-3' >
          <Card className="frm">
            <div className="text-center mt-3 mb-2"><h1 className="">User Login</h1></div>
            <Card.Img varient="top" className="col-md-10 col-sm-10 offset-md-1" src={loginImg}></Card.Img>
            <div className="text-center mt-1 mb-2"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
            <Card.Body>
              <LocalForm onSubmit={(values) => handleSubmit(values)}>
                <Row><Col className="col-md-3 offset-md-1"><Form.Label>Batch:</Form.Label></Col>
                  <Col className="col-md-7">
                    <div id="react-search">
                    <select
                      className="my-1 mr-sm-2 form-control"
                      value={type}
                      defaultValue="Instructor"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option key="Instructor">Instructor</option>
                      {data}
                    </select></div>
                  </Col></Row>
                <Form.Group controlId="formGroupEmail">
                  <Row><Col className="col-md-3 mt-3 offset-md-1">
                    <Form.Label>Email Id:</Form.Label></Col>
                    <Col className="col-md-7 mt-3">
                      <Control.text type="email"
                        placeholder="Enter Your Email Id"
                        autoComplete="off"
                        className="form-control"
                        model=".email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        validators={{
                          required, validEmail
                        }}
                      />
                      <Errors
                        className="text-danger"
                        model=".email"

                        show="touched"
                        messages={{
                          required: 'Required ',
                          validEmail: 'Enter a valid email address!'
                        }}
                      />
                    </Col></Row>
                </Form.Group>
                <Row><Col>
                  <Form.Group controlId="formGroupPassword">
                    <Row><Col className="col-md-3 offset-md-1"><Form.Label>Password:</Form.Label></Col>
                      <Col className="col-md-7">
                        <Control.text type="password"
                          autoComplete="off"
                          className="form-control"
                          model=".password"
                          placeholder="Enter Your Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          validators={{
                            required, minLength: minLength(8)
                          }}
                        />
                        <Errors
                          className="text-danger"
                          model=".password"
                          show="touched"
                          messages={{
                            required: 'Required ',
                            minLength: 'Password should be greater than 8 characters!'
                          }}
                        />
                      </Col></Row>
                  </Form.Group></Col></Row>
                <div className="text-center mt-2">
                  <Button variant="primary" type="submit">Login</Button>
                </div>
              </LocalForm>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

