import { getCategories } from './getCategories';

it('Test get categories API', async () => {
    const categories = await getCategories();

    expect(Array.isArray(categories)).toEqual(true);
});

