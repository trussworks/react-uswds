import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { FileInput } from './FileInput'
import userEvent from '@testing-library/user-event'

/**
 * TEST CASES
 * - single file
 * - restrict file types
 * - accepts images
 * - accepts multiple files
 * - error
 * - disabled/enabled - DONE
 * - other input props (required, aria-describedby)
 *
 * renders:
 * - wrapper - DONE
 * - input - DONE
 * - droptarget - DONE
 * - box - DONE
 * - instructions - DONE
 *
 * features:
 * - makeSafeForID util fn
 * - modify drop instructions for IE11/Edge - DONE
 * - removeOldPreviews:
 *  - reset previews/heading/error message
 * - prevent invalid files:
 *  - reset invalid class
 *  - if accepted files, check if all files are allowed
 *  - if any files are not allowed:
 *      - remove old previews
 *      - reset value and display error UI, stop event
 * - onChange handler:
 *  - remove old previews
 *  - FileReader, onloadstart/onloadend events to show previews
 *  - display heading
 *
 * event handlers:
 * - drag class added on drag over - DONE
 * - drag class removed on drag leave - DONE
 * - drop handler prevents invalid files
 * - drop handler removes drag class
 * - on change event handler
 *
 * other examples:
 * - async upload? onDrop/onChange prop
 */

describe('FileInput component', () => {
  const testProps = {
    id: 'testFile',
    name: 'testFile',
  }

  const TEST_TEXT_FILE = new File(['Test File Contents'], 'testFile.txt', {
    type: 'text/plain',
  })

  const TEST_PNG_FILE = new File(['Test PNG Image'], 'testFile.png', {
    type: 'image/png',
  })

  it('renders without errors', () => {
    const { getByTestId } = render(<FileInput {...testProps} />)
    expect(getByTestId('file-input')).toBeInTheDocument()
    expect(getByTestId('file-input')).toHaveClass('usa-file-input')
  })

  it('renders a file input element that receives the name and id props', () => {
    const { getByTestId } = render(<FileInput {...testProps} />)
    const inputEl = getByTestId('file-input-input')
    expect(inputEl).toBeInstanceOf(HTMLInputElement)
    expect(inputEl).toHaveAttribute('type', 'file')
    expect(inputEl).toHaveAttribute('name', 'testFile')
    expect(inputEl).toHaveAttribute('id', 'testFile')
    expect(inputEl).toHaveClass('usa-file-input__input')
  })

  it('renders a drop target, box, and instructions text', () => {
    const { getByTestId } = render(<FileInput {...testProps} />)
    expect(getByTestId('file-input-box')).toBeInstanceOf(HTMLDivElement)
    expect(getByTestId('file-input-box')).toHaveClass('usa-file-input__box')
    expect(getByTestId('file-input-droptarget')).toBeInstanceOf(HTMLDivElement)
    expect(getByTestId('file-input-droptarget')).toHaveClass(
      'usa-file-input__target'
    )
    expect(getByTestId('file-input-instructions')).toBeInstanceOf(
      HTMLDivElement
    )
    expect(getByTestId('file-input-instructions')).toHaveClass(
      'usa-file-input__instructions'
    )
    expect(getByTestId('file-input-instructions')).toHaveAttribute(
      'aria-hidden',
      'true'
    )
    expect(getByTestId('file-input-instructions')).toHaveTextContent(
      /Drag file here or choose from folder/i
    )
  })

  it('does not display drag text if on IE11', () => {
    jest
      .spyOn(navigator, 'userAgent', 'get')
      .mockImplementation(
        () =>
          'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko'
      )
    const { getByTestId } = render(<FileInput {...testProps} />)

    expect(getByTestId('file-input-instructions')).not.toHaveTextContent(
      /Drag file here or choose from folder/i
    )
    expect(getByTestId('file-input-instructions')).toHaveTextContent(
      /choose from folder/i
    )
    jest.restoreAllMocks()
  })

  it('does not display drag text if on Edge', () => {
    jest
      .spyOn(navigator, 'userAgent', 'get')
      .mockImplementation(
        () =>
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.19582'
      )
    const { getByTestId } = render(<FileInput {...testProps} />)

    expect(getByTestId('file-input-instructions')).not.toHaveTextContent(
      /Drag file here or choose from folder/i
    )
    expect(getByTestId('file-input-instructions')).toHaveTextContent(
      /choose from folder/i
    )
    jest.restoreAllMocks()
  })

  describe('when disabled', () => {
    const disabledProps = { ...testProps, disabled: true }
    it('the input element is disabled', () => {
      const { getByTestId } = render(<FileInput {...disabledProps} />)
      expect(getByTestId('file-input-input')).toBeDisabled()
    })

    it('the wrapper element is disabled', () => {
      const { getByTestId } = render(<FileInput {...disabledProps} />)
      expect(getByTestId('file-input')).toHaveClass('usa-file-input--disabled')
      expect(getByTestId('file-input')).toHaveAttribute('aria-disabled', 'true')
    })
  })

  describe('drag and drop', () => {
    it('toggles the drag class when dragging over and leaving the target element', () => {
      const { getByTestId } = render(<FileInput {...testProps} />)
      const targetEl = getByTestId('file-input-droptarget')
      fireEvent.dragOver(targetEl)
      expect(targetEl).toHaveClass('usa-file-input--drag')
      fireEvent.dragLeave(targetEl)
      expect(targetEl).not.toHaveClass('usa-file-input--drag')
    })

    it('removes the drag class when dropping over the target element', () => {
      const { getByTestId } = render(<FileInput {...testProps} />)
      const targetEl = getByTestId('file-input-droptarget')
      fireEvent.dragOver(targetEl)
      expect(targetEl).toHaveClass('usa-file-input--drag')
      fireEvent.drop(targetEl, {
        dataTransfer: {
          files: [TEST_TEXT_FILE],
        },
      })
      expect(targetEl).not.toHaveClass('usa-file-input--drag')
    })
  })

  describe('uploading files', () => {
    it('renders a preview when a single file is chosen', () => {
      const { getByTestId } = render(<FileInput {...testProps} />)
      const inputEl = getByTestId('file-input-input')
      userEvent.upload(inputEl, TEST_PNG_FILE)
      expect(getByTestId('file-input-preview')).toBeInTheDocument()
    })

    it.skip('renders a preview for each file when multiple files are chosen', () => {
      const { getByTestId } = render(<FileInput {...testProps} />)
      const inputEl = getByTestId('file-input-input')
      userEvent.upload(inputEl, [TEST_PNG_FILE, TEST_TEXT_FILE])
    })
  })

  describe('when it accepts multiple files', () => {
    const multipleFilesProps = { ...testProps, multiple: true }

    it('the instructions text reflects that multiple files can be selected', () => {
      const { getByTestId } = render(<FileInput {...multipleFilesProps} />)
      expect(getByTestId('file-input-instructions')).toHaveTextContent(
        /Drag files here or choose from folder/i
      )
    })
  })
})
