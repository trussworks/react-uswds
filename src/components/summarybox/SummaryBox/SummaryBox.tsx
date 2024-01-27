import React, { forwardRef } from 'react'

import SummaryBoxBase, {
  SummaryBoxBaseProps,
  SummaryBoxBaseRef,
} from '../SummaryBoxBase/SummaryBoxBase'
import SummaryBoxBody from '../SummaryBoxBody/SummaryBoxBody'

export type SummaryBoxProps = JSX.IntrinsicElements['div']

export const SummaryBoxForwardRef: React.ForwardRefRenderFunction<
  SummaryBoxBaseRef,
  SummaryBoxBaseProps
> = ({ children, ...props }, ref): React.ReactElement => {
  return (
    <SummaryBoxBase ref={ref} {...props}>
      <SummaryBoxBody>{children}</SummaryBoxBody>
    </SummaryBoxBase>
  )
}

const SummaryBox = forwardRef(SummaryBoxForwardRef)

export default SummaryBox
