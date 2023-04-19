import { votePost } from "./vote";

it('Test vote post api', async () => {
    const post = await votePost();
    expect(post.Id).toBeDefined();
});