import { LOADING } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case LOADING:
            return Object.assign({}, state, {
                loading: [action.payload]
            });
        default:
            return Object.assign({}, state, {
                loading: false
            });
    }
}