import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
  useEffect,
  JSX,
} from 'react'
import classnames from 'classnames'

import { FilePreview } from './FilePreview'
import { makeSafeForID } from './utils'

const fileMatchesAccept = (file: File, acceptedType: string): boolean => {
  const normalizedType = acceptedType.trim().toLowerCase()
  const fileType = file.type.split(';')[0].trim().toLowerCase()
  if (normalizedType.startsWith('.')) {
    return file.name.toLowerCase().endsWith(normalizedType)
  }
  if (normalizedType.endsWith('/*')) {
    return fileType.startsWith(normalizedType.slice(0, -1))
  }
  return fileType === normalizedType
}

export type FileInputProps = {
  id: string
  name: string
  dragText?: string
  chooseText?: string
  errorText?: string
  previewSingleSelectedFileText?: string
  previewMultipleSelectedFileText?: string
  changeSelectedFileText?: string
  disabled?: boolean
  multiple?: boolean
  accept?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDrop?: (e: React.DragEvent) => void
} & JSX.IntrinsicElements['input']

export type FileInputRef = {
  clearFiles: () => void
  input: HTMLInputElement | null
  files: File[]
}

export const FileInputForwardRef: React.ForwardRefRenderFunction<
  FileInputRef,
  FileInputProps
> = (
  {
    name,
    id,
    dragText,
    chooseText,
    errorText,
    previewSingleSelectedFileText,
    previewMultipleSelectedFileText,
    changeSelectedFileText,
    disabled,
    multiple,
    className,
    accept,
    onChange,
    onDrop,
    ...inputProps
  },
  ref
): JSX.Element => {
  const internalRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [showError, setShowError] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [hideDragText, setHideDragText] = useState(false)

  useEffect(() => {
    if (typeof navigator === 'undefined') return

    const hideDragText =
      /rv:11.0/i.test(navigator?.userAgent) ||
      /Edge\/\d./i.test(navigator?.userAgent)

    setHideDragText(hideDragText)
  }, [typeof navigator])

  useImperativeHandle(
    ref,
    () => ({
      input: internalRef.current,
      clearFiles: (): void => {
        setFiles([])
        if (internalRef.current) {
          internalRef.current.value = ''
        }
      },
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

  const defaultDragText = multiple
    ? 'Drag files here or '
    : 'Drag file here or '
  const defaultChooseText = 'choose from folder'
  const defaultErrorText = 'Error: This is not a valid file type.'
  const defaultSingleSelectedFileText = 'Selected file'
  const defaultMultipleSelectedFileText = ' files selected'
  const defaultChangeSelectedFileText = 'Change file'

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
      ? previewMultipleSelectedFileText
        ? `${filePreviews.length} ${previewMultipleSelectedFileText}`
        : `${filePreviews.length} ${defaultMultipleSelectedFileText}`
      : previewSingleSelectedFileText || defaultSingleSelectedFileText

  const validateFiles = (selectedFiles: File[]): boolean => {
    setShowError(false)

    if (accept) {
      const acceptedTypes = accept.split(',').filter((type) => type.trim())
      const allFilesAllowed = selectedFiles.every((file) =>
        acceptedTypes.some((type) => fileMatchesAccept(file, type))
      )

      if (!allFilesAllowed) {
        setFiles([])
        setShowError(true)
        if (internalRef.current) internalRef.current.value = ''
        return false
      }
    }

    return true
  }

  // Event handlers
  const handleDragOver = (): void => setIsDragging(true)
  const handleDragLeave = (): void => setIsDragging(false)
  const handleDrop = (e: React.DragEvent): void => {
    if (!validateFiles(Array.from(e.dataTransfer?.files ?? []))) {
      e.preventDefault()
      e.stopPropagation()
    }
    setIsDragging(false)
    if (onDrop) onDrop(e)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedFiles = Array.from(e.target.files || [])
    if (validateFiles(selectedFiles)) setFiles(selectedFiles)

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
              {(changeSelectedFileText || defaultChangeSelectedFileText) +
                (filePreviews.length > 1 ? 's' : '')}
            </span>
          </div>
        )}
        <div
          data-testid="file-input-instructions"
          className={instructionClasses}
          aria-hidden="true">
          {!hideDragText && (
            <span className="usa-file-input__drag-text">
              {dragText || defaultDragText}
            </span>
          )}
          <span className="usa-file-input__choose">
            {chooseText || defaultChooseText}
          </span>
        </div>
        {filePreviews}
        <div data-testid="file-input-box" className="usa-file-input__box"></div>
        {showError && (
          <div
            data-testid="file-input-error"
            className="usa-file-input__accepted-files-message">
            {errorText || defaultErrorText}
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
          aria-label={showError ? errorText || defaultErrorText : undefined}
        />
      </div>
    </div>
  )
}

export const FileInput = forwardRef(FileInputForwardRef)
