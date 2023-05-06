import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function changePassword() {
    const token = await getToken();
    const data = {
        OldPassword: 'Admin#123',
        NewPassword: 'Admin#123',
        ConfirmPassword: 'Admin#123',
    };
    return await _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/Account/ChangePassword', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(data),
    }).then((response) => {
        return response;
    });
}

export { changePassword };
