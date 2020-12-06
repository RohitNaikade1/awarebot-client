import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar';
import { Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Container, Row, Col, Card, Accordion, Button, Form } from 'react-bootstrap';
import axiosInstance from '../../helpers/axios';
import { postFetch } from '../../Redux/actions/postActions';
import { BsPlusCircle, BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import './pages.css';
import { Control, LocalForm, Errors } from 'react-redux-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const required = (val) => val && val.length;
const validURL = (val) => /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test(val);
const validSentence = (val) => /\b((?!=|\,|\.).)+(.)\b/i.test(val);

function AdRevenueReceipt() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [subject, setSubject] = useState();
    const [type, setType] = useState("Lecture update.");
    const [teacher, setTeacher] = useState();
    const [description, setDescription] = useState();
    const [weblink, setWeblink] = useState();
    const [date, setDate] = useState(null);
    const [time, setTime] = useState();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(postFetch())
    }, [])
    const posts = useSelector(state => state.posts);
    let cards = "";
    const deletePost = (id) => {
        console.log(id)
        const record = {
            key: id
        }
        axiosInstance.post('post/deletePost', record);
        setTimeout(
            store.addNotification({
                title: 'Post deleted successfully!',
                message: 'Add new updates for students!',
                type: "danger",
                container: 'top-right',
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 3000,
                    showIcon: true
                }
            }), 3000);
        window.location.reload(false);
    }
    if (posts?.posts[0]) {
        const activeKey = posts.posts[0]._id;
        cards = posts.posts.map((data, id) => {
            return (
                <Card className="col-md-12 col-sm-12 mt-5">
                    <Accordion className="myAccordian" defaultActiveKey={activeKey}>
                        <Accordion.Toggle as={Card.Header} className="back" eventKey={data._id}>
                            <h4>{data.subject}</h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={data._id}>
                            <Card.Body>
                                <Col className="text-center">
                                    <h6 className="">{data.type}</h6>
                                    <h6 className="mt-2">{data.date}</h6>
                                    <h6 className="mt-2">{data.time}</h6>
                                    <h6 className="mt-2">{data.description}</h6>
                                    <h6 className="mt-2">{data.teacher}</h6>
                                    <a href={data.weblink} className="mt-2 text-decoration-none font-italic" target="blank">Click here to prepare yourself.</a>

                                </Col>
                                <div className="mt-4">
                                    <MdDelete className="ml-3 icons" onClick={((e) => deletePost(data._id))} size={30} />
                                </div>
                            </Card.Body>

                        </Accordion.Collapse>
                    </Accordion>
                </Card>
            )
        })
    }
    const submitPost = (values) => {
        const postData = {
            subject,
            type,
            teacher,
            description,
            weblink,
            date,
            time
        }
        console.log(postData);
        axiosInstance.post('post/addPost', postData);
        setTimeout(store.addNotification({
            title: 'Post created successfully!',
            message: 'We will notify students about this!',
            type: "info",
            container: 'top-right',
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 3000,
                showIcon: true
            }
        }), 3000);
        window.location.reload(false);
    }
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    return (
        <Container fluid className="m-0 p-0">
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}><BsPencilSquare className="mr-2" />Add Post.</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => submitPost(values)}>
                        <div className="form-group">
                            <Row><Col className="col-md-3 offset-md-1">
                                <Form.Label>Subject:</Form.Label></Col>
                                <Col className="col-md-7">
                                    <Control.text
                                        model=".subject"
                                        className="form-control"
                                        autocomplete="off"
                                        placeholder="Enter Subject"
                                        name="subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        validators={{
                                            required, validSentence
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".subject"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validSentence: 'Enter a valid subject Name!'
                                        }}
                                    />
                                </Col></Row>
                        </div>
                        <Row><Col className="col-md-3 offset-md-1"><Form.Label>select post type:</Form.Label></Col>
                            <Col className="col-md-7">
                                <Control.select
                                    model=".type"
                                    as="select"
                                    className="my-1 mr-sm-2 form-control"
                                    id="inlineFormCustomSelectPref"
                                    custom
                                    value={type}
                                    defaultInputValue="Lecture update."
                                    onBlur={(e) => setType(e.target.value)}
                                >
                                    <option value="Lecture update.">Lecture Update.</option>
                                    <option value="Office Notice.">Office Notice.</option>
                                    <option value="Submission Alert.">Submission Alert.</option>
                                    <option value="Technology related Update.">Technology related Update.</option>
                                </Control.select>
                            </Col></Row>
                        <div className="form-group">
                            <Row><Col className="col-md-3 offset-md-1">
                                <Form.Label>Teacher:</Form.Label></Col>
                                <Col className="col-md-7">
                                    <Control.text
                                        model=".teacher"
                                        className="form-control"
                                        autocomplete="off"
                                        placeholder="Enter teacher name"
                                        name="teacher"
                                        value={teacher}
                                        onChange={(e) => setTeacher(e.target.value)}
                                        validators={{
                                            required, validSentence
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".teacher"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validSentence: 'Enter a valid Name!'
                                        }}
                                    />
                                </Col></Row>
                        </div>
                        <Row><Col className="col-md-3 offset-md-1 mb-4">
                            <Form.Label>Date:</Form.Label></Col>
                            <Col className="col-md-7">
                                <DatePicker
                                    model=".date"
                                    className="form-control"
                                    selected={date}
                                    onChange={date => setDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    minDate={new Date()}
                                    validators={{
                                        required
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".date"
                                    show="touched"
                                    messages={{
                                        required: 'Required '
                                    }}
                                />
                            </Col></Row>
                        <div className="form-group">
                            <Row><Col className="col-md-3 offset-md-1">
                                <Form.Label>Time:</Form.Label></Col>
                                <Col className="col-md-7">
                                    <Control.text
                                        model=".time"
                                        className="form-control"
                                        autocomplete="off"
                                        placeholder="Enter time"
                                        name="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".time"
                                        show="touched"
                                        messages={{
                                            required: 'Required '
                                        }}
                                    />
                                </Col></Row>
                        </div>
                        <div className="form-group">
                            <Row><Col className="col-md-3 offset-md-1">
                                <Form.Label>Description:</Form.Label></Col>
                                <Col className="col-md-7">
                                    <Control.textarea
                                        model=".description"
                                        className="form-control"
                                        autocomplete="off"
                                        placeholder="Enter description"
                                        name="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        validators={{
                                            required, validSentence
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".description"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validSentence: 'Enter a valid Text!'
                                        }}
                                    />
                                </Col></Row>
                        </div>
                        <Row><Col>
                            <div className="form-group">
                                <Row><Col className="col-md-3 offset-md-1"><Form.Label>topic related web link:</Form.Label></Col>
                                    <Col className="col-md-7">
                                        <Control.text
                                            model=".weblink"
                                            className="form-control"
                                            autoComplete="off"
                                            placeholder="Enter web link"
                                            name="weblink"
                                            value={weblink}
                                            onChange={(e) => setWeblink(e.target.value)}
                                            validators={{
                                                required, validURL
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".weblink"
                                            show="touched"
                                            messages={{
                                                required: 'Required ',
                                                validURL: 'Enter a valid URL!'
                                            }}
                                        />
                                    </Col></Row>
                            </div></Col></Row>
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
                <Col className="col-md-7 mt-5 mb-3 text-center">
                    <h1>Post Section.</h1>
                    <Button className="mt-4 col-md-5" onClick={toggleModal}>
                        <BsPlusCircle size={25} className="mr-3" />Add New Post</Button>
                    <Stagger in>
                    <div>{cards}</div>
                    </Stagger>
                </Col>
            </Row>
        </Container>
    )
}

export default AdRevenueReceipt;
