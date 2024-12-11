import { ReactElement, JSX } from 'react'
import classNames from 'classnames'

type BannerContentProps = {
  isOpen: boolean
}

export const BannerContent = ({
  children,
  isOpen,
  className,
  ...divProps
}: BannerContentProps & JSX.IntrinsicElements['div']): ReactElement => {
  const classes = classNames(
    'usa-banner__content usa-accordion__content',
    className
  )

  return (
    <div className={classes} hidden={!isOpen} {...divProps}>
      {children}
    </div>
  )
}
