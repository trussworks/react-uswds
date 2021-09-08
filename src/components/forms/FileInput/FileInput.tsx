import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react'
import classnames from 'classnames'

import { FilePreview } from './FilePreview'
import { makeSafeForID } from './utils'

interface FileInputProps {
  id: string
  name: string
  disabled?: boolean
  multiple?: boolean
  accept?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDrop?: (e: React.DragEvent) => void
}

export type FileInputRef = {
  clearFiles: () => void
  input: HTMLInputElement | null
  files: File[]
}

export const FileInput = forwardRef(
  (
    {
      name,
      id,
      disabled,
      multiple,
      className,
      accept,
      onChange,
      onDrop,
      ...inputProps
    }: FileInputProps & JSX.IntrinsicElements['input'],
    ref: React.Ref<FileInputRef>
  ): React.ReactElement => {
    const internalRef = useRef<HTMLInputElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [showError, setShowError] = useState(false)
    const [files, setFiles] = useState<File[]>([])

    useImperativeHandle(
      ref,
      () => ({
        input: internalRef.current,
        clearFiles: (): void => setFiles([]),
        files,
      }),
      [files]
    )

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
        const imageId = makeSafeForID(files[parseInt(`${i}`)].name)
        const key = `filePreview_${imageId}`
        filePreviews.push(
          <FilePreview
            key={key}
            imageId={imageId}
            file={files[parseInt(`${i}`)]}
          />
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
          const file = e.dataTransfer.files[parseInt(`${i}`)]
          if (allFilesAllowed) {
            for (let j = 0; j < acceptedTypes.length; j += 1) {
              const fileType = acceptedTypes[parseInt(`${j}`)]
              allFilesAllowed =
                file.name.indexOf(fileType) > 0 ||
                file.type.includes(fileType.replace(/\*/g, ''))
              if (allFilesAllowed) break
            }
          } else break
        }

        if (!allFilesAllowed) {
          setFiles([])
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
      if (onDrop) onDrop(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setShowError(false)

      // Map input FileList to array of Files
      const fileArr = []
      if (e.target?.files?.length) {
        const fileLength = e.target?.files?.length || 0

        for (let i = 0; i < fileLength; i++) {
          const file = e.target.files.item(i)
          if (file) fileArr.push(file)
        }
      }
      setFiles(fileArr)

      if (onChange) onChange(e)
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
          <div
            data-testid="file-input-box"
            className="usa-file-input__box"></div>
          {showError && (
            <div
              data-testid="file-input-error"
              className="usa-file-input__accepted-files-message">
              This is not a valid file type.
            </div>
          )}
          <input
            {...inputProps}
            ref={internalRef}
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
)
