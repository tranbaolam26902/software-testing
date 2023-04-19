import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function createCategory() {
    return await _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/AdmCategory/index').then((response) => response.json());
}

export { createCategory };

