/* Defaults
  This is a fallback for character count and validation message.
  In many cases, though, props will be passed in by consumer 
  for example, to account for i18n-aware strings
*/
export const defaultCharacterCount = (text: string): number =>
  Array.from(text).length

export const defaultMessage = (count: number, max: number): string => {
  const emptyMessageFormat = `${max} characters allowed`
  const remainingPluralFormat = '$0 characters left'
  const remainingSingularFormat = '$0 character left'
  const overSingularFormat = '$0 character over limit'
  const overPluralFormat = '$0 characters over limit'
  const remainingCount = max - count

  switch (remainingCount) {
    case max:
      return emptyMessageFormat
    case 1:
      return remainingSingularFormat.replace('$0', '1')
    case -1:
      return overSingularFormat.replace('$0', '1')
    default:
      return remainingCount >= 0
        ? remainingPluralFormat.replace('$0', remainingCount.toString())
        : overPluralFormat.replace('$0', Math.abs(remainingCount).toString())
  }
}
