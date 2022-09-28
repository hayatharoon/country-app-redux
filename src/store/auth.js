// * InitialState...
const initialState = {
  currentUser: null,
  loggedIn: false,
  allUsers: [
    {
      username: 'admin',
      email: 'admin@gmail.com',
      password: '12345',
    },
  ],
};

//* ---Action Types---:
const LOGIN = 'login';
const LOGOUT = 'logout';
const SIGNIN = 'signin';

//* ---Action Creators---:
export const login = (user) => {
  return {
    type: LOGIN,
    payload: user,
  };
};
export const logout = (loggedIn) => {
  return {
    type: LOGOUT,
    payload: loggedIn,
  };
};
export const signin = (newUser) => {
  return {
    type: SIGNIN,
    payload: newUser,
  };
};

//* ----Reducer---:
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        currentUser: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        currentUser: null,
      };

    case SIGNIN:
      return {
        ...state,
        loggedIn: true,
        currentUser: action.payload,
        [state.allUsers]: state.allUsers.push(action.payload),
      };

    default:
      return state;
  }
}
