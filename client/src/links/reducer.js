import produce from 'immer';

import { makeRequestActionCreators } from '../helpers/actions';

// Action creators

export const fetchLinks = makeRequestActionCreators('FETCH_LINKS');

// Reducer

const defaultState = {
  isLoading: false,
  requestFailed: false,
  links: [],
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
        draftState.links = action.payload;
        break;
    }
  });
