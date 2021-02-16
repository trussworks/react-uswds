import React, { useState } from 'react'
import classnames from 'classnames'

import { FilePreview } from './FilePreview'
import { makeSafeForID } from './utils'

interface FileInputProps {
  id: string
  name: string
  disabled?: boolean
  multiple?: boolean
  accept?: string
}

export const FileInput = (
  props: FileInputProps & JSX.IntrinsicElements['input']
): React.ReactElement => {
  const {
    name,
    id,
    disabled,
    multiple,
    className,
    accept,
    ...inputProps
  } = props
  const [isDragging, setIsDragging] = useState(false)
  const [showError, setShowError] = useState(false)
  const [files, setFiles] = useState<FileList | null>(null)

  const fileInputClasses = classnames(
    'usa-file-input',
    {
      'usa-file-input--disabled': disabled,
    },
    className
  )

  const targetClasses = classnames('usa-file-input__target', {
    'usa-file-input--drag': isDragging,
    'has-invalid-file': showError,
  })

  const hideDragText =
    /rv:11.0/i.test(navigator.userAgent) ||
    /Edge\/\d./i.test(navigator.userAgent)

  const dragText = multiple ? 'Drag files here or ' : 'Drag file here or '

  const filePreviews = []
  if (files) {
    for (let i = 0; i < files?.length; i++) {
      const imageId = makeSafeForID(files[i].name)
      const key = `filePreview_${imageId}`
      filePreviews.push(
        <FilePreview key={key} imageId={imageId} file={files[i]} />
      )
    }
  }

  const instructionClasses = classnames('usa-file-input__instructions', {
    'display-none': filePreviews.length > 0,
  })

  const previewHeaderText =
    filePreviews.length > 1
      ? `${filePreviews.length} files selected`
      : 'Selected file'

  const preventInvalidFiles = (e: React.DragEvent): void => {
    setShowError(false)

    if (accept) {
      const acceptedTypes = accept.split(',')
      let allFilesAllowed = true
      for (let i = 0; i < e.dataTransfer.files.length; i += 1) {
        const file = e.dataTransfer.files[i]
        if (allFilesAllowed) {
          for (let j = 0; j < acceptedTypes.length; j += 1) {
            const fileType = acceptedTypes[j]
            allFilesAllowed =
              file.name.indexOf(fileType) > 0 ||
              file.type.includes(fileType.replace(/\*/g, ''))
            if (allFilesAllowed) break
          }
        } else break
      }

      if (!allFilesAllowed) {
        setFiles(null)
        setShowError(true)
        e.preventDefault()
        e.stopPropagation()
      }
    }
  }

  // Event handlers
  const handleDragOver = (): void => setIsDragging(true)
  const handleDragLeave = (): void => setIsDragging(false)
  const handleDrop = (e: React.DragEvent): void => {
    preventInvalidFiles(e)
    setIsDragging(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setShowError(false)
    setFiles(e.target?.files)
  }

  return (
    <div
      data-testid="file-input"
      className={fileInputClasses}
      aria-disabled={disabled}>
      <div
        data-testid="file-input-droptarget"
        className={targetClasses}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}>
        {filePreviews.length > 0 && (
          <div
            data-testid="file-input-preview-heading"
            className="usa-file-input__preview-heading">
            {previewHeaderText}{' '}
            <span className="usa-file-input__choose">
              Change file{filePreviews.length > 1 && 's'}
            </span>
          </div>
        )}
        <div
          data-testid="file-input-instructions"
          className={instructionClasses}
          aria-hidden="true">
          {!hideDragText && (
            <span className="usa-file-input__drag-text">{dragText}</span>
          )}
          <span className="usa-file-input__choose">choose from folder</span>
        </div>
        {filePreviews}
        <div data-testid="file-input-box" className="usa-file-input__box"></div>
        {showError && (
          <div
            data-testid="file-input-error"
            className="usa-file-input__accepted-files-message">
            This is not a valid file type.
          </div>
        )}
        <input
          {...inputProps}
          type="file"
          data-testid="file-input-input"
          name={name}
          id={id}
          className="usa-file-input__input"
          disabled={disabled}
          onChange={handleChange}
          multiple={multiple}
          accept={accept}
        />
      </div>
    </div>
  )
}
