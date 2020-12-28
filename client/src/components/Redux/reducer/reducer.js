
import {instructorReducer} from './instructorReducer';
import {postReducer} from './postReducer';
import {chartsReducer} from './chartsReducer';
import {posterReducer} from './posterReducer';

import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    posts:postReducer,
    charts:chartsReducer,
    instructors:instructorReducer,
    posters:posterReducer
});
export default rootReducer;