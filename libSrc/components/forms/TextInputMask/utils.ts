/* eslint-disable security/detect-object-injection */
export function maskString(value: string, mask: string, charset?: string) {
  const maskData = charset || mask

  const strippedValue = charset
    ? value.replace(/\W/g, '')
    : value.replace(/\D/g, '')
  const charIsInteger = (v: string) => !Number.isNaN(parseInt(v, 10))
  const charIsLetter = (v: string) => (v ? v.match(/[A-Z]/i) : false)
  const maskedNumber = '_#dDmMyY9'
  const maskedLetter = 'A'
  let newValue = ''
  for (let m = 0, v = 0; m < maskData.length; m++) {
    const isInt = charIsInteger(strippedValue[v])
    const isLet = charIsLetter(strippedValue[v])
    const matchesNumber = maskedNumber.indexOf(maskData[m]) >= 0
    const matchesLetter = maskedLetter.indexOf(maskData[m]) >= 0
    if ((matchesNumber && isInt) || (charset && matchesLetter && isLet)) {
      newValue += strippedValue[v++]
    } else if (
      strippedValue[v] === undefined || // if no characters left and the pattern is non-special character
      (!charset && !isInt && matchesNumber) ||
      (charset && ((matchesLetter && !isLet) || (matchesNumber && !isLet)))
    ) {
      break
    } else {
      newValue += maskData[m]
    }
  }

  return newValue
}
