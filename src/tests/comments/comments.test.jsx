/* eslint-disable jest/valid-expect */
import { createComment } from './createComment';
import { deleteComment } from './deleteComment';
import { editComment } from './editComment';
import { getPostById } from './getPostById';
let idComment = '-1';
it('editComment', async () => {
    const comment = await editComment();
    expect(comment).toBeDefined();
});
//Mỗi lẫn chạy nó tạo ra một comment mới trong cái bài viết hình cây cầu
it('createComment', async () => {
    const comment = await createComment();
    expect(comment).toBeDefined();
    idComment = comment.Id;
});
//Xóa cái comment phía trên luôn
it('deleteComment', async () => {
    const comment = await deleteComment(idComment);
    expect(comment).toBeDefined();
});

let idPost = '276b64f0-bc4b-4ea6-9f38-f7cc6dde2397';

it('getPost', async () => {
    const post = await getPostById(idPost);
    expect(post).toBeDefined();
});
