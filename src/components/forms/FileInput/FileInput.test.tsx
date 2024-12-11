import { createRef } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { FileInput, FileInputRef } from './FileInput'
import {
  TEST_TEXT_FILE,
  TEST_PNG_FILE,
  TEST_XLS_FILE,
  TEST_PDF_FILE,
} from './constants'

describe('FileInput component', () => {
  const testProps = {
    id: 'testFile',
    name: 'testFile',
  }

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
    vi.spyOn(navigator, 'userAgent', 'get').mockImplementation(
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
    vi.restoreAllMocks()
  })

  it('does not display drag text if on Edge', () => {
    vi.spyOn(navigator, 'userAgent', 'get').mockImplementation(
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
    vi.restoreAllMocks()
  })

  it('displays custom text when given', () => {
    const customProps = {
      ...testProps,
      dragText: 'Custom dragText',
      chooseText: 'Custom chooseText',
      errorText: 'Custom errorText',
      accept: '.no',
    }
    const { getByTestId } = render(<FileInput {...customProps} />)

    const dragText = within(getByTestId('file-input-instructions')).getByText(
      customProps.dragText
    )
    expect(dragText).toBeInTheDocument()
    expect(dragText).toHaveClass('usa-file-input__drag-text')

    const chooseText = within(getByTestId('file-input-instructions')).getByText(
      customProps.chooseText
    )
    expect(chooseText).toBeInTheDocument()
    expect(chooseText).toHaveClass('usa-file-input__choose')

    const targetEl = getByTestId('file-input-droptarget')
    fireEvent.drop(targetEl, {
      dataTransfer: {
        files: [TEST_PNG_FILE],
      },
    })
    const errorText = within(getByTestId('file-input-error')).getByText(
      customProps.errorText
    )
    expect(errorText).toBeInTheDocument()
    expect(errorText).toHaveClass('usa-file-input__accepted-files-message')
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
    it('renders a preview and header text when a single file is chosen', async () => {
      const { getByTestId } = render(<FileInput {...testProps} />)
      const inputEl = getByTestId('file-input-input')
      await userEvent.upload(inputEl, TEST_PNG_FILE)
      expect(getByTestId('file-input-preview')).toBeInTheDocument()
      expect(getByTestId('file-input-instructions')).toHaveClass('display-none')
      const previewHeading = getByTestId('file-input-preview-heading')
      expect(previewHeading).toHaveTextContent('Selected file Change file')
    })

    it('renders a preview for each file and header text when multiple files are chosen', async () => {
      const { getByTestId, getAllByTestId } = render(
        <FileInput {...testProps} multiple={true} />
      )
      const inputEl = getByTestId('file-input-input')
      await userEvent.upload(inputEl, [TEST_PNG_FILE, TEST_TEXT_FILE])
      expect(getAllByTestId('file-input-preview')).toHaveLength(2)
      expect(getByTestId('file-input-instructions')).toHaveClass('display-none')
      const previewHeading = getByTestId('file-input-preview-heading')
      expect(previewHeading).toHaveTextContent('2 files selected Change files')
    })

    it('only shows previews for the most recently selected files if files are selected multiple times', async () => {
      const { getByTestId, getAllByTestId, queryByTestId } = render(
        <FileInput {...testProps} multiple={true} />
      )
      const inputEl = getByTestId('file-input-input')
      await userEvent.upload(inputEl, [TEST_PNG_FILE, TEST_TEXT_FILE])
      let previews = getAllByTestId('file-input-preview')
      expect(previews).toHaveLength(2)
      expect(previews[0]).toHaveTextContent(TEST_PNG_FILE.name)
      expect(previews[1]).toHaveTextContent(TEST_TEXT_FILE.name)
      const previewHeading = getByTestId('file-input-preview-heading')
      expect(previewHeading).toHaveTextContent('2 files selected Change files')

      // Change to 1 file
      await userEvent.upload(inputEl, [TEST_XLS_FILE])
      previews = getAllByTestId('file-input-preview')
      expect(previews).toHaveLength(1)
      expect(previews[0]).toHaveTextContent(TEST_XLS_FILE.name)
      expect(previewHeading).toHaveTextContent('Selected file Change file')

      // Change to no files
      await userEvent.upload(inputEl, [])
      expect(queryByTestId('file-input-preview')).not.toBeInTheDocument()
      expect(previewHeading).not.toBeInTheDocument()
      expect(getByTestId('file-input-instructions')).not.toHaveClass(
        'display-none'
      )
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

  describe('when it only accepts certain file types', () => {
    // TODO - try to make this testing better when adding custom drop/change handlers
    it('accepts an uploaded file of an accepted type', async () => {
      const { getByTestId, queryByTestId } = render(
        <FileInput {...testProps} accept=".pdf,.txt" />
      )

      const inputEl = getByTestId('file-input-input') as HTMLInputElement
      expect(inputEl).toHaveAttribute('accept', '.pdf,.txt')

      const targetEl = getByTestId('file-input-droptarget')
      fireEvent.drop(targetEl, {
        dataTransfer: {
          files: [TEST_PDF_FILE],
        },
      })
      // For some reason the simulated drop event does not trigger an onChange event
      await userEvent.upload(inputEl, TEST_PDF_FILE)

      expect(queryByTestId('file-input-error')).not.toBeInTheDocument()
      expect(getByTestId('file-input-droptarget')).not.toHaveClass(
        'has-invalid-file'
      )
      expect(getByTestId('file-input-preview')).toBeInTheDocument()
    })

    it('shows an error and clears the input if any files are not an accepted type', () => {
      const { getByTestId, queryByTestId } = render(
        <FileInput {...testProps} accept=".pdf,.txt" />
      )

      const inputEl = getByTestId('file-input-input') as HTMLInputElement
      expect(inputEl).toHaveAttribute('accept', '.pdf,.txt')

      const targetEl = getByTestId('file-input-droptarget')
      fireEvent.drop(targetEl, {
        dataTransfer: {
          files: [TEST_PNG_FILE],
        },
      })

      expect(getByTestId('file-input-error')).toHaveTextContent(
        'This is not a valid file type'
      )
      expect(getByTestId('file-input-error')).toHaveClass(
        'usa-file-input__accepted-files-message'
      )
      expect(getByTestId('file-input-droptarget')).toHaveClass(
        'has-invalid-file'
      )

      expect(queryByTestId('file-input-preview')).not.toBeInTheDocument()
    })
  })

  describe('when it only accepts image files', () => {
    // TODO - try to make this testing better when adding custom drop/change handlers
    it('accepts an image file', async () => {
      const { getByTestId, queryByTestId } = render(
        <FileInput {...testProps} accept="image/*" />
      )

      const inputEl = getByTestId('file-input-input') as HTMLInputElement
      expect(inputEl).toHaveAttribute('accept', 'image/*')

      const targetEl = getByTestId('file-input-droptarget')
      fireEvent.drop(targetEl, {
        dataTransfer: {
          files: [TEST_PNG_FILE],
        },
      })
      // For some reason the simulated drop event does not trigger an onChange event
      await userEvent.upload(inputEl, TEST_PNG_FILE)

      expect(queryByTestId('file-input-error')).not.toBeInTheDocument()
      expect(getByTestId('file-input-droptarget')).not.toHaveClass(
        'has-invalid-file'
      )
      expect(getByTestId('file-input-preview')).toBeInTheDocument()
    })

    it('shows an error and clears the input if any files are not images', () => {
      const { getByTestId, queryByTestId } = render(
        <FileInput {...testProps} accept="image/*" />
      )

      const inputEl = getByTestId('file-input-input') as HTMLInputElement
      expect(inputEl).toHaveAttribute('accept', 'image/*')

      const targetEl = getByTestId('file-input-droptarget')
      fireEvent.drop(targetEl, {
        dataTransfer: {
          files: [TEST_PDF_FILE],
        },
      })

      expect(getByTestId('file-input-error')).toHaveTextContent(
        'This is not a valid file type'
      )
      expect(getByTestId('file-input-error')).toHaveClass(
        'usa-file-input__accepted-files-message'
      )
      expect(getByTestId('file-input-droptarget')).toHaveClass(
        'has-invalid-file'
      )

      expect(queryByTestId('file-input-preview')).not.toBeInTheDocument()
    })
  })

  it('implements an onChange handler when passed as a prop', async () => {
    const mockOnChange = vi.fn()
    const { getByTestId } = render(
      <FileInput {...testProps} onChange={mockOnChange} />
    )

    const inputEl = getByTestId('file-input-input') as HTMLInputElement
    await userEvent.upload(inputEl, TEST_PNG_FILE)

    expect(mockOnChange).toHaveBeenCalled()
  })

  it('implements an onDrop handler when passed as a prop', () => {
    const mockOnDrop = vi.fn()
    const { getByTestId } = render(
      <FileInput {...testProps} onDrop={mockOnDrop} />
    )

    const targetEl = getByTestId('file-input-droptarget')
    fireEvent.drop(targetEl, {
      dataTransfer: {
        files: [TEST_PDF_FILE],
      },
    })

    expect(mockOnDrop).toHaveBeenCalled()
  })

  describe('exposed ref', () => {
    it('can be used to access the files', async () => {
      const fileInputRef = createRef<FileInputRef>()

      render(<FileInput {...testProps} ref={fileInputRef} />)

      // Upload a file
      const inputEl = screen.getByTestId('file-input-input')
      await userEvent.upload(inputEl, [TEST_PNG_FILE])

      expect(fileInputRef.current?.input?.files).toHaveLength(1)
      expect(fileInputRef.current?.files).toHaveLength(1)
    })

    it('can be used to clear the files', async () => {
      const fileInputRef = createRef<FileInputRef>()
      const handleClearFiles = (): void => fileInputRef.current?.clearFiles()

      render(
        <>
          <FileInput {...testProps} ref={fileInputRef} />
          <button onClick={handleClearFiles}>Clear files</button>
        </>
      )

      // Upload files
      const inputEl = screen.getByTestId('file-input-input')
      await userEvent.upload(inputEl, [TEST_XLS_FILE])

      const previews = screen.getAllByTestId('file-input-preview')
      const previewHeading = screen.getByTestId('file-input-preview-heading')
      expect(previews).toHaveLength(1)
      expect(previews[0]).toHaveTextContent(TEST_XLS_FILE.name)
      expect(previewHeading).toHaveTextContent('Selected file Change file')

      expect(fileInputRef.current?.input?.files).toHaveLength(1)
      expect(fileInputRef.current?.files).toHaveLength(1)

      // Clear the input
      await userEvent.click(screen.getByText('Clear files'))
      expect(screen.queryByTestId('file-input-preview')).not.toBeInTheDocument()
      expect(previewHeading).not.toBeInTheDocument()
      expect(screen.getByTestId('file-input-instructions')).not.toHaveClass(
        'display-none'
      )

      // Notice how input.files still exist because we can't programmatically set the value
      expect(fileInputRef.current?.input?.files).toHaveLength(1)
      // But the files state of the React "input" is cleared out
      expect(fileInputRef.current?.files).toHaveLength(0)
    })
  })
})
