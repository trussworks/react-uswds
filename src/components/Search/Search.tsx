import React from 'react'
import classnames from 'classnames'
import { Button } from '../Button/Button'
import { Form, OptionalFormProps } from '../forms/Form/Form'
import { Label } from '../forms/Label/Label'
import { TextInput } from '../forms/TextInput/TextInput'

type SearchLocalization = {
  buttonText: string
}

type SearchInputProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  size?: 'big' | 'small'
  className?: string
  inputName?: string
  inputId?: string
  placeholder?: string
  label?: React.ReactNode
  i18n?: SearchLocalization
}

export const Search = ({
  onSubmit,
  size,
  className,
  placeholder,
  inputName = 'search',
  label = 'Search',
  inputId = 'search-field',
  i18n,
  ...formProps
}: SearchInputProps & OptionalFormProps): React.ReactElement => {
  const buttonText = i18n?.buttonText || 'Search'

  const isBig = size === 'big'
  const isSmall = size === 'small'
  const classes = classnames(
    'usa-search',
    {
      'usa-search--small': isSmall,
      'usa-search--big': isBig,
    },
    className
  )

  return (
    <Form
      onSubmit={onSubmit}
      className={classes}
      role="search"
      search={true}
      {...formProps}>
      <Label srOnly={true} htmlFor={inputId}>
        {label}
      </Label>
      <TextInput
        id={inputId}
        type="search"
        name={inputName}
        placeholder={placeholder}
      />
      <Button type="submit">
        <span className={isSmall ? 'usa-sr-only' : 'usa-search__submit-text'}>
          {buttonText}
        </span>
      </Button>
    </Form>
  )
}

export default Search
