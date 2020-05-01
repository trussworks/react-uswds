import React from 'react'
import classnames from 'classnames'

interface SearchInputProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  className?: string
}

export const SearchInput = (
  props: SearchInputProps & React.FormHTMLAttributes<HTMLFormElement>
): React.ReactElement => {
  const { onSubmit, className, ...formProps } = props
  const classes = classnames('usa-search usa-search--small', className)

  return (
    <form
      data-testid="searchInput"
      className={classes}
      role="search"
      onSubmit={onSubmit}
      {...formProps}>
      <label className="usa-sr-only" htmlFor="basic-search-field-small">
        Search small
      </label>
      <input
        className="usa-input"
        id="basic-search-field-small"
        type="search"
        name="search"
      />
      <button className="usa-button" type="submit">
        <span className="usa-sr-only">Search</span>
      </button>
    </form>
  )
}

export default SearchInput
