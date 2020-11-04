import React from "react";
import loginImg from "./student.jpg";
import './login.css';
import { Row, Col, Card, Container, Button, Form } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  //   const auth = useSelector(state => state);
  //   const userLogin=(e)=>{
  //       e.preventDefault();
  //       const user={
  //           email,password
  //       }
  //       dispatch(login(user));
  //   }
  //     console.log(auth)
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col className='col-md-7 mt-3' >
          <Card className="frm">
            <div className="text-center mt-4 mb-4"><h1 className="">Student Login</h1></div>
            <Card.Img varient="top" className="mt-1 col-md-10 col-sm-10 offset-md-1" src={loginImg}></Card.Img>
            <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
            <Card.Body>
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Row><Col className="col-md-3 offset-md-1">
                    <Form.Label>Email Id:</Form.Label></Col>
                    <Col className="col-md-7">
                      <Form.Control type="email"
                        placeholder="Enter Your Email Id"
                      // value={email}
                      // onChange={(e)=>setEmail(e.target.value)}
                      />
                    </Col></Row>
                </Form.Group>
                <Row><Col>
                  <Form.Group controlId="formGroupPassword">
                    <Row><Col className="col-md-3 offset-md-1"><Form.Label>Password:</Form.Label></Col>
                      <Col className="col-md-7">
                        <Form.Control type="password"
                          placeholder="Enter Your Password"
                        // onChange={(e)=>setPassword(e.target.value)} 
                        />
                      </Col></Row>
                  </Form.Group></Col></Row>
                <div className="text-center mt-2">
                  <Button variant="primary" type="submit">Login</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

