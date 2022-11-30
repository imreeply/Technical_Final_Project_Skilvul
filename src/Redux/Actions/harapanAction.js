import axios from "axios";
export const GET_HARAPAN = "GET_HARAPAN";
export const FETCH_START = "FETCH_START";
export const GET_HARAPAN_SUCCESS = "GET_HARAPAN_SUCCESS";

const fetchStart = () => {
  return {
    type: FETCH_START,
  };
};

const getHarapanSuccess = (harapan) => {
  return {
    type: GET_HARAPAN_SUCCESS,
    harapan,
  };
};

export const getHarapan = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const harapan = await axios.get("https://634c3a82acb391d34a818933.mockapi.io/harapan");
    dispatch(getHarapanSuccess(harapan.data));
  };
};
