import _fetch from 'isomorphic-fetch';

async function getCategories() {
    return _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/category/index').then((response) => response.json());
}

export { getCategories };
