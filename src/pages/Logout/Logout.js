import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { StoreContext } from '../../store';

export const Logout = () => {
  const history = useHistory();
  const [, dispatch] = useContext(StoreContext);

  useEffect(() => {
    localStorage.clear();
    dispatch({ type: 'CLEAR_STORE' });
    history.push('/');
  }, [dispatch, history]);

  return null;
};
