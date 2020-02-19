import validator from '../../index.js'

const now = (value) =>{
  let today = new Date()
  let year = today.getFullYear() - value
  return today.setFullYear(year)
}

describe('Age', () => {
  test('Validar se a idade é igual que o valor solicitado', () => {
    const valid = [
      {value: now(29), condition: '===', age: 29},
      {value: now(29), condition: '===', age: 29},
      {value: now(29), condition: '===', age: 29},
      {value: now(29), condition: '===', age: 29}
    ]
    const invalid = [
      {value: now(29), condition: '===', age: 30},
      {value: now(29), condition: '===', age: 100},
      {value: now(29), condition: '===', age: 1001},
      {value: now(29), condition: '===', age: 28}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se a idade é diferente que o valor solicitado', () => {
    const valid = [
      {value: now(12), condition: '!==', age: 45},
      {value: now(1), condition: '!==', age: 29},
      {value: now(5), condition: '!==', age: 29},
      {value: now(10000), condition: '!==', age: 29}
    ]
    const invalid = [
      {value: now(30), condition: '!==', age: 30},
      {value: now(100), condition: '!==', age: 100},
      {value: now(1001), condition: '!==', age: 1001},
      {value: now(28), condition: '!==', age: 28}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se a idade é maior ou igual que o valor solicitado', () => {
    const valid = [
      {value: now(29), condition: '>=', age: 18},
      {value: now(1), condition: '>=', age: 0},
      {value: now(5), condition: '>=', age: 2},
      {value: now(29), condition: '>=', age: 29}
    ]
    const invalid = [
      {value: now(29), condition: '>=', age: 30},
      {value: now(29), condition: '>=', age: 100},
      {value: now(29), condition: '>=', age: 1001},
      {value: now(29), condition: '>=', age: 30}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se a idade é maior que o valor solicitado', () => {
    const valid = [
      {value: now(29), condition: '>', age: 18},
      {value: now(1), condition: '>', age: 0},
      {value: now(5), condition: '>', age: 2},
      {value: now(29), condition: '>', age: 18}
    ]
    const invalid = [
      {value: now(29), condition: '>', age: 30},
      {value: now(29), condition: '>', age: 100},
      {value: now(29), condition: '>', age: 1001},
      {value: now(29), condition: '>', age: 29}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se a idade é menor igual que o valor solicitado', () => {
    const valid = [
      {value: now(29), condition: '<=', age: 40},
      {value: now(0), condition: '<=', age: 1},
      {value: now(1), condition: '<=', age: 2},
      {value: now(45), condition: '<=', age: 45}
    ]
    const invalid = [
      {value: now(60), condition: '<=', age: 30},
      {value: now(200), condition: '<=', age: 100},
      {value: now(9000), condition: '<=', age: 1001},
      {value: now(30), condition: '<=', age: 29}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se a idade é menor que o valor solicitado', () => {
    const valid = [
      {value: now(29), condition: '<', age: 40},
      {value: now(0), condition: '<', age: 1},
      {value: now(1), condition: '<', age: 2},
      {value: now(44), condition: '<', age: 45}
    ]
    const invalid = [
      {value: now(60), condition: '<', age: 30},
      {value: now(200), condition: '<', age: 100},
      {value: now(9000), condition: '<', age: 1001},
      {value: now(30), condition: '<', age: 29}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se a idade é menor que o valor solicitado', () => {
    const valid = [
      {value: now(29), condition: '<', age: 40},
      {value: now(0), condition: '<', age: 1},
      {value: now(1), condition: '<', age: 2},
      {value: now(44), condition: '<', age: 45}
    ]
    const invalid = [
      {value: now(60), condition: '<', age: 30},
      {value: now(200), condition: '<', age: 100},
      {value: now(9000), condition: '<', age: 1001},
      {value: now(30), condition: '<', age: 29}
    ]
    
    valid.forEach(value => expect(validator.age('age', value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.age('age', value).valid).toBeFalsy());
  });

  test('Validar se o parametro `condition` esta fora do padrão do componente', () => {
    expect(validator.age('age', {value: now(1), condition: '======', age: 29}).valid).toBeFalsy();
  });
});