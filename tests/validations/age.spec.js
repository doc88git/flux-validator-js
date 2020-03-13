import validator from '../../index.js'

describe('Age', () => {
  test('Validar se a idade é igual que o valor solicitado', () => {
    const valid = [
      {value: 1, condition: '===', age: 1},
      {value: 40, condition: '===', age: 40},
      {value: 19, condition: '===', age: 19},
      {value: 2000, condition: '===', age: 2000}
    ]
    const invalid = [
      {value: 29, condition: '===', age: 30},
      {value: 29, condition: '===', age: 100},
      {value: 29, condition: '===', age: 1001},
      {value: 29, condition: '===', age: 28}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se a idade é diferente que o valor solicitado', () => {
    const valid = [
      {value: 12, condition: '!==', age: 45},
      {value: 1, condition: '!==', age: 29},
      {value: 5, condition: '!==', age: 29},
      {value: 10000, condition: '!==', age: 29}
    ]
    const invalid = [
      {value: 30, condition: '!==', age: 30},
      {value: 100, condition: '!==', age: 100},
      {value: 1001, condition: '!==', age: 1001},
      {value: 28, condition: '!==', age: 28}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se a idade é maior ou igual que o valor solicitado', () => {
    const valid = [
      {value: 29, condition: '>=', age: 18},
      {value: 1, condition: '>=', age: 0},
      {value: 5, condition: '>=', age: 2},
      {value: 29, condition: '>=', age: 29}
    ]
    const invalid = [
      {value: 29, condition: '>=', age: 30},
      {value: 29, condition: '>=', age: 100},
      {value: 29, condition: '>=', age: 1001},
      {value: 29, condition: '>=', age: 30}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se a idade é maior que o valor solicitado', () => {
    const valid = [
      {value: 29, condition: '>', age: 18},
      {value: 1, condition: '>', age: -1},
      {value: 5, condition: '>', age: 2},
      {value: 4000, condition: '>', age: 1000}
    ]
    const invalid = [
      {value: 29, condition: '>', age: 30},
      {value: 29, condition: '>', age: 100},
      {value: 29, condition: '>', age: 1001},
      {value: 29, condition: '>', age: 29}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se a idade é menor igual que o valor solicitado', () => {
    const valid = [
      {value: 29, condition: '<=', age: 40},
      {value: 0, condition: '<=', age: 1},
      {value: 1, condition: '<=', age: 2},
      {value: 45, condition: '<=', age: 45}
    ]
    const invalid = [
      {value: 60, condition: '<=', age: 30},
      {value: 200, condition: '<=', age: 100},
      {value: 9000, condition: '<=', age: 1001},
      {value: 30, condition: '<=', age: 29}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se a idade é menor que o valor solicitado', () => {
    const valid = [
      {value: 29, condition: '<', age: 40},
      {value: 0, condition: '<', age: 1},
      {value: 1, condition: '<', age: 2},
      {value: 44, condition: '<', age: 45}
    ]
    const invalid = [
      {value: 60, condition: '<', age: 30},
      {value: 200, condition: '<', age: 100},
      {value: 9000, condition: '<', age: 1001},
      {value: 30, condition: '<', age: 29}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se a idade é menor que o valor solicitado', () => {
    const valid = [
      {value: 29, condition: '<', age: 40},
      {value: 0, condition: '<', age: 1},
      {value: 1, condition: '<', age: 2},
      {value: 44, condition: '<', age: 45}
    ]
    const invalid = [
      {value: 60, condition: '<', age: 30},
      {value: 200, condition: '<', age: 100},
      {value: 9000, condition: '<', age: 1001},
      {value: 30, condition: '<', age: 29}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se o parametro `condition` esta fora do padrão do componente', () => {
    expect(validator.age('age', {value: 1, condition: '======', age: 29}).valid).toBeFalsy();
  });
});