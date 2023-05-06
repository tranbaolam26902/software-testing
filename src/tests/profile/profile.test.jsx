import { editProfile } from "./editProfile";
import { changePassword } from "./changePassword";

it('Test edit profile api', async () => {
    const profiles = await editProfile();

    expect(profiles.formData);
});
it('Test change password api', async () => {
    const profiles = await changePassword();
    expect(profiles.status).toEqual(200);
});