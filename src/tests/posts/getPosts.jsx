import _fetch from 'isomorphic-fetch';
import getToken from '../login/getToken';

async function getPosts() {
    return _fetch(process.env.REACT_APP_API_ENDPOINT + '/post/index').then((response) => response.json());
}

async function test() {
    const token = await getToken();
    return _fetch(process.env.REACT_APP_API_ENDPOINT + '/useraccount/getinfo', {
        headers: {
            Authorization: token,
        },
    }).then((response) => response.json());
}

export { getPosts, test };
