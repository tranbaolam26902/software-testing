import { createPost } from './createPost';
import { deletePost } from './deletePost';
import { editPost } from './editPost';
import { getPopularPosts, getPosts, getPostsByCategory } from './getPosts';

it('Test get posts api', async () => {
    const posts = await getPosts();

    expect(Array.isArray(posts)).toEqual(true);
});

it('Test get popular posts api', async () => {
    const posts = await getPopularPosts();

    expect(Array.isArray(posts)).toEqual(true);
});

it('Test get posts by category api', async () => {
    const posts = await getPostsByCategory();

    expect(Array.isArray(posts)).toEqual(true);
});

it('Test create post api', async () => {
    const post = await createPost();

    expect(post.Id).toBeDefined();
});

it('Test delete post api', async () => {
    const res = await deletePost();
    switch (res.status) {
        case 200:
            expect(res.status).toEqual(200);
            break;
        case 400:
            expect(res.status).toEqual(400);
            break;
        default:

            expect(res.status).toBeUndefined();
            break;
    }
});

it('Test edit post api', async () => {
    const post = await editPost();

    expect(post).toBeDefined();
});
