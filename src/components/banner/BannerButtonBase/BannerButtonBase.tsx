import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'
import AccordionItemButton, {
  AccordionItemButtonProps,
  AccordionItemButtonRef,
} from '../../accordion/AccordionButton/AccordionButton'

export type BannerButtonBaseProps = React.ComponentPropsWithRef<
  typeof BannerButtonBase
>

export type BannerButtonBaseRef = React.ComponentRef<typeof BannerButtonBase>

export const BannerButtonBaseForwardRef: React.ForwardRefRenderFunction<
  AccordionItemButtonRef,
  Omit<React.PropsWithoutRef<AccordionItemButtonProps>, 'itemId'>
> = ({ className, ...props }, ref): ReactElement => {
  const classes = classNames('usa-banner__button', className)

  return (
    <AccordionItemButton
      itemId="banner"
      ref={ref}
      className={classes}
      {...props}
    />
  )
}

const BannerButtonBase = forwardRef(BannerButtonBaseForwardRef)

export default BannerButtonBase
