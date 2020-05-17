import {createStore} from 'redux';
import {combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {selectPhoto, fetchPhoto, requestPhoto, receivePhoto} from '../actions/photo';
import {selectedPhoto} from './reducers/photo';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
  selectedPhoto,
  fetchPhoto,
  receivePhoto,
  selectPhoto,
  requestPhoto,
});


export default createStore(rootReducer,
			   applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware, // neat middleware that logs actions
    ));

