/* eslint-disable no-new */
import Character from '../js/app';

test('should show error name if not in 2&10', () => {
  expect(() => {
    new Character('Gl', 'Magician', 0, 0);
  }).toThrow();
});

test('should show error name if not String ', () => {
  expect(() => {
    new Character(10, 'Magician', 0, 0);
  }).toThrow();
});

test('should show error type if not String ', () => {
  expect(() => {
    new Character('Gleb', 10, 0, 0);
  }).toThrow();
});

test('should show error type if not access type ', () => {
  expect(() => {
    new Character('Gleb', 'Sword', 0, 0);
  }).toThrow();
});

test('should setted this.name', () => {
  const expected = 'Gleb';
  const character = new Character('Gleb', 'Swordsman', 0, 0);
  expect(character.name).toEqual(expected);
});

test('should setted this.type', () => {
  const expected = 'Swordsman';
  const character = new Character('Gleb', 'Swordsman', 0, 0);
  expect(character.type).toEqual(expected);
});
