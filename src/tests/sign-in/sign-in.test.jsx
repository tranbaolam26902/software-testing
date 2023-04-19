import signIn from "./sign-in";

it('Test get login API', async () => {
    const token = await signIn();  
    expect(token).toBeDefined();
});