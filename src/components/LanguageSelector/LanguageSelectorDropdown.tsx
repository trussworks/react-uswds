import React, { forwardRef, useState } from 'react'
import { Menu } from '../header/Menu/Menu'
import LanguageSelectorButton from './LanguageSelectorButton'
import classnames from 'classnames'
import { LanguageDefinition, LanguageSelectorProps } from './LanguageSelector'
import Button from '../Button/Button'

export const generateMenuItems = (langs: LanguageDefinition[]) => {
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
        <a key={index} href={lang.on_click} data-testid={lang.attr}>
          {label}
        </a>
      )
    } else {
      return (
        <Button
          key={index}
          onClick={lang.on_click}
          data-testid={lang.attr}
          type="button"
          unstyled>
          {label}
        </Button>
      )
    }
  })
}

export const LanguageSelectorDropdownForwardRef: React.ForwardRefRenderFunction<
  HTMLDivElement,
  LanguageSelectorProps
> = ({ label, langs, small, className, displayLang, ...divProps }, ref) => {
  const [isOpen, setIsOpen] = useState(false)

  const classes = classnames(
    'usa-language-container',
    {
      [`usa-language--small`]: small !== undefined,
    },
    className
  )
  const displayLabel = langs.find((langDef) => langDef.attr === displayLang)

  return (
    <div
      ref={ref}
      className={classes}
      data-testid="languageSelector"
      {...divProps}>
      <ul className="usa-language__primary usa-accordion">
        <li className="usa-language__primary-item">
          <LanguageSelectorButton
            className={classes}
            label={displayLabel?.label || label || langs[0].label}
            isOpen={isOpen}
            onToggle={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          />
          <Menu
            items={generateMenuItems(langs)}
            isOpen={isOpen}
            id="language-options"
            type="language"
          />
        </li>
      </ul>
    </div>
  )
}

export const LanguageSelectorDropdown = forwardRef(
  LanguageSelectorDropdownForwardRef
)

export default LanguageSelectorDropdown
