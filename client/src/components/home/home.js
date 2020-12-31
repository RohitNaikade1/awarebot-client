import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./home.css"
import Attendence from './attendence';
import { FadeTransform } from 'react-animation-components';
import { posterFetch } from '../Redux/actions/posterActions';
import Result from './results';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
export default function Home () {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(posterFetch())
    })
    const posters = useSelector(state => state.posters);
    let items = "";
    if (posters?.posters?.data) {
        items = posters?.posters?.data.map((data, key) => {
            return (
                <Carousel.Item interval={1000} key={key} className="carousel-item">
                    <img
                        className="d-block w-100 image"
                        src={data.picture}
                        alt="TopView"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h2 className="text-white">{data.title}</h2>
                        <p className="text-white">{data.caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
    }

    return (
        <Container fluid>
            <Row className="d-flex justify-content-md-center">
                <Col className="col-md-10 col-xs-6 mt-2">
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-20%)'
                        }}>
                        <Carousel>
                            {items}
                        </Carousel>
                        
                    </FadeTransform>
                </Col>
            </Row>
            <Row className="d-flex mt-5 fadeIn">
                <Col className="col-md-6">
                <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                    <Attendence />
                    </FadeTransform>
                </Col>
                <Col className="col-md-6">
                <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                    <Result />
                    </FadeTransform>
                </Col>
            </Row>
        </Container>

    )
}

// export default Home;


