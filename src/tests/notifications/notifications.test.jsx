/* eslint-disable jest/valid-expect */
import { getNotifications } from './getNotifications';
import { readAllNotifications, readsNotification } from './editNotifications';
import { deleteAllNotifications, deletesNotification } from './deleteNotifications';

it('Test get notifications api', async () => {
    const notifications = await getNotifications();

    // eslint-disable-next-line jest/valid-expect
    expect(notifications.length !== 0);
});

it('Test read notification', async () => {
    const readNotification = await readsNotification();

    expect(readNotification.id !== null);
});

it('Test get all notifications read', async () => {
    const notificationsRead = await readAllNotifications();

    expect(notificationsRead.length !== 0);
});

it('Test delete notification', async () => {
    const deleteNOtification = await deletesNotification();

    expect(deleteNOtification.id !== null);
});

it('Test delete all notifications', async () => {
    const deleteAll = await deleteAllNotifications();

    expect(deleteAll.length !== 0);
});
