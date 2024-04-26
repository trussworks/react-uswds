import React from 'react'
import classnames from 'classnames'
import Grid, { type GridProps } from '../../grid/Grid/Grid.js'

export type LogoProps = {
  size?: 'big' | 'medium' | 'slim'
  heading?: React.ReactNode
  image: React.ReactNode
} & JSX.IntrinsicElements['div']

const Logo = ({
  size,
  heading,
  image,
  className,
  ...props
}: LogoProps): React.ReactElement => {
  const isBig = size === 'big'
  const isMedium = size === 'medium'
  const isSlim = size === 'slim'

  const containerClasses = classnames('usa-footer__logo', className)

  const containerGridProps = {
    row: true,
    mobileLg: isBig || isMedium ? { col: 6, gap: 2 } : undefined,
    gap: isSlim ? 2 : undefined,
  } satisfies GridProps

  const columnGridProps = {
    mobileLg: isBig || isMedium ? { col: 'auto' } : undefined,
    col: isSlim ? 'auto' : undefined,
  } satisfies GridProps

  return (
    <Grid
      className={containerClasses}
      data-testid="footerLogo"
      {...containerGridProps}
      {...props}>
      <Grid {...columnGridProps}>{image}</Grid>
      {heading && <Grid {...columnGridProps}>{heading}</Grid>}
    </Grid>
  )
}

export default Logo
