import calculate from '../logic/calculate';

it('should return an object with total, next, and operation equal to null when the buttonName is AC', () => {
  expect(calculate({ total: 10, next: 5, operation: '+' }, 'AC')).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});

it('should update the next property when the buttonName is a number', () => {
  expect(calculate({ total: 10, next: 5, operation: '+' }, '2')).toEqual({
    total: 10,
    next: '52',
    operation: '+',
  });
});

it('should update the next property and clear the value when the buttonName is 0 and obj.next is 0', () => {
  expect(calculate({ total: null, next: '0', operation: null }, '0')).toEqual(
    {},
  );
});

it('should update the next property and add a decimal point when the buttonName is . and there is no decimal point in obj.next', () => {
  expect(calculate({ total: null, next: '5', operation: null }, '.')).toEqual({
    total: null,
    next: '5.',
    operation: null,
  });
});

it('should not update the next property when there is a decimal point in obj.next', () => {
  expect(calculate({ total: null, next: '5.4', operation: null }, '.')).toEqual(
    {
      total: null,
      next: '5.4',
      operation: null,
    },
  );
});

it('should update the next property with 0. when the buttonName is . and there is an operation', () => {
  expect(calculate({ total: 10, next: '5', operation: '+' }, '.')).toEqual({
    total: 10,
    next: '5.',
    operation: '+',
  });
});

it('should update the next property with . when the buttonName is . and there is a total', () => {
  expect(calculate({ total: '10', next: null, operation: null }, '.')).toEqual({
    total: '10',
    next: '10.',
    operation: null,
  });
});

it('should update the next property with the opposite sign when the buttonName is +/- and obj.next is not null', () => {
  expect(calculate({ total: null, next: '5', operation: null }, '+/-')).toEqual(
    {
      total: null,
      next: '-5',
      operation: null,
    },
  );
});

it('should return when equal is clicked', () => {
  calculate(
    {
      total: null,
      next: null,
      operation: null,
    },
    'AC',
  );
  const result = calculate(
    calculate(
      calculate(
        calculate(
          {
            total: null,
            next: null,
            operation: null,
          },
          '6',
        ),
        '+',
      ),
      '6',
    ),
    '=',
  );
  expect(result.total).toBe('12');
});

it('should complete operation (-18 + 6 = -12)', () => {
  calculate(
    {
      total: null,
      next: null,
      operation: null,
    },
    'AC',
  );
  const added = calculate(
    calculate(
      calculate(
        calculate(
          {
            total: null,
            next: null,
            operation: null,
          },
          '-24',
        ),
        '+',
      ),
      '8',
    ),
    '=',
  );
  expect(added.total).toBe('-16');
});
