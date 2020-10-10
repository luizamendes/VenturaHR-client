import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { doClearStore } from '../../store/actions';

export const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();
    dispatch(doClearStore());
    history.push('/');
  }, [dispatch, history]);

  return null;
};
