// import {oAuthReducer} from './oAuthReducer';
// import {authReducer} from './authReducer';
import {postReducer} from './postReducer';
import {chartsReducer} from './chartsReducer';

import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    // oAuthReducer,
    // chartsData:chartsReducer,
    posts:postReducer,
    charts:chartsReducer
});
export default rootReducer;