
// import {authReducer} from './authReducer';
import {postReducer} from './postReducer';
import {chartsReducer} from './chartsReducer';

import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    posts:postReducer,
    charts:chartsReducer
});
export default rootReducer;