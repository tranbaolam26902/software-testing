import _fetch from 'isomorphic-fetch';

async function searchPosts() {
    const formData = new FormData();
    const keyword = 'ky tuc xa'
    formData.append('keyword', keyword);
    return await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/post/FindPost', {
        method: 'POST',
        body: formData,
    })
        .then((response) => response.json())

}

export { searchPosts };
