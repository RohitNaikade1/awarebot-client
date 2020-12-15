import React from 'react';
import "./home.css"
import Attendence from './attendence';
import Result from './results';
import FrontView from './carousel/1.jpeg';
import SideView from './carousel/2.jpeg';
import TopView from './carousel/3.jpeg';
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
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={SideView}
                                alt="SideView"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={TopView}
                                alt="TopView"
                            />
                        </Carousel.Item>
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


