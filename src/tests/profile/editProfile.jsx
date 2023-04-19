import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function editProfile() {
    return await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/useraccount/UpdateAccount').then((response) => response.json());

}

export { editProfile };
