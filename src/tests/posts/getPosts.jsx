import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function getPosts() {
    return await _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/post/index').then((response) => response.json());
}

async function getPopularPosts() {
    return await _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/post/HotPost').then((response) => response.json());
}

async function getPostsByCategory() {
    const formData = new FormData();
    formData.append('id', 'f3b1f97e-5301-49f3-a292-19a8b3e63108');
    return await _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/post/FindPostCategory', {
        method: 'POST',
        body: formData,
    }).then((response) => response.json());
}

export { getPosts, getPopularPosts, getPostsByCategory };
