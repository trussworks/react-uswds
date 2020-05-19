import React from 'react'
import classnames from 'classnames'

import { Button } from '../Button/Button'
import { Form } from '../forms/Form/Form'
import { Label } from '../forms/Label/Label'
import { TextInput } from '../forms/TextInput/TextInput'

interface SearchInputProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  id?: string
  name?: string
  big?: boolean
  small?: boolean
  label?: React.ReactNode
  className?: string
}

export const Search = (
  props: SearchInputProps & React.FormHTMLAttributes<HTMLFormElement>
): React.ReactElement => {
  const {
    onSubmit,
    id = 'search-field',
    name = 'search',
    big,
    small,
    label = 'Search',
    className,
    ...formProps
  } = props
  const classes = classnames(
    'usa-search',
    {
      'usa-search--small': small,
      'usa-search--big': big,
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
      <Label srOnly={true} htmlFor={id}>
        {label}
      </Label>
      <TextInput id={id} type="search" name={name} />
      <Button type="submit">
        <span className={small ? 'usa-sr-only' : 'usa-search__submit-text'}>
          Search
        </span>
      </Button>
    </Form>
  )
}

export default Search
