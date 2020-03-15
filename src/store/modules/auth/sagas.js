import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', { email, password });

    const { user, token } = response.data;

    yield put(signInSuccess(user, token));

    history.push('/dashboard');
  } catch (error) {
    yield put(signInFailure());

    toast.error('Falha na autenticação, verifique seus dados.');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
