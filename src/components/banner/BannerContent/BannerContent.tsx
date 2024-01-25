import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'
import AccordionItemContent, {
  AccordionItemContentProps,
  AccordionItemContentRef,
} from '../../accordion/AccordionItemContent/AccordionItemContent'

export type BaseBannerContentProps = {
  id?: string
}

export type BannerContentProps = React.ComponentPropsWithRef<
  typeof BannerContent
>

export type BannerContentRef = React.ComponentRef<typeof BannerContent>

export const BannerContentForwardRef: React.ForwardRefRenderFunction<
  AccordionItemContentRef,
  BaseBannerContentProps &
    Omit<React.PropsWithoutRef<AccordionItemContentProps>, 'id'>
> = ({ className, id, ...props }, ref): ReactElement => {
  const classes = classNames('usa-banner__content', className)

  return (
    <AccordionItemContent
      ref={ref}
      className={classes}
      id={id ?? 'banner'}
      {...props}
    />
  )
}

const BannerContent = forwardRef(BannerContentForwardRef)

export default BannerContent
