import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'

export type BaseBannerProps = {
  divProps?: JSX.IntrinsicElements['div']
}

export type BannerProps = BaseBannerProps & JSX.IntrinsicElements['section']

export const BannerForwardRef: React.ForwardRefRenderFunction<HTMLElement, BannerProps> = ({
  children,
  divProps,
  className,
  ...sectionProps
}, ref): ReactElement => {
  const classes = classNames('usa-banner', className)

  const { className: divClassName, ...remainingDivProps } = divProps || {}
  const divClasses = classNames('usa-accordion', divClassName)

  return (
    <section ref={ref} className={classes} {...sectionProps}>
      <div className={divClasses} {...remainingDivProps}>
        {children}
      </div>
    </section>
  )
}

export const Banner = forwardRef(BannerForwardRef)

export default Banner;