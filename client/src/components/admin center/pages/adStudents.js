import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { Container, Row, Card, Col, Form, Button } from 'react-bootstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import axiosInstance from '../../helpers/axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { ExcelRenderer } from "react-excel-renderer";
import Media from 'react-media';
import { roundToNearestMinutes } from 'date-fns/esm';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function AdStudents() {

    const [studentMail, setStudentMail] = useState();
    const [studentBatchMail, setStudentBatchMail] = useState();
    const [Excel, setExcel] = useState();
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    const [batch, setBatch] = useState();
    const [batch2, setBatch2] = useState();

    const AddBatch = () => {
        if (password === repeatPassword) {
            const regData = {
                emails: studentMail,
                password: password,
                batch: batch
            }
            console.log(regData)
            axiosInstance.post('batch/addBatch', regData)
                .then(res => {
                    store.addNotification({
                        title: `${res.data.message}`,
                        message: 'Now you can use admin credentials!',
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
                .catch(err => {
                    console.log(err.response)
                    store.addNotification({
                        title: `${err.response.data.error}`,
                        message: 'Try again with valid credentials!',
                        type: "warning",
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
        } else {
            store.addNotification({
                title: "Passwords are not identical",
                message: "Enter similar passwords!",
                type: "warning",
                container: 'top-right',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    showIcon: true
                }
            })
        }
    }
    const updatePassword = () => {
        if (password === repeatPassword) {
            const regData = {
                batch: batch,
                studentPassword: password
            }
            axiosInstance.post('batch/update', regData)
                .then(res => {
                    store.addNotification({
                        title: `${res.data.message}`,
                        message: 'Now you can use updated credentials!',
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
                .catch(err => {
                    console.log(err)
                    store.addNotification({
                        title: `${err.response.data.error}`,
                        message: 'Try again with valid credentials!',
                        type: "warning",
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
        } else {
            store.addNotification({
                title: "Passwords are not identical",
                message: "Enter similar passwords!",
                type: "warning",
                container: 'top-right',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    showIcon: true
                }
            })
        }
    }

    const addEmail = () => { 
        var emails;
        ExcelRenderer(Excel, (err, resp) => {
          if(err){
            console.log(err);            
          }
          else{
            emails=resp.rows.map((data,key)=>{
                return data[0]
            })
            const formData={
                batch:batch2,
                email:emails
            }
            // console.log(formData)
        axiosInstance.post('batch/addEmail', formData)
            .then(res => {
                store.addNotification({
                    title: `${res.data.message}`,
                    message: `Now students having an access of batch notifications`,
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
            .catch(err => {
                store.addNotification({
                    title: `${err.response.data.error}`,
                    message: 'Try again with valid data!',
                    type: "warning",
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
          }
        });        
    }

    const removeEmail = () => {
        const regData = {
            batch: batch2,
            email: studentBatchMail
        }
        axiosInstance.post('batch/deleteEmail', regData)
            .then(res => {
                store.addNotification({
                    title: `${res.data.message}`,
                    message: `${studentBatchMail} now has no access of batch notifications`,
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
            .catch(err => {
                store.addNotification({
                    title: `${err.response.data.error}`,
                    message: 'Try again with valid data!',
                    type: "warning",
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
    }
    const deleteBatch = () => {
        if (password === repeatPassword) {
            const regData = {
                batch: batch
            }
            axiosInstance.post('batch/deleteBatch', regData)
                .then(res => {
                    store.addNotification({
                        title: `${res.data.message}`,
                        message: 'You can create new batch!',
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
                .catch(err => {
                    store.addNotification({
                        title: `${err.response.data.error}`,
                        message: 'Try again with valid credentials!',
                        type: "warning",
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
        } else {
            store.addNotification({
                title: "Passwords are not identical",
                message: "Enter similar passwords!",
                type: "warning",
                container: 'top-right',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 5000,
                    showIcon: true
                }
            })
        }
    }
    return (
        <Media query="(min-width:1300px)">
            {matches => {
                return matches ? <Container fluid className="m-0 p-0">
                    <Row className="d-flex">
                        <Col className="col-md-3">
                            <Sidebar />
                        </Col>
                        <Col className="col-md-7 mt-5 mb-3 text-center">
                            <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'scale(0.3) translateY(-20%)'
                                }}>
                                <h1 className="titles">Students Section.</h1>
                            </FadeTransform>
                            <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'scale(0.3) translateY(-20%)'
                                }}>
                                <Card className="mt-5">
                                    <Card.Header className="heads">Student Credentials.</Card.Header>
                                    <Card.Body className="col-md-12 d-flex justify-content-md-center">
                                        <LocalForm>
                                            <Row className="col-md-12">
                                                <Col className="col-md-5">
                                                    <Form.Label>Batch</Form.Label>
                                                </Col>
                                                <Col className="col-md-7">
                                                    <Control.text type="text"
                                                        placeholder="Enter Batch Name"
                                                        autoComplete="off"
                                                        className="form-control"
                                                        model=".batch"
                                                        value={batch}
                                                        onChange={(e) => setBatch(e.target.value)}
                                                        validators={{
                                                            required
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".batch"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required '
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="col-md-12 mt-3">
                                                <Col className="col-md-5">
                                                    <Form.Label>Student Email</Form.Label>
                                                </Col>
                                                <Col className="col-md-7">
                                                    <Control.text type="text"
                                                        placeholder="Enter Email ID"
                                                        autoComplete="off"
                                                        className="form-control"
                                                        model=".email"
                                                        value={studentMail}
                                                        onChange={(e) => setStudentMail(e.target.value)}
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
                                                </Col>
                                            </Row>
                                            <Row className="col-md-12 mt-3">
                                                <Col className="col-md-5">
                                                    <Form.Label>Student Password</Form.Label>
                                                </Col>
                                                <Col className="col-md-7">
                                                    <Control.text
                                                        type="password"
                                                        model=".password"
                                                        className="form-control"
                                                        placeholder="Enter Password"
                                                        autoComplete="off"
                                                        value={password}
                                                        onChange={e => setPassword(e.target.value)}
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
                                                </Col>
                                            </Row>
                                            <Row className="col-md-12 mt-3">
                                                <Col className="col-md-5">
                                                    <Form.Label>Confirm Password</Form.Label>
                                                </Col>
                                                <Col className="col-md-7">
                                                    <Control.text
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        className="form-control"
                                                        autoComplete="off"
                                                        model=".rpassword"
                                                        value={repeatPassword}
                                                        onChange={e => setRepeatPassword(e.target.value)}
                                                        validators={{
                                                            required, minLength: minLength(8)
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".rpassword"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required ',
                                                            minLength: 'Password should be greater than 8 characters!'
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Button className="mt-4" type="submit" onClick={AddBatch}>Add Batch</Button>
                                            <Button className="mt-4 ml-2 btn-success" type="submit" onClick={updatePassword}>Update Password</Button>
                                            <Button className="mt-4 ml-2 btn-danger" type="submit" onClick={deleteBatch}>Delete Batch</Button>                                </LocalForm>
                                    </Card.Body>
                                </Card>
                            </FadeTransform>
                            <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'scale(0.3) translateY(-20%)'
                                }}>
                                <Card className="mt-5">
                                    <Card.Header>Add Students.</Card.Header>
                                    <Card.Body className="col-md-12 d-flex justify-content-md-center">
                                        <LocalForm>
                                            <Row className="col-md-12">
                                                <Col className="col-md-5">
                                                    <Form.Label>Batch</Form.Label>
                                                </Col>
                                                <Col className="col-md-7">
                                                    <Control.text type="text"
                                                        placeholder="Enter Batch Name"
                                                        autoComplete="off"
                                                        className="form-control"
                                                        model=".batch"
                                                        value={batch2}
                                                        onChange={(e) => setBatch2(e.target.value)}
                                                        validators={{
                                                            required
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".batch"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required '
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="col-md-12 mt-3">
                                                <Col className="col-md-4 offset-md-1">
                                                    <Form.Label>Excel File:</Form.Label>
                                                </Col>
                                                <Col className="col-md-7">
                                                    <Form.Group>
                                                        <Form.File id="exampleFormControlFile1"
                                                            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                            onChange={e => setExcel(e.target.files[0])} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Button className="mt-4" type="submit" onClick={addEmail}>Add</Button>
                                        </LocalForm>
                                    </Card.Body>
                                </Card>
                                <Card className="mt-5">
                                    <Card.Header>Remove Students.</Card.Header>
                                    <Card.Body className="col-md-12 d-flex justify-content-md-center">
                                        <LocalForm>
                                            <Row className="col-md-12">
                                                <Col className="col-md-5">
                                                    <Form.Label>Batch</Form.Label>
                                                </Col>
                                                <Col className="col-md-7">
                                                    <Control.text type="text"
                                                        placeholder="Enter Batch Name"
                                                        autoComplete="off"
                                                        className="form-control"
                                                        model=".batch"
                                                        value={batch2}
                                                        onChange={(e) => setBatch2(e.target.value)}
                                                        validators={{
                                                            required
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".batch"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required '
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="col-md-12 mt-3">
                                                <Col className="col-md-5">
                                                    <Form.Label>Student Email</Form.Label>
                                                </Col>
                                                <Col className="col-md-7">
                                                    <Control.text type="text"
                                                        placeholder="Enter Email ID"
                                                        autoComplete="off"
                                                        className="form-control"
                                                        model=".email"
                                                        value={studentBatchMail}
                                                        onChange={(e) => setStudentBatchMail(e.target.value)}
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
                                                </Col>
                                            </Row>
                                            <Button className="mt-4 ml-2 btn-danger" type="submit" onClick={removeEmail}>Remove</Button>
                                        </LocalForm>
                                    </Card.Body>
                                </Card>
                            </FadeTransform>
                        </Col>
                    </Row>
                </Container > : <div>
                        <h3 className="text-center mt-5 mb-5 titles">This Section is accessible only from Desktop resolutions.</h3>
                    </div>;
            }}
        </Media>
    )
}

export default AdStudents;
