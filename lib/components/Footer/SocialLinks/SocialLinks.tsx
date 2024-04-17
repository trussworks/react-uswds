/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import classnames from 'classnames'

export type SocialLinksProps = {
  links: React.ReactNode[]
} & JSX.IntrinsicElements['div']

const SocialLinks = ({
  className,
  links,
}: SocialLinksProps): React.ReactElement => {
  const classes = classnames(
    'usa-footer__social-links grid-row grid-gap-1',
    className
  )
  return (
    <div className={classes}>
      {links.map((link, i) => (
        <div key={`socialLink${i}`} className="grid-col-auto">
          {link}
        </div>
      ))}
    </div>
  )
}

export default SocialLinks
