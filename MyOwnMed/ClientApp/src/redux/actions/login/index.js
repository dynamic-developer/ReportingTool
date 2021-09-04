import { LOGGIN_SUCCESS, LOGOUT_USER} from '../../constants';

export const loginUser = (authDetails) => ({
  type: LOGGIN_SUCCESS,
  payload: authDetails
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: null
});
