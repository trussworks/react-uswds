import { forwardRef } from 'react'
import FileInput from './FileInput.js'

const FileInputForwardRef = forwardRef(FileInput)

export type {
  BaseFileInputProps,
  FileInputProps,
  FileInputRef,
} from './FileInput.js'

export default FileInputForwardRef
