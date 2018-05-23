import 'whatwg-fetch';

const fetchApi = self.fetch.bind(self);

const host = 'http://api.houym.com';

export default function (url, options) {
  const finalOptions = Object.assign({credentials: 'include'}, options);
  return fetchApi(host + url, finalOptions)
  .then(res => res.json())
  .then(json => json)
  .catch(err => {
    throw err;
  });
}