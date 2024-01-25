import React, { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import BannerHeaderAction from './BannerHeaderAction'

describe('BannerHeaderText Component', () => {
  const renderBannerHeaderAction = (
    props?: ComponentProps<typeof BannerHeaderAction>
  ) => {
    const headerActionCopy = "Here's how you know"

    render(
      <BannerHeaderAction {...props}>{headerActionCopy}</BannerHeaderAction>
    )

    const headerAction = screen.getByText(headerActionCopy)

    return headerAction
  }

  it('renders properly', () => {
    const headerAction = renderBannerHeaderAction()

    expect(headerAction).toHaveClass('usa-banner__header-action')
  })

  it('Allows custom classes to be passed in', () => {
    const headerAction = renderBannerHeaderAction({
      className: 'header-action-class',
    })

    expect(headerAction).toHaveClass(
      'usa-banner__header-action header-action-class'
    )
  })
})
