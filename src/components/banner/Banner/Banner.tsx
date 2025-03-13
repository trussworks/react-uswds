import React, { type JSX } from 'react'
import classNames from 'classnames'

type BannerProps = {
  divProps?: JSX.IntrinsicElements['div']
}

export const Banner = ({
  children,
  divProps,
  className,
  ...sectionProps
}: BannerProps & JSX.IntrinsicElements['section']): JSX.Element => {
  const classes = classNames('usa-banner', className)

  const { className: divClassName, ...remainingDivProps } = divProps || {}
  const divClasses = classNames('usa-accordion', divClassName)

  return (
    <section className={classes} {...sectionProps}>
      <div className={divClasses} {...remainingDivProps}>
        {children}
      </div>
    </section>
  )
}
