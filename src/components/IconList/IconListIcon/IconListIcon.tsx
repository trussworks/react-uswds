import classnames from 'classnames'
import { ReactElement, ReactNode, JSX } from 'react'

interface IconListIconProps {
  className?: string
  children: ReactNode
}

export const IconListIcon = ({
  className,
  children,
  ...divProps
}: IconListIconProps & JSX.IntrinsicElements['div']): ReactElement => {
  const classes = classnames(className, 'usa-icon-list__icon')

  return (
    <div className={classes} {...divProps} data-testid="iconListIcon">
      {children}
    </div>
  )
}
export default IconListIconProps
