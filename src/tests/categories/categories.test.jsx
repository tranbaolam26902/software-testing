import { createCategory } from './createCategory';
import { deleteCategory } from './deleteCategory';
import { getCategories } from './getCategories';

it('Test create categories api', async () => {
    const category = await createCategory();

    expect(category.Id).toBeDefined();
});

it('Test delete categories api', async () => {
    const categories = await deleteCategory();

    expect(Array.isArray(categories)).toEqual(true);
});

it('Test get categories API', async () => {
    const categories = await getCategories();

    expect(Array.isArray(categories)).toEqual(true);
});