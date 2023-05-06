import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function createCategory() {
    const token = await getToken();

    const data = {
        Name: 'Kiem thu',
        Alias: 'kiem-thu2' + Math.random().toString(),
        Description: 'kiem thu phan mem',
        Active: true,
    };
    return await _fetch(process.env.REACT_APP_API_ENDPOINT + '/api/AdmCategory/Create',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(data),
    }).then((response) => response.json());
}

export { createCategory };

