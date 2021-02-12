import React, { useState } from 'react'
import classnames from 'classnames'

interface FileInputProps {
  id: string
  name: string
  disabled?: boolean
  multiple?: boolean
}

export const FileInput = (
  props: FileInputProps & JSX.IntrinsicElements['input']
): React.ReactElement => {
  const { name, id, disabled, multiple, className, ...inputProps } = props
  const [isDragging, setIsDragging] = useState(false)

  const fileInputClasses = classnames(
    'usa-file-input',
    {
      'usa-file-input--disabled': disabled,
    },
    className
  )

  const targetClasses = classnames('usa-file-input__target', {
    'usa-file-input--drag': isDragging,
  })

  const hideDragText =
    /rv:11.0/i.test(navigator.userAgent) ||
    /Edge\/\d./i.test(navigator.userAgent)

  const dragText = multiple ? 'Drag files here or ' : 'Drag file here or '

  // Event handlers
  const handleDragOver = (): void => setIsDragging(true)
  const handleDragLeave = (): void => setIsDragging(false)

  return (
    <div
      data-testid="file-input"
      className={fileInputClasses}
      aria-disabled={disabled}>
      <div
        data-testid="file-input-droptarget"
        className={targetClasses}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}>
        <div
          data-testid="file-input-instructions"
          className="usa-file-input__instructions"
          aria-hidden="true">
          {!hideDragText && (
            <span className="usa-file-input__drag-text">{dragText}</span>
          )}
          <span className="usa-file-input__choose">choose from folder</span>
        </div>
        <div data-testid="file-input-box" className="usa-file-input__box"></div>
        <input
          {...inputProps}
          type="file"
          data-testid="file-input-input"
          name={name}
          id={id}
          className="usa-file-input__input"
          disabled={disabled}
        />
      </div>
    </div>
  )
}
