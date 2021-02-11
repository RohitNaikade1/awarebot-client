
import {instructorReducer} from './instructorReducer';
import {postReducer} from './postReducer';
import {chartsReducer} from './chartsReducer';
import {posterReducer} from './posterReducer';
import {credsReducer} from './credsReducer';

import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    posts:postReducer,
    charts:chartsReducer,
    instructors:instructorReducer,
    posters:posterReducer,
    creds:credsReducer
});
export default rootReducer;