export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: {
      error,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
