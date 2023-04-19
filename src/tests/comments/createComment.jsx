import getToken from '../getToken';
async function createComment() {
    const token = await getToken();
    const formData = new FormData();
    const comment = '123';
    const commentData = {
        Content: comment,
        PostId: '276b64f0-bc4b-4ea6-9f38-f7cc6dde2397',
        ParentId: '',
        LevelComment: 1,
    };
    formData.append('comment', JSON.stringify(commentData));
    return fetch(process.env.REACT_APP_API_ENDPOINT + '/api/usercomment/create', {
        method: 'POST',
        headers: {
            Authorization: token,
        },
        body: formData,
    }).then((response) => response.json());
}

export { createComment };
