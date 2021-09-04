import { LOGGIN_SUCCESS, LOGOUT_USER } from '../../constants';

const initialState = {
  authDetails: null,
}

export default function logginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGIN_SUCCESS: {
      return {
        ...state,
        authDetails: action.payload || null,
      }
    }
    case LOGOUT_USER: {
      return {
        ...state,
        authDetails: null,
      }
    }
    default: {
      return state
    }
  }
}
