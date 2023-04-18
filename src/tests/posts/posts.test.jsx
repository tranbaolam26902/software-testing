import { getPosts } from './getPosts';

it('Test get posts api', async () => {
    const posts = await getPosts();

    expect(posts.length !== 0);
});
