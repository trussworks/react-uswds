import React, { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import BannerHeaderText from './BannerHeaderText'

describe('BannerHeaderText Component', () => {
  const renderBannerHeaderText = (
    props?: ComponentProps<typeof BannerHeaderText>
  ) => {
    const headerCopy = 'An official website of the United States government'

    render(<BannerHeaderText {...props}>{headerCopy}</BannerHeaderText>)

    const headerText = screen.getByText(headerCopy)

    return headerText
  }

  it('renders properly', () => {
    const headerText = renderBannerHeaderText()

    expect(headerText).toHaveClass('usa-banner__header-text')
  })

  it('Allows custom classes to be passed in', () => {
    const headerText = renderBannerHeaderText({
      className: 'header-text-class',
    })

    expect(headerText).toHaveClass('usa-banner__header-text header-text-class')
  })
})
