import { LOGIN_SUCCESS, LOGOUT, LOGIN_FAILED } from "../actions/action.user";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  error: null,
};

function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default user;
