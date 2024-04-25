import React, { useRef, useEffect } from 'react'

export type ComboBoxInputProps = {
  focused?: boolean
} & JSX.IntrinsicElements['input']

const ComboBoxInput = ({
  focused,
  ...inputProps
}: ComboBoxInputProps): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus()
    }
  })

  return (
    <input
      type="text"
      className="usa-combo-box__input"
      data-testid="combo-box-input"
      autoCapitalize="off"
      autoComplete="off"
      ref={inputRef}
      {...inputProps}
    />
  )
}

export default ComboBoxInput
