import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function readsNotification() {
    const token = await getToken();

    return await _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/UserNotify/ReadNotify', {
        headers: {
            Authorization: token,
        },
    }).then((respone) => respone.json());
}

async function readAllNotifications() {
    const token = await getToken();

    return await _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/UserNotify/Readall', {
        headers: {
            Authorization: token,
        },
    }).then((respone) => respone.json());
}

export { readsNotification, readAllNotifications };
