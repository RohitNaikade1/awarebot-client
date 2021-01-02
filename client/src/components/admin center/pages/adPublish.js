import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar';
import axiosInstance from '../../helpers/axios';
import { posterFetch } from '../../Redux/actions/posterActions';
import { Container, Row, Col, Form, Button, Accordion, Media, Card } from 'react-bootstrap';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { BsPlusCircle, BsPencilSquare } from "react-icons/bs";
import { Control, LocalForm, Errors } from 'react-redux-form';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Redirect } from 'react-router';
import { isAuth } from '../../helpers/auth';
import Medias from 'react-media';

const required = (val) => val && val.length;
const validSentence = (val) => /\b((?!=|\,|\.).)+(.)\b/i.test(val);

function AdPublish() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [caption, setCaption] = useState();
    const [picture, setPicture] = useState();
    const [title, setTitle] = useState();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(posterFetch())
    }, [])
    const posters = useSelector(state => state.posters);
    let cards = "";
    if (posters?.posters?.data) {
        const activeKey = posters?.posters?.data[0]._id;
        console.log(activeKey)
        cards = posters?.posters?.data.map((data, id) => {
            return (
                <Card className="col-md-12 col-sm-12 mt-5">
                    <Accordion className="myAccordian" defaultActiveKey={activeKey}>
                        <Accordion.Toggle as={Card.Header} className="back" eventKey={data._id}>
                            <h4 className="heads">{data.title}</h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={data._id}>
                            <Card.Body>
                                <Media tag="li">
                                    <img
                                        width={200}
                                        height={200}
                                        className="mr-3 img-thumbnail rounded"
                                        src={data.picture}
                                        alt={data.title}
                                    />
                                    <Media.Body className="ml-auto text-left">
                                        <p><b>Title:</b>  {data.title}</p>
                                        <p><b>Description:</b>  {data.caption}</p>
                                        <Button variant="danger" onClick={((e) => deletePoster(data.title))} className="mr-auto ml-2 mt-3">Delete</Button>
                                    </Media.Body>
                                </Media>
                            </Card.Body>

                        </Accordion.Collapse>
                    </Accordion>
                </Card>
            )
        })
    }

    const AddPoster = () => {

        let formData = new FormData();

        formData.append('title', title);
        formData.append('caption', caption);
        formData.append('picture', picture);

        console.log(formData)
        axiosInstance.post('poster/add', formData)
            .then(res => {
                store.addNotification({
                    title: `${res.data.message}`,
                    message: 'Poster will be rendered on Home page!',
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

    const deletePoster = (title) => {

        let formData = new FormData();

        formData.append('title', title);

        console.log(formData)
        axiosInstance.post('poster/delete', formData)
            .then(res => {
                store.addNotification({
                    title: `${res.data.message}`,
                    message: 'Poster will be removed from Home page also!',
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
                    message: 'Try again!',
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

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
            <Medias query="(min-width:1300px)">
                {matches => {
                    return matches ? <Container fluid className="m-0 p-0">
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}><BsPencilSquare className="mr-2" />Add Poster.</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => AddPoster(values)}>
                        <div className="form-group">
                            <Row><Col className="col-md-4 offset-md-1">
                                <Form.Label>Add Title:</Form.Label></Col>
                                <Col className="col-md-7">
                                    <Control.text
                                        model=".title"
                                        className="form-control"
                                        autocomplete="off"
                                        placeholder="Enter title"
                                        name="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        validators={{
                                            required, validSentence
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".title"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validSentence: 'Enter a valid Text!'
                                        }}
                                    />
                                </Col></Row>
                        </div>
                        <div className="form-group">
                            <Row><Col className="col-md-4 offset-md-1">
                                <Form.Label>Add Caption:</Form.Label></Col>
                                <Col className="col-md-7">
                                    <Control.textarea
                                        model=".caption"
                                        className="form-control"
                                        autocomplete="off"
                                        rows={6}
                                        placeholder="Enter caption"
                                        name="caption"
                                        value={caption}
                                        onChange={(e) => setCaption(e.target.value)}
                                        validators={{
                                            required, validSentence
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".caption"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validSentence: 'Enter a valid Text!'
                                        }}
                                    />
                                </Col></Row>
                        </div>
                        <Row className="col-md-12 mt-3">
                            <Col className="col-md-4 offset-md-1">
                                <Form.Label>Poster Image:</Form.Label>
                            </Col>
                            <Col className="col-md-7">
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1"
                                        accept="image/x-png,image/gif,image/jpeg,image/jpg"
                                        onChange={e => setPicture(e.target.files[0])} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="text-center float-right mt-4">
                            <Col><Button variant="primary" className="mr-3" type="submit">Create</Button>
                                <Button variant="danger" onClick={toggleModal}>Cancel</Button></Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            <Row className="d-flex">
                <Col className="col-md-3">
                    <Sidebar />
                </Col>
                <Col className="col-md-7 mt-5 text-center">
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.3) translateY(-20%)'
                        }}>
                        <h1 className="titles">Publishment Section.</h1>
                        <Button className="mt-4 col-md-5" onClick={toggleModal}>
                            <BsPlusCircle size={25} className="mr-3" />Add New Poster</Button>
                    </FadeTransform>
                    <Stagger in>
                        <div>{cards}</div>
                    </Stagger>
                </Col>
            </Row>
        </Container>: <div>
                            <h3 className="text-center mt-5 mb-5 titles">This Section is accessible only from Desktop resolutions.</h3>
                        </div>;
                }}
            </Medias> 
    )
}

export default AdPublish;
