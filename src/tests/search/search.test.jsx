import { searchPosts } from './search';

it('Test search posts api', async () => {
    const posts = await searchPosts();

    expect(posts.responseSearchResults);
});
