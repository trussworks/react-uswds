import React from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../types/headingLevel'
import { Link } from '../Link/Link'

export type ContentType = [heading: HeadingLevel, text: string, href: string]

type InPageNavigationProps = {
  className?: string
  content: JSX.Element
  headingLevel?: HeadingLevel
  rootMargin?: string
  scrollOffset?: number
  threshold?: number
  title?: string
}

export const InPageNavigation = ({
  className,
  content,
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
  // const THRESHOLD = '1'
  const TITLE = 'On this page'
  const sectionHeadings = content.props.children.filter(
    (el: JSX.Element) => el.type === 'h2' || el.type === 'h3'
  )
  // const observerOptions = {
  //   root: null,
  //   rootMargin: rootMargin || ROOT_MARGIN,
  //   threshold: [threshold] || [THRESHOLD],
  // }
  // const observeSections = new window.IntersectionObserver(setActive, observerOptions);
  // const anchorTags: string[] = []
  // anchorTags.forEach((tag) => {
  //   observeSections.observe(tag);
  // });

  return (
    <aside
      className={classes}
      aria-label={title || TITLE}
      data-testid="InPageNavigation">
      <nav>
        <Heading className="usa-in-page-nav__heading" tabIndex={0}>
          {title || TITLE}
        </Heading>
        <ul className="usa-in-page-nav__list">
          {sectionHeadings.map((el: JSX.Element) => {
            console.log(el)
            const heading = el.props.children
            const href = el.props.id
            const hClass = classnames('usa-in-page-nav__item', {
              'usa-in-page-nav__item--sub-item': el.type === 'h3',
            })
            return (
              <li key={`usa-in-page-nav__item_${heading}`} className={hClass}>
                <Link href={`#${href}`} className="usa-in-page-nav__link">
                  {heading}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default InPageNavigation
