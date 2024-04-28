/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import classnames from 'classnames'
import Grid from '../../grid/Grid/Grid.js'

export interface BaseSocialLinksProps {
  links: React.ReactNode[]
}

export type SocialLinksProps = BaseSocialLinksProps &
  JSX.IntrinsicElements['div']

const SocialLinks = ({
  className,
  links,
}: SocialLinksProps): React.ReactElement => {
  const classes = classnames('usa-footer__social-links', className)

  return (
    <Grid row gap={1} className={classes}>
      {links.map((link, i) => (
        <Grid col="auto" key={`socialLink${i}`}>
          {link}
        </Grid>
      ))}
    </Grid>
  )
}

export default SocialLinks
