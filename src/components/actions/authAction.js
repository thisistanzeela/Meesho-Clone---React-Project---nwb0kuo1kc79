export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (userName) => ({
  type: LOGIN_USER,
  payload: userName,
});

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};