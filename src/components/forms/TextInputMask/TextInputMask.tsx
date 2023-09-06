/* eslint-disable security/detect-object-injection */
import React, { useState } from 'react'
import classnames from 'classnames'
import { TextInput, TextInputProps } from '../TextInput/TextInput'

export type AllProps = TextInputProps & {
  mask: string
  charset?: string
}

function maskString(value: string, mask: string, charset?: string) {
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

export const TextInputMask = ({
  id,
  className,
  mask,
  defaultValue,
  charset,
  onChange,
  ...inputProps
}: AllProps): React.ReactElement => {
  const classes = classnames(
    {
      'usa-masked': mask,
    },
    className
  )

  const [value, setValue] = useState(
    // Ensure that this component preserves the expected behavior when a user sets the defaultValue
    maskString((defaultValue as string) ?? ``, mask, charset)
  )
  const [maskValue, setMaskValue] = useState(mask.substring(value.length))
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = maskString(e.target.value, mask, charset)

    setMaskValue(mask.substring(newValue.length))
    setValue(newValue)

    onChange?.(e)
  }

  return (
    <span className="usa-input-mask">
      <span
        className="usa-input-mask--content"
        aria-hidden
        data-testid={`${id}Mask`}>
        <i>{value}</i>
        {maskValue}
      </span>
      <TextInput
        data-testid="textInput"
        className={classes}
        id={id}
        maxLength={mask.length}
        onChange={handleChange}
        value={value}
        {...inputProps}
      />
    </span>
  )
}

export default TextInputMask
