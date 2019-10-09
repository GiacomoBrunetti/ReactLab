import config from '../bin/config';
import { fetchJson, timedFetchJson } from '../utils/fetch';

export function apiRequest(path, args, options, query, timed=false) {
  const additional = args ? `/${args}` : '';
  let queryParameters = '';
  if (query) {
    queryParameters = '?';
    Object.keys(query).forEach(key => {
      queryParameters = `${queryParameters}${key}=${query[key]}&`;
    });
  }

  if(timed){
    return timedFetchJson(`${config.apiUrl}/api/${path}${additional}${queryParameters}`, options);
  }
  return fetchJson(`${config.apiUrl}/api/${path}${additional}${queryParameters}`, options);
}
