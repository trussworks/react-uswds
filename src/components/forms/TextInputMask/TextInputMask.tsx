/* eslint-disable security/detect-object-injection */
import React, { useState } from 'react'
import classnames from 'classnames'
import { TextInput, TextInputProps } from '../TextInput/TextInput'

type MaskProps = {
  mask: string
  charset?: string
}

export type AllProps = TextInputProps & MaskProps

export const TextInputMask = ({
  id,
  name,
  type,
  className,
  validationStatus,
  inputSize,
  inputRef,
  mask,
  defaultValue,
  charset,
  ...inputProps
}: AllProps): React.ReactElement => {
  const classes = classnames(
    {
      'usa-masked': mask,
    },
    className
  )

  const [inputValue, setInputValue] = useState(defaultValue)
  const [maskValue, setMaskValue] = useState(mask)
  const [iValue, setIValue] = useState('')
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
    setMaskValue(mask.substring(newValue.length))
    setIValue(newValue)
    setInputValue(newValue)
    inputProps.onChange
  }

  return (
    <span className="usa-input-mask">
      <span
        className="usa-input-mask--content"
        aria-hidden
        data-testid={`${id}Mask`}>
        <i>{iValue}</i>
        {maskValue}
      </span>
      <TextInput
        data-testid="textInput"
        className={classes}
        id={id}
        name={name}
        type={type}
        ref={inputRef}
        maxLength={mask.length}
        onChange={handleChange}
        value={inputValue}
        validationStatus={validationStatus}
        inputSize={inputSize}
        {...inputProps}
      />
    </span>
  )
}

export default TextInputMask
