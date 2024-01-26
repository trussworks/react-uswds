import React, { forwardRef } from 'react'
import classnames from 'classnames'

import { Icon } from '../../Icon/Icons'

import Button from '../../button/Button/Button'

export type SearchLocalization = {
  buttonText: string
}

export type BaseSearchButtonProps = {
  size?: 'big' | 'small'
  i18n?: SearchLocalization
}

export type SearchButtonProps = BaseSearchButtonProps &
  JSX.IntrinsicElements['button']

export const SearchButtonForwardRef: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  SearchButtonProps
> = ({ size, className, i18n, ...props }, ref): React.ReactElement => {
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
      <Button type="submit" {...props} ref={ref}>
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

export const SearchButton = forwardRef(SearchButtonForwardRef)

export default SearchButton
