import { constants } from "../actions/constants";

const initState={
    instructors:[]
}

export const instructorReducer=(state=initState,action)=>{
    switch(action.type){
        
        case constants.INSTRUCTOR_FETCH:
            // console.log(action.payload.data)
            return state={
                ...state,
                instructors:action.payload.data
            }
        default:
            return state
    }
}