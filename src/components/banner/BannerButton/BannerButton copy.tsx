import React, { ReactElement, forwardRef } from 'react'
import classNames from 'classnames'
import AccordionItemButton, {
  AccordionItemButtonProps,
  AccordionItemButtonRef,
} from '../../accordion/AccordionButton/AccordionButton'
import BannerButtonText from '../BannerButtonText/BannerButtonText'

export type BaseBannerButtonProps = {
  spanProps?: React.ComponentPropsWithRef<'span'>
}

export type BannerButtonProps = React.ComponentPropsWithRef<typeof BannerButton>

export type BannerButtonRef = React.ComponentRef<typeof BannerButton>

export const BannerButtonForwardRef: React.ForwardRefRenderFunction<
  AccordionItemButtonRef,
  BaseBannerButtonProps &
    Omit<React.PropsWithoutRef<AccordionItemButtonProps>, 'itemId'>
> = ({ children, className, spanProps, ...props }, ref): ReactElement => {
  const classes = classNames('usa-banner__button', className)

  return (
    <AccordionItemButton
      itemId="banner"
      ref={ref}
      className={classes}
      {...props}>
      <BannerButtonText {...spanProps}>{children}</BannerButtonText>
    </AccordionItemButton>
  )
}

const BannerButton = forwardRef(BannerButtonForwardRef)

export default BannerButton
