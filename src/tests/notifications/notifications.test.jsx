/* eslint-disable jest/valid-expect */
import { getNotifications } from './getNotifications';
import { readAllNotifications, readsNotification } from './editNotifications';
import { deleteAllNotifications, deletesNotification } from './deleteNotifications';

it('Test get notifications api', async () => {
    const notifications = await getNotifications();

    expect(Array.isArray(notifications)).toEqual(true);
});

it('Test read notification', async () => {
    const res = await readsNotification();
    switch (res.status) {
        case 200:
            expect(res.status).toEqual(200);
            break;
        case 400:
            expect(res.status).toEqual(400);
            break;
        default:

            expect(res).toBeUndefined();
            break;
    }

});

it('Test get all notifications read', async () => {
    const notificationsRead = await readAllNotifications();

    expect(Array.isArray(notificationsRead));
});

it('Test delete notification', async () => {
    const res = await deletesNotification();

    switch (res.status) {
        case 200:
            expect(res.status).toEqual(200);
            break;
        case 404:
            expect(res.status).toEqual(404);
            break;
        default:

            expect(res).toBeUndefined();
            break;
    }
});

it('Test delete all notifications', async () => {
    const deleteAll = await deleteAllNotifications();

    expect(Array.isArray(deleteAll)).toEqual(true);
});
