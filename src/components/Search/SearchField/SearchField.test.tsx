import React from 'react'
import { render } from '@testing-library/react'
import { SearchField } from './SearchField'

describe('SearchField component', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(
      <SearchField></SearchField>
    )
    expect(queryByTestId('textInput')).toBeInTheDocument()
  })

  it('renders a placeholder', () => {
    const placeholder = 'SearchFieldhere'
    const { queryByTestId } = render(
      <SearchField placeholder={placeholder}></SearchField>
    )
    expect(queryByTestId('textInput')).toHaveAttribute(
      'placeholder',
      placeholder
    )
  })

  it('renders a default value', () => {
    const defaultValue = 'SearchFieldhere'
    const { queryByTestId } = render(
      <SearchField defaultValue={defaultValue}></SearchField>
    )
    expect(queryByTestId('textInput')).toHaveAttribute(
      'value',
      defaultValue
    )
  })

  it('renders a label', () => {
    const { queryByLabelText } = render(
      <SearchField label="Buscar"></SearchField>
    )

    expect(queryByLabelText('Buscar')).toBeInTheDocument()
  })
})
