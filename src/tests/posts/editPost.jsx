import getToken from '../getToken';

async function editPost() {
    const formData = new FormData();
    const token = await getToken();
    const postData = {
        Id: '57b5dc6a-0acc-4532-a7cd-9d4f892e45a5',
        Title: 'Bài viết mới (edited)',
        Content: 'Nội dung bài viết mới (edited)',
        SelectedCategories: ['f3b1f97e-5301-49f3-a292-19a8b3e63108'],
        PrivateMode: false,
    };
    formData.append('Post', JSON.stringify(postData));
    return await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/userpost/edit', {
        method: 'POST',
        headers: {
            Authorization: token,
        },
        body: formData,
    }).then((response) => response.json());
}

export { editPost };
