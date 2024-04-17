import React, { useState } from 'react'
import Menu from '../header/Menu/Menu'
import LanguageSelectorButton from './LanguageSelectorButton'
import classnames from 'classnames'
import { LanguageSelectorProps } from './LanguageSelector'
import { generateMenuItems } from './utils'

const LanguageSelectorDropdown: React.FC<LanguageSelectorProps> = ({
  label,
  langs,
  small,
  className,
  displayLang,
  ...divProps
}) => {
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
