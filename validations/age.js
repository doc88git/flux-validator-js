export default (name, {value, condition, age}) => {
  const field = {
    name: name,
    valid: true
  }
  const today = new Date()

  const now = (y) =>{
    const year = today.getFullYear() - y
    return today.setFullYear(year)
  }

  const teste = now(age) - value

  const validateAge = {
    '===': () => value === now(age),
    '!==': () => value !== now(age),
    '>=': () => value >= now(age),
    '>': () => value > now(age),
    '<=': () => value <= now(age),
    '<': () => value < now(age),
    'default': () => false
  }


  field.valid = (validateAge[condition] || validateAge['default'])()
  return field
}