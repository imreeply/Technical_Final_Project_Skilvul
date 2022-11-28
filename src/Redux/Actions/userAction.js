import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';

export const postSignUpSuccess = (user) => {
    return {
        type: SIGN_UP,
        user,
    };
}

export const postSignInSuccess = (user) => {
    return {
        type: SIGN_IN,
        user,
    };
}

export const signUp = (user) => {
    return async (dispatch) => {
        const response = await axios.post('https://coba2-production.up.railway.app/signup', user);
        dispatch(postSignUpSuccess(response.data));
    }
}

export const signIn = (user) => {
    return async (dispatch) => {
        const response = await axios.post('https://coba2-production.up.railway.app/signin', user);
        dispatch(postSignInSuccess(response.data));
    }
}

