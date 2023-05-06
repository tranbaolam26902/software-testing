import { signUp } from "./sign-up";

it('Test get register API', async () => {
    const res = await signUp(); 
    switch (res.status) {
        case 200:
            expect(res.status).toEqual(200);
            break;
        case 400:
            expect(res.status).toEqual(400);
            break;
        default:

            expect(res).toBeUndefined();
            break;
    }
});