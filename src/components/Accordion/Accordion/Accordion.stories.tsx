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

export const Borderless = (): React.ReactElement => (
  <Accordion bordered={false} items={testItems} />
)

export const Bordered = (): React.ReactElement => (
  <Accordion bordered={true} items={testItems} />
)

export const Multiselctable = (): React.ReactElement => (
  <Accordion items={testItems} multiselectable={true} />
)

export const CustomTitles = (): React.ReactElement => (
  <Accordion bordered={true} items={customTestItems} />
)
