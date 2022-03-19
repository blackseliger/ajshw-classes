import showColor from '../js/app';

test('should show critical', () => {
  const result = showColor({ name: 'Маг', health: 14 });

  expect(result).toBe('critical');
});

test('should show wounded', () => {
  const result = showColor({ name: 'Маг', health: 36 });

  expect(result).toBe('wounded');
});

test('should show healthy', () => {
  const result = showColor({ name: 'Маг', health: 58 });

  expect(result).toBe('healthy');
});
