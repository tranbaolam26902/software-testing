import getToken from '../getToken';

async function deletePost() {
    const token = await getToken();
    const formData = new FormData();
    formData.append('id', '500e60a1-4ef8-43b9-9d9e-697af8258b35');
    return await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/admpost/delete', {
        method: 'POST',
        headers: {
            Authorization: token,
        },
        body: formData,
    }).then((response) => response.json());
}

export { deletePost };
