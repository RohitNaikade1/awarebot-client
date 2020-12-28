import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { tableFetch } from '../Redux/actions/postActions';
import { instructorFetch } from '../Redux/actions/instructorActions';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './card-style.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const About = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(tableFetch())
        dispatch(instructorFetch())
    }, [])
    const posts = useSelector(state => state.posts);
    const instructors = useSelector(state => state.instructors);
    let rows = "";
    if (posts?.updates) {
        if (posts.updates.length) {
            rows = posts?.updates?.map((data, id) => {
                return (
                    <tr>
                        <td>{id + 1}</td>
                        <td>{data.type}</td>
                        <td>{data.description}</td>
                        <td>{data.teacher}</td>
                        <td>{data.time}</td>
                    </tr>
                )
            })
        }

    }
    var settings = {
        dots: false,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Container fluid>
            {(posts?.updates).length ? <Row className="d-flex justify-content-md-center mt-5">
                <h1>Today's Schedule.</h1>
                <Table striped bordered hover className="mt-5 col-md-10">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Teacher</th>
                            <th>Time</th>

                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </Row> : <h3 className="text-center mt-5"><h1 className="header">Today's Schedule.</h1><hr />
            <p className="mt-5">No schedule today.</p></h3>}
            <Row className="mt-5 d-flex justify-centent-center text-center">

                <Col className="mt-5">
                <h2>Our Instructors.</h2>
                    <Slider {...settings} className="mr-5 ml-5 mt-5">
                        {instructors?.instructors.map((data, id) => {
                            return (
                                <Col className="col-md-11">
                                <Card id={id}>
                                    <Card.Img className="card-img imgUNcover" width={800} height={780} varient="top" src={data.picture} />
                                    <Card.Body>
                                        <Card.Title className="text-center">{data.name}</Card.Title>
                                        <div className="text-center mt-3"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
                                        <Card.Text className="text-center carding-text mt-4">
                                            <h6>{data.education}</h6>
                                            <p>{data.batch}</p>
                                        </Card.Text>
                                        <div className="text-center mt-0 ml-2">
                                            <a href={data.facebook} target="blank">
                                                <span className="fa fa-linkedin-square text-info icon fa-lg"></span></a>
                                            <a href={data.instagram} target="blank">
                                                <span className="fa fa-instagram text-danger fa-lg icon ml-3"></span></a>
                                            <a href={data.twitter} target="blank">
                                                <span className="fa fa-twitter-square text-primary icon fa-lg ml-3"></span></a>
                                            <a href={data.github} target="blank">
                                                <span className="fa fa-github-square text-dark fa-lg icon ml-3"></span></a>
                                        </div>
                                    </Card.Body>
                                </Card></Col>
                            )
                        })}
                    </Slider></Col>
            </Row>
        </Container>

    )
}
export default About;


