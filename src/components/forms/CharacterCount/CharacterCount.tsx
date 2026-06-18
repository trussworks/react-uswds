import React, { useEffect, useRef, type JSX } from 'react'
import classnames from 'classnames'

/* Defaults
  This is a fallback for character count and validation message.
  In many cases, though, props will be passed in by the consumer
  for example, to account for i18n-aware strings
*/
const defaultCharacterCount = (text: string): number => Array.from(text).length
const defaultMessage = (count: number, max: number): string => {
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

// USWDS default custom validity message.
const VALIDATION_MESSAGE = 'The content is too long.'

/* Types */
export type CharacterCountProps = {
  id: string
  maxLength: number
  inputValue?: string
  getCharacterCount?: (text: string) => number
  getMessage?: (remainingCount: number, max: number) => string
  // Optionally, pass an input ref to trigger setCustomValidity on the input
  inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>
  customValidityMessage?: string
}

/* Main */
export const CharacterCount = ({
  id,
  maxLength,
  inputValue = '',
  getCharacterCount = defaultCharacterCount,
  getMessage = defaultMessage,
  inputRef,
  customValidityMessage = VALIDATION_MESSAGE,
}: CharacterCountProps): JSX.Element => {
  const length = getCharacterCount(inputValue)
  const isValid = length <= maxLength
  const message = getMessage(length, maxLength)
  const srMessageRef = useRef<HTMLDivElement>(null)

  const messageClasses = classnames('usa-hint', 'usa-character-count__status', {
    'usa-character-count__status--invalid': !isValid,
  })

  useEffect(() => {
    // Updates the character count status for screen readers after a 1000ms delay
    const timer = setTimeout(() => {
      // Setting the text directly for VoiceOver compatibility.
      if (srMessageRef.current) srMessageRef.current.textContent = message
    }, 1000)
    return () => clearTimeout(timer)
  }, [message])

  useEffect(() => {
    // Set the field's custom validity when over the limit. Guarded so we never
    // clobber another validator's message, matching USWDS's behavior.
    const input = inputRef?.current
    if (!input) return

    const isOverLimit = length > maxLength
    if (isOverLimit && !input.validationMessage) {
      input.setCustomValidity(customValidityMessage)
    } else if (
      !isOverLimit &&
      input.validationMessage === customValidityMessage
    ) {
      input.setCustomValidity('')
    }
  }, [length, maxLength, inputRef])

  return (
    <>
      <span className="usa-sr-only" id={id}>
        You can enter up to {maxLength} characters
      </span>
      <div
        className={messageClasses}
        aria-hidden="true"
        data-testid="characterCountMessage">
        {message}
      </div>
      <div
        ref={srMessageRef}
        className="usa-character-count__sr-status usa-sr-only"
        aria-live="polite"
        data-testid="characterCountSRMessage"
      />
    </>
  )
}

export default CharacterCount
