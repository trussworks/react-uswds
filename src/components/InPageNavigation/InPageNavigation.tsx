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
  rootMargin?: string
  scrollOffset?: string
  threshold?: number
  title?: string
}

export const InPageNavigation = ({
  className,
  content,
  headingLevel,
  rootMargin,
  scrollOffset,
  threshold,
  title,
}: InPageNavigationProps): React.ReactElement => {
  const classes = classnames('usa-in-page-nav', styles.target, className)
  const Heading = headingLevel || 'h4'
  const ROOT_MARGIN = '0px 0px 0px 0px'
  const offsetStyle = {
    '--margin-offset': scrollOffset || '0',
  } as React.CSSProperties
  const THRESHOLD = 1
  const TITLE = 'On this page'
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
    rootMargin: rootMargin || ROOT_MARGIN,
    threshold: [threshold || THRESHOLD],
  }
  const observer = new IntersectionObserver(handleIntersection, observerOptions)
  useEffect(() => {
    document.querySelectorAll('h2,h3').forEach((h) => observer.observe(h))
  })

  return (
    <div className="usa-in-page-nav-container">
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
