import React from 'react'

import { FilePreview } from './FilePreview'

export default {
  title: 'Components/Form controls/File input/File preview',
  component: FilePreview,
}

const TEST_TEXT_FILE = new File(['Test File Contents'], 'testFile.txt', {
  type: 'text/plain',
})

const TEST_PDF_FILE = new File(['Test PDF File'], 'testFile.pdf', {
  type: 'application/pdf',
})

const TEST_DOC_FILE = new File(['Test doc File'], 'testFile.doc', {
  type: 'application/msword',
})

const TEST_XLS_FILE = new File(['Test xls File'], 'testFile.xls', {
  type: 'application/vnd.ms-excel',
})

const TEST_VIDEO_FILE = new File(['Test video File'], 'testFile.mp4', {
  type: 'video/mp4',
})

const TEST_PNG_FILE = new File(['Test PNG Image'], 'testFile.png', {
  type: 'image/png',
})

const testProps = {
  imageId: 'testImageId_12345',
  file: TEST_TEXT_FILE,
}

export const loadingPreview = (): React.ReactElement => (
  <FilePreview {...testProps} />
)

export const pdfPreview = (): React.ReactElement => (
  <FilePreview {...testProps} file={TEST_PDF_FILE} />
)

export const docPreview = (): React.ReactElement => (
  <FilePreview {...testProps} file={TEST_DOC_FILE} />
)

export const xlsPreview = (): React.ReactElement => (
  <FilePreview {...testProps} file={TEST_XLS_FILE} />
)

export const videoPreview = (): React.ReactElement => (
  <FilePreview {...testProps} file={TEST_VIDEO_FILE} />
)

export const imagePreview = (): React.ReactElement => (
  <FilePreview {...testProps} file={TEST_PNG_FILE} />
)
