const isLoggedIn = ({ venturaReducer }) => true;

const getUser = ({ venturaState }) => venturaState.user;

export { isLoggedIn, getUser };
