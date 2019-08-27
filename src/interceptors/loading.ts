import axios from 'axios';
import store from '../store';
import {DECREMENT_LOADING_STATE, INCREMENT_LOADING_STATE} from '../store/loading/mutation-types';

// Add a request interceptor
axios.interceptors.request.use((config) => {
    store.commit(INCREMENT_LOADING_STATE, Date.now());
    // action before request is sent
    return config;
}, (error) => Promise.reject(error));


// Add a response interceptor
axios.interceptors.response.use((response) => {
    store.commit(DECREMENT_LOADING_STATE);
    // action with response data
    return response;
}, (error) => {
    store.commit(DECREMENT_LOADING_STATE);
    // action with request error
    return Promise.reject(error);
});
