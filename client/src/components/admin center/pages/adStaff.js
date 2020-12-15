import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import {Stagger } from 'react-animation-components';
import * as FcIcons from "react-icons/fc";
// import axiosInstance from '../../../helpers/axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { Redirect } from 'react-router';
import { isAuth } from '../../helpers/auth';
import './pages.css';

function AdResidence() {
    return (
        isAuth() ? isAuth().role === 'admin'? 
        <Container fluid className="m-0 p-0">
            <Row className="d-flex">
                <Col className="col-md-3">
                    <Sidebar />
                </Col>
                <Col className="col-md-7 mt-5 mb-3 text-center">
                    <h1>Teaching Staff section.</h1>
                </Col>
            </Row>
        </Container>:isAuth().role === "Student"|| isAuth().role === "Instructor"?<Redirect to="/"/> :<Redirect to="/"/> : <Redirect to="/login"/>
    )
}

export default AdResidence;
