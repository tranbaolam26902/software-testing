import { getUser } from './getUser';

it('Test get user info API', async () => {
    const user = await getUser();
    const expectedData = 'admin';

    expect(user.UserName).toEqual(expectedData);
});
