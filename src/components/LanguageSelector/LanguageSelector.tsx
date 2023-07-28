import React, { useState } from 'react'
import classnames from 'classnames'
import { Menu } from '../header/Menu/Menu'
import { LanguageSelectorButton } from './LanguageSelectorButton'

export type LanguageDefinition = {
  label: string
  label_en?: string
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

  if (langs.length > 2) {
    const [isOpen, setIsOpen] = useState(false)
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
            {lang.label_en && ` (${lang.label_en})`}
          </a>
        )
      } else {
        items.push(
          <button onClick={lang.on_click} data-testid={lang.attr}>
            <span lang={lang.attr}>
              <strong>{lang.label}</strong>
            </span>
            {lang.label_en && ` (${lang.label_en})`}
          </button>
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
    if (label)
      console.warn(
        "LanguageSelector's label is not used when only two languages are available."
      )
    const [langIndex, setLangIndex] = useState(false)
    const curLang = langs[Number(langIndex)]
    const curLangNotEn =
      curLang.attr && curLang.attr !== 'en' ? curLang.attr : undefined
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
          labelAttr={curLangNotEn}
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
