import { USERS_REQUESTED, USERS_RECEIVED, USERS_FAILED } from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.users, action) => {
    switch (action.type) {
        case USERS_REQUESTED:
            return {
                ...state,
                status: 'waiting'
            }
        case USERS_RECEIVED:
            return {
                ...state,
                data: [...action.payload],
                status: 'received'
            };
        case USERS_FAILED:
            return {
                ...state,
                status: 'failed',
                error: action.payload
            }
        default:
            return state;
    }
}