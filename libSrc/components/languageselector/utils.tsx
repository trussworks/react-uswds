import React from 'react'
import Button from '../Button/Button.js'
import type { LanguageDefinition } from './LanguageSelector/LanguageSelector.js'

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
