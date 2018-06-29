import produce from 'immer';

import { makeRequestActionCreators } from '../helpers/actions';

// Action creators

export const fetchLinks = makeRequestActionCreators('FETCH_LINKS');

export const createLink = makeRequestActionCreators('CREATE_LINK');
export const readLink = makeRequestActionCreators('READ_LINK');
export const updateLink = makeRequestActionCreators('UPDATE_LINK');
export const deleteLink = makeRequestActionCreators('DELETE_LINK');

// Reducer

const defaultState = {
  isLoading: false,
  requestFailed: false,
  providedUrl: '',
  providedHash: '',
  urls: [],
};

export const linksReducer = (initialState = defaultState, action) =>
  produce(initialState, draftState => {
    // eslint-disable-next-line
    switch (action.type) {
      case fetchLinks.request.actionType:
        draftState.isLoading = true;
        break;
      case fetchLinks.error.actionType:
        draftState.isLoading = false;
        draftState.requestFailed = true;
        break;
      case fetchLinks.success.actionType:
        draftState.isLoading = false;
        draftState.urls = action.payload;
        break;
    }
  });
