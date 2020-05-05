/*  eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { SocialLinks } from './SocialLinks'

const links = [
  <a
    key="facebook"
    className="usa-social-link usa-social-link--facebook"
    href="#">
    <span>Facebook</span>
  </a>,
  <a
    key="twitter"
    className="usa-social-link usa-social-link--twitter"
    href="#">
    <span>Twitter</span>
  </a>,
  <a
    key="youtube"
    className="usa-social-link usa-social-link--youtube"
    href="#">
    <span>YouTube</span>
  </a>,
  <a key="rss" className="usa-social-link usa-social-link--rss" href="#">
    <span>RSS</span>
  </a>,
]
export const Example = (): React.ReactElement => <SocialLinks links={links} />
