
export default async function signIn() {
    return fetch(process.env.REACT_APP_API_ENDPOINT + '/token', {
        method: 'POST',
        body: `grant_type=password&username=admin&password=Admin#123`,
    })
        .then((response) => response.json())
        .then((responseToken) => 'bearer ' + responseToken.access_token);
}

export {signIn}