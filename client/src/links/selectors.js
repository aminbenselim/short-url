import { createSelector } from 'reselect';

export const isFetching = state => state.links && state.links.isLoading;

export const requestFailed = state => state.links && state.links.requestFailed;

export const getListOfUrls = state => state && state.links && state.links.urls;

export const getUrlByHash = hash =>
  createSelector(getListOfUrls, urlObjects => {
    return urlObjects.filter(obj => obj.hash === hash)[0].url;
  });
