import { GET_GISTS } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case GET_GISTS:
            return action.payload || false;
        default:
            return state;
    }
}