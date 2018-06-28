import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { linksReducer } from '../links/reducer';

export default combineReducers({
  router: routerReducer,
  links: linksReducer,
});
