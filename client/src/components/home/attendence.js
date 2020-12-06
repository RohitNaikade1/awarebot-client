import React,{useEffect} from "react";
import { Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {attendenceFetch} from '../Redux/actions/chartActions';
import { FadeTransform } from 'react-animation-components';

const Population = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
            dispatch((attendenceFetch()));  
    },[])
    const Record=useSelector((state)=>state.chartsData);
    console.log(Record)
    // const data = {
    //     labels: Record.popYears,
    //     datasets: [
    //         {
    //             label: "Men",
    //             data: Record.popMenCount,
    //             backgroundColor: "#a6dcef"
    //         },
    //         {
    //             label: "Women",
    //             data: Record.popWomenCount,
    //             backgroundColor: "#fe7171"
    //         },
    //         {
    //             label: "Children",
    //             data: Record.popChildrenCount,
    //             backgroundColor: "#d2e603"
    //         }
    //     ]
    // }
    return (
        // <FadeTransform
        //     in
        //     transformProps={{
        //         exitTransform: 'scale(0.5) translateY(-50%)'
        //     }}>
        // <Card className="col-md-11">
        //     <Card.Title className="text-center mt-3"><h2>Population from last 5 Surveys.</h2></Card.Title>
        //     <Card.Body className="mt-2">
        //         <Bar
        //             data={data}
        //             options={
        //                 {
        //                     tooltips: { mode: "index" },
        //                 }
        //             } />
        //     </Card.Body>
        // </Card>
        // </FadeTransform>
        <div></div>
    );
}

export default Population;