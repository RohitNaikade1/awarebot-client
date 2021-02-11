import { constants } from "../actions/constants";

const initState={
    posters:{}
}

export const posterReducer=(state=initState,action)=>{
    switch(action.type){
        
        case constants.POSTER_FETCH:
            // console.log(action.payload)
            return state={
                ...state,
                posters:action.payload.data
            }
        default:
            return state
    }
}