import React, { ReactElement, ReactNode } from 'react'
import classNames from 'classnames'

type BannerHeaderProps = {
  isOpen: boolean
  flagImg: ReactNode
  innerDivClassName?: string
  innerDivProps?: JSX.IntrinsicElements['div']
  headerText: ReactNode
  headerTextClassName?: string
  headerTextProps?: JSX.IntrinsicElements['p']
  headerActionText: ReactNode
  headerActionClassName?: string
  headerActionProps?: JSX.IntrinsicElements['p']
}

export const BannerHeader = ({
  children,
  isOpen,
  flagImg,
  innerDivClassName,
  innerDivProps,
  headerText,
  headerTextClassName,
  headerTextProps,
  headerActionText,
  headerActionClassName,
  headerActionProps,
  className,
  ...headerProps
}: BannerHeaderProps & JSX.IntrinsicElements['header']): ReactElement => {
  const headerClasses = classNames('usa-banner__header', {
    'usa-banner__header--expanded': isOpen,
    className,
  })
  const innerDivClasses = classNames('usa-banner__inner', innerDivClassName)
  const headerTextClasses = classNames(
    'usa-banner__header-text',
    headerTextClassName
  )
  const headerActionClasses = classNames(
    'usa-banner__header-action',
    headerActionClassName
  )

  return (
    <header className={headerClasses} {...headerProps}>
      <div className={innerDivClasses} {...innerDivProps}>
        {flagImg && <div className="grid-col-auto">{flagImg}</div>}
        <div className="grid-col-fill tablet:grid-col-auto">
          <p className={headerTextClasses} {...headerTextProps}>
            {headerText}
          </p>
          <p
            className={headerActionClasses}
            aria-hidden="true"
            {...headerActionProps}>
            {headerActionText}
          </p>
        </div>
        {children}
      </div>
    </header>
  )
}
