import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function deleteCategory() {
    const token = await getToken();
    const formData = new FormData();
    const idData = '3689e85f-6e05-4a10-a129-dd8af24ddf62'
    formData.append('id', JSON.stringify(idData));
    return await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/admcategory/delete',{
        method: 'POST',
                headers: {
                    Authorization: token.replace(/['"]+/g, ''),
                },
                body: formData,
    }).then((response) => response)

}

export { deleteCategory };

