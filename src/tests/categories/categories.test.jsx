import { createCategory } from './createCategory';
import { deleteCategory } from './deleteCategory';

it('Test create categories api', async () => {
    const categories = await createCategory();

    expect(categories.responseCategories);
});

it('Test delete categories api', async () => {
    const categories = await deleteCategory();

    expect(categories.responseCategories);
});
