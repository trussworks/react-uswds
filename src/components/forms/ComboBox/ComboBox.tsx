import React from 'react'
import classnames from 'classnames'

interface ComboBoxProps {
  id: string
  name: string // how to handle this?
  className?: string
}

export const ComboBox = (
  props: ComboBoxProps // & JSX.IntrinsicElements['select']
): React.ReactElement => {
  const { id, className, ...inputProps } = props

  const classes = classnames('usa-combo-box', className)

  // TODO implement these
  const listID = ''
  const assistiveHintID = ''
  const selectID = ''

  return (
    <div
      data-testid="combo-box"
      className={classes}
      id={id}
      // name={name}
      {...inputProps}>
      <input
        aria-owns={listID}
        aria-autocomplete="list"
        aria-describedby={assistiveHintID}
        aria-expanded="false"
        aria-controls=""
        // autocapitalize="off"
        // autocomplete="off"
        id={selectID}
        className="usa-combo-box__input"
        type="text"
        role="combobox"
        // ${additionalAttributes.join(" ")
      />
      <span className="usa-combo-box__clear-input__wrapper" tabIndex={-1}>
        <button
          type="button"
          className="usa-combo-box__clear-input"
          aria-label="Clear the select contents">
          &nbsp;
        </button>
      </span>
      <span className="usa-combo-box__input-button-separator">&nbsp;</span>
      <span className="usa-combo-box__toggle-list__wrapper" tabIndex={-1}>
        <button
          type="button"
          tabIndex={-1}
          className="usa-combo-box__toggle-list"
          aria-label="Toggle the dropdown list">
          &nbsp;
        </button>
      </span>
      <ul
        tabIndex={-1}
        id={listID}
        className="usa-combo-box__list"
        role="listbox"
        hidden></ul>
      <div className="usa-combo-box__status usa-sr-only" role="status"></div>
      <span id={assistiveHintID} className="usa-sr-only">
        When autocomplete results are available use up and down arrows to review
        and enter to select. Touch device users, explore by touch or with swipe
        gestures.
      </span>
    </div>
  )
}

export default ComboBox
