import React from 'react';
import "./home.css"
import Attendence from './attendence';
import Result from './results';
import FrontView from './carousel/1.jpeg';
import SideView from './carousel/2.jpeg';
import TopView from './carousel/3.jpeg';
// import Assembly from './carousel/Assembly.jpg';
// import StudentCorner from './carousel/student corner.jpg';
// import PosterWall from './carousel/Poster Wall.jpg';
// import Mess from './carousel/hostel mess.jpg';
// import Library from './carousel/library.jpg';
import { Container, Row, Col,Carousel } from 'react-bootstrap';
const Home = () => {
    return (
        <Container fluid>
            <Row className="d-flex justify-content-md-center">
                <Col className="col-md-10 col-xs-6 mt-2">
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block h-50 w-100"
                                src={FrontView}
                                alt="FrontView"
                            />
                            <Carousel.Caption className=".d-sm-none .d-md-block">
                                {/* <h3>Government Polytechnic Awasari (Khurd)</h3>
                                <p>Government Polytechnic, Awasari (Khurd) was established in the rural area in Pune District and is making rapid progress in enhancing its potential and changing its outlook towards providing better environment required to impart the best all round quality technical education laced with morality aimed at fulfilling industry and social needs.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={SideView}
                                alt="SideView"
                            />

                            <Carousel.Caption>
                                {/* <h3>Government Polytechnic Awasari (Khurd)</h3>
                                <p>Our goal is to support the students for their overall development. We take efforts to make our students able to face challenges and stand confidently in the increasingly complex world.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={TopView}
                                alt="TopView"
                            />

                            <Carousel.Caption>
                                {/* <h3>Government Polytechnic Awasari (Khurd)</h3>
                                <p>The incredible faculty and staff at Government Polytechnic Awasari (Khurd) continue to encourage all students to set high goals for themselves and to reach their dreams. To achieve our mission and vision we will continue to develop and grow leaders in our institute</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={Assembly}
                                alt="Assembly"
                            />

                            <Carousel.Caption>
                                <h3>Open Assembly Hall.</h3>
                                <p>A Assembly Hall with green lawn for Academic events,Gatherings.positioned at the center of the College campus.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={Mess}
                                alt="Mess"
                            />

                            <Carousel.Caption>
                                <h3>Hostel Mess.</h3>
                                <p>Hostel Facility with capacity of 288 students and college mess facility.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={StudentCorner}
                                alt="StudentCorner"
                            />

                            <Carousel.Caption>
                                <h3>Student Corner.</h3>
                                <p>A seperate wall for students to post their drawings,thoughts,poems.this wall is in Automobile dept. with V.V.Patil sir's initiative.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={PosterWall}
                                alt="PosterWall"
                            />

                            <Carousel.Caption>
                                <h3>Poster Wall.</h3>
                                <p>A seperate wall for students to Hang their Posters.This wall is at back couridor of college campus.this initiative enhances the productive thinking of students.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={Library}
                                alt="Library"
                            />

                            <Carousel.Caption>
                                <h3>College Library.</h3>
                                <p>A College library for students with technical,academic books.Daily news papers are also available for students in both English and marathi langugage.</p>
                            </Carousel.Caption>
                        </Carousel.Item> */}
                    </Carousel>
                </Col>
            </Row>
            <Row className="d-flex mt-5">
                    <Col className="col-md-6">
                        <Attendence />
                    </Col>
                    <Col className="col-md-6">
                        <Result />
                    </Col>
                </Row>
        </Container>
        
    )
}

export default Home;


