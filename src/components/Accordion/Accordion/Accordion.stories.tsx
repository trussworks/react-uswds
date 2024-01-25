import React from 'react'
import Accordion from './Accordion'
import { testItems } from '../test-fixtures'
import { AccordionItemProps } from '../AccordionItem/AccordionItem'

const customTestItem = {
  ...testItems[0],
  title: (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      Title text <span>Status</span>
    </div>
  ),
  className: 'myCustomAccordionItem',
} as const satisfies AccordionItemProps
const customTestItems = [customTestItem, ...testItems.slice(1)]

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Accordion component

Source: https://designsystem.digital.gov/components/accordion/
`,
      },
    },
  },
}

export const borderless = (): React.ReactElement => (
  <Accordion bordered={false} items={testItems} />
)

export const bordered = (): React.ReactElement => (
  <Accordion bordered={true} items={testItems} />
)

export const multiselectable = (): React.ReactElement => (
  <Accordion items={testItems} multiselectable={true} />
)

export const customTitles = (): React.ReactElement => (
  <Accordion bordered={true} items={customTestItems} />
)
