import operate from "../logic/operate";

describe("Operate function test", () => {
  test('It should return 4 when adding 2 to 2', () => {
    expect(operate(2,2,'+')).toBe('4');
  })

  test('Should return 6 when subtracting 4 from 10', () => {
    expect(operate(10,4,'-')).toBe('6');
  })

  test('Should return -5 when subtracting 10 from 5', () => {
    expect(operate(5,10,'-')).toBe('-5');
  })

  test('Should return 22 when 11 is multiplied by 2', () => {
    expect(operate(11,2,'x')).toBe('22');
  })

  test('Should return 3 when 27 is divided by 9', () => {
    expect(operate(27,9,'÷')).toBe('3');
  })

  test('Should return "Can\'t divide by 0." when 7 is divided by 0', () => {
    expect(operate(7,0,'÷')).toBe('Can\'t divide by 0.');
  })

  test('Should return 1 when operating 10%3', () => {
    expect(operate(10,3,'%')).toBe('1');
  })

  test('Should return 3 when operating 3%10', () => {
    expect(operate(3,10,'%')).toBe('3');
  })
})