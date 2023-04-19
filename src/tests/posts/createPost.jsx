import getToken from '../getToken';

async function createPost() {
    const formData = new FormData();
    const token = await getToken();
    const postData = {
        Title: 'Bài viết mới',
        Content: 'Nội dung bài viết mới',
        SelectedCategories: ['f3b1f97e-5301-49f3-a292-19a8b3e63108'],
        PrivateMode: false,
    };
    formData.append('Post', JSON.stringify(postData));
    return await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/userpost/create', {
        method: 'POST',
        headers: {
            Authorization: token,
        },
        body: formData,
    }).then((response) => response.json());
}

export { createPost };
