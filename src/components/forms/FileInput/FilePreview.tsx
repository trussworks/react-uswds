import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'

import { SPACER_GIF } from './constants'

export const FilePreview = ({
  imageId,
  file,
}: {
  imageId: string
  file: File
}): React.ReactElement => {
  const fileReaderRef = useRef<FileReader>(new FileReader())
  const [isLoading, setIsLoading] = useState(true)
  const [previewSrc, setPreviewSrc] = useState(SPACER_GIF)
  const [showGenericPreview, setShowGenericPreview] = useState(false)

  fileReaderRef.current.onloadend = (): void => {
    setIsLoading(false)
    setPreviewSrc(fileReaderRef.current.result as string)
  }

  useEffect(() => {
    fileReaderRef.current.readAsDataURL(file)

    return (): void => {
      fileReaderRef.current.onloadend = null
    }
  }, [])

  const { name } = file

  const onImageError = (): void => {
    console.log('on img error', previewSrc)
    setPreviewSrc(SPACER_GIF)
    setShowGenericPreview(true)
  }

  const imageClasses = classnames('usa-file-input__preview__image', {
    'is-loading': isLoading,
    'usa-file-input__preview__image--pdf':
      showGenericPreview && name.indexOf('pdf') > 0,
  })

  return (
    <div
      data-testid="file-input-preview"
      className="usa-file-input__preview"
      aria-hidden="true">
      <img
        id={imageId}
        data-testid="file-input-preview-image"
        src={previewSrc}
        alt=""
        className={imageClasses}
        onError={onImageError}
      />
      {name}
    </div>
  )
}
