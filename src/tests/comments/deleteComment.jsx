import getToken from '../getToken';
async function deleteComment(id) {
    const token = await getToken();
    const formData = new FormData();

    formData.append('id', id);
    return fetch(process.env.REACT_APP_API_ENDPOINT + '/api/usercomment/delete', {
        method: 'POST',
        headers: {
            Authorization: token,
        },
        body: formData,
    }).then((response) => response.json());
}

export { deleteComment };
