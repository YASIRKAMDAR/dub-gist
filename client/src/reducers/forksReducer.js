import { GET_FORKS, GET_GISTS } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_FORKS:
            // Appends forks
            state[action.payload.id] = action.payload.resp || [];
            return  state;
        case GET_GISTS:
            // Reset forks state
            state = {};
            return  state;
        default:
            return state;
    }
}