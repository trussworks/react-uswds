import React, { useState } from 'react'
import Menu from '../../header/Menu/Menu.js'
import LanguageSelectorButton from '../LanguageSelectorButton/LanguageSelectorButton.js'
import classnames from 'classnames'
import type { LanguageSelectorProps } from '../LanguageSelector/LanguageSelector.js'
import { generateMenuItems } from '../utils.js'

export type LanguageSelectorDropdownProps = LanguageSelectorProps &
  JSX.IntrinsicElements['div']

const LanguageSelectorDropdown = ({
  label,
  langs,
  small,
  className,
  displayLang,
  ...divProps
}: LanguageSelectorDropdownProps) => {
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
    <div className={classes} data-testid="languageSelector" {...divProps}>
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

export default LanguageSelectorDropdown
