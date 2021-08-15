import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../Sidebar';
import { Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Container, Row, Col, Card, Accordion, Media, Button, Form } from 'react-bootstrap';
import axiosInstance from '../../helpers/axios';
import { postFetch } from '../../Redux/actions/postActions';
import { BsPlusCircle, BsPencilSquare } from "react-icons/bs";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import './pages.css';
import { Control, LocalForm, Errors } from 'react-redux-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { format } from 'date-fns';
import { Redirect } from 'react-router';
import { isAuth } from '../../helpers/auth';
import Medias from 'react-media';

const required = (val) => val && val.length;
const validURL = (val) => /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test(val);
const validSentence = (val) => /\b((?!=|\,|\.).)+(.)\b/i.test(val);

function AdPosts() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [subject, setSubject] = useState();
    const [type, setType] = useState("Lecture update.");
    const [teacher, setTeacher] = useState();
    const [description, setDescription] = useState();
    const [weblink, setWeblink] = useState();
    const [date, setDate] = useState(null);
    const [time, setTime] = useState();
    const [picture, setPicture] = useState();

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
        axiosInstance.post('post/deletePost', record)
        .then(res=>{
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
            })
            window.location.reload(false);
        }) 
    }
    if (posts?.posts[0]) {
        const activeKey = posts.posts[0]._id;
        cards = posts.posts.map((data, id) => {
            return (
                <Card className="col-md-12 col-sm-12 mt-5">
                    <Accordion className="myAccordian" defaultActiveKey={activeKey}>
                        <Accordion.Toggle as={Card.Header} className="back" eventKey={data._id}>
                            <h4 className="heads">{data.subject}</h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={data._id}>
                            <Card.Body>
                                <Media tag="li">
                                    <img
                                        width={200}
                                        height={200}
                                        className="mr-3 img-thumbnail"
                                        src={data.picture}
                                        alt={data.subject}
                                    />
                                    <Media.Body className="ml-auto text-left">
                                        <p><b>Notification type:</b>  {data.type}</p>
                                        <p><b>Description:</b>  {data.description}</p>
                                        <p><b>Date:</b>  {data.date}</p>
                                        <p><b>Time:</b>  {data.time}</p>
                                        <p><b>Teacher:</b>  {data.teacher}</p>
                                        <p><b>Time:</b>  {data.time}</p>
                                        <Button href={data.weblink} target="blank" className="mr-auto">Learn More</Button>
                                        <Button variant="danger" onClick={((e) => deletePost(data._id))} className="mr-auto ml-2">Delete</Button>
                                    </Media.Body>
                                </Media>
                            </Card.Body>

                        </Accordion.Collapse>
                    </Accordion>
                </Card>
            )
        })
    }
    const submitPost = (values) => {
        const dt = format(date, 'dd/MM/yyyy')
        const postData = {
            subject,
            type,
            teacher,
            description,
            weblink,
            picture,
            dt,
            time
        }
        console.log(postData);
        axiosInstance.post('post/addPost', postData)
        .then(res=>{
            store.addNotification({
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
                                            onChange={(e) => setType(e.target.value)}
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
                                                rows={6}
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
                                <div className="form-group">
                                    <Row><Col className="col-md-3 offset-md-1"><Form.Label>Picture:</Form.Label></Col>
                                        <Col className="col-md-7">
                                            <Control.text
                                                model=".picture"
                                                className="form-control"
                                                autoComplete="off"
                                                placeholder="Enter picture URL:"
                                                name="picture"
                                                value={picture}
                                                onChange={(e) => setPicture(e.target.value)}
                                                validators={{
                                                    required, validURL
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".picture"
                                                show="touched"
                                                messages={{
                                                    required: 'Required ',
                                                    validURL: 'Enter a valid URL!'
                                                }}
                                            />
                                        </Col></Row>
                                </div>
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
                            <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'scale(0.3) translateY(-20%)'
                                }}>
                                <h1 className="titles">Post Section.</h1>
                                <Button className="mt-4 col-md-5" onClick={toggleModal}>
                                    <BsPlusCircle size={25} className="mr-3" />Add New Post</Button></FadeTransform>
                            <Stagger in>
                                <div>{cards}</div>
                            </Stagger>
                        </Col>
                    </Row>
                </Container> : <div>
                        <h3 className="text-center mt-5 mb-5 titles">This Section is accessible only from Desktop resolutions.</h3>
                    </div>;
            }}
        </Medias>
    )
}

export default AdPosts;
