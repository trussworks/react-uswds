import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'

import { FilePreview } from './FilePreview'
import { SPACER_GIF } from './constants'

const TEST_TEXT_FILE = new File(['Test File Contents'], 'testFile.txt', {
  type: 'text/plain',
})

const TEST_PDF_FILE = new File(['Test PDF File'], 'testFile.pdf', {
  type: 'application/pdf',
})

const INVALID_TEST_PDF_FILE = new File([], 'testFile.pdf')

const TEST_PNG_FILE = new File(['Test PNG Image'], 'testFile.png', {
  type: 'image/png',
})

describe('FilePreview component', () => {
  const testProps = {
    imageId: 'testImageId_12345',
    file: TEST_TEXT_FILE,
  }

  it('renders without errors', async () => {
    const { getByTestId } = await waitFor(() =>
      render(<FilePreview {...testProps} />)
    )
    expect(getByTestId('file-input-preview')).toBeInTheDocument()
    expect(getByTestId('file-input-preview')).toHaveClass(
      'usa-file-input__preview'
    )
    expect(getByTestId('file-input-preview')).toHaveAttribute(
      'aria-hidden',
      'true'
    )
    expect(getByTestId('file-input-preview')).toHaveTextContent(
      testProps.file.name
    )
  })

  it('renders a preview image', async () => {
    const { getByTestId } = await waitFor(() =>
      render(<FilePreview {...testProps} />)
    )
    const imageEl = getByTestId('file-input-preview-image')
    expect(imageEl).toBeInstanceOf(HTMLImageElement)
    expect(imageEl).toHaveAttribute('id', testProps.imageId)
    expect(imageEl).toHaveClass('usa-file-input__preview-image')
  })

  describe('while the file is loading', () => {
    it('renders a loading image', async () => {
      const { getByTestId } = await waitFor(() =>
        render(<FilePreview {...testProps} />)
      )
      const imageEl = getByTestId('file-input-preview-image')
      expect(imageEl).toHaveClass('is-loading')
      expect(imageEl).toHaveAttribute('src', SPACER_GIF)
    })
  })

  describe('when the file is done loading', () => {
    it('renders the file preview image and removes the loading class', async () => {
      const { getByTestId } = await waitFor(() =>
        render(<FilePreview {...testProps} />)
      )

      const expectedSrc = 'data:text/plain;base64,VGVzdCBGaWxlIENvbnRlbnRz'

      const imageEl = getByTestId('file-input-preview-image')
      await waitFor(() => expect(imageEl).not.toHaveClass('is-loading'))
      expect(imageEl).toHaveAttribute('src', expectedSrc)
    })

    // TODO - force an image error on load?
    describe.skip('for a PDF file', () => {
      it('shows the PDF generic preview', async () => {
        const { getByTestId } = await waitFor(() =>
          render(
            <FilePreview {...testProps} file={INVALID_TEST_PDF_FILE as File} />
          )
        )

        const imageEl = getByTestId('file-input-preview-image')
        await waitFor(() => expect(imageEl).not.toHaveClass('is-loading'))
        await waitFor(() => expect(imageEl).toHaveAttribute('src', SPACER_GIF))
        expect(imageEl).toHaveClass('usa-file-input__preview-image--pdf')
      })
    })
  })
})
