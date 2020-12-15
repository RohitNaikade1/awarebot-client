import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import axiosInstance from '../helpers/axios';
import { useDispatch, useSelector } from 'react-redux';
import { tableFetch } from '../Redux/actions/postActions';
const About = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(tableFetch())
    }, [])
    const posts = useSelector(state => state.posts);
    let rows = "";
    if (posts?.updates) {
        console.log(posts.updates)
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

    } else {

    }
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
            </Row> : <h1>No schedule today</h1>}
        </Container>

    )
}
export default About;


