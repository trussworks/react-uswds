import { render } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner component', () => {
  it('renders properly', () => {
    const { container } = render(<Banner>content</Banner>)

    const section = container.querySelector('section')
    const div = container.querySelector('div')

    expect(section).toHaveClass('usa-banner')
    expect(div).toHaveClass('usa-accordion')
    expect(div).toHaveTextContent('content')
  })

  it('Allows custom classes to be passed in', () => {
    const { container } = render(
      <Banner className="section-class" divProps={{ className: 'div-class' }}>
        content
      </Banner>
    )

    const section = container.querySelector('section')
    const div = container.querySelector('div')

    expect(section).toHaveClass('usa-banner section-class')
    expect(div).toHaveClass('usa-accordion div-class')
    expect(div).toHaveTextContent('content')
  })
})
