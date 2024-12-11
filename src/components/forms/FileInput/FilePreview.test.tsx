import { fireEvent, render, waitFor } from '@testing-library/react'

import { FilePreview } from './FilePreview'
import { SPACER_GIF, TEST_TEXT_FILE } from './constants'

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
      const spy = vi.spyOn(window.FileReader.prototype, 'readAsDataURL')
      let fr: FileReader | undefined, blob: Blob | undefined
      // Prevent loadend event from being dispatched until we're ready.
      // Grab the blob and FileReader instance when called.
      spy.mockImplementationOnce(function (this: FileReader, _blob) {
        blob = _blob
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        fr = this
      })
      const { getByTestId } = await waitFor(() =>
        render(<FilePreview {...testProps} />)
      )
      const imageEl = getByTestId('file-input-preview-image')

      expect(imageEl).toHaveClass('is-loading')
      expect(imageEl).toHaveAttribute('src', SPACER_GIF)

      // Call real `readAsDataURL` with blob to dispatch loadend
      expect(fr).toBeDefined()
      expect(blob).toBeDefined()
      fr!.readAsDataURL(blob!)

      await waitFor(() => expect(imageEl).not.toHaveClass('is-loading'))
      expect(imageEl).not.toHaveAttribute('src', SPACER_GIF)
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

    describe.each([
      { type: 'pdf', exts: ['pdf'] },
      { type: 'word', exts: ['doc', 'pages'] },
      { type: 'video', exts: ['mp4', 'mov'] },
      { type: 'excel', exts: ['xls', 'numbers'] },
      { type: 'generic', exts: ['dat'] },
    ])('for a $type file', ({ type, exts }) => {
      describe.each(exts)('using extension: %s', (ext) => {
        it(`shows the ${type} ${
          type !== 'generic' ? 'generic' : ''
        } preview`, async () => {
          const testFile = new File([], `testFile.${ext}`)
          const { getByTestId } = await waitFor(() =>
            render(<FilePreview {...testProps} file={testFile} />)
          )

          const imageEl = getByTestId('file-input-preview-image')
          await waitFor(() => expect(imageEl).not.toHaveClass('is-loading'))
          fireEvent.error(imageEl)
          await waitFor(() =>
            expect(imageEl).toHaveAttribute('src', SPACER_GIF)
          )
          expect(imageEl).toHaveClass(`usa-file-input__preview-image--${type}`)
        })
      })
    })
  })
})
