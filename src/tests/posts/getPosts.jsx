import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function getPosts() {
    return await _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/post/index').then((response) => response.json());
}

export { getPosts };
