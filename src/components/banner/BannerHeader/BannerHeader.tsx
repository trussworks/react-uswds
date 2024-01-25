import React, { ReactElement, ReactNode, forwardRef } from 'react'
import Grid from '../../grid/Grid/Grid'
import BannerHeaderBase from '../BannerHeaderBase/BannerHeaderBase'
import BannerInner, { BannerInnerProps } from '../BannerInner/BannerInner'
import BannerHeaderText, {
  BannerHeaderTextProps,
} from '../BannerHeaderText/BannerHeaderText'
import BannerHeaderAction, {
  BannerHeaderActionProps,
} from '../BannerHeaderAction/BannerHeaderAction'

export type BaseBannerHeaderProps = {
  isOpen?: boolean
  flagImg: ReactNode
  innerDivProps?: React.PropsWithRef<BannerInnerProps>
  headerText: ReactNode
  headerTextProps?: React.PropsWithRef<BannerHeaderTextProps>
  headerActionText: ReactNode
  headerActionProps?: React.PropsWithRef<BannerHeaderActionProps>
}

export type BannerHeaderProps = React.ComponentPropsWithRef<typeof BannerHeader>

export type BannerHeaderRef = React.ComponentRef<typeof BannerHeader>

export const BannerHeaderForwardRef: React.ForwardRefRenderFunction<
  HTMLElement,
  BaseBannerHeaderProps & React.ComponentPropsWithoutRef<'header'>
> = (
  {
    children,
    isOpen,
    flagImg,
    innerDivProps,
    headerText,
    headerTextProps,
    headerActionText,
    headerActionProps,
    ...props
  },
  ref
): ReactElement => {
  return (
    <BannerHeaderBase ref={ref} isOpen={isOpen} {...props}>
      <BannerInner {...innerDivProps}>
        {flagImg && (
          <Grid col="auto" data-testid="banner-header-flag-div">
            {flagImg}
          </Grid>
        )}
        <Grid
          col="fill"
          tablet={{ col: 'auto' }}
          aria-hidden
          data-testid="banner-header-grid-div">
          <BannerHeaderText {...headerTextProps}>{headerText}</BannerHeaderText>
          <BannerHeaderAction {...headerActionProps}>
            {headerActionText}
          </BannerHeaderAction>
        </Grid>
        {children}
      </BannerInner>
    </BannerHeaderBase>
  )
}

const BannerHeader = forwardRef(BannerHeaderForwardRef)

export default BannerHeader
