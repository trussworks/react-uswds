import React from 'react'

import FilePreview from './FilePreview'
import {
  TEST_TEXT_FILE,
  TEST_PDF_FILE,
  TEST_DOC_FILE,
  TEST_XLS_FILE,
  TEST_VIDEO_FILE,
  TEST_PNG_FILE,
} from './constants'

/*
// THIS STORY FOR INTERNAL DEVELOPMENT ONLY
export default {
  title: 'Components/File input/File preview',
  component: FilePreview,
}
*/

const testProps = {
  imageId: 'testImageId_12345',
  file: TEST_TEXT_FILE,
}

export const LoadingPreview = (): React.ReactElement => (
  <FilePreview {...testProps} />
)

export const PdfPreview = (): React.ReactElement => (
  <FilePreview {...testProps} file={TEST_PDF_FILE} />
)

export const DocPreview = (): React.ReactElement => (
  <FilePreview {...testProps} file={TEST_DOC_FILE} />
)

export const XlsPreview = (): React.ReactElement => (
  <FilePreview {...testProps} file={TEST_XLS_FILE} />
)

export const VideoPreview = (): React.ReactElement => (
  <FilePreview {...testProps} file={TEST_VIDEO_FILE} />
)

export const ImagePreview = (): React.ReactElement => (
  <FilePreview {...testProps} file={TEST_PNG_FILE} />
)
