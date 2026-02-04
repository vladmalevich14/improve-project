import { classNames } from './classNames';

describe('classNames', () => {
    test('with only param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expectedClass = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expectedClass);
    });

    test('with mods', () => {
        const expectedClass = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe(expectedClass);
    });

    test('with mods false', () => {
        const expectedClass = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        ))
            .toBe(expectedClass);
    });

    test('with mods undefined', () => {
        const expectedClass = 'someClass class1 class2 hovered';
        expect(classNames('someClass', {
            hovered: true,
            scrollable: undefined,
        }, ['class1', 'class2'])).toBe(expectedClass);
    });
});
