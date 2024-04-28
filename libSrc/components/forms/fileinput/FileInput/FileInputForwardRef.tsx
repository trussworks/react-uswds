import React, { forwardRef } from 'react'
import FileInput, { FileInputProps, FileInputRef } from './FileInput.js'

const FileInputForwardRef = forwardRef(function FileInputForwardRef(
  props: FileInputProps,
  ref: React.ForwardedRef<FileInputRef>
) {
  return <FileInput _ref={ref} {...props} />
})

export type {
  BaseFileInputProps,
  FileInputProps,
  FileInputRef,
} from './FileInput.js'

export default FileInputForwardRef
