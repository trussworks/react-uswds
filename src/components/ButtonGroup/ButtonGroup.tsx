import React from 'react'
import classnames from 'classnames'

// Types
type ButtonGroupProps = {
  children: React.ReactNode
  className?: string
  type?: 'default' | 'segmented'
} & JSX.IntrinsicElements['ul']

export function ButtonGroup<FCProps = ButtonGroupProps>(
  props: ButtonGroupProps
): React.ReactElement {
  const { className, children, type = 'default', ...restProps } = props

  const classes = classnames(
    'usa-button-group',
    {
      'usa-button-group--segmented': type == 'segmented',
    },
    className
  )

  return (
    <ul className={classes} {...restProps}>
      {React.Children.map(children, (child: React.ReactNode) => {
        return <li className="usa-button-group__item">{child}</li>
      })}
    </ul>
  )
}

export default ButtonGroup
