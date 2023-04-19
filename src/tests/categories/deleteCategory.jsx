import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function deleteCategory() {
    return await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/admcategory/delete', )
            .then((response) => response.json())

}

export { deleteCategory };

