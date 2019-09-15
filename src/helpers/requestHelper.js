import axios from 'axios';
const CancelToken = axios.CancelToken;
let cancel;

function requestHelper(method, action, data, headers, callback) {
    let baseHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'fr',
        'cache-control': 'no-cache'
    };
    let dataName = method === 'get' ? 'params' : 'data';

    cancel && cancel();

    return axios({
        method: method,
        url: process.env.REACT_APP_API_URL + action,
        [dataName]: data,
        headers: {...baseHeaders, ...headers},
        //Implement request cancellation https://github.com/axios/axios#cancellation
        cancelToken: new CancelToken(function executor(c) {
            cancel = c;
        })
    })
    .then(function (response) {
        callback && callback(response.data);

        return response.data;
    })
    .catch(function (error) {
        if (axios.isCancel(error))
            return;

        return error;
    });
}

export default requestHelper;
