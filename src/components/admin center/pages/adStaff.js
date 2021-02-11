import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import axiosInstance from '../../helpers/axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { Redirect } from 'react-router';
import { isAuth } from '../../helpers/auth';
import './pages.css';
import { Control, LocalForm, Errors } from 'react-redux-form';
import Media from 'react-media';

const required = (val) => val && val.length;
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validName = (val) => /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/i.test(val);
const validURL = (val) => /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test(val);

function AdStaff() {
    const [name, setName] = useState();
    const [education, setEducation] = useState();
    const [instagram, setInstagram] = useState();
    const [facebook, setFacebook] = useState();
    const [github, setGithub] = useState();
    const [linkedIn, setLinkedIn] = useState();
    const [email, setEmail] = useState();
    const [batch, setBatch] = useState();
    const [picture, setPicture] = useState();
    const AddInstructor = () => {

        let formData = new FormData();

        formData.append('name', name);
        formData.append('batch', batch);
        formData.append('education', education);
        formData.append('instagram', instagram);
        formData.append('facebook', facebook);
        formData.append('github', github);
        formData.append('linkedIn', linkedIn);
        formData.append('picture', picture);
        formData.append('email', email);

        axiosInstance.post('instructor/add', formData)
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
    }
    const updateInstructor = () => {
        let formData = new FormData();

        formData.append('name', name);
        formData.append('batch', batch);
        formData.append('education', education);
        formData.append('instagram', instagram);
        formData.append('facebook', facebook);
        formData.append('github', github);
        formData.append('linkedIn', linkedIn);
        formData.append('picture', picture);
        formData.append('email', email);

        axiosInstance.post('instructor/update', formData)
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
    }

    const deleteInstructor = () => {
        const regData = {
            batch: batch
        }
        axiosInstance.post('instructor/delete', regData)
            .then(res => {
                store.addNotification({
                    title: `${res.data.message}`,
                    message: 'You can add new instructor!',
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
                                    <h1 className="titles">Teaching Staff section.</h1></FadeTransform>
                                <FadeTransform
                                    in
                                    transformProps={{
                                        exitTransform: 'scale(0.3) translateY(-20%)'
                                    }}>
                                    <Card className="mt-5">
                                        <Card.Header className="heads">Instructor Credentials.</Card.Header>
                                        <Card.Body className="col-md-12 d-flex justify-content-md-center">
                                            <LocalForm>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-5">
                                                        <Form.Label>Name</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Control.text type="text"
                                                            placeholder="Enter Name"
                                                            autoComplete="off"
                                                            className="form-control"
                                                            model=".name"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            validators={{
                                                                required, validName
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".name"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validName: 'Enter a valid name'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-5">
                                                        <Form.Label>Education</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Control.text type="text"
                                                            placeholder="Enter Education"
                                                            autoComplete="off"
                                                            className="form-control"
                                                            model=".education"
                                                            value={education}
                                                            onChange={(e) => setEducation(e.target.value)}
                                                            validators={{
                                                                required
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".education"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required '
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
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
                                                        <Form.Label>Email</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Control.text type="text"
                                                            placeholder="Enter Email ID"
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
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-5">
                                                        <Form.Label>Instagram</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Control.text type="text"
                                                            placeholder="Enter Instagram link"
                                                            autoComplete="off"
                                                            className="form-control"
                                                            model=".instagram"
                                                            value={instagram}
                                                            onChange={(e) => setInstagram(e.target.value)}
                                                            validators={{
                                                                required, validURL
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".instagram"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validURL: 'Enter a valid url'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-5">
                                                        <Form.Label>Facebook</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Control.text
                                                            model=".facebook"
                                                            className="form-control"
                                                            placeholder="Enter Facebook link"
                                                            autoComplete="off"
                                                            value={facebook}
                                                            onChange={e => setFacebook(e.target.value)}
                                                            validators={{
                                                                required, validURL
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".facebook"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validURL: 'Enter a valid url'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-5">
                                                        <Form.Label>LinkedIn</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Control.text
                                                            model=".linkedIn"
                                                            className="form-control"
                                                            placeholder="Enter LinkedIn link"
                                                            autoComplete="off"
                                                            value={linkedIn}
                                                            onChange={e => setLinkedIn(e.target.value)}
                                                            validators={{
                                                                required, validURL
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".linkedIn"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validURL: 'Enter a valid url'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-5">
                                                        <Form.Label>Github</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Control.text
                                                            placeholder="Enter Github link"
                                                            className="form-control"
                                                            autoComplete="off"
                                                            model=".github"
                                                            value={github}
                                                            onChange={e => setGithub(e.target.value)}
                                                            validators={{
                                                                required, validURL
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".github"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validURL: 'Enter a valid url'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-5">
                                                        <Form.Label>Profile Photo</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-7">
                                                        <Form.Group>
                                                            <Form.File id="exampleFormControlFile1"
                                                                accept="image/x-png,image/gif,image/jpeg,image/jpg"
                                                                onChange={e => setPicture(e.target.files[0])} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Button className="mt-4" type="submit" onClick={AddInstructor}>Add Instructor</Button>
                                                <Button className="mt-4 ml-2 btn-success" type="submit" onClick={updateInstructor}>Update Instructor</Button>
                                                <Button className="mt-4 ml-2 btn-danger" type="submit" onClick={deleteInstructor}>Delete Instructor</Button>
                                            </LocalForm>
                                        </Card.Body>
                                    </Card>
                                </FadeTransform>
                            </Col>
                        </Row>
                    </Container> : <div>
                            <h3 className="text-center mt-5 mb-5 titles">This Section is accessible only from Desktop resolutions.</h3>
                        </div>;
                }}
            </Media>
    )
}

export default AdStaff;
