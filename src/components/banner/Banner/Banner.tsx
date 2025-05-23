import React, { type JSX } from 'react'
import classNames from 'classnames'

export type BannerProps = {
  divProps?: JSX.IntrinsicElements['div']
} & JSX.IntrinsicElements['section']

export const Banner = ({
  children,
  divProps,
  className,
  ...sectionProps
}: BannerProps): JSX.Element => {
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
