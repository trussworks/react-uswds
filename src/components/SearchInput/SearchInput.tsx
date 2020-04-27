import React from 'react'
import classnames from 'classnames'

import { Button } from '../Button/Button'
import { Form } from '../forms/Form/Form'
import { Label } from '../forms/Label/Label'
import { TextInput } from '../forms/TextInput/TextInput'

interface SearchInputProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  className?: string
}

export const SearchInput = (props: SearchInputProps): React.ReactElement => {
  const { onSubmit, className } = props
  const classes = classnames('usa-search usa-search--small', className)

  return (
    <Form onSubmit={onSubmit} className={classes} role="search">
      <Label className="usa-sr-only" htmlFor="basic-search-field-small">
        Search small
      </Label>
      <TextInput
        className="usa-input"
        id="basic-search-field-small"
        type="search"
        name="search"
      />
      <Button type="submit">
        <span className="usa-sr-only">Search</span>
      </Button>
    </Form>
  )
}

export default SearchInput
