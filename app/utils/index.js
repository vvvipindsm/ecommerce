import axios from 'axios';
import get from 'lodash.get';


export const apiRequest = () =>  (
  url,
  payload,
  method = 'GET',
  debug = false,
) => {
  let debugMod = false;
  if (process.env.NODE_ENV === 'development' && debug) {
    debugMod = true;
  }
  const typeOfMethod = method === 'FILE_UPLOAD' ? 'POST' : method;

  return new Promise((resolve, reject) => {
    // let progress = 0;
    axios({
      method: typeOfMethod,
      url,
      data: method === 'FILE_UPLOAD' ? payload : JSON.stringify(payload),
      headers: {
        Accept: '"application/json, text/plain, */*"',
        'Content-Type':
          method === 'FILE_UPLOAD' ? 'multipart/form-data' : 'application/json',
      },
    })
      .then(res => {
        if (debugMod) {
          console.group(
            `Network request ${url} request status code ${res.status}`,
          );
          console.log(res);
          console.groupEnd();
        }
        if (res.status !== 200) {
          reject(get(res, 'response.data.message', 'Something went wrong'));
        }
        resolve(res.data);
      })
      .catch(err => {
        if (debugMod) {
          console.group(`Error ${url}`);
          console.log(err);
          console.groupEnd();
        }
        reject(get(err, 'response.data.message', 'Something went wrong'));
      });
  });
};
