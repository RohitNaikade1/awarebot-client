import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import axiosInstance from '../helpers/axios';
import { postFetch } from '../Redux/actions/postActions';
import { Stagger } from 'react-animation-components';
import "./schemes-style.css";

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
                                <Col className="text-center">
                                    <h6 className="">{data.type}</h6>
                                    <h6 className="mt-2">{data.date.toString()}</h6>
                                    <h6 className="mt-2">{data.time}</h6>
                                    <h6 className="mt-2">{data.description}</h6>
                                    <h6 className="mt-2">{data.teacher}</h6>
                                    <a href={data.weblink} className="mt-2 text-decoration-none font-italic" target="blank">Click here to prepare yourself.</a>

                                </Col>
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

