import React, { ReactElement, forwardRef } from 'react'
import { BreadcrumbProps } from '../Breadcrumb/Breadcrumb'
import BreadcrumbBarBase, {
  BreadcrumbBarBaseProps,
  BreadcrumbBarBaseRef,
} from '../BreadcrumbBarBase/BreadcrumbBarBase'
import BreadcrumbList, {
  BreadcrumbListProps,
} from '../BreadcrumbList/BreadcrumbList'

export type BaseBreadcrumbBarProps = {
  children: ReactElement<BreadcrumbProps> | ReactElement<BreadcrumbProps>[]
  variant?: 'default' | 'wrap'
  className?: string
  /**
   * @deprecated Use root properties
   */
  navProps?: React.PropsWithRef<BreadcrumbBarBaseProps>
  listProps?: React.PropsWithRef<BreadcrumbListProps>
}

export type BreadcrumbBarProps = React.ComponentPropsWithRef<
  typeof BreadcrumbBar
>

export type BreadcrumbBarRef = React.ComponentRef<typeof BreadcrumbBar>

export const BreadcrumbBarForwardRef: React.ForwardRefRenderFunction<
  BreadcrumbBarBaseRef,
  BaseBreadcrumbBarProps & React.PropsWithoutRef<BreadcrumbBarBaseProps>
> = ({ children, navProps, listProps, ...props }, ref): React.ReactElement => {
  return (
    <BreadcrumbBarBase ref={ref} {...(navProps ?? props)}>
      <BreadcrumbList {...listProps}>{children}</BreadcrumbList>
    </BreadcrumbBarBase>
  )
}

const BreadcrumbBar = forwardRef(BreadcrumbBarForwardRef)

export default BreadcrumbBar
