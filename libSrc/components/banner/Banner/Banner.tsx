import React, { type ReactElement } from 'react'
import classNames from 'classnames'

export type BannerProps = {
  divProps?: JSX.IntrinsicElements['div']
} & JSX.IntrinsicElements['section']

const Banner = ({
  children,
  divProps,
  className,
  ...sectionProps
}: BannerProps): ReactElement => {
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

export default Banner
