import _fetch from 'isomorphic-fetch';

export default async function getPosts() {
    return _fetch(process.env.REACT_APP_API_ENDPOINT + '/post/index').then((response) => response.json());
}
