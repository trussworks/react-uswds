import React from 'react'
import classnames from 'classnames'

import { Button } from '../Button/Button'
import { Form } from '../forms/Form/Form'
import { Label } from '../forms/Label/Label'
import { TextInput } from '../forms/TextInput/TextInput'

interface SearchInputProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  big?: boolean
  small?: boolean
  className?: string
}

export const SearchInput = (props: SearchInputProps): React.ReactElement => {
  const { onSubmit, big, small, className } = props
  const classes = classnames(
    'usa-search',
    {
      'usa-search--small': small,
      'usa-search--big': big,
    },
    className
  )

  return (
    <Form onSubmit={onSubmit} className={classes} role="search" search={true}>
      <Label search={true} htmlFor="search-field">
        Search small
      </Label>
      <TextInput id="search-field" type="search" name="search" />
      <Button type="submit">
        <span className={small ? 'usa-sr-only' : 'usa-search__submit-text'}>
          Search
        </span>
      </Button>
    </Form>
  )
}

export default SearchInput
