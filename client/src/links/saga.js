import { put, call, takeLatest } from 'redux-saga/effects';
import UrlShortenerService from '../services/urlShortenerService';
import {
  fetchLinks,
  createLink,
  readLink,
  updateLink,
  deleteLink,
} from './reducer';

function* fetchUrlListSaga() {
  try {
    const linksArray = yield call(UrlShortenerService.fetchLinksList);

    yield put(fetchLinks.success(linksArray));
  } catch (error) {
    yield put(fetchLinks.error());
  }
}

function* createUrlSaga(action) {
  try {
    const {
      payload: { url },
    } = action;

    const hash = yield call(UrlShortenerService.generateHash, url);

    yield put(createLink.success({ hash }));
  } catch (error) {
    yield put(createLink.error());
  }
}
function* readUrlSaga(action) {
  try {
    const {
      payload: { hash },
    } = action;

    const url = yield call(UrlShortenerService.getUrlFromHash, hash);

    yield put(readLink.success({ url }));
  } catch (error) {
    yield put(createLink.error());
  }
}

function* updateUrlSaga(action) {
  try {
    const {
      payload: { url, hash },
    } = action;

    yield call(UrlShortenerService.updateUrlOfHash, hash, url);

    yield put(updateLink.success({ url }));
  } catch (error) {
    yield put(updateLink.error());
  }
}

function* deleteUrlSaga(action) {
  try {
    const {
      payload: { hash },
    } = action;

    yield call(UrlShortenerService.deleteHashUrl, hash);

    yield put(deleteLink.success());
  } catch (error) {
    yield put(deleteLink.error());
  }
}

export default function* LinksSaga() {
  yield takeLatest(fetchLinks.request.actionType, fetchUrlListSaga);
  yield takeLatest(createLink.request.actionType, createUrlSaga);
  yield takeLatest(readLink.request.actionType, readUrlSaga);
  yield takeLatest(updateLink.request.actionType, updateUrlSaga);
  yield takeLatest(deleteLink.request.actionType, deleteUrlSaga);
}
