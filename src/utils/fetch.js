function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

function parseJSON(response) {
  return response.status === 204 ? '' : response.json();
};

export function fetchJson(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}


export function timedFetchJson(url, options) {
  const controller = new AbortController();
  const signal = controller.signal;
  setTimeout(() => controller.abort(), 5000);
  return fetch(url, { signal, ...options })
  .then(checkStatus)
  .then(parseJSON);
}