import React from 'react'
import { render } from '@testing-library/react'

jest.mock('../../../deprecation')
import { deprecationWarning } from '../../../deprecation'
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
      jest.clearAllMocks()
    })

    it.each([
      ['primary', 'secondary', '.usa-nav__primary-item'],
      ['secondary', 'subnav', '.usa-nav__secondary-links'],
      ['subnav', 'megamenu', '.usa-nav__submenu'],
      ['megamenu', 'footerSecondary', '.usa-nav__submenu-list'],
      ['footerSecondary', 'primary', '.usa-list'],
    ])(
      'prefers type to deprecated %s',
      (typeString, deprecatedKey, expectedClass) => {
        const type = typeString as
          | 'primary'
          | 'secondary'
          | 'subnav'
          | 'megamenu'
          | 'footerSecondary'
        const deprecatedProps: { [key: string]: boolean } = {}
        deprecatedProps[`${deprecatedKey}`] = true
        const { container } = render(
          <NavList items={testItems} type={type} {...deprecatedProps} />
        )
        expect(container.querySelector(expectedClass)).toBeInTheDocument()
        expect(deprecationWarning).toHaveBeenCalledTimes(1)
      }
    )
  })
})
