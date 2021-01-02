import { constants } from "../actions/constants"

const initState={
    creds:{}
}

export const credsReducer=(state=initState,action)=>{
    switch(action.type){
        case constants.CRED_FETCH:
            // console.log(action.payload.data)
            return state={
                ...state,
                creds:action.payload.data
            }
        default:
            return state
    }
}