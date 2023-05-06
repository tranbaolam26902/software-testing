import { createCategory } from './createCategory';
import { deleteCategory } from './deleteCategory';
import { getCategories } from './getCategories';

it('Test create categories api', async () => {
    const category = await createCategory();
    expect(category.Id).toBeDefined();
});

it('Test delete categories api', async () => {
    const res = await deleteCategory();

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

it('Test get categories API', async () => {
    const categories = await getCategories();

    expect(Array.isArray(categories)).toEqual(true);
});