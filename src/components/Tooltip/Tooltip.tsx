import React, { useState} from 'react'
import classnames from 'classnames'
import styles from './Tooltip.module.css'


interface TooltipProps {
  label: string,
  position: 'top' | 'bottom' | 'left' | 'right'
  className?: string
} 


export const Tooltip = (
  
  props: TooltipProps & JSX.IntrinsicElements['span']
  ): React.ReactElement => {
    const {label, position, children, className, ...spanProps } = props
    
    const [isVisible, setVisible] = useState(false)
  
  const tooltipClasses = classnames('usa-tooltip__body', {
    'usa-tooltip__body--top': position === 'top',
    'usa-tooltip__body--bottom': position === 'bottom',
    'usa-tooltip__body--right': position === 'right',
    'usa-tooltip__body--left': position === 'left',
    'is-visible': isVisible,
    'is-set': isVisible,
  })
  const tooltipTextClasses = classnames(styles.tooltipText)

  return (
    <span className="usa-tooltip" {...spanProps}
      onMouseEnter={() => {setVisible(true)}}
      onMouseLeave={() => {setVisible(false)}}
      >
      {children}
      <span className={tooltipClasses} role="tooltip">
        {label}
      </span>
    </span>   // the span that wraps the element with have the tooltip class
  )
}

export default Tooltip