import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function searchPosts() {
    return await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/post/FindPost', {
    })
        .then((response) => response.json())

}

export { searchPosts };
