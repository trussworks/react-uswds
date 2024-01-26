import React, { forwardRef } from 'react'
import ButtonGroupBase, {
  ButtonGroupBaseRef,
} from '../ButtonGroupBase/ButtonGroupBase'
import ButtonGroupItem from '../ButtonGroupItem/ButtonGroupItem'

export type BaseButtonGroupProps = {
  type?: 'default' | 'segmented'
}

export type ButtonGroupProps = React.ComponentPropsWithRef<typeof ButtonGroup>

export type ButtonRef = React.ComponentRef<typeof ButtonGroup>

export const ButtonGroupForwardRef: React.ForwardRefRenderFunction<
  ButtonGroupBaseRef,
  BaseButtonGroupProps & React.ComponentPropsWithoutRef<'ul'>
> = ({ children, ...props }, ref): React.ReactElement => {
  return (
    <ButtonGroupBase ref={ref} {...props}>
      {React.Children.map(children, (child: React.ReactNode) => {
        return <ButtonGroupItem>{child}</ButtonGroupItem>
      })}
    </ButtonGroupBase>
  )
}

const ButtonGroup = forwardRef(ButtonGroupForwardRef)

export default ButtonGroup
