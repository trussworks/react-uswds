import React from 'react'

interface DatePickerProps {
  id: string
  name: string
  className?: string
  disabled?: boolean
}

export const DatePicker = (
  props: DatePickerProps & JSX.IntrinsicElements['input']
): React.ReactElement => {
  const { id, name } = props

  return (
    <div
      data-testid="date-picker"
      className="usa-date-picker usa-date-picker--initialized">
      <input
        name={name}
        data-testid="date-picker-internal-input"
        className="usa-input usa-sr-only usa-date-picker__internal-input"
        type="text"
        aria-hidden={true}
        tabIndex={-1}
        required={false}
      />
      <div className="usa-date-picker__wrapper" tabIndex={-1}>
        <input
          id={id}
          data-testid="date-picker-external-input"
          className="usa-input usa-date-picker__external-input"
          type="text"
        />
        <button
          data-testid="date-picker-button"
          type="button"
          className="usa-date-picker__button"
          aria-haspopup={true}
          aria-label="Toggle calendar">
          &nbsp;
        </button>
        <div
          data-testid="date-picker-calendar"
          className="usa-date-picker__calendar"
          role="dialog"
          aria-modal="true"
          hidden={true}></div>
        <div
          data-testid="date-picker-status"
          className="usa-sr-only usa-date-picker__status"
          role="status"
          aria-live="polite"></div>
      </div>
    </div>
  )
}
