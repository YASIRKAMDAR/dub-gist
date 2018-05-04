import axios from 'axios';

import { GET_GISTS } from './types'
import { GET_FORKS } from './types'
import { LOADING } from './types'

/**
 * Get the list if Gists for a user
 * @param {username: git usernamre for whom to retrive the list of gists} data 
 */
export const getGists = (username) => {
    return function(dispatch) {
        axios
            .get('/gist/search/'+ username)
            .then(res => dispatch({ type: GET_GISTS, payload: res.data}))
            .catch(error => dispatch({ type: GET_GISTS, payload: {status:"error", resp: error.message}}));
    }
};

/**
 * last 3 forks for a gist 
 * @param {id: gist-forks ID to get the list of forks for the following gist  } 
 */
export const getForks = (id) => {
    return function(dispatch) {
        axios
            .get('/gist/forks/' + id)
            .then(res => dispatch({ type: GET_FORKS, payload: res.data}))
            .catch(error => dispatch({ type: GET_GISTS, payload: {status:"error", resp: error.message}}));
    }
};

/**
 * Loading screen display throughout the app
 * @param {*} item 
 */
export const loading = (item) => {
    return function(dispatch) {
       dispatch({ type: LOADING, payload: item});
    }
};