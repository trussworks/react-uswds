import React, { useEffect, useRef, type JSX } from 'react'
import { FocusTrap } from 'focus-trap-react'

import { useMobileNavScrollLock } from './useMobileNavScrollLock'

const NON_NAV_ELEMENTS =
  'body *:not(.usa-header, .usa-nav-container, .usa-nav, .usa-nav *):not([aria-hidden])'

type MobileNavProps = {
  children: React.ReactElement<JSX.IntrinsicElements['nav']>
  expanded?: boolean
  onToggleMobileNav?: React.MouseEventHandler<HTMLButtonElement>
}

const getCloseButton = (target?: EventTarget | null) => {
  const targetElement = target instanceof Element ? target : null

  return (
    targetElement
      ?.closest('.usa-nav')
      ?.querySelector<HTMLButtonElement>('.usa-nav__close') ??
    document.querySelector<HTMLButtonElement>(
      '.usa-nav.is-visible .usa-nav__close'
    )
  )
}

export const MobileNav = ({
  children,
  expanded,
  onToggleMobileNav,
}: MobileNavProps): JSX.Element => {
  const onToggleMobileNavRef = useRef(onToggleMobileNav)
  onToggleMobileNavRef.current = onToggleMobileNav

  useMobileNavScrollLock(expanded)

  useEffect(() => {
    if (!expanded) return

    // ponytail: one active mobile nav per page; scope by instance if multiple headers are supported.
    const nav = document.querySelector<HTMLElement>('.usa-nav.is-visible')
    if (!nav) return

    const hiddenElements = Array.from(
      document.querySelectorAll<HTMLElement>(NON_NAV_ELEMENTS)
    ).filter((element) => !element.contains(nav))

    hiddenElements.forEach((element) => {
      element.setAttribute('aria-hidden', 'true')
      element.setAttribute('data-nav-hidden', '')
    })

    return () => {
      hiddenElements.forEach((element) => {
        element.removeAttribute('aria-hidden')
        element.removeAttribute('data-nav-hidden')
      })
    }
  }, [expanded])

  useEffect(() => {
    if (!expanded) return

    const closeAtDesktopWidth = (): void => {
      const closeButton = getCloseButton()

      if (
        closeButton &&
        window.getComputedStyle(closeButton).display === 'none' &&
        onToggleMobileNavRef.current
      ) {
        closeButton.click()
      }
    }

    closeAtDesktopWidth()
    window.addEventListener('resize', closeAtDesktopWidth)
    return () => window.removeEventListener('resize', closeAtDesktopWidth)
  }, [expanded])

  const focusTrapOptions = useRef({
    escapeDeactivates: (event: KeyboardEvent): boolean => {
      if (!onToggleMobileNavRef.current) return false

      const closeButton = getCloseButton(event.target)
      closeButton?.click()
      return Boolean(closeButton)
    },
  }).current

  return React.createElement(
    FocusTrap,
    {
      active: Boolean(expanded && onToggleMobileNav),
      focusTrapOptions,
    },
    children
  )
}
