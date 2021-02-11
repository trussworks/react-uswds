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
  
  const style: React.CSSProperties = {}
  
  const tooltipClasses = classnames('usa-tooltip', 'usa-button', styles.tooltip, {
    'usa-tooltip--top': position === 'top',
    'usa-tooltip--bottom': position === 'bottom',
    'usa-tooltip--right': position === 'right',
    'usa-tooltip--left': position === 'left',
  })
  const tooltipTextClasses = classnames(styles.tooltipText)
  console.log('props', props)
  console.log('tooltipClasses', tooltipClasses)
  console.log('tooltipTextClasses', tooltipTextClasses)

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