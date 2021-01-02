import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar';
import { Container, Row, Card, Col, Accordion, Form, Button } from 'react-bootstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import axiosInstance from '../../helpers/axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Redirect } from 'react-router';
import { isAuth } from '../../helpers/auth';
import Media from 'react-media';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function AdCreds() {

    const [adminMail, setAdminMail] = useState();
    const [updatedMail, setUpdatedMail] = useState();
    const [adminpassword, setAdminPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    const [repPassword, setRepPassword] = useState();
    const [batch, setBatch] = useState();
    const [instructor, setInstructor] = useState();
    const [instructorMail, setinstructorMail] = useState();
    const [instructorPassword, setinstructorPassword] = useState();

    const addAdmin = () => {
        if (adminpassword === repeatPassword) {
            const regData = {
                email: adminMail,
                password: adminpassword
            }
            axiosInstance.post('admin/add', regData)
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
    const updateAdminCreds = () => {
        if (adminpassword === repeatPassword) {
            const regData = {
                email: adminMail,
                uemail: updatedMail,
                password: adminpassword
            }
            axiosInstance.post('admin/update', regData)
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

    const addCreds = () => {
        if (instructorPassword === repPassword) {
            const regData = {
                batch: batch,
                instructor: instructor,
                email: instructorMail,
                instructorPassword: instructorPassword
            }
            axiosInstance.post('creds/add', regData)
                .then(res => {
                    store.addNotification({
                        title: `${res.data.message}`,
                        message: 'Now you can use stored credentials!',
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
    const updateInsPassword = () => {
        console.log("Reached")
        if (instructorPassword === repPassword) {
            const regData = {
                batch: batch,
                instructorPassword: instructorPassword
            }
            console.log(regData)
            axiosInstance.post('creds/instructorPass', regData)
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

    const updateInstructor = () => {
        if (instructorPassword === repPassword) {
            const regData = {
                batch: batch,
                instructor: instructor
            }
            axiosInstance.post('creds/instructor', regData)
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
    const deleteCreds = () => {
        if (instructorPassword === repPassword) {
            const regData = {
                batch: batch
            }
            axiosInstance.post('creds/delete', regData)
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
                                    <h1 className="titles">Credentials Section.</h1></FadeTransform>
                                <FadeTransform
                                    in
                                    transformProps={{
                                        exitTransform: 'scale(0.3) translateY(-20%)'
                                    }}>
                                    <Card className="mt-5">
                                        <Card.Header className="heads">Admin Credentials.</Card.Header>
                                        <Card.Body className="col-md-12 d-flex justify-content-md-center">
                                            <LocalForm>
                                                <Row className="col-md-12">
                                                    <Col className="col-md-5">
                                                        <Form.Label>Admin Email</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Control.text type="text"
                                                            placeholder="Enter Admin Email ID"
                                                            autoComplete="off"
                                                            className="form-control"
                                                            model=".email"
                                                            value={adminMail}
                                                            onChange={(e) => setAdminMail(e.target.value)}
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
                                                        <Form.Label>Updated Email</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Control.text type="text"
                                                            placeholder="updated Email ID"
                                                            autoComplete="off"
                                                            className="form-control"
                                                            model=".uemail"
                                                            value={updatedMail}
                                                            onChange={(e) => setUpdatedMail(e.target.value)}
                                                            validators={{
                                                                required, validEmail
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".uemail"

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
                                                        <Form.Label>Admin Password</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Control.text
                                                            type="password"
                                                            model=".password"
                                                            className="form-control"
                                                            placeholder="Enter Password"
                                                            autoComplete="off"
                                                            value={adminpassword}
                                                            onChange={e => setAdminPassword(e.target.value)}
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
                                                <Button className="mt-4" type="submit" onClick={addAdmin}>Add Admin Credentials</Button>
                                                <Button className="mt-4 ml-2 btn-success" type="submit" onClick={updateAdminCreds}>Update Admin Credentials</Button>
                                            </LocalForm>
                                        </Card.Body>
                                    </Card>
                                </FadeTransform>
                                <FadeTransform
                                    in
                                    transformProps={{
                                        exitTransform: 'scale(0.3) translateY(-20%)'
                                    }}>
                                    <Card className="mt-5">
                                        <Card.Header className="heads">Instructor Credentials.</Card.Header>
                                        <Card.Body className="col-md-12 d-flex justify-content-md-center">
                                            <LocalForm>
                                                <Row className="col-md-12">
                                                    <Col className="col-md-5">
                                                        <Form.Label>Batch Name</Form.Label>
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
                                                        <Form.Label>Instructor</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Control.text type="text"
                                                            placeholder="Instructor Name"
                                                            autoComplete="off"
                                                            className="form-control"
                                                            model=".instructor"
                                                            value={instructor}
                                                            onChange={(e) => setInstructor(e.target.value)}
                                                            validators={{
                                                                required
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".instructor"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required '
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-5">
                                                        <Form.Label>Email ID</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Control.text
                                                            type="text"
                                                            model=".imail"
                                                            className="form-control"
                                                            placeholder="Enter Email ID"
                                                            autoComplete="off"
                                                            value={instructorMail}
                                                            onChange={e => setinstructorMail(e.target.value)}
                                                            validators={{
                                                                required, validEmail
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".imail"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validEmail: 'Enter a valid Email Address!'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-5">
                                                        <Form.Label>Enter Password</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Control.text
                                                            type="password"
                                                            placeholder="Enter Password"
                                                            className="form-control"
                                                            autoComplete="off"
                                                            model=".password"
                                                            value={instructorPassword}
                                                            onChange={e => setinstructorPassword(e.target.value)}
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
                                                            value={repPassword}
                                                            onChange={e => setRepPassword(e.target.value)}
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
                                                <Button className="mt-4" onClick={addCreds} type="submit">Add Credentials</Button>
                                                <Button className="mt-4 ml-2 btn btn-success" onClick={updateInstructor} type="submit">Update instructor</Button>
                                                <Button className="mt-4 ml-2 btn btn-warning" onClick={updateInsPassword} type="submit">Update Instructor Password</Button>
                                                <Button className="mt-4 ml-2 btn btn-danger" onClick={deleteCreds} type="submit">Delete Credentials</Button>
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

export default AdCreds;
