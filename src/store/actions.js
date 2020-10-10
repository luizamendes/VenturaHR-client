const doSaveUser = user => ({
  type: 'SET_USER',
  payload: user,
});

const doSaveToken = token => ({
  type: 'SET_TOKEN',
  payload: token,
});

export { doSaveUser, doSaveToken };
