import { constants } from "../actions/constants"

const initState={
    attMonth:[],
    attJavaCount:[],
    attCPPCount:[],
    attDSACount:[],
    resMonth:[],
    resJavaCount:[],
    resCPPCount:[],
    resDSACount:[]
}

export const chartsReducer=(state=initState,action)=>{
    switch(action.type){
        
        case constants.ATTENDENCE_FETCH:
            return state={
                ...state,
                attMonth:action.payload.month,
                attJavaCount:action.payload.JavaCount,
                attCPPCount:action.payload.CPPCount,
                attDSACount:action.payload.DSCount

            }
        case constants.RESULT_FETCH:
            return state={
                ...state,
                resMonth:action.payload.month,
                resJavaCount:action.payload.JavaCount,
                resCPPCount:action.payload.CPPCount,
                resDSACount:action.payload.DSCount

            }
        default:
            return state
    }
}