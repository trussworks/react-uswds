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

export type UseCharacterCountOptions = {
  maxLength: number
  inputValue: string
  getCharacterCount?: (text: string) => number
  getMessage?: (remainingCount: number, max: number) => string
  // Optionally, pass an input ref to set the field's validity when over the limit
  inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>
  customValidityMessage?: string
}

export type CharacterCountStatus = {
  length: number
  maxLength: number
  message: string
  isOverLimit: boolean
}

export type CharacterCountProps = {
  id: string
  // The derived status from useCharacterCount, which drives the messages
  status: CharacterCountStatus
}

/*
  Derives the character count state from a controlled value.
  Consumers can call it to drive their own field styling (e.g. validation status
  styling) from the same source of truth that drives the CharacterCount messages.
*/
export const useCharacterCount = ({
  inputValue,
  maxLength,
  getCharacterCount = defaultCharacterCount,
  getMessage = defaultMessage,
  inputRef,
  customValidityMessage = VALIDATION_MESSAGE,
}: UseCharacterCountOptions): CharacterCountStatus => {
  const length = getCharacterCount(inputValue)
  const isOverLimit = length > maxLength

  useEffect(() => {
    // Set the field's custom validity when over the limit. Guarded so we never
    // clobber another validator's message, matching USWDS's behavior.
    const input = inputRef?.current
    if (!input) return

    if (isOverLimit && !input.validationMessage) {
      input.setCustomValidity(customValidityMessage)
    } else if (
      !isOverLimit &&
      input.validationMessage === customValidityMessage
    ) {
      input.setCustomValidity('')
    }
  }, [isOverLimit, inputRef, customValidityMessage])

  return {
    length,
    maxLength,
    message: getMessage(length, maxLength),
    isOverLimit,
  }
}

export const CharacterCount = ({
  id,
  status,
}: CharacterCountProps): JSX.Element => {
  const { maxLength, message, isOverLimit } = status
  const srMessageRef = useRef<HTMLDivElement>(null)

  const messageClasses = classnames('usa-hint', 'usa-character-count__status', {
    'usa-character-count__status--invalid': isOverLimit,
  })

  useEffect(() => {
    // Updates the character count status for screen readers after a 1000ms delay
    const timer = setTimeout(() => {
      // Setting the text directly for VoiceOver compatibility.
      if (srMessageRef.current) srMessageRef.current.textContent = message
    }, 1000)
    return () => clearTimeout(timer)
  }, [message])

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
