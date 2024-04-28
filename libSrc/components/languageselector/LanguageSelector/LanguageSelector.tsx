import React, { useState } from 'react'
import classnames from 'classnames'
import LanguageSelectorButton from '../LanguageSelectorButton/LanguageSelectorButton.js'
import LanguageSelectorDropdown from '../LanguageSelectorDropdown/LanguageSelectorDropdown.js'

export type LanguageDefinition = {
  label: string
  label_local?: string
  attr: string
  on_click: string | (() => void)
}

export interface BaseLanguageSelectorProps {
  label?: string
  langs: LanguageDefinition[]
  small?: boolean
  className?: string
  displayLang?: string
}

export type LanguageSelectorProps = BaseLanguageSelectorProps &
  JSX.IntrinsicElements['div']

const LanguageSelector = ({
  label,
  langs,
  small,
  className,
  displayLang,
  ...divProps
}: LanguageSelectorProps): React.ReactElement => {
  const classes = classnames(
    'usa-language-container',
    {
      [`usa-language--small`]: small !== undefined,
    },
    className
  )

  const [langIndex, setLangIndex] = useState(false)
  if (langs.length > 2) {
    const dropdownProps = { label, langs, small, displayLang }
    return <LanguageSelectorDropdown {...dropdownProps} className={className} />
  } else {
    if (label) {
      console.warn(
        "LanguageSelector's label is not used when only two languages are available."
      )
    }
    const curLang =
      langs.find((langDef) => langDef.attr === displayLang) ||
      langs[Number(langIndex)]
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
            if (!displayLang) setLangIndex((prevLangIndex) => !prevLangIndex)
          }}
        />
      </div>
    )
  }
}

export default LanguageSelector
