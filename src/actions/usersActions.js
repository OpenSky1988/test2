import { USERS_REQUESTED, USERS_RECEIVED, USERS_FAILED } from './actionTypes';

const getUsers = () => (dispatch) => {
    dispatch({
      type: USERS_REQUESTED,
    });
    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({
            type: USERS_RECEIVED,
            payload: data
        }))
        .catch(error => dispatch({
            type: USERS_FAILED,
            payload: error
        })
        );
};

export default getUsers;