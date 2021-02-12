import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { tableFetch } from '../Redux/actions/postActions';
import { instructorFetch } from '../Redux/actions/instructorActions';
import Slider from "react-slick";
import schedule from './schedule.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './card-style.css';
import { gsap } from "gsap";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
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
    let header = useRef(null);
    let header2 = useRef(null);
    let image = useRef(null);
    let contents = useRef(null);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(tableFetch())
        dispatch(instructorFetch())
        gsap.from([header, image, contents], 0.8, {
            delay: 0.8,
            ease: "power3.out",
            x: 100,
            opacity: 0,
            stagger: {
                amount: 0.15
            }
        });
        gsap.from([header2], 1, {
            delay: 1,
            ease: "power3.out",
            x: -100,
            opacity: 0,
            stagger: {
                amount: 0.15
            }
        });
    }, [])
    const posts = useSelector(state => state.posts);
    const instructors = useSelector(state => state.instructors);
    let rows = "";
    if (posts?.updates) {
        if (posts.updates.length) {
            rows = posts?.updates?.map((data, key) => {
                return (
                    <tr className="fonts" key={key}>
                        <td>{key + 1}</td>
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
                <h1 ref={el => (header = el)} className="op titles">Today's Schedule.</h1>
                <img ref={el => (image = el)} className="d-none" src={schedule} width="300" height="200" />
                <Table ref={el => (contents = el)} striped bordered hover className="mt-5 col-md-10 op">
                    <thead>
                        <tr className="fonts">
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
            </Row> : <h3 className="text-center mt-5"><h1 ref={el => (header = el)} className="header op titles">Today's Schedule.</h1>
                    <img ref={el => (image = el)} src={schedule} width="300" height="200" />
                    <p className="mt-5 op fonts" ref={el => (contents = el)}>No schedule today.</p></h3>}
            <Row className="mt-5 d-flex justify-centent-center text-center">

                <Col className="mt-5">
                    <h2 className="titles op" ref={el => (header2 = el)}>Our Instructors.</h2>
                    <Fade in>
                        <Slider {...settings} className="mr-5 ml-5 mt-5">
                            {instructors?.instructors.map((data, id) => {
                                return (
                                    <Col className="col-md-11">
                                        <Card id={id} className="carding">
                                            <div className="overflow"><Card.Img className="card-image card-img-top overflow" width={800} height={780} varient="top" src={data.picture} /></div>
                                            <Card.Body>
                                                <Card.Title className="text-center">{data.name}</Card.Title>
                                                <div className="text-center mt-3"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
                                                <Card.Text className="text-center carding-text mt-4">
                                                    <div><h6>{data.education}</h6></div>
                                                    <div>{data.batch}</div>
                                                </Card.Text>
                                                <div className="text-center mt-0 ml-2">
                                                    <a href={data.facebook} target="blank">
                                                        <span className="fa fa-linkedin-square text-info icon fa-lg"></span></a>
                                                    <a href={data.instagram} target="blank">
                                                        <span className="fa fa-instagram text-danger fa-lg icon ml-3"></span></a>
                                                    <a href={data.twitter} target="blank">
                                                        <span className="fa fa-facebook-square text-primary icon fa-lg ml-3"></span></a>
                                                    <a href={data.github} target="blank">
                                                        <span className="fa fa-github-square text-dark fa-lg icon ml-3"></span></a>
                                                </div>
                                            </Card.Body>
                                        </Card></Col>
                                )
                            })}
                        </Slider></Fade></Col>
            </Row>
        </Container>

    )
}
export default About;


