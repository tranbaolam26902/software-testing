import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function getUser() {
    const token = await getToken();

    return _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/useraccount/getinfo', 
    {
        method: 'GET',
        headers: {
            'Authorization': token.replace(/['"]+/g, '')
        }
    }).then((response) => response.json());
}

export { getUser };
