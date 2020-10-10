import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || {},
  authToken: localStorage.getItem('tkn') || '',
};

const venturaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: { ...action.payload } };
    case 'SET_TOKEN':
      return { ...state, authToken: action.payload };
    case 'CLEAR_STORE':
      return { ...initialState };
    default:
      return state;
  }
};

const store = createStore(venturaReducer, composeWithDevTools());

export default store;
