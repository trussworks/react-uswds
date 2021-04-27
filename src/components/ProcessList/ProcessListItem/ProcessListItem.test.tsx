/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { render } from '@testing-library/react'

import { ProcessListItem } from './ProcessListItem'
import { ProcessListHeading } from '../ProcessListHeading/ProcessListHeading'

const testData = (
  <>
    <ProcessListHeading type="h4">Start a process</ProcessListHeading>
    <p className="margin-top-05">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque.
    </p>
    <ul>
      <li>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
        ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
        lorem non turpis.
      </li>
      <li>
        Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
        condimentum.
      </li>
      <li>Aliquam erat volutpat. Sed quis velit.</li>
    </ul>
    <ProcessListHeading type="h4">
      Proceed to the second step
    </ProcessListHeading>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
      ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
      lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula
      volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla
      facilisi. Nulla libero. Vivamus pharetra posuere sapien.
    </p>
    <ProcessListHeading type="h4">
      Complete the step-by-step process
    </ProcessListHeading>
    <p>
      Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
      condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla
      libero. Vivamus pharetra posuere sapien.
    </p>
  </>
)

describe('ProcessListItem component', () => {
  it('renders without errors', () => {
    const { getByRole } = render(<ProcessListItem>some text</ProcessListItem>)

    const listItem = getByRole('listitem')
    expect(listItem).toBeInTheDocument()
    expect(listItem).toHaveClass('usa-process-list__item')
  })

  it('renders children passed in', () => {
    const { getAllByRole } = render(
      <ProcessListItem>{testData}</ProcessListItem>
    )

    expect(getAllByRole('listitem')).toHaveLength(4)
    expect(getAllByRole('heading')).toHaveLength(3)
  })

  it('accepts a custom className', () => {
    const { getByRole } = render(
      <ProcessListItem className="custom-class-name">
        <a href="#">link text</a>
      </ProcessListItem>
    )

    expect(getByRole('listitem')).toHaveClass(
      'usa-process-list__item custom-class-name'
    )
  })
})
