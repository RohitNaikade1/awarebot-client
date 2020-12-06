import {constants } from '../actions/constants';
import axiosInstance from '../../helpers/axios';

export const postFetch=()=>{
    return async (dispatch)=>{
        const postData=await axiosInstance.get('/post/readPost');
        const posts=postData.data;
        console.log(posts)
        if(postData.status===200){
            dispatch({
                type:constants.POST_FETCH,
                payload:posts
            })
        }
    }
}