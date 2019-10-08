import React from 'react'
import { Table } from './Table'

export default {
  title: 'Table',
  parameters: {
    info: `
USWDS 2.0 Table component

Source: https://designsystem.digital.gov/components/table/
`,
  },
}

const testContent = (
  <>
    <thead>
      <tr>
        <th scope="col">Document title</th>
        <th scope="col">Description</th>
        <th scope="col">Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Declaration of Independence</th>
        <td>
          Statement adopted by the Continental Congress declaring independence
          from the British Empire.
        </td>
        <td>1776</td>
      </tr>
      <tr>
        <th scope="row">Bill of Rights</th>
        <td>
          The first ten amendments of the U.S. Constitution guaranteeing rights
          and freedoms.
        </td>
        <td>1791</td>
      </tr>
      <tr>
        <th scope="row">Declaration of Sentiments</th>
        <td>
          A document written during the Seneca Falls Convention outlining the
          rights that American women should be entitled to as citizens.
        </td>
        <td>1848</td>
      </tr>
      <tr>
        <th scope="row">Emancipation Proclamation</th>
        <td>
          An executive order granting freedom to slaves in designated southern
          states.
        </td>
        <td>1863</td>
      </tr>
    </tbody>
  </>
)

export const bordered = (): React.ReactElement => (
  <Table bordered={true}>{testContent}</Table>
)

export const borderless = (): React.ReactElement => (
  <Table bordered={false}>{testContent}</Table>
)

export const borderedWithCaption = (): React.ReactElement => (
  <Table bordered caption="This is a bordered table with a caption">
    {testContent}
  </Table>
)

export const borderlessWithCaption = (): React.ReactElement => (
  <Table bordered={false} caption="This is a borderless table with a caption">
    {testContent}
  </Table>
)
