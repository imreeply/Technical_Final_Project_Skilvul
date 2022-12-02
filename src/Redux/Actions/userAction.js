import axios from "axios";
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const ACTIVITY = "ACTIVITY";

// export function fetchStart() {
//     return {
//        type: FETCH_START,
//     };
//  }
//  export function fetchDone(users, event, artikel) {
//     return {
//        type: FETCH_DONE,
//        payload: {
//           users,
//           event,
//           artikel,
//        },
//     };
//  }

export const postSignUpSuccess = (user) => {
  return {
    type: SIGN_UP,
    user,
  };
};

export const postSignInSuccess = (user) => {
  return {
    type: SIGN_IN,
    user,
  };
};

export const postActivity = (admin) => {
  return {
    type: ACTIVITY,
    admin,
  };
};

export const signUp = (user) => {
  return async (dispatch) => {
    const response = await axios.post("https://febe12be-production.up.railway.app/signup", user);
    dispatch(postSignUpSuccess(response.data));
  };
};

export const signIn = (user) => {
  return async (dispatch) => {
    const response = await axios.post("https://febe12be-production.up.railway.app/signin", user);
    dispatch(postSignInSuccess(response.data));
  };
};

export const Activity = (admin) => {
  return async (dispatch) => {
    const response = await axios.post("https://febe12be-production.up.railway.app/Kegiatan/create", admin);
    dispatch(postAcivitySuccess(response.data));
  };
};
