import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import axiosInstance from '../../helpers/axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { FadeTransform } from 'react-animation-components';
import Sidebar from '../Sidebar';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Redirect } from 'react-router';
import { isAuth } from '../../helpers/auth';
import './pages.css';
import Media from 'react-media';
const required = (val) => val && val.length;
const validMonth = (val) => /^[a-zA-Z]*$/i.test(val);
const validNumber = (val) => /^[0-9]*$/i.test(val);

function AdHome() {

    const [monthOne, setMonthOne] = useState();
    const [monthTwo, setMonthTwo] = useState();
    const [monthThree, setMonthThree] = useState();
    const [monthFour, setMonthFour] = useState();
    const [monthFive, setMonthFive] = useState();
    const [oneJavaCount, setOneJavaCount] = useState();
    const [twoJavaCount, setTwoJavaCount] = useState();
    const [threeJavaCount, setThreeJavaCount] = useState();
    const [fourJavaCount, setFourJavaCount] = useState();
    const [fiveJavaCount, setFiveJavaCount] = useState();
    const [oneCPPCount, setOneCPPCount] = useState();
    const [twoCPPCount, setTwoCPPCount] = useState();
    const [threeCPPCount, setThreeCPPCount] = useState();
    const [fourCPPCount, setFourCPPCount] = useState();
    const [fiveCPPCount, setFiveCPPCount] = useState();
    const [oneDSCount, setOneDSCount] = useState();
    const [twoDSCount, setTwoDSCount] = useState();
    const [threeDSCount, setThreeDSCount] = useState();
    const [fourDSCount, setFourDSCount] = useState();
    const [fiveDSCount, setFiveDSCount] = useState();

    const [ResOne, setResOne] = useState();
    const [ResTwo, setResTwo] = useState();
    const [ResThree, setResThree] = useState();
    const [ResFour, setResFour] = useState();
    const [ResFive, setResFive] = useState();
    const [oneResJava, setOneResJava] = useState();
    const [twoResJava, setTwoResJava] = useState();
    const [threeResJava, setThreeResJava] = useState();
    const [fourResJava, setFourResJava] = useState();
    const [fiveResJava, setFiveResJava] = useState();
    const [oneResCPP, setOneResCPP] = useState();
    const [twoResCPP, setTwoResCPP] = useState();
    const [threeResCPP, setThreeResCPP] = useState();
    const [fourResCPP, setFourResCPP] = useState();
    const [fiveResCPP, setFiveResCPP] = useState();
    const [oneResDS, setOneResDS] = useState();
    const [twoResDS, setTwoResDS] = useState();
    const [threeResDS, setThreeResDS] = useState();
    const [fourResDS, setFourResDS] = useState();
    const [fiveResDS, setFiveResDS] = useState();

    const submitAttendence = () => {
        const attendence = {
            ID: 101,
            month: [monthOne, monthTwo, monthThree, monthFour, monthFive],
            JavaCount: [Number(oneJavaCount), Number(twoJavaCount), Number(threeJavaCount), Number(fourJavaCount), Number(fiveJavaCount)],
            CPPCount: [Number(oneCPPCount), Number(twoCPPCount), Number(threeCPPCount), Number(fourCPPCount), Number(fiveCPPCount)],
            DSCount: [Number(oneDSCount), Number(twoDSCount), Number(threeDSCount), Number(fourDSCount), Number(fiveDSCount)]
        }
        axiosInstance.post('attendence/addRecord', attendence)
            .then((res) => {
                store.addNotification({
                    title: `${res.data.message}`,
                    message: 'updated data is rendered on home page',
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
    const submitResult = () => {
        const Result = {
            ID: 101,
            month: [ResOne, ResTwo, ResThree, ResFour, ResFive],
            JavaCount: [Number(oneResJava), Number(twoResJava), Number(threeResJava), Number(fourResJava), Number(fiveResJava)],
            CPPCount: [Number(oneResCPP), Number(twoResCPP), Number(threeResCPP), Number(fourResCPP), Number(fiveResCPP)],
            DSCount: [Number(oneResDS), Number(twoResDS), Number(threeResDS), Number(fourResDS), Number(fiveResDS)]
        }
        axiosInstance.post('result/addRecord', Result)
            .then((res) => {
                store.addNotification({
                    title: `${res.data.message}`,
                    message: 'updated data is rendered on home page',
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
                                    <h1 className="titles">Home section.</h1>
                                </FadeTransform>
                                <FadeTransform
                                    in
                                    transformProps={{
                                        exitTransform: 'scale(0.5) translateY(-50%)'
                                    }}>
                                    <Card className="mt-4">
                                        <Card.Header>Attendence of batches in last Five surveys.</Card.Header>
                                        <Card.Body>
                                            <LocalForm>
                                                <Row className="col-md-12">
                                                    <Col className="col-md-1">
                                                        <Form.Label>1.</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-2">
                                                        <Control.text
                                                            type="text"
                                                            model=".monthOne"
                                                            placeholder="Month"
                                                            autoComplete="off"
                                                            value={monthOne}
                                                            className="form-control"
                                                            onChange={e => setMonthOne(e.target.value)}
                                                            validators={{
                                                                required, validMonth
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".monthOne"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validMonth: 'Enter a valid Month!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Java Attendence"
                                                            model=".oneJavaCount"
                                                            autoComplete="off"
                                                            value={oneJavaCount}
                                                            className="form-control"
                                                            onChange={e => setOneJavaCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".oneJavaCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="CPP Attendence"
                                                            model=".oneCPPCount"
                                                            value={oneCPPCount}
                                                            className="form-control"
                                                            onChange={e => setOneCPPCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".oneCPPCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            model=".oneDSCount"
                                                            placeholder="DS Attendence"
                                                            value={oneDSCount}
                                                            className="form-control"
                                                            onChange={e => setOneDSCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".oneDSCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-1">
                                                        <Form.Label>2.</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-2">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Month"
                                                            model=".monthTwo"
                                                            autoComplete="off"
                                                            value={monthTwo}
                                                            className="form-control"
                                                            onChange={e => setMonthTwo(e.target.value)}
                                                            validators={{
                                                                required, validMonth
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".monthTwo"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validMonth: 'Enter a valid Month!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Java Attendence"
                                                            model=".twoJavaCount"
                                                            autoComplete="off"
                                                            value={twoJavaCount}
                                                            className="form-control"
                                                            onChange={e => setTwoJavaCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".twoJavaCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="CPP Attendence"
                                                            value={twoCPPCount}
                                                            model=".twoCPPCount"
                                                            className="form-control"
                                                            onChange={e => setTwoCPPCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".twoCPPCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="DS Attendence"
                                                            value={twoDSCount}
                                                            model=".twoDSCount"
                                                            className="form-control"
                                                            onChange={e => setTwoDSCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".twoDSCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-1">
                                                        <Form.Label>3.</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-2">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Month"
                                                            model=".monthThree"
                                                            autoComplete="off"
                                                            value={monthThree}
                                                            className="form-control"
                                                            onChange={e => setMonthThree(e.target.value)}
                                                            validators={{
                                                                required, validMonth
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".monthThree"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validMonth: 'Enter a valid Month!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Java Attendence"
                                                            autoComplete="off"
                                                            value={threeJavaCount}
                                                            model=".threeJavaCount"
                                                            className="form-control"
                                                            onChange={e => setThreeJavaCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".threeJavaCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="CPP Attendence"
                                                            value={threeCPPCount}
                                                            model=".threeCPPCount"
                                                            className="form-control"
                                                            onChange={e => setThreeCPPCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".monthOne"
                                                            show="touched"
                                                            model=".threeCPPCount"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            model=".threeDSCount"
                                                            placeholder="DS Attendence"
                                                            className="form-control"
                                                            value={threeDSCount}
                                                            onChange={e => setThreeDSCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".threeDSCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-1">
                                                        <Form.Label>4.</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-2">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Month"
                                                            autoComplete="off"
                                                            model=".monthFour"
                                                            value={monthFour}
                                                            className="form-control"
                                                            onChange={e => setMonthFour(e.target.value)}
                                                            validators={{
                                                                required, validMonth
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".monthFour"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validMonth: 'Enter a valid Month!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Java Attendence"
                                                            autoComplete="off"
                                                            model=".fourJavaCount"
                                                            value={fourJavaCount}
                                                            className="form-control"
                                                            onChange={e => setFourJavaCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".fourJavaCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="CPP Attendence"
                                                            value={fourCPPCount}
                                                            model=".fourCPPCount"
                                                            className="form-control"
                                                            onChange={e => setFourCPPCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".fourCPPCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="DS Attendence"
                                                            value={fourDSCount}
                                                            model=".fourDSCount"
                                                            className="form-control"
                                                            onChange={e => setFourDSCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".fourDSCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-1">
                                                        <Form.Label>5.</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-2">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Month"
                                                            autoComplete="off"
                                                            model=".monthFive"
                                                            value={monthFive}
                                                            className="form-control"
                                                            onChange={e => setMonthFive(e.target.value)}
                                                            validators={{
                                                                required, validMonth
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".monthFive"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validMonth: 'Enter a valid Month!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Java Attendence"
                                                            autoComplete="off"
                                                            model=".fiveJavaCount"
                                                            value={fiveJavaCount}
                                                            className="form-control"
                                                            onChange={e => setFiveJavaCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".fiveJavaCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            model=".fiveCPPCount"
                                                            placeholder="CPP Attendence"
                                                            value={fiveCPPCount}
                                                            className="form-control"
                                                            onChange={e => setFiveCPPCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".fiveCPPCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="DS Attendence"
                                                            value={fiveDSCount}
                                                            model=".fiveDSCount"
                                                            className="form-control"
                                                            onChange={e => setFiveDSCount(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".fiveDSCount"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Button className="mt-4" type="submit" onClick={submitAttendence}>Update Records</Button>
                                            </LocalForm>
                                        </Card.Body>
                                    </Card></FadeTransform>

                                <FadeTransform
                                    in
                                    transformProps={{
                                        exitTransform: 'scale(0.5) translateY(-50%)'
                                    }}>
                                    <Card className="mt-4">
                                        <Card.Header>Result of batches in last Five surveys.</Card.Header>
                                        <Card.Body>
                                            <LocalForm>
                                                <Row className="col-md-12">
                                                    <Col className="col-md-1">
                                                        <Form.Label>1.</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-2">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Month"
                                                            autoComplete="off"
                                                            value={ResOne}
                                                            model=".ResOne"
                                                            className="form-control"
                                                            onChange={e => setResOne(e.target.value)}
                                                            validators={{
                                                                required, validMonth
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".ResOne"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validMonth: 'Enter a valid Month!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Java Result"
                                                            autoComplete="off"
                                                            value={oneResJava}
                                                            model=".oneResJava"
                                                            className="form-control"
                                                            onChange={e => setOneResJava(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".oneResJava"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="CPP Result"
                                                            value={oneResCPP}
                                                            className="form-control"
                                                            model=".oneResCPP"
                                                            onChange={e => setOneResCPP(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".oneResCPP"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="DS Result"
                                                            value={oneResDS}
                                                            model=".oneResDS"
                                                            className="form-control"
                                                            onChange={e => setOneResDS(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".oneResDS"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validMonth: 'Enter a valid Month!'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-1">
                                                        <Form.Label>2.</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-2">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Month"
                                                            autoComplete="off"
                                                            value={ResTwo}
                                                            className="form-control"
                                                            model=".ResTwo"
                                                            onChange={e => setResTwo(e.target.value)}
                                                            validators={{
                                                                required, validMonth
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".ResTwo"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validMonth: 'Enter a valid Month!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Java Result"
                                                            autoComplete="off"
                                                            value={twoResJava}
                                                            model=".twoResJava"
                                                            className="form-control"
                                                            onChange={e => setTwoResJava(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".twoResJava"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="CPP Result"
                                                            value={twoResCPP}
                                                            model=".twoResCPP"
                                                            className="form-control"
                                                            onChange={e => setTwoResCPP(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".twoResCPP"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="DS Result"
                                                            value={twoResDS}
                                                            model=".twoResDS"
                                                            className="form-control"
                                                            onChange={e => setTwoResDS(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".twoResDS"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-1">
                                                        <Form.Label>3.</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-2">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Month"
                                                            autoComplete="off"
                                                            value={ResThree}
                                                            className="form-control"
                                                            model=".ResThree"
                                                            onChange={e => setResThree(e.target.value)}
                                                            validators={{
                                                                required, validMonth
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".ResThree"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validMonth: 'Enter a valid Month!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Java Result"
                                                            autoComplete="off"
                                                            value={threeResJava}
                                                            model=".threeResJava"
                                                            className="form-control"
                                                            onChange={e => setThreeResJava(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".threeResJava"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="CPP Result"
                                                            value={threeResCPP}
                                                            model=".threeResCPP"
                                                            className="form-control"
                                                            onChange={e => setThreeResCPP(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".threeResCPP"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="DS Result"
                                                            value={threeResDS}
                                                            model=".threeResDS"
                                                            className="form-control"
                                                            onChange={e => setThreeResDS(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".threeResDS"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-1">
                                                        <Form.Label>4.</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-2">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Month"
                                                            autoComplete="off"
                                                            className="form-control"
                                                            value={ResFour}
                                                            model=".ResFour"
                                                            onChange={e => setResFour(e.target.value)}
                                                            validators={{
                                                                required, validMonth
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".ResFour"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validMonth: 'Enter a valid Month!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Java Result"
                                                            autoComplete="off"
                                                            className="form-control"
                                                            value={fourResJava}
                                                            model=".fourResJava"
                                                            onChange={e => setFourResJava(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".fourResJava"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="CPP Result"
                                                            value={fourResCPP}
                                                            model=".fourResCPP"
                                                            className="form-control"
                                                            onChange={e => setFourResCPP(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".fourResCPP"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="DS Result"
                                                            value={fourResDS}
                                                            model=".fourResDS"
                                                            className="form-control"
                                                            onChange={e => setFourResDS(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".fourResDS"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row className="col-md-12 mt-3">
                                                    <Col className="col-md-1">
                                                        <Form.Label>5.</Form.Label>
                                                    </Col>
                                                    <Col className="col-md-2">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Month"
                                                            autoComplete="off"
                                                            value={ResFive}
                                                            className="form-control"
                                                            model=".ResFive"
                                                            onChange={e => setResFive(e.target.value)}
                                                            validators={{
                                                                required, validMonth
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".ResFive"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validMonth: 'Enter a valid Month!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            placeholder="Java Result"
                                                            autoComplete="off"
                                                            value={fiveResJava}
                                                            className="form-control"
                                                            model=".fiveResJava"
                                                            onChange={e => setFiveResJava(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".fiveResJava"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="CPP Result"
                                                            value={fiveResCPP}
                                                            className="form-control"
                                                            model=".fiveResCPP"
                                                            onChange={e => setFiveResCPP(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".fiveResCPP"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                    <Col className="col-md-3">
                                                        <Control.text
                                                            type="text"
                                                            autoComplete="off"
                                                            placeholder="DS Result"
                                                            value={fiveResDS}
                                                            model=".fiveResDS"
                                                            className="form-control"
                                                            onChange={e => setFiveResDS(e.target.value)}
                                                            validators={{
                                                                required, validNumber
                                                            }}
                                                        />
                                                        <Errors
                                                            className="text-danger"
                                                            model=".fiveResDS"
                                                            show="touched"
                                                            messages={{
                                                                required: 'Required ',
                                                                validNumber: 'Enter a valid Number!'
                                                            }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Button className="mt-4" type="submit" onClick={submitResult}>Update Records</Button>
                                            </LocalForm>
                                        </Card.Body>
                                    </Card></FadeTransform>
                            </Col>
                        </Row>
                    </Container> : <div>
                        <h3 className="text-center mt-5 mb-5 titles">This Section is accessible only from Desktop resolutions.</h3>
                        </div>;
                }}
            </Media>
    )
}

export default AdHome;
