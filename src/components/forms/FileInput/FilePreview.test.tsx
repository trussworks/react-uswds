import React, { StrictMode } from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'

import { FilePreview } from './FilePreview'
import { SPACER_GIF, TEST_TEXT_FILE } from './constants'

describe('FilePreview component', () => {
  afterEach(() => vi.restoreAllMocks())

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

  it('loads the preview when rendered in StrictMode', async () => {
    const { getByTestId } = render(
      <StrictMode>
        <FilePreview imageId="" file={TEST_TEXT_FILE} />
      </StrictMode>
    )

    expect(getByTestId('file-input-preview')).toBeInTheDocument()
    await waitFor(() =>
      expect(getByTestId('file-input-preview-image')).toHaveAttribute(
        'src',
        'data:text/plain;base64,VGVzdCBGaWxlIENvbnRlbnRz'
      )
    )
  })

  it('aborts the file read when unmounted', () => {
    const abortSpy = vi.spyOn(window.FileReader.prototype, 'abort')
    const { unmount } = render(<FilePreview {...testProps} />)

    unmount()

    expect(abortSpy).toHaveBeenCalledOnce()
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

    it('updates the preview when the file changes', async () => {
      const firstFile = new File(['first'], 'same-name.txt', {
        type: 'text/plain',
      })
      const secondFile = new File(['second'], 'same-name.txt', {
        type: 'text/plain',
      })
      const { getByTestId, rerender } = render(
        <FilePreview imageId="same-name" file={firstFile} />
      )
      const imageEl = getByTestId('file-input-preview-image')

      await waitFor(() =>
        expect(imageEl).toHaveAttribute(
          'src',
          'data:text/plain;base64,Zmlyc3Q='
        )
      )
      fireEvent.error(imageEl)
      expect(imageEl).toHaveClass('usa-file-input__preview-image--generic')

      rerender(<FilePreview imageId="same-name" file={secondFile} />)

      await waitFor(() =>
        expect(imageEl).toHaveAttribute(
          'src',
          'data:text/plain;base64,c2Vjb25k'
        )
      )
      expect(imageEl).not.toHaveClass('usa-file-input__preview-image--generic')
    })

    it('shows the loading state while a replacement file loads', async () => {
      const firstFile = new File(['first'], 'same-name.txt', {
        type: 'text/plain',
      })
      const secondFile = new File(['second'], 'same-name.txt', {
        type: 'text/plain',
      })
      const { getByTestId, rerender } = render(
        <FilePreview imageId="same-name" file={firstFile} />
      )
      const imageEl = getByTestId('file-input-preview-image')

      await waitFor(() => expect(imageEl).not.toHaveClass('is-loading'))

      rerender(<FilePreview imageId="same-name" file={secondFile} />)

      expect(imageEl).toHaveClass('is-loading')
      expect(imageEl).toHaveAttribute('src', SPACER_GIF)
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
