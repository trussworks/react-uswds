import React from 'react'
import { render, waitFor } from '@testing-library/react'

import Accordion from './Accordion'
import { testItems } from '../test-fixtures'
import userEvent from '@testing-library/user-event'

describe('Accordion component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without errors', () => {
    const { queryByTestId } = render(<Accordion items={testItems} />)
    expect(queryByTestId('accordion')).toBeInTheDocument()
  })

  describe('when multiselectable is false (default behavior)', () => {
    it('when an item is opened, clicking a different item closes the previously opened item', async () => {
      const { getByText, getByTestId } = render(<Accordion items={testItems} />)

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      await userEvent.click(getByText(testItems[3].title as string))
      await userEvent.click(getByText(testItems[1].title as string))

      await waitFor(() =>
        expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      )
      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      await userEvent.click(getByText(testItems[4].title as string))
      await userEvent.click(getByText(testItems[2].title as string))

      await waitFor(() =>
        expect(getByTestId(`accordionItem_${testItems[2].id}`)).toBeVisible()
      )
      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()
    })

    it("when an item is opened, only that item's id is emitted to onChange handler", async () => {
      const changeHandler = jest.fn()

      const { getByText, getByTestId } = render(
        <Accordion items={testItems} __onChange={changeHandler} />
      )

      await userEvent.click(getByText(testItems[0].title as string))

      await waitFor(() =>
        expect(getByTestId(`accordionItem_${testItems[0].id}`)).toBeVisible()
      )
      expect(changeHandler).toBeCalledWith([testItems[0].id])

      await userEvent.click(getByText(testItems[1].title as string))

      await waitFor(() =>
        expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      )
      expect(changeHandler).toBeCalledWith([testItems[1].id])
    })
  })

  describe('when multiselectable is true', () => {
    it('when an item is opened, previously open items remain open', async () => {
      const { getByText, getByTestId } = render(
        <Accordion items={testItems} multiselectable={true} />
      )

      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      await userEvent.click(getByText(testItems[0].title as string))
      await userEvent.click(getByText(testItems[1].title as string))

      await waitFor(() =>
        expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      )
      expect(getByTestId(`accordionItem_${testItems[0].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      await userEvent.click(getByText(testItems[0].title as string))
      await userEvent.click(getByText(testItems[3].title as string))

      await waitFor(() =>
        expect(getByTestId(`accordionItem_${testItems[3].id}`)).toBeVisible()
      )
      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[4].id}`)).not.toBeVisible()

      await userEvent.click(getByText(testItems[2].title as string))
      await userEvent.click(getByText(testItems[4].title as string))

      await waitFor(() =>
        expect(getByTestId(`accordionItem_${testItems[4].id}`)).toBeVisible()
      )
      expect(getByTestId(`accordionItem_${testItems[0].id}`)).not.toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[2].id}`)).toBeVisible()
      expect(getByTestId(`accordionItem_${testItems[3].id}`)).toBeVisible()
    })

    it('when an item is opened, all open item ids are emitted to onChange handler', async () => {
      const changeHandler = jest.fn()

      const { getByText, getByTestId } = render(
        <Accordion
          items={testItems}
          multiselectable={true}
          __onChange={changeHandler}
        />
      )

      await userEvent.click(getByText(testItems[0].title as string))

      await waitFor(() =>
        expect(getByTestId(`accordionItem_${testItems[0].id}`)).toBeVisible()
      )
      expect(changeHandler).toBeCalledWith([testItems[0].id])

      await userEvent.click(getByText(testItems[1].title as string))

      await waitFor(() =>
        expect(getByTestId(`accordionItem_${testItems[1].id}`)).toBeVisible()
      )
      expect(changeHandler).toBeCalledWith([testItems[0].id, testItems[1].id])
    })
  })
})
