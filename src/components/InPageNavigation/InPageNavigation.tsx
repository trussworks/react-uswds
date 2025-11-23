// TODO: Improve type and handling of `content` prop
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useMemo, useRef, useState, type JSX } from 'react'
import classnames from 'classnames'
import { HeadingLevel } from '../../types/headingLevel'
import { Link } from '../Link/Link'
import styles from './InPageNavigation.module.scss'

function findHeadingElements(
  el: JSX.Element,
  headingElements: HeadingLevel[],
  contentSelector?: string
): JSX.Element[] {
  const headings: JSX.Element[] = []
  if (typeof el !== 'object' || !el.type) {
    return headings
  }

  // If contentSelector is defined, wait to include headings until we've located
  // the content element.
  if (contentSelector) {
    if (contentSelector.startsWith('.')) {
      const className = contentSelector.slice(1)
      const elHasClass = (el.props?.className as string | undefined)
        ?.split(' ')
        .some((s) => !!s && s === className)
      if (elHasClass) {
        contentSelector = undefined
      }
    } else if (contentSelector.startsWith('#')) {
      const id = contentSelector.slice(1)
      const elHasId = (el.props?.id as string | undefined) === id
      if (elHasId) {
        contentSelector = undefined
      }
    } else {
      console.warn(
        'Only class and id selectors are supported by InPageNavigation contentSelector'
      )
      return headings
    }
  } else if (headingElements.includes(el.type)) {
    headings.push(el)
  }

  const children = el.props?.children
  if (children) {
    if (Array.isArray(children)) {
      for (const child of children) {
        headings.push(
          ...findHeadingElements(child, headingElements, contentSelector)
        )
      }
    } else {
      headings.push(
        ...findHeadingElements(children, headingElements, contentSelector)
      )
    }
  }

  return headings
}

export type InPageNavigationProps = {
  className?: string
  content: JSX.Element
  headingLevel?: HeadingLevel
  mainProps?: JSX.IntrinsicElements['main']
  navProps?: JSX.IntrinsicElements['nav']
  rootMargin?: string
  scrollOffset?: string
  threshold?: number
  minimumHeadingCount?: number
  title?: string
  contentSelector?: string
  headingElements?: HeadingLevel[]
} & Omit<JSX.IntrinsicElements['div'], 'content'>

export const InPageNavigation = ({
  className,
  content,
  headingLevel = 'h4',
  mainProps,
  navProps,
  rootMargin = '0px 0px 0px 0px',
  scrollOffset,
  threshold = 1,
  minimumHeadingCount = 2,
  title = 'On this page',
  contentSelector,
  headingElements = ['h2', 'h3'],
  ...divProps
}: InPageNavigationProps): JSX.Element => {
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
  headingElements = !headingElements.length
    ? ['h2', 'h3']
    : headingElements.sort()
  const sectionHeadings = useMemo(
    () => findHeadingElements(content, headingElements, contentSelector),
    [content, headingElements, contentSelector]
  )
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = contentSelector
      ? mainRef.current?.querySelector(contentSelector)
      : mainRef.current
    if (!container) return

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries.findLast((entry) => entry.isIntersecting)
      if (entry) setCurrentSection(entry.target.id)
    }

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin,
      threshold,
    })

    container
      .querySelectorAll(headingElements.join(','))
      .forEach((h) => observer.observe(h))
    document.documentElement.classList.add(styles['smooth-scroll'])

    return () => {
      document.documentElement.classList.remove(styles['smooth-scroll'])
      observer.disconnect()
    }
  }, [contentSelector, headingElements, rootMargin, threshold])

  return (
    <div className="usa-in-page-nav-container" {...divProps}>
      {sectionHeadings.length >= minimumHeadingCount && (
        <aside
          className={asideClasses}
          aria-label={title}
          data-testid="InPageNavigation">
          <nav className={navClasses} {...remainingNavProps}>
            <Heading className="usa-in-page-nav__heading" tabIndex={0}>
              {title}
            </Heading>
            <ul className="usa-in-page-nav__list">
              {sectionHeadings.map((el: JSX.Element, i) => {
                const heading: JSX.Element = el.props.children
                const href: string = el.props.id ?? ''
                const hClass = classnames('usa-in-page-nav__item', {
                  'usa-in-page-nav__item--primary':
                    el.type === headingElements[0],
                })
                const lClass = classnames('usa-in-page-nav__link', {
                  'usa-current': !!href && href === currentSection,
                })
                return (
                  <li
                    key={`usa-in-page-nav__item_${el.props.id ?? i}`}
                    className={hClass}>
                    <Link href={`#${CSS.escape(href)}`} className={lClass}>
                      {heading}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>
      )}
      <main
        ref={mainRef}
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
