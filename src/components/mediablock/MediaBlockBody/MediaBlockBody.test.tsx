import { render } from '@testing-library/react'
import { MediaBlockBody } from './MediaBlockBody'

describe('MediaBlockBody Component', () => {
  it('renders properly', () => {
    const { container } = render(<MediaBlockBody>content</MediaBlockBody>)

    const mediaBlockBody = container.querySelector('div')

    expect(mediaBlockBody).toHaveClass('usa-media-block__body')
    expect(mediaBlockBody).toHaveTextContent('content')
  })

  it('Allows custom classes to be passed in', () => {
    const { container } = render(
      <MediaBlockBody className="div-class">content</MediaBlockBody>
    )

    const mediaBlockBody = container.querySelector('div')

    expect(mediaBlockBody).toHaveClass('usa-media-block__body div-class')
  })
})
