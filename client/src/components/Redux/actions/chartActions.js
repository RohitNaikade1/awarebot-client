import {constants } from '../actions/constants';
import axiosInstance from '../../helpers/axios';

export const attendenceFetch=()=>{
    return async (dispatch)=>{
        const attData=await axiosInstance.get('/attendence/readRecord');
        if(attData.status===200){
            const {month,JavaCount,CPPCount,DSCount}=attData.data.data[0];
            dispatch({
                type:constants.ATTENDENCE_FETCH,
                payload:{month,JavaCount,CPPCount,DSCount}
            })
        }
    }
}
export const resultFetch=()=>{
    return async (dispatch)=>{
        const resData=await axiosInstance.get('/result/readRecord');
        if(resData.status===200){
            const {month,JavaCount,CPPCount,DSCount}=resData.data.data[0];
            dispatch({
                type:constants.RESULT_FETCH,
                payload:{month,JavaCount,CPPCount,DSCount}
            })
        }
    }
}