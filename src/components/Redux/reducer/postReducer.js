import { constants } from "../actions/constants";

const initState={
    posts:{},
    updates:{}
}

export const postReducer=(state=initState,action)=>{
    switch(action.type){
        
        case constants.POST_FETCH:
            // console.log(action.payload.data)
            return state={
                ...state,
                posts:action.payload.data
            }
        case constants.UPDATES_FETCH:
            // console.log(action.payload.data)
            return state={
                ...state,
                updates:action.payload.data
            }
        default:
            return state
    }
}