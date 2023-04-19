async function getPostById(id) {
    const formData = new FormData();

    formData.append('id', id);
    return fetch(process.env.REACT_APP_API_ENDPOINT + '/api/post/getpostbyid', {
        method: 'POST',
        body: formData,
    }).then((response) => response.json());
}

export { getPostById };
