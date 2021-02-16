export const SPACER_GIF =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

// Test files
export const TEST_TEXT_FILE = new File(['Test File Contents'], 'testFile.txt', {
  type: 'text/plain',
})

export const TEST_PDF_FILE = new File(['Test PDF File'], 'testFile.pdf', {
  type: 'application/pdf',
})

export const TEST_DOC_FILE = new File(['Test doc File'], 'testFile.doc', {
  type: 'application/msword',
})

export const TEST_XLS_FILE = new File(['Test xls File'], 'testFile.xls', {
  type: 'application/vnd.ms-excel',
})

export const TEST_VIDEO_FILE = new File(['Test video File'], 'testFile.mp4', {
  type: 'video/mp4',
})

export const TEST_PNG_FILE = new File(['Test PNG Image'], 'testFile.png', {
  type: 'image/png',
})
