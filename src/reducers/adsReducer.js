import { ADD_AD, UPDATE_AD, REMOVE_AD } from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.ads, action) => {
    switch (action.type) {
        case ADD_AD:
        case UPDATE_AD:
        case REMOVE_AD:
            return action.payload;
        default:
            return state;
    }
};
