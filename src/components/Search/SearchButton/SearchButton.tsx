import React from 'react'
import classnames from 'classnames'

import { Icon } from '../../Icon/Icons'

import { Button } from '../../Button/Button'

type SearchLocalization = {
  buttonText: string
}

type SearchButtonProps = {
  size?: 'big' | 'small'
  className?: string
  i18n?: SearchLocalization
  buttonAriaLabel?: string
}

export const SearchButton = ({
  size,
  className,
  i18n,
  buttonAriaLabel,
}: SearchButtonProps): React.ReactElement => {
  const buttonText = i18n?.buttonText || 'Search'
  const isSmall = size === 'small'
  const isBig = size === 'big'

  const classes = classnames(
    {
      'usa-search--small': isSmall,
      'usa-search--big': isBig,
    },
    className
  )
  return (
    <div className={classes}>
      <Button aria-label={buttonAriaLabel || buttonText} type="submit">
        {!isSmall && (
          <span className="usa-search__submit-text">{buttonText}</span>
        )}
        <Icon.Search
          className="usa-search__submit-icon"
          name={buttonText}
          size={3}
        />
      </Button>
    </div>
  )
}

export default SearchButton
