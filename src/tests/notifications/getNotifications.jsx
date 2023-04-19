import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function getNotifications() {
    const token = await getToken();
    return await _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/UserNotify/index', {
        headers: {
            Authorization: token,
        },
    }).then((response) => response.json());
}

export { getNotifications };
