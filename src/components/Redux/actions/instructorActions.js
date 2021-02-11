import {constants } from '../actions/constants';
import axiosInstance from '../../helpers/axios';

export const instructorFetch=()=>{
    return async (dispatch)=>{
        const insData=await axiosInstance.get('instructor/read');
        const instructors=insData.data;
        if(insData.status===200){
            dispatch({
                type:constants.INSTRUCTOR_FETCH,
                payload:instructors
            })
        }
    }
}