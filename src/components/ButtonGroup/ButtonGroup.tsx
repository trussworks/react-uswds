import React from 'react'
import classnames from 'classnames'

export type BaseButtonGroupProps = {
  children: React.ReactNode
  className?: string
  type?: 'default' | 'segmented'
}

export type ButtonGroupProps = BaseButtonGroupProps &
  JSX.IntrinsicElements['ul']

export const ButtonGroup: React.ForwardRefRenderFunction<
  HTMLUListElement,
  ButtonGroupProps
> = (
  { className, children, type = 'default', ...restProps },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-button-group',
    {
      'usa-button-group--segmented': type == 'segmented',
    },
    className
  )

  return (
    <ul ref={ref} className={classes} {...restProps}>
      {React.Children.map(children, (child: React.ReactNode) => {
        return <li className="usa-button-group__item">{child}</li>
      })}
    </ul>
  )
}

export default ButtonGroup
