import React, { ReactNode, type JSX } from 'react'
import classNames from 'classnames'

type BannerHeaderProps = {
  isOpen: boolean
  flagImg: ReactNode
  innerDivProps?: JSX.IntrinsicElements['div']
  headerText: ReactNode
  headerTextProps?: JSX.IntrinsicElements['p']
  headerActionText: ReactNode
  headerActionProps?: JSX.IntrinsicElements['p']
}

export const BannerHeader = ({
  children,
  isOpen,
  flagImg,
  innerDivProps,
  headerText,
  headerTextProps,
  headerActionText,
  headerActionProps,
  className,
  ...headerProps
}: BannerHeaderProps & JSX.IntrinsicElements['header']): JSX.Element => {
  const classes = classNames(
    'usa-banner__header',
    {
      'usa-banner__header--expanded': isOpen,
    },
    className
  )

  const { className: innerDivClassName, ...remainingInnerDivProps } =
    innerDivProps || {}
  const innerDivClasses = classNames('usa-banner__inner', innerDivClassName)

  const { className: headerTextClassName, ...remainingHeaderTextProps } =
    headerTextProps || {}
  const headerTextClasses = classNames(
    'usa-banner__header-text',
    headerTextClassName
  )

  const { className: headerActionClassName, ...remainingHeaderActionProps } =
    headerActionProps || {}
  const headerActionClasses = classNames(
    'usa-banner__header-action',
    headerActionClassName
  )

  return (
    <header className={classes} {...headerProps}>
      <div
        className={innerDivClasses}
        {...remainingInnerDivProps}
        data-testid="banner-header-inner-div">
        {flagImg && (
          <div className="grid-col-auto" data-testid="banner-header-flag-div">
            {flagImg}
          </div>
        )}
        <div
          className="grid-col-fill tablet:grid-col-auto"
          aria-hidden
          data-testid="banner-header-grid-div">
          <p className={headerTextClasses} {...remainingHeaderTextProps}>
            {headerText}
          </p>
          <p
            className={headerActionClasses}
            aria-hidden="true"
            {...remainingHeaderActionProps}>
            {headerActionText}
          </p>
        </div>
        {children}
      </div>
    </header>
  )
}
