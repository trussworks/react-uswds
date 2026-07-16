import React, { useEffect, useRef, useState } from 'react'
import { Menu } from '../header/Menu/Menu'
import { LanguageSelectorButton } from './LanguageSelectorButton'
import { LanguageDefinition, LanguageSelectorProps } from './LanguageSelector'
import { Button } from '../Button/Button'

const generateMenuItems = (
  langs: LanguageDefinition[],
  onSelect: () => void
) => {
  return langs.map((lang, index) => {
    const label = (
      <>
        <span lang={lang.attr}>
          <strong>{lang.label}</strong>
        </span>
        {lang.label_local && ` (${lang.label_local})`}
      </>
    )
    if (typeof lang.on_click === 'string') {
      return (
        <a
          key={index}
          href={lang.on_click}
          data-testid={lang.attr}
          onClick={onSelect}>
          {label}
        </a>
      )
    } else {
      const onClick = lang.on_click
      return (
        <Button
          key={index}
          onClick={() => {
            onClick()
            onSelect()
          }}
          data-testid={lang.attr}
          type="button"
          unstyled>
          {label}
        </Button>
      )
    }
  })
}

const LanguageSelectorDropdown = ({
  id,
  label,
  langs,
  small,
  className,
  displayLang,
  ...divProps
}: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    // Mirrors USWDS: any click closes the open menu except a click on the
    // toggle button itself (menu item clicks close via onSelect).
    const closeOnClick = (event: MouseEvent): void => {
      if (!buttonRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const eventListenerOptions = { capture: true }
    document.addEventListener('click', closeOnClick, eventListenerOptions)

    return () => {
      document.removeEventListener('click', closeOnClick, eventListenerOptions)
    }
  }, [isOpen])

  const closeOnFocusOut = (event: React.FocusEvent<HTMLDivElement>): void => {
    if (!containerRef.current?.contains(event.relatedTarget as Node)) {
      setIsOpen(false)
    }
  }

  const closeOnEscape = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (isOpen && event.key === 'Escape') {
      buttonRef.current?.focus()
      setIsOpen(false)
    }
  }

  const displayLabel = langs.find((langDef) => langDef.attr === displayLang)
  const menuID = id ? `${id}-language-options` : 'language-options'
  const selectLanguage = (): void => {
    setIsOpen(false)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      id={id}
      className={className}
      data-testid="languageSelector"
      ref={containerRef}
      onBlur={closeOnFocusOut}
      onKeyDown={closeOnEscape}
      {...divProps}>
      <ul className="usa-language__primary usa-accordion">
        <li className="usa-language__primary-item">
          <LanguageSelectorButton
            ref={buttonRef}
            className={className}
            label={displayLabel?.label || label || langs[0].label}
            isOpen={isOpen}
            controls={menuID}
            onToggle={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          />
          <Menu
            items={generateMenuItems(langs, selectLanguage)}
            isOpen={isOpen}
            id={menuID}
            type="language"
          />
        </li>
      </ul>
    </div>
  )
}

export default LanguageSelectorDropdown
