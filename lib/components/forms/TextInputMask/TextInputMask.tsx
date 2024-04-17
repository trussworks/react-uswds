import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import TextInput, { TextInputProps } from '../TextInput/TextInput'
import { maskString } from './utils'

export type TextInputMaskProps = TextInputProps & {
  mask: string
  charset?: string
}

const TextInputMask = ({
  id,
  className,
  mask,
  value: externalValue,
  defaultValue,
  charset,
  onChange,
  ...inputProps
}: TextInputMaskProps): React.ReactElement => {
  const classes = classnames(
    {
      'usa-masked': mask,
    },
    className
  )

  const [value, setValue] = useState(
    // Ensure that this component preserves the expected behavior when a user sets the defaultValue
    maskString((externalValue ?? defaultValue ?? ``) as string, mask, charset)
  )
  useEffect(() => {
    // Make sure this component behaves correctly when used as a controlled component
    setValue(
      maskString(
        ((externalValue ?? defaultValue) as string) ?? ``,
        mask,
        charset
      )
    )
  }, [externalValue])
  const [maskValue, setMaskValue] = useState(mask.substring(value.length))
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = maskString(e.target.value, mask, charset)

    setMaskValue(mask.substring(newValue.length))
    setValue(newValue)

    // Ensure the new value is available to upstream onChange listeners
    e.target.value = newValue

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
