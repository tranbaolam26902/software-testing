import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function deletesNotification() {
    const token = await getToken();
    return await _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/UserNotify/Delete', {
        headers: {
            Authorization: token,
        },
    }).then((respone) => respone.json());
}

async function deleteAllNotifications() {
    const token = await getToken();

    return await _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/UserNotify/DeleteAll ', {
        headers: {
            Authorization: token,
        },
    }).then((respone) => respone.json());
}

export { deletesNotification, deleteAllNotifications };
