import { combineReducers } from 'redux';
import appReducer from './appReducer';
import gistsReducer from './gistsReducer';
import forksReducer from './forksReducer';

export default combineReducers({
    app: appReducer,
    gists: gistsReducer,
    forks: forksReducer,
});