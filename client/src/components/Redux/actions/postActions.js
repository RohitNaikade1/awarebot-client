import {constants } from '../actions/constants';
import axiosInstance from '../../helpers/axios';

export const postFetch=()=>{
    return async (dispatch)=>{
        const postData=await axiosInstance.get('/post/readPost');
        const posts=postData.data;
        if(postData.status===200){
            dispatch({
                type:constants.POST_FETCH,
                payload:posts
            })
        }
    }
}

export const tableFetch=()=>{
    return async (dispatch)=>{
        const tableData=await axiosInstance.get('/post/fetchToday');
        const updates=tableData.data;
        if(tableData.status===200){
            dispatch({
                type:constants.UPDATES_FETCH,
                payload:updates
            })
        }
    }
}