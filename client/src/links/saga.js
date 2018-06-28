import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { fetchLinks } from './reducer';

export const fetchLinksList = () =>
  axios({
    method: 'GET',
    url: 'http://localhost:8888/v1/links',
  });

export function* fetchData() {
  try {
    const response = yield call(fetchLinksList);

    yield put(fetchLinks.success(response.links));
  } catch (error) {
    yield put(fetchLinks.error());
  }
}

export default function* LinksSaga() {
  yield takeLatest(fetchLinks.request.actionType, fetchData);
}
