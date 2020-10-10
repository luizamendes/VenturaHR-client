const doSaveUser = user => ({
  type: 'SET_USER',
  payload: user,
});

const doSaveToken = token => ({
  type: 'SET_TOKEN',
  payload: token,
});

const doClearStore = token => ({
  type: 'CLEAR_STORE',
  payload: token,
});

export { doSaveUser, doSaveToken, doClearStore };
