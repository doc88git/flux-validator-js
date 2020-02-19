import utils from "../utils/utils";

export default (name, {value, condition, age}) => {
  let field = {
    name: name,
    valid: true
  }

  const birthDate = new Date(value);
  const today = new Date();
  const localAge = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  const validateAge = {
    '===': () => localAge === age,
    '!==': () => localAge !== age,
    '>=': () => localAge >= age,
    '>': () => localAge > age,
    '<=': () => localAge <= age,
    '<': () => localAge < age,
    'default': () => false
  }

  field.valid = (validateAge[condition] || validateAge['default'])()
  return field
}