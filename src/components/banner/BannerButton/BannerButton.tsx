import React, { ReactElement, forwardRef } from 'react'
import BannerButtonText from '../BannerButtonText/BannerButtonText'
import BannerButtonBase, {
  BannerButtonBaseProps,
  BannerButtonBaseRef,
} from '../BannerButtonBase/BannerButtonBase'

export type BaseBannerButtonProps = {
  /**
   * @deprecated Use `textProps` instead
   */
  spanProps?: React.PropsWithRef<BannerButtonBaseProps>
  textProps?: React.PropsWithRef<BannerButtonBaseProps>
}

export type BannerButtonProps = React.ComponentPropsWithRef<typeof BannerButton>

export type BannerButtonRef = React.ComponentRef<typeof BannerButton>

export const BannerButtonForwardRef: React.ForwardRefRenderFunction<
  BannerButtonBaseRef,
  BaseBannerButtonProps & React.PropsWithoutRef<BannerButtonBaseProps>
> = ({ children, spanProps, textProps, ...props }, ref): ReactElement => {
  return (
    <BannerButtonBase ref={ref} {...props}>
      <BannerButtonText {...(textProps ?? spanProps)}>
        {children}
      </BannerButtonText>
    </BannerButtonBase>
  )
}

const BannerButton = forwardRef(BannerButtonForwardRef)

export default BannerButton
