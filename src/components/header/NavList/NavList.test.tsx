import { render } from '@testing-library/react'
import { NavList } from './NavList'

const testItems = ['item 1', 'item 2', 'item 3']

describe('NavList component', () => {
  it('renders without errors', () => {
    const { container } = render(<NavList items={testItems} type="primary" />)
    expect(container.querySelector('.usa-nav__primary')).toBeInTheDocument()
    expect(
      container.querySelector('.usa-nav__primary-item')
    ).toBeInTheDocument()
  })

  it('renders all test items', () => {
    const { getByText } = render(<NavList items={testItems} />)
    expect(getByText('item 1')).toBeInTheDocument()
    expect(getByText('item 2')).toBeInTheDocument()
    expect(getByText('item 3')).toBeInTheDocument()
  })

  describe('renders with type prop', () => {
    beforeEach(() => {
      vi.clearAllMocks()
    })

    it.each([
      ['primary', '.usa-nav__primary-item'],
      ['secondary', '.usa-nav__secondary-links'],
      ['subnav', '.usa-nav__submenu'],
      ['megamenu', '.usa-nav__submenu-list'],
      ['footerSecondary', '.usa-list'],
      ['language', '.usa-language__submenu-item'],
    ])('prefers applies type classes %s', (typeString, expectedClass) => {
      const type = typeString as
        | 'primary'
        | 'secondary'
        | 'subnav'
        | 'megamenu'
        | 'footerSecondary'
        | 'language'
      const { container } = render(<NavList items={testItems} type={type} />)
      expect(container.querySelector(expectedClass)).toBeInTheDocument()
    })
  })
})
