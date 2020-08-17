import React from 'react'

import { ComboBox } from './ComboBox'
import { Form } from '../Form/Form'

import { fruits } from './fruits'

export default {
  title: 'Forms/ComboBox',
  component: ComboBox,
  parameters: {
    info: `
USWDS 2.0 ComboBox component

Source: https://designsystem.digital.gov/components/form-controls/#ComboBox
`,
  },
}

const noop = (): void => {
  return
}

export const defaultComboBoxWithPropOptions = (): React.ReactElement => {
  const opts = Object.entries(fruits).map(([value, key]) => ({
    id: value,
    label: key,
  }))

  return (
    <Form onSubmit={noop}>
      <ComboBox
        id="input-ComboBox"
        name="input-ComboBox"
        options={opts}
        setFieldValue={noop}
      />
    </Form>
  )
}

export const withDefaultValue = (): React.ReactElement => {
  const opts = Object.entries(fruits).map(([value, key]) => ({
    id: value,
    label: key,
  }))

  return (
    <Form onSubmit={noop}>
      <ComboBox
        id="input-ComboBox"
        name="input-ComboBox"
        options={opts}
        setFieldValue={noop}
        defaultValue={'apple'}
      />
    </Form>
  )
}

// export const withLabel = (): React.ReactElement => (
//   <>
//     <Label htmlFor="options">ComboBox label</Label>
//     <ComboBox id="input-ComboBox" name="input-ComboBox">
//     </ComboBox>
//   </>
// )

// export const disabled = (): React.ReactElement => (
//   <ComboBox id="input-ComboBox" name="input-ComboBox" disabled>
//   </ComboBox>
// )
