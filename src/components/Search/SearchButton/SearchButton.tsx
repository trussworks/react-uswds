import React from 'react'
import classnames from 'classnames'

import searchImg from '@uswds/uswds/src/img/usa-icons-bg/search--white.svg'

import { Button } from '../../Button/Button'

type SearchLocalization = {
  buttonText: string
}

type SearchButtonProps = {
  size?: 'big' | 'small'
  className?: string
  i18n?: SearchLocalization
}

export const SearchButton = ({
  size,
  className,
  i18n
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
        <Button type="submit">
            {!isSmall && (
                <span className="usa-search__submit-text">{buttonText}</span>
            )}
            <img
                src={searchImg}
                className="usa-search__submit-icon"
                alt={buttonText}
            />
        </Button>
    </div>
  )
}

export default SearchButton
