import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function readsNotification() {
    const token = await getToken();
    const formData = new FormData();
    formData.append('id', '2574ca28-e261-4576-bab6-e8b01116a9da');

    return await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/UserNotify/ReadNotify', {
        method: 'POST',
        headers: {
            Authorization: token,
        },
        body: formData,
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
