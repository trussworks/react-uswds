import React, { ReactElement } from 'react'
import classNames from 'classnames'

type BannerProps = {
  divClassName?: string
  divProps?: JSX.IntrinsicElements['div']
}

export const Banner = ({
  children,
  divClassName,
  divProps,
  className,
  ...sectionProps
}: BannerProps & JSX.IntrinsicElements['section']): ReactElement => {
  const classes = classNames('usa-banner', className)
  const divClasses = classNames('usa-accordion', divClassName)

  return (
    <section className={classes} {...sectionProps}>
      <div className={divClasses} {...divProps}>
        {children}
      </div>
    </section>
  )
}
