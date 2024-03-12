import axios from 'axios';
let baseUrl = 'http://parents.cooledsys.com:';
//let baseUrl = 'http://localhost:5000/api/v1';
/**
 * global api service
 *
 *
 */
const getUrl = endpoint => `${baseUrl}${endpoint}`;
const getConfigs = (config, additionalHeaders = {}, isMultipart = true) => ({
  headers: {
    'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
    ...additionalHeaders,
  },
});
const request = async (
  method,
  endpoint,
  params = {},
  payload = {},
  additionalHeaders = {},
) => {
  let request;
  if (method === 'post' || method === 'put') {
    request = axios[method](
      getUrl(endpoint),
      payload,
      getConfigs({params}, additionalHeaders),
    );
  } else {
    request = axios.get(
      getUrl(endpoint),
      getConfigs({params}, additionalHeaders),
    );
  }
  const {data, headers} = await request;
  return {data, headers};
};
axios.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
});
export const get = (endpoint, params = {crossDomain: true}, headers = {}) =>
  request('get', endpoint, params, {}, headers);
export const post = (endpoint, data = {}, params = {}, headers = {}) =>
  request('post', endpoint, params, data, headers);
export const put = (endpoint, data = {}, params = {}, headers = {}) =>
  request('put', endpoint, params, data, headers);
