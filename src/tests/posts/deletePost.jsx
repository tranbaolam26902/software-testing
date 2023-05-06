import getToken from '../getToken';

async function deletePost() {
    const token = await getToken();
    const formData = new FormData();
    formData.append('id', 'f79286d1-cfb8-4078-bdaa-cb313afdfeb2');
    return await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/admpost/delete', {
        method: 'POST',
        headers: {
            Authorization: token,
        },
        body: formData,
    }).then((response) => response);
}

export { deletePost };
