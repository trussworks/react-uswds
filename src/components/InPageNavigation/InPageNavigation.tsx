import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../types/headingLevel'
import { Link } from '../Link/Link'
import styles from './InPageNavigation.module.scss'

type InPageNavigationProps = {
  className?: string
  content: JSX.Element
  headingLevel?: HeadingLevel
  mainProps?: JSX.IntrinsicElements['main']
  navProps?: JSX.IntrinsicElements['nav']
  rootMargin?: string
  scrollOffset?: string
  threshold?: number
  title?: string
  headingElements?: HeadingLevel[]
}

export const InPageNavigation = ({
  className,
  content,
  headingLevel = 'h4',
  mainProps,
  navProps,
  rootMargin = '0px 0px 0px 0px',
  scrollOffset,
  threshold = 1,
  title = 'On this page',
  headingElements = ['h2', 'h3'],
  ...divProps
}: InPageNavigationProps &
  Omit<JSX.IntrinsicElements['div'], 'content'>): React.ReactElement => {
  const asideClasses = classnames('usa-in-page-nav', styles.target, className)
  const { className: navClassName, ...remainingNavProps } = navProps || {}
  const navClasses = classnames('usa-in-page-nav__nav', navClassName)
  const { className: mainClassName, ...remainingMainProps } = mainProps || {}
  const mainClasses = classnames('main-content', mainClassName)
  const Heading = headingLevel
  const offsetStyle = {
    '--margin-offset': scrollOffset,
  } as React.CSSProperties
  const [currentSection, setCurrentSection] = useState('')
  if (headingElements.length === 0) headingElements = ['h2', 'h3']
  const sectionHeadings: JSX.Element[] = content.props.children.filter(
    (el: JSX.Element) => headingElements.includes(el.type)
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
    document.querySelector('html')?.classList.add(styles['smooth-scroll'])
    return () => {
      document.querySelector('html')?.classList.remove(styles['smooth-scroll'])
    }
  })

  return (
    <div className="usa-in-page-nav-container" {...divProps}>
      <aside
        className={asideClasses}
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
                'usa-in-page-nav__item--primary':
                  el.type === headingElements[0],
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
        className={mainClasses}
        {...remainingMainProps}
        style={scrollOffset ? offsetStyle : undefined}>
        {content}
      </main>
    </div>
  )
}

export default InPageNavigation
