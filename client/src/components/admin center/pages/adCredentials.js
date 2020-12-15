import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar';
import * as FcIcons from "react-icons/fc";
// import { readRevenue } from '../../../Redux/actions/revenueActions';
import { Container, Row, Card, Col, Accordion,Form } from 'react-bootstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
// import axiosInstance from '../../../helpers/axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { Redirect } from 'react-router';
import { isAuth } from '../../helpers/auth';

function AdCreds() {
    return (
        isAuth() ? isAuth().role === 'admin'? 
        <Container fluid className="m-0 p-0">
            <Row className="d-flex">
                <Col className="col-md-3">
                    <Sidebar />
                </Col>
                <Col className="col-md-7 mt-5 mb-3 text-center">
                    <h1>Credentials Section.</h1>
                </Col>
            </Row>
        </Container>:isAuth().role === 'student'|| isAuth().role === 'instructor' ?<Redirect to="/"/> 
        :<Redirect to="/"/> : <Redirect to="/login"/>
    )
}

export default AdCreds;
