import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Accordion,Media,Button } from 'react-bootstrap';
import axiosInstance from '../helpers/axios';
import { postFetch } from '../Redux/actions/postActions';
import { Stagger } from 'react-animation-components';
import "./schemes-style.css";
import Moment from 'react-moment';

const Notice = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(postFetch())
    }, [])
    const posts = useSelector(state => state.posts);
    console.log(posts)
    let cards = "";
    if (posts?.posts[0]) {
        console.log(posts.posts[0].date)
        const activeKey = posts.posts[0]._id;
        cards = posts.posts.map((data, id) => {
            return (
                <Row>
                <Card className="col-md-12 col-sm-12 mt-5">
                    <Accordion className="myAccordian" defaultActiveKey={activeKey}>
                        <Accordion.Toggle as={Card.Header} className="back" eventKey={data._id}>
                            <h4 className="text-center">{data.subject}</h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={data._id}>
                            <Card.Body>
                            <Media tag="li">
                                        <img
                                            width={200}
                                            height={200}
                                            className="mr-3 img-thumbnail rounded"
                                            src={data.picture}
                                            alt={data.subject}
                                        />
                                        <Media.Body className="ml-auto text-left">
                                            <p><b>Notification type:</b>{data.type}</p>
                                            <p><b>Description:</b>{data.description}</p>
                                            <p><b>Date:</b> {data.date}</p>
                                            <p><b>Time:</b>{data.time}</p>
                                            <p><b>Teacher:</b>{data.teacher}</p>
                                            <p><b>Time:</b>{data.time}</p>
                                            <Button href={data.weblink} target="blank" className="mr-auto">Learn More</Button>
                                        </Media.Body>
                                    </Media>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                </Card>
                </Row>
            )
        })
    }
    return (
        <Container fluid className="mt-5 mb-5">
            <Row className="mt-3 mb-2 text-center">
                <Col>
                    <h2 className="text-center">Notice Board.</h2>
                </Col>
            </Row>
            <Row className="d-flex justify-content-md-center">
                <Col className="col-md-8">
                    <Stagger in>
                        <div>{cards}</div>
                    </Stagger>
                </Col>
            </Row>
        </Container>
    )
}

export default Notice;

