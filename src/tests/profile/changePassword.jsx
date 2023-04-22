import _fetch from 'isomorphic-fetch';
import getToken from '../getToken';

async function changePassword() {
    const token = await getToken();
    const data = {
                OldPassword: '',
                NewPassword: '',
                ConfirmPassword: '',
            };
    return await fetch(process.env.REACT_APP_API_ENDPOINT + '/api/Account/ChangePassword',{
        method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,
                },
                body: JSON.stringify(data),
    }).then((response) => {
        if (response.status === 200) {
            handleClose(e);
            dispatch(actions.setMessage('Đổi mật khẩu thành công!'));
            dispatch(actions.setShowMessageModal(true));
            return;
        }
        if (response.status === 400) {
            response.json().then((responseError) => {
                setErrorMessage(responseError.ModelState.Error[0]);
            });
        }
    });
}

export { changePassword };
