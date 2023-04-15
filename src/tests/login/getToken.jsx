export default async function getToken() {
    return fetch('http://192.168.43.237:8888/token', {
        method: 'POST',
        body: `grant_type=password&username=admin&password=Admin#123`,
    })
        .then((response) => response.json())
        .then((responseToken) => 'bearer ' + responseToken.access_token);
}
