import conceal from "../utils/conceal";

describe('Тестирование функции conceal', () => {

    test('Преобразования строки "Москва"', () => {
        expect(conceal('Москва')).toEqual('Mocквa');
    });

    test('Преобразования числа', () => {
        expect(conceal('18')).toEqual('1­8­');
    });

    test('Преобразования строки с числом', () => {
        expect(conceal('18 сосисок')).toEqual('1­8­ cocиcoк');
    });

});