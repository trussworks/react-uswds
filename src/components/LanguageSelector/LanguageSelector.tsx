import React, { useState } from 'react'
import classnames from 'classnames'
import { Menu } from '../header/Menu/Menu'
import { LanguageSelectorButton } from './LanguageSelectorButton'
import { Button } from '../Button/Button'

export type LanguageDefinition = {
  label: string
  label_local?: string
  attr: string
  on_click: string | (() => void)
}

type LanguageSelectorProps = {
  label?: string
  langs: LanguageDefinition[]
  small?: boolean
  className?: string
}

export const LanguageSelector = ({
  label,
  langs,
  small,
  className,
  ...divProps
}: LanguageSelectorProps &
  JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames(
    'usa-language-container',
    {
      [`usa-language--small`]: small !== undefined,
    },
    className
  )

  const [isOpen, setIsOpen] = useState(false)
  const [langIndex, setLangIndex] = useState(false)
  if (langs.length > 2) {
    const items = []
    for (let i = 0; i < langs.length; i++) {
      // eslint-disable-next-line security/detect-object-injection
      const lang: LanguageDefinition = langs[i]
      if (typeof lang.on_click === 'string') {
        items.push(
          <a href={lang.on_click} data-testid={lang.attr}>
            <span lang={lang.attr}>
              <strong>{lang.label}</strong>
            </span>
            {lang.label_local && ` (${lang.label_local})`}
          </a>
        )
      } else {
        items.push(
          <Button
            onClick={lang.on_click}
            data-testid={lang.attr}
            type="button"
            unstyled>
            <span lang={lang.attr}>
              <strong>{lang.label}</strong>
            </span>
            {lang.label_local && ` (${lang.label_local})`}
          </Button>
        )
      }
    }
    return (
      <div className={classes} data-testid="languageSelector" {...divProps}>
        <ul className="usa-language__primary usa-accordion">
          <li className="usa-language__primary-item">
            <LanguageSelectorButton
              className={classes}
              label={label || langs[0].label}
              isOpen={isOpen}
              onToggle={() => {
                setIsOpen((prevIsOpen) => !prevIsOpen)
              }}
            />
            <Menu
              items={items}
              isOpen={isOpen}
              id="language-options"
              type="language"
            />
          </li>
        </ul>
      </div>
    )
  } else {
    if (label) {
      console.warn(
        "LanguageSelector's label is not used when only two languages are available."
      )
    }
    const curLang = langs[Number(langIndex)]
    const onClickString: string =
      typeof curLang.on_click === 'string' ? curLang.on_click : ''
    const onClick =
      typeof curLang.on_click === 'string'
        ? () => {
            window.location.assign(onClickString)
          }
        : curLang.on_click
    return (
      <div className={classes} data-testid="languageSelector" {...divProps}>
        <LanguageSelectorButton
          className={classes}
          label={curLang.label}
          labelAttr={curLang.attr}
          onToggle={() => {
            onClick()
            setLangIndex((prevLangIndex) => !prevLangIndex)
          }}
        />
      </div>
    )
  }
}

export default LanguageSelector
