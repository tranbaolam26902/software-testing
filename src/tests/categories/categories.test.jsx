import { getCategories } from './getCategories';

it('Test get categories API', async () => {
    const categories = await getCategories();
    const expectedData = [
        {
            Id: 'f3b1f97e-5301-49f3-a292-19a8b3e63108',
            Name: 'Ký túc xá',
            Alias: 'Ky-tuc-xa',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB9E=',
        },
        {
            Id: 'b077c9ef-b3b0-4f9f-8f0b-2f54a50f3321',
            Name: 'Cựu sinh viên',
            Alias: 'Cuu-sinh-vien',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB9I=',
        },
        {
            Id: '53aedbf1-8289-4485-bb62-30763cb2e24c',
            Name: 'Tâm sự',
            Alias: 'Tam-su',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB9M=',
        },
        {
            Id: '8c5b4924-448a-4ed8-b619-3be8f162ab3a',
            Name: 'Tiếng Anh',
            Alias: 'Tieng-Anh',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB9Q=',
        },
        {
            Id: '1f58311e-73be-41ca-96c8-3ebf7c9c9eb4',
            Name: 'Tài liệu',
            Alias: 'Tai-lieu',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB9U=',
        },
        {
            Id: 'd65c30b2-50fe-4c24-b7d4-4ab1e4e6b4a9',
            Name: 'Học tập',
            Alias: 'Hoc-tap',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB9Y=',
        },
        {
            Id: 'ce20649c-7862-40d1-9586-4f7d9de59ebb',
            Name: 'Hồ sơ',
            Alias: 'Ho-so',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB9c=',
        },
        {
            Id: 'f043a2c6-69f3-4988-ad72-580119b959d7',
            Name: 'Xin in tư',
            Alias: 'Xin-in-tu',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB9g=',
        },
        {
            Id: 'bb45c897-7a61-43d7-994d-ab69092a89bc',
            Name: 'Tân sinh viên',
            Alias: 'Tan-sinh-vien',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB9o=',
        },
        {
            Id: 'ee47a651-880d-4f22-9d5a-c92f77ff9757',
            Name: 'Đồ thất lạc',
            Alias: 'Do-that-lac',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB9s=',
        },
        {
            Id: '78e5b8fa-5749-4ea4-8898-cf55e2c20cd3',
            Name: 'Câu lạc bộ',
            Alias: 'Cau-lac-bo',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB9w=',
        },
        {
            Id: '3689e85f-6e05-4a10-a129-dd8af24ddf62',
            Name: 'Khác',
            Alias: 'Khac',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB90=',
        },
        {
            Id: '0f5ddbc7-f1d8-4483-80ec-e587d9f89709',
            Name: 'Thực tập',
            Alias: 'Thuc-tap',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB94=',
        },
        {
            Id: 'd9574fc0-df4c-4a14-8c98-ea07eca1a656',
            Name: 'Hoạt động Đoàn',
            Alias: 'Hoat-dong-Doan',
            Description: '',
            Active: true,
            RowVersion: 'AAAAAAAAB98=',
        },
    ];

    expect(categories).toEqual(expectedData);
});

