import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function changePassword() {
    return await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/Account/ChangePassword').then((response) => response.json());
}

export { changePassword };
