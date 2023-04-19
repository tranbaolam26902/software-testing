import getToken from '../getToken';
async function editComment() {
    const token = await getToken();
    const formData = new FormData();
    const comment = '123';
    const commentData = {
        Content: comment,
        Id: 'da649fb7-0bc0-42f4-b074-f2b16cccfc55',
    };
    formData.append('comment', JSON.stringify(commentData));
    return fetch(process.env.REACT_APP_API_ENDPOINT + '/api/usercomment/edit', {
        method: 'POST',
        headers: {
            Authorization: token,
        },
        body: formData,
    }).then((response) => response.json());
}

export { editComment };
