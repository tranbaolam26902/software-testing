/* eslint-disable jest/valid-expect */
import { getNotifications } from './getNotifications';
import { readAllNotifications, readsNotification } from './editNotifications';
import { deleteAllNotifications, deletesNotification } from './deleteNotifications';

it('Test get notifications api', async () => {
    const notifications = await getNotifications();

    expect(Array.isArray(notifications)).toEqual(true);
});

it('Test read notification', async () => {
    const readNotification = await readsNotification();

    expect(readNotification.Id).toBeDefined();
});

it('Test get all notifications read', async () => {
    const notificationsRead = await readAllNotifications();

    expect(Array.isArray(notificationsRead));
});

it('Test delete notification', async () => {
    const deleteNOtification = await deletesNotification();

    expect(deleteNOtification.Id).toBeDefined();
});

it('Test delete all notifications', async () => {
    const deleteAll = await deleteAllNotifications();

    expect(Array.isArray(deleteAll)).toEqual(true);
});
