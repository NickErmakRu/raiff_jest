const sum = require('./sum');
const objj = require('./objj');

// простая сумма
test('adds to equal', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 6)).toBe(8);
  expect(sum(11, 2)).toBe(13);
});

// новые свойства объекта
test('new attrs added', () => {
    expect(objj("28й")).toEqual({один: 1, два: "28й"});
  });


// снэпшоты