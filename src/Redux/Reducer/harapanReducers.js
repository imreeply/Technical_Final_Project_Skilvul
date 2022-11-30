import { FETCH_START, GET_HARAPAN_SUCCESS } from "../Actions/harapanAction";

const initialState = {
  harapan: [],
  isLoading: false,
};

const modulReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_HARAPAN_SUCCESS:
      return {
        ...state,
        harapan: action.harapan,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default modulReducer;
