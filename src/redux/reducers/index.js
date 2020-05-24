import {combineReducers} from 'redux';
import visibilityFilter from './visibilityFilter';
import todos from './todos';
import photos from './photos';

export default combineReducers({photos, todos, visibilityFilter});
