import { luhnCheck } from '../validators';

test('Должно быть false если длина меньше 14', () => {
  const result = luhnCheck('44850483');

  expect(result).toBe(false);
});

test('Должно быть false если длина больше 19', () => {
  const result = luhnCheck('44850483235167999381');

  expect(result).toBe(false);
});

test('Проверка номерка карты Visa', () => {
  const result = luhnCheck('4485048323516799938');

  expect(result).toBe(true);
});

test('Проверка номерка карты Mir', () => {
  const result = luhnCheck('2201382000000021');

  expect(result).toBe(true);
});

test('Проверка номерка карты Mastercard', () => {
  const result = luhnCheck('5357755098330761');

  expect(result).toBe(true);
});

test('Проверка номерка карты Amex', () => {
  const result = luhnCheck('346064099063835');

  expect(result).toBe(true);
});

test('Проверка номерка карты Diners club', () => {
  const result = luhnCheck('36060555116831');

  expect(result).toBe(true);
});

test('Проверка номерка карты Discover', () => {
  const result = luhnCheck('6011478640428902');

  expect(result).toBe(true);
});
