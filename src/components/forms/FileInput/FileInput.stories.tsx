import React from 'react'

import { FileInput } from './FileInput'

export default {
  title: 'Components/Form controls/File input',
  component: FileInput,
}

const testProps = {
  id: 'testFile',
  name: 'testFile',
}

export const singleFileInput = (): React.ReactElement => (
  <FileInput {...testProps} />
)

export const multipleFilesInput = (): React.ReactElement => (
  <FileInput {...testProps} multiple />
)
