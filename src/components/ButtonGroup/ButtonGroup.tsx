import React from 'react'
import classnames from 'classnames'

type ButtonGroupProps = {
  children: React.ReactNode
  className?: string
  type?: 'default' | 'segmented'
} & JSX.IntrinsicElements['ul']

export const ButtonGroup = ({
  className,
  children,
  type = 'default',
  ...restProps
}: ButtonGroupProps): React.ReactElement => {
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
