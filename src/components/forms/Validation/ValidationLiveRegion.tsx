import React, { useEffect, useState } from 'react'

export const ValidationLiveRegion = () => {
  const [labels, setLabels] = useState<string[]>([])

  useEffect(() => {
    const validationMessages = document.querySelectorAll(
      'li.usa-checklist__item'
    )

    const labels = Array.from(validationMessages).map((element: Element) => {
      return element.getAttribute('aria-label') || ''
    })

    const timer = setTimeout(() => {
      setLabels(labels)
    }, 1000)
    return () => clearTimeout(timer)
  }, [labels])
  return (
    <span
      data-validation-status=""
      className="usa-sr-only"
      aria-live="polite"
      aria-atomic="true"
      id="code-sr-summary">
      {labels}
    </span>
  )
}
