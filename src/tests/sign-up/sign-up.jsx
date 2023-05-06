import _fetch from 'isomorphic-fetch';

async function signUp() {
    const data = {
        UserName: 'yuu28070342',
        Password: '23xuan23',
        ConfirmPassword: '23xuan23',
        Email: 'xpnguyen2222342@gmail.com',
    };

    return _fetch(process.env.REACT_APP_API_ENDPOINT + `/api/Account/Register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response);
}

export {signUp}