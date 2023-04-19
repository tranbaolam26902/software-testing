import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function votePost() {
    const token = await getToken();
    const formData = new FormData();
    formData.set('id', "276b64f0-bc4b-4ea6-9f38-f7cc6dde2397");
    console.log(formData);

    return await fetch(process.env.REACT_APP_API_ENDPOINT + `/api/userpost/like`, {
        method: 'POST',
        headers: {
            'Authorization': token.replace(/['"]+/g, '')
        },
        body: formData,
    }).then((response) => response.json());
}

export {votePost}