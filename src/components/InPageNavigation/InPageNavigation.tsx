import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../types/headingLevel'
import { Link } from '../Link/Link'
import styles from './InPageNavigation.module.scss'

export type ContentType = [heading: HeadingLevel, text: string, href: string]

type InPageNavigationProps = {
  className?: string
  content: JSX.Element
  headingLevel?: HeadingLevel
  navProps?: JSX.IntrinsicElements['nav']
  rootMargin?: string
  scrollOffset?: string
  threshold?: number
  title?: string
}

export const InPageNavigation = ({
  className,
  content,
  headingLevel = 'h4',
  navProps,
  rootMargin = '0px 0px 0px 0px',
  scrollOffset = '0',
  threshold = 1,
  title = 'On this page',
  ...divProps
}: InPageNavigationProps &
  JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames('usa-in-page-nav', styles.target, className)
  const { className: navClassName, ...remainingNavProps } = navProps || {}
  const navClasses = classnames('usa-in-page-nav__nav', navClassName)
  const Heading = headingLevel
  const offsetStyle = {
    '--margin-offset': scrollOffset,
  } as React.CSSProperties
  const [currentSection, setCurrentSection] = useState('')
  const sectionHeadings: JSX.Element[] = content.props.children.filter(
    (el: JSX.Element) => el.type === 'h2' || el.type === 'h3'
  )
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setCurrentSection(entry.target.id)
      }
    })
  }
  const observerOptions = {
    root: null,
    rootMargin: rootMargin,
    threshold: [threshold],
  }
  const observer = new IntersectionObserver(handleIntersection, observerOptions)
  useEffect(() => {
    document.querySelectorAll('h2,h3').forEach((h) => observer.observe(h))
  })

  return (
    <div className="usa-in-page-nav-container" {...divProps}>
      <aside
        className={classes}
        aria-label={title}
        data-testid="InPageNavigation">
        <nav className={navClasses} {...remainingNavProps}>
          <Heading className="usa-in-page-nav__heading" tabIndex={0}>
            {title}
          </Heading>
          <ul className="usa-in-page-nav__list">
            {sectionHeadings.map((el: JSX.Element) => {
              const heading: JSX.Element = el.props.children
              const href: string = el.props.id
              const hClass = classnames('usa-in-page-nav__item', {
                'usa-in-page-nav__item--sub-item': el.type === 'h3',
              })
              const lClass = classnames('usa-in-page-nav__link', {
                'usa-current': href === currentSection,
              })
              return (
                <li key={`usa-in-page-nav__item_${heading}`} className={hClass}>
                  <Link href={`#${href}`} className={lClass}>
                    {heading}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
      <main
        id="main-content"
        className={classnames('main-content', 'usa-prose')}
        style={offsetStyle}>
        {content}
      </main>
    </div>
  )
}

export default InPageNavigation
