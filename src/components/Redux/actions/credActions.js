import {constants } from '../actions/constants';
import axiosInstance from '../../helpers/axios';

export const credsFetch=()=>{
    return async (dispatch)=>{
        const credData=await axiosInstance.get('batch/fetch');
        if(credData.status===200){
            const data=credData.data;
            // console.log(data)
            dispatch({
                type:constants.CRED_FETCH,
                payload:data
            })
        }
    }
}
