import React, { StrictMode } from 'react'
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

  it('renders without errors when loaded multiple times (simulating react dev mode)', () => {
    const { getByTestId } = render(
      <StrictMode>
        <FilePreview imageId="" file={TEST_TEXT_FILE} />
      </StrictMode>
    )

    expect(getByTestId('file-input-preview')).toBeInTheDocument()
  })

  it('aborts in-flight reads on unmount', async () => {
    const abortSpy = vi.fn()
    const readSpy = vi.fn()

    class MockFileReader {
      EMPTY = 0
      LOADING = 1
      DONE = 2
      readyState = this.EMPTY
      result: string | ArrayBuffer | null = null
      error: DOMException | null = null
      onloadstart: ((ev: ProgressEvent) => void) | null = null
      onprogress: ((ev: ProgressEvent) => void) | null = null
      onload: ((ev: ProgressEvent) => void) | null = null
      onabort: ((ev: ProgressEvent) => void) | null = null
      onerror: ((ev: ProgressEvent) => void) | null = null
      onloadend: ((ev: ProgressEvent) => void) | null = null
      addEventListener = vi.fn()
      removeEventListener = vi.fn()
      dispatchEvent = vi.fn(() => true)

      readAsDataURL(_blob: Blob): void {
        this.readyState = this.LOADING
        readSpy()
      }

      readAsText = vi.fn()
      readAsArrayBuffer = vi.fn()
      readAsBinaryString = vi.fn()

      abort(): void {
        abortSpy()
        this.readyState = this.DONE
      }
    }

    vi.stubGlobal('FileReader', MockFileReader as unknown as typeof FileReader)

    try {
      const { unmount } = render(<FilePreview {...testProps} />)
      await waitFor(() => expect(readSpy).toHaveBeenCalled())
      unmount()
      expect(abortSpy).toHaveBeenCalled()
    } finally {
      vi.unstubAllGlobals()
    }
  })

  it('re-reads when the file prop changes', async () => {
    const file1 = new File(['content-a'], 'report.pdf', {
      type: 'application/pdf',
    })
    const file2 = new File(['content-b'], 'report.pdf', {
      type: 'application/pdf',
    })

    const { getByTestId, rerender } = render(
      <FilePreview imageId="img" file={file1} />
    )

    const imageEl = getByTestId('file-input-preview-image')
    await waitFor(() => expect(imageEl).not.toHaveClass('is-loading'))
    const firstSrc = imageEl.getAttribute('src')

    // Re-render with a different File object (same name, different content)
    rerender(<FilePreview imageId="img" file={file2} />)

    await waitFor(() => expect(imageEl).not.toHaveClass('is-loading'))
    const secondSrc = imageEl.getAttribute('src')

    expect(secondSrc).not.toBe(firstSrc)
  })

  it('renders gracefully when FileReader is unavailable (SSR)', () => {
    const original = globalThis.FileReader
    // @ts-expect-error -- simulating SSR where FileReader is not defined
    delete globalThis.FileReader

    try {
      const { getByTestId } = render(<FilePreview {...testProps} />)
      expect(getByTestId('file-input-preview')).toBeInTheDocument()
      const imageEl = getByTestId('file-input-preview-image')
      expect(imageEl).toHaveAttribute('src', SPACER_GIF)
      expect(imageEl).not.toHaveClass('is-loading')
    } finally {
      globalThis.FileReader = original
    }
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
