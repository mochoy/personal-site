// Uppercases first character in a string

const uppercaseFirstChar = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default uppercaseFirstChar;