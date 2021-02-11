import React,{useEffect} from "react";
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {resultFetch} from '../Redux/actions/chartActions';
import { FadeTransform } from 'react-animation-components';
import "./home.css"
const Population = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
            dispatch((resultFetch()));  
    })
    const Record=useSelector((state)=>state.charts);
    // console.log(Record)
    const data = {
        labels: Record.resMonth,
        datasets: [
            {
                label: "Java Programming",
                data: Record.resJavaCount,
                backgroundColor: "#944e6c"
            },
            {
                label: "C++ Programming",
                data: Record.resCPPCount,
                backgroundColor: "#111d5e"
            },
            {
                label: "Data Structures",
                data: Record.resDSACount,
                backgroundColor: "#c70039"
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
            <Card.Title className="text-center mt-4"><h2 className="heads">Batch wise Results in last 5 months.</h2></Card.Title>
            <Card.Body className="mt-1">
                <Bar
                    data={data}
                    options={
                        {
                            tooltips: { mode: "index" },
                        }
                    } />
            </Card.Body>
        </Card>
        </FadeTransform>
    );
}

export default Population;