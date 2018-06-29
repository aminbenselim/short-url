import axios from 'axios';

class UrlShortenerService {
  fetchLinksList = () => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: 'http://localhost:8888/v1/links',
      }).then(result => {
        if (result.statusText !== 'OK') reject('problem with the backend');
        resolve(result.data);
      });
    });
  };

  generateHash = url => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: 'http://localhost:8888/v1/links',
        data: {
          url,
        },
      }).then(result => {
        if (result.statusText !== 'OK') reject('problem with the backend');
        resolve(result.data);
      });
    });
  };

  getUrlFromHash = hash => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: `http://localhost:8888/v1/${hash}`,
      }).then(result => {
        if (result.statusText !== 'OK') reject('problem with the backend');
        resolve(result.data);
      });
    });
  };

  updateUrlOfHash = (hash, url) => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'PUT',
        url: `http://localhost:8888/v1/${hash}/update`,
        data: {
          url,
        },
      }).then(result => {
        if (result.statusText !== 'OK') reject('problem with the backend');
        resolve(result.data);
      });
    });
  };

  deleteHashUrl = hash => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'DELETE',
        url: `http://localhost:8888/v1/${hash}/delete`,
      }).then(result => {
        if (result.statusText !== 'OK') reject('problem with the backend');
        resolve(result.data);
      });
    });
  };
}

export default new UrlShortenerService();
