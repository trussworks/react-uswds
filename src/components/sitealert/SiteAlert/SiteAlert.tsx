import React, { forwardRef } from 'react'
import classnames from 'classnames'
import Alert from '../../alert/Alert/Alert'
import { HeadingLevel } from '../../../types/headingLevel'

export type SiteAlertType = 'info' | 'emergency'

export interface BaseSiteAlertProps {
  type: SiteAlertType
  heading?: string
  isNoIcon?: boolean
  isSlim?: boolean
  className?: string
  headingLevel?: HeadingLevel

  /**
   * @deprecated Use `type` instead
   */
  variant?: SiteAlertType
  /**
   * @deprecated Use `isSlim` instead
   */
  slim?: boolean
  /**
   * @deprecated Use `isNoIcon` instead
   */
  showIcon?: boolean
}

/**
 * @todo Remove and replace usage with {@link BaseSiteAlertProps}
 */
export type SiteAlertPropsWithDeprecation =
  | ({
      /**
       * @deprecated Use `type` instead
       */
      variant: SiteAlertType
      type?: never
    } & Omit<BaseSiteAlertProps, 'variant' | 'type'>)
  | ({
      /**
       * @deprecated Use `type` instead
       */
      variant?: never
      type: SiteAlertType
    } & Omit<BaseSiteAlertProps, 'variant' | 'type'>)

export type SiteAlertProps = React.ComponentPropsWithoutRef<typeof SiteAlert>

export type SiteAlertRef = React.ComponentRef<typeof SiteAlert>

export const SiteAlertForwardRef: React.ForwardRefRenderFunction<
  HTMLElement,
  SiteAlertPropsWithDeprecation & React.ComponentPropsWithoutRef<'section'>
> = (
  {
    children,
    heading,
    className,
    headingLevel = 'h3',
    variant,
    showIcon,
    slim,
    isSlim = slim,
    isNoIcon = typeof showIcon === 'boolean' ? !showIcon : false,
    type = variant,
    ...sectionProps
  },
  ref
): React.ReactElement => {
  const classes = classnames(
    'usa-site-alert',
    {
      'usa-site-alert--info': type === 'info',
      'usa-site-alert--emergency': type === 'emergency',
      'usa-site-alert--no-heading': heading === undefined && !isSlim,
      'usa-site-alert--no-icon': isNoIcon,
      'usa-site-alert--slim': isSlim,
    },
    className
  )
  const isWrapped = typeof children === 'string'

  return (
    <section
      ref={ref}
      data-testid="siteAlert"
      className={classes}
      aria-label="Site alert"
      {...sectionProps}>
      <Alert
        isValidation={!isWrapped}
        headingLevel={headingLevel}
        heading={heading}>
        {children}
      </Alert>
    </section>
  )
}

const SiteAlert = forwardRef(SiteAlertForwardRef)

export default SiteAlert
