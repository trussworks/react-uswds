/* eslint-disable security/detect-object-injection */
import React, { useState } from 'react'
import classnames from 'classnames'
import { ValidationStatus } from '../../../types/validationStatus'

type TextInputRef =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined

type RequiredTextInputProps = {
  id: string
  name: string
  type: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url'
}

type CustomTextInputProps = {
  className?: string
  validationStatus?: ValidationStatus
  inputSize?: 'small' | 'medium'
  inputRef?: TextInputRef
  mask?: string
  charset?: string
  inputProps?: JSX.IntrinsicElements['input']
}

export type OptionalTextInputProps = CustomTextInputProps &
  JSX.IntrinsicElements['input']

export type TextInputProps = RequiredTextInputProps & OptionalTextInputProps

export const TextInput = ({
  id,
  name,
  type,
  className,
  validationStatus,
  inputSize,
  inputRef,
  mask,
  charset,
  ...inputProps
}: TextInputProps): React.ReactElement => {
  const isError = validationStatus === 'error'
  const isSuccess = validationStatus === 'success'
  const isSmall = inputSize === 'small'
  const isMedium = inputSize === 'medium'

  const classes = classnames(
    'usa-input',
    {
      'usa-input--error': isError,
      'usa-input--success': isSuccess,
      'usa-input--small': isSmall,
      'usa-input--medium': isMedium,
      'usa-masked': mask,
    },
    className
  )

  const [inputValue, setInputValue] = useState('')
  const [maskValue, setMaskValue] = useState(mask)
  const [iValue, setIValue] = useState<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    const maskData = charset || mask
    if (undefined === maskData) return
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
    const newMaskValue = mask ? mask.substring(newValue.length) : ''
    setMaskValue(newMaskValue)
    setIValue(<i>{newValue}</i>)
    setInputValue(newValue)
    inputProps.onChange
  }
  const input = (
    <input
      data-testid="textInput"
      className={classes}
      id={id}
      name={name}
      type={type}
      ref={inputRef}
      maxLength={
        inputProps.maxLength || !mask ? inputProps.maxLength : mask.length
      }
      onChange={mask ? handleChange : inputProps.onChange}
      value={mask ? inputValue : inputProps.value}
      {...inputProps}
    />
  )

  if (mask) {
    return (
      <span className="usa-input-mask">
        <span
          className="usa-input-mask--content"
          aria-hidden
          data-testid={`${id}Mask`}>
          {iValue}
          {maskValue}
        </span>
        {input}
      </span>
    )
  } else {
    return input
  }
}

export default TextInput
