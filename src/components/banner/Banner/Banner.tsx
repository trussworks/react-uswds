import React, { ReactElement, forwardRef } from 'react'
import AccordionBase, {
  AccordionBaseRef,
} from '../../accordion/AccordionBase/AccordionBase'
import BannerBase, { BannerBaseProps } from '../BannerBase/BannerBase'
import { AccordionProps } from '../../accordion/Accordion/Accordion'

export type BaseBannerProps = {
  /**
   * @deprecated Use `accordionProps` instead
   */
  divProps?: AccordionProps
  accordionProps?: AccordionProps
}

export type BannerProps = React.ComponentPropsWithRef<typeof Banner>

export type BannerRef = React.ComponentRef<typeof Banner>

export const BannerForwardRef: React.ForwardRefRenderFunction<
  AccordionBaseRef,
  BaseBannerProps & React.PropsWithoutRef<BannerBaseProps>
> = ({ children, divProps, accordionProps, ...props }, ref): ReactElement => {
  return (
    <BannerBase ref={ref} {...props}>
      <AccordionBase {...(accordionProps ?? divProps)}>
        {children}
      </AccordionBase>
    </BannerBase>
  )
}

const Banner = forwardRef(BannerForwardRef)

export default Banner
