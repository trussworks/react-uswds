import React, { ComponentProps } from 'react'
import { render, screen, within } from '@testing-library/react'
import BannerHeader from './BannerHeader'
import BannerFlag from '../BannerFlag/BannerFlag'

describe('BannerHeader Component', () => {
  const renderBannerHeader = ({
    isOpen,
    ...bannerHeaderProps
  }: Omit<
    ComponentProps<typeof BannerHeader>,
    'headerText' | 'headerActionText' | 'flagImg'
  >) => {
    const headerCopy = 'An official website of the United States government'
    const headerActionCopy = "Here's how you know"

    render(
      <BannerHeader
        headerText={headerCopy}
        headerActionText={headerActionCopy}
        isOpen={isOpen}
        flagImg={<BannerFlag />}
        {...bannerHeaderProps}>
        content
      </BannerHeader>
    )

    const header = screen.getByRole('banner')
    const innerDiv = screen.getByTestId('banner-header-inner-div')
    const flagDiv = screen.getByTestId('banner-header-flag-div')
    const gridDiv = screen.getByTestId('banner-header-grid-div')
    const flagImg = within(flagDiv).getByRole('img')
    const headerText = screen.getByText(headerCopy)
    const headerActionText = screen.getByText(headerActionCopy)

    return {
      header,
      innerDiv,
      flagDiv,
      flagImg,
      gridDiv,
      headerText,
      headerActionText,
    }
  }

  it('renders properly', () => {
    const {
      header,
      innerDiv,
      flagDiv,
      gridDiv,
      flagImg,
      headerText,
      headerActionText,
    } = renderBannerHeader({ isOpen: false })

    expect(header).toHaveClass('usa-banner__header')
    expect(innerDiv).toHaveClass('usa-banner__inner')
    expect(flagDiv).toHaveClass('grid-col-auto')
    expect(gridDiv).toHaveClass('grid-col-fill tablet:grid-col-auto')
    expect(headerText).toHaveClass('usa-banner__header-text')
    expect(headerActionText).toHaveClass('usa-banner__header-action')

    expect(flagImg).toBeInTheDocument()
    expect(flagDiv.children).toContain(flagImg)
    expect(innerDiv).toHaveTextContent('content')
  })
})
