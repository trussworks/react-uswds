import React from 'react'
import classnames from 'classnames'
import { deprecationWarning } from '../../deprecation'

import { Button } from '../Button/Button'
import { Form, OptionalFormProps } from '../forms/Form/Form'
import { Label } from '../forms/Label/Label'
import { TextInput } from '../forms/TextInput/TextInput'

interface SearchInputProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  inputId?: string
  inputName?: string
  size?: 'big' | 'small'
  /**
   * @deprecated since 1.6.0, use size
   */
  big?: boolean
  /**
   * @deprecated since 1.6.0, use size
   */
  small?: boolean
  label?: React.ReactNode
  className?: string
  placeholder?: string
}

export const Search = ({
  onSubmit,
  inputId = 'search-field',
  inputName = 'search',
  size,
  big,
  small,
  label = 'Search',
  className,
  placeholder,
  ...formProps
}: SearchInputProps & OptionalFormProps): React.ReactElement => {
  if (big) {
    deprecationWarning('Search property big is deprecated.  Use size')
  }
  if (small) {
    deprecationWarning('Search property small is deprecated.  Use size')
  }

  const isBig = size ? size === 'big' : big
  const isSmall = size ? size === 'small' : small
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
          {label}
        </span>
      </Button>
    </Form>
  )
}

export default Search
