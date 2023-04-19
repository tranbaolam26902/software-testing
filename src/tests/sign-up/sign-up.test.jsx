import { signUp } from "./sign-up";

it('Test get register API', async () => {
    const user = await signUp();    
    // expect(user.Id).toBeDefined();
});