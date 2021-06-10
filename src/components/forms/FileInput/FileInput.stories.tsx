import React, { useState, useRef } from 'react'

import { FileInput, FileInputRef } from './FileInput'
import { FormGroup } from '../FormGroup/FormGroup'
import { Label } from '../Label/Label'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'

export default {
  title: 'Components/File input',
  component: FileInput,
  argTypes: {
    onChange: { action: 'changed' },
    onDrop: { action: 'dropped' },
  },
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 FileInput component
Source: https://designsystem.digital.gov/components/file-input
`,
      },
    },
  },
}

type StorybookArguments = {
  onChange: (event: React.ChangeEvent<Element>) => void
  onDrop: React.DragEventHandler<Element>
}

export const singleFileInput = (): React.ReactElement => (
  <FormGroup>
    <Label htmlFor="file-input-single">Input accepts a single file</Label>
    <FileInput id="file-input-single" name="file-input-single" />
  </FormGroup>
)

export const acceptTextAndPDF = (): React.ReactElement => (
  <FormGroup>
    <Label htmlFor="file-input-specific">
      Input accepts only specific file types
    </Label>
    <span className="usa-hint" id="file-input-specific-hint">
      Select PDF or TXT files
    </span>
    <FileInput
      id="file-input-specific"
      name="file-input-specific"
      accept=".pdf,.txt"
      aria-describedby="file-input-specific-hint"
      multiple
    />
  </FormGroup>
)

export const acceptImages = (): React.ReactElement => (
  <FormGroup>
    <Label htmlFor="file-input-wildcard">Input accepts any kind of image</Label>
    <span className="usa-hint" id="file-input-wildcard-hint">
      Select any type of image format
    </span>
    <FileInput
      id="file-input-wildcard"
      name="file-input-wildcard"
      accept="image/*"
      aria-describedby="file-input-wildcard-hint"
      multiple
    />
  </FormGroup>
)

export const multipleFilesInput = (): React.ReactElement => (
  <FormGroup>
    <Label htmlFor="file-input-multiple">Input accepts multiple files</Label>
    <span className="usa-hint" id="file-input-multiple-hint">
      Select one or more files
    </span>
    <FileInput
      id="file-input-multiple"
      name="file-input-multiple"
      aria-describedby="file-input-multiple-hint"
      multiple
    />
  </FormGroup>
)

export const withError = (): React.ReactElement => (
  <div style={{ marginLeft: '1.25em' }}>
    <FormGroup error>
      <Label htmlFor="file-input-multiple" error>
        Input has an error
      </Label>
      <span className="usa-hint" id="file-input-error-hint">
        Select any valid file
      </span>
      <ErrorMessage id="file-input-error-alert">
        Display a helpful error message
      </ErrorMessage>
      <FileInput
        id="file-input-error"
        name="file-input-error"
        aria-describedby="file-input-error-hint file-input-error-alert"
      />
    </FormGroup>
  </div>
)

export const disabled = (): React.ReactElement => (
  <FormGroup>
    <Label htmlFor="file-input-disabled">Input in a disabled state</Label>
    <FileInput id="file-input-disabled" name="file-input-disabled" disabled />
  </FormGroup>
)

export const withRefAndCustomHandlers = (
  argTypes: StorybookArguments
): React.ReactElement => {
  const [files, setFiles] = useState<FileList>()
  const fileInputRef = useRef<FileInputRef>()

  const handleClearFiles = (): void => fileInputRef.current?.clearFiles()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    argTypes.onChange(e)
    setFiles(e.target?.files)
  }

  const fileList = []
  for (let i = 0; i < files?.length; i++) {
    fileList.push(<li key={`file_${i}`}>{files[Number(i)].name}</li>)
  }

  return (
    <>
      <FormGroup>
        <Label htmlFor="file-input-async">
          Input implements custom handlers
        </Label>
        <FileInput
          id="file-input-async"
          name="file-input-async"
          multiple
          onChange={handleChange}
          onDrop={argTypes.onDrop}
          ref={fileInputRef}
        />
      </FormGroup>

      <button type="button" onClick={handleClearFiles}>
        Clear files
      </button>

      <p>{files?.length || 0} files added:</p>
      <ul>{fileList}</ul>
    </>
  )
}
