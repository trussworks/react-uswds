import React from 'react'
import { render, screen } from '@testing-library/react'
import BannerButton from './BannerButton'

describe('BannerButton component', () => {
  it('renders properly', () => {
    render(<BannerButton>Button Text</BannerButton>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
