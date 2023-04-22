import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function deleteCategory() {
    const token = await getToken();
    const formData = new FormData();
    const idData = '276b64f0-bc4b-4ea6-9f38-f7cc6dde2397'
    formData.append('id', JSON.stringify(idData));
    return await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/admcategory/delete',{
        method: 'POST',
                headers: {
                    Authorization: localStorage.getItem('token').replace(/['"]+/g, ''),
                },
                body: formData,
    }).then((response) => response.json())

}

export { deleteCategory };

