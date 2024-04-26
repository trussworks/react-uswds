import React from 'react'
import classnames from 'classnames'
import Grid, { type GridProps } from '../../grid/Grid/Grid.js'

export type AddressProps = {
  size?: 'big' | 'medium' | 'slim'
  /*
     Contact info items - e.g. anchor tags or text for email, phone, website, etc.
   */
  items: React.ReactNode[]
} & JSX.IntrinsicElements['address']

const Address = ({
  size,
  className,
  items,
  ...props
}: AddressProps): React.ReactElement => {
  const isBig = size === 'big'
  const isMedium = size === 'medium'
  const isSlim = size === 'slim'

  const addressClasses = classnames('usa-footer__address', className)

  const itemGridProps = {
    col: isBig || isMedium || isSlim ? 'auto' : undefined,
    mobileLg: isSlim ? { col: 12 } : undefined,
    desktop: isSlim ? { col: 'auto' } : undefined,
  } satisfies GridProps

  return (
    <address className={addressClasses} {...props}>
      {isSlim ? (
        <Grid row gap>
          {items.map((item, i) => (
            <Grid key={`addressItem-${i}`} {...itemGridProps}>
              <div className="usa-footer__contact-info">{item}</div>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid row gap className="usa-footer__contact-info">
          {items.map((item, i) => (
            <Grid key={`addressItem-${i}`} {...itemGridProps}>
              {item}
            </Grid>
          ))}
        </Grid>
      )}
    </address>
  )
}

export default Address
