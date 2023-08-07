import React from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../types/headingLevel'
// import { Link } from '../Link/Link'

type InPageNavigationProps = {
  className?: string
  headingLevel?: HeadingLevel
  rootMargin?: string
  scrollOffset?: number
  threshold?: number
  title?: string
}

export const InPageNavigation = ({
  className,
  headingLevel,
  // rootMargin,
  // scrollOffset,
  // threshold,
  title,
}: InPageNavigationProps): React.ReactElement => {
  const classes = classnames('usa-in-page-nav', {}, className)
  const Heading = headingLevel || 'h4'
  // const ROOT_MARGIN = '0px 0px 0px 0px'
  // const SCROLL_OFFSET = 0
  // const NAV_THRESHOLD = '1'
  const TITLE = 'On this page'

  // const observerOptions = {
  //   root: null,
  //   rootMargin: rootMargin || ROOT_MARGIN,
  //   threshold: [threshold] || [NAV_THRESHOLD],
  // }
  // const observeSections = new window.IntersectionObserver(setActive, observerOptions);

  const anchorTags: string[] = []
  // anchorTags.forEach((tag) => {
  //   observeSections.observe(tag);
  // });

  return (
    <aside
      className={classes}
      aria-label={title || TITLE}
      data-testid="InPageNavigation">
      <nav>
        <Heading className="usa-in-page-nav__heading">{title || TITLE}</Heading>
        <ul className="usa-in-page-nav__list">
          {anchorTags.map((item, i) => (
            <li
              key={`usa-in-page-nav__item_${i}`}
              className="usa-in-page-nav__item">
              {item}
              {/* <Link href={item.href}>{item.heading}</Link> */}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default InPageNavigation
