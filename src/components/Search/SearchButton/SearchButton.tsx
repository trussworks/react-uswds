import React from 'react'

import searchImg from '@uswds/uswds/src/img/usa-icons-bg/search--white.svg'

import { Button } from '../../Button/Button'

type SearchLocalization = {
  buttonText: string
}

type SearchButtonProps = {
  size?: 'big' | 'small'
  i18n?: SearchLocalization
}

export const SearchButton = ({
  size,
  i18n
}: SearchButtonProps): React.ReactElement => {
  const buttonText = i18n?.buttonText || 'Search'
  const isSmall = size === 'small'

  return (
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
  )
}

export default SearchButton
