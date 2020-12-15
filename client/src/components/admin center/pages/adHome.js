import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import axiosInstance from '../../helpers/axios';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { BsPlusCircle, BsPencilSquare } from "react-icons/bs";
import { RiEdit2Fill, RiChatDeleteFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FadeTransform } from 'react-animation-components';
import Sidebar from '../Sidebar';
import { Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Redirect } from 'react-router';
import { isAuth } from '../../helpers/auth';


function AdHome() {
   
    return (
        isAuth() ? isAuth().role === 'admin'|| isAuth().role === 'instructor'? 
        <Container fluid className="m-0 p-0">
           
            <Row className="d-flex">
                <Col className="col-md-3">
                    <Sidebar />
                </Col>
                <Col className="col-md-7 mt-5 mb-3 text-center">
                    <h1>Home section.</h1>
                </Col>
            </Row>
        </Container>:isAuth().role === 'student' ?<Redirect to="/"/> 
        :<Redirect to="/"/> : <Redirect to="/login"/>
    )
}

export default AdHome;
