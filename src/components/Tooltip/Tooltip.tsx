import React from 'react'
import classnames from 'classnames'
import styles from './Tooltip.module.css'


interface TooltipProps {
  label: string,
  position: 'top' | 'bottom' | 'left' | 'right'
  children: React.ReactNode,
  className: string
}

export const Tooltip = (
  props: TooltipProps
): React.ReactElement => {
  const {children, label, position, className} = props
  console.log(props)

  const style: React.CSSProperties = {}

  const tooltipClasses = classnames(styles.tooltip, className)
  const tooltipTextClasses = classnames(styles.tooltipText)
  return (
    <button
      className={tooltipClasses}
      data-position={position}
      title={label}>
        {children}
        <span
          className={tooltipTextClasses}
          
          >
            {label}
          </span>
    </button>
  )
}

export default Tooltip