import React, { type ReactElement, type ReactNode } from 'react'
import classNames from 'classnames'
import Grid from '../../grid/Grid/Grid.js'

export interface BaseBannerHeaderProps {
  isOpen: boolean
  flagImg: ReactNode
  innerDivProps?: JSX.IntrinsicElements['div']
  headerText: ReactNode
  headerTextProps?: JSX.IntrinsicElements['p']
  headerActionText: ReactNode
  headerActionProps?: JSX.IntrinsicElements['p']
}

export type BannerHeaderProps = BaseBannerHeaderProps &
  JSX.IntrinsicElements['header']

const BannerHeader = ({
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
}: BannerHeaderProps): ReactElement => {
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
          <Grid col="auto" data-testid="banner-header-flag-div">
            {flagImg}
          </Grid>
        )}
        <Grid
          col="fill"
          tablet={{ col: 'auto' }}
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
        </Grid>
        {children}
      </div>
    </header>
  )
}

export default BannerHeader
