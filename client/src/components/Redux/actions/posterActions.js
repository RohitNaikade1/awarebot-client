import {constants } from '../actions/constants';
import axiosInstance from '../../helpers/axios';

export const posterFetch=()=>{
    return async (dispatch)=>{
        const posterData=await axiosInstance.get('/poster/fetch');
        if(posterData.status===200){
            const posters=posterData;
            // console.log(posters)
            dispatch({
                type:constants.POSTER_FETCH,
                payload:posters
            })
        }
    }
}