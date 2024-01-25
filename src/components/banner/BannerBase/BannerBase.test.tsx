import React from 'react'
import { render } from '@testing-library/react'
import BannerBase from './BannerBase'

describe('Banner component', () => {
  it('renders properly', () => {
    const { queryByTestId } = render(<BannerBase>content</BannerBase>)

    const section = queryByTestId('banner')

    expect(section).toHaveClass('usa-banner')
    expect(section).toHaveTextContent('content')
  })

  it('accepts className prop', () => {
    const { queryByTestId } = render(<BannerBase className="myClass" />)
    expect(queryByTestId('banner')).toHaveClass('myClass')
  })
})
