import React,{useEffect} from "react";
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {attendenceFetch} from '../Redux/actions/chartActions';
import { FadeTransform } from 'react-animation-components';
import "./home.css"
const Population = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
            dispatch((attendenceFetch()));  
    })
    const Record=useSelector((state)=>state.charts);
    const data = {
        labels: Record.attMonth,
        datasets: [
            {
                label: "Java Programming",
                data: Record.attJavaCount,
                backgroundColor: "#70af85"
            },
            {
                label: "C++ programming",
                data: Record.attCPPCount,
                backgroundColor: "#6155a6"
            },
            {
                label: "Data Structures",
                data: Record.attDSACount,
                backgroundColor: "#583d72"
            }
        ]
    }
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
        <Card className="col-md-11">
            <Card.Title className="text-center mt-4"><h2 className="heads">Batch wise attendence in last 5 months.</h2></Card.Title>
            <Card.Body className="mt-1">
                <Bar
                    data={data}
                    options={
                        {
                            tooltips: { mode: "index" }
                        }
                    } />
            </Card.Body>
        </Card>
        </FadeTransform>
    );
}

export default Population;