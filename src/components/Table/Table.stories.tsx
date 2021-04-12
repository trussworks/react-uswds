import React from 'react'
import { Table } from './Table'

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 Table component

Source: https://designsystem.digital.gov/components/table/
`,
      },
    },
  },
  argTypes: {
    bordered: {
      control: {
        type: 'boolean',
      },
    },
    stackedStyle: {
      control: {
        type: 'select',
        options: ['default', 'headers'],
      },
      defaultValue: 'default',
    },
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

const scrollableTestContent = (
  <>
    <thead>
      <tr>
        <th>Federal Budget Baseline Projections</th>
        <th>2017</th>
        <th>2018</th>
        <th>2019</th>
        <th>2020</th>
        <th>2021</th>
        <th>Hist. Avg.</th>
      </tr>
      <tr>
        <th scope="col">%GDP</th>
        <th scope="col">USD*</th>
        <th scope="col">%GDP</th>
        <th scope="col">USD*</th>
        <th scope="col">%GDP</th>
        <th scope="col">USD*</th>
        <th scope="col">%GDP</th>
        <th scope="col">USD*</th>
        <th scope="col">%GDP</th>
        <th scope="col">USD*</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Revenue</th>
        <td>17.2%</td>
        <td>3,316</td>
        <td>16.4%</td>
        <td>3,338</td>
        <td>16.3%</td>
        <td>3,490</td>
        <td>16.7%</td>
        <td>3,678</td>
        <td>16.7%</td>
        <td>3,827</td>
        <td>17.4%</td>
        <td>3,381</td>
      </tr>
      <tr>
        <th scope="row">Outlays</th>
        <td>20.6%</td>
        <td>3,982</td>
        <td>20.2%</td>
        <td>4,142</td>
        <td>21.0%</td>
        <td>4,470</td>
        <td>21.3%</td>
        <td>4,685</td>
        <td>21.6%</td>
        <td>4,949</td>
        <td>20.3%</td>
        <td>4,198</td>
      </tr>
      <tr>
        <th scope="row">Budget Deficit</th>
        <td>-3.5%</td>
        <td>-665</td>
        <td>-3.8%</td>
        <td>-804</td>
        <td>-4.6%</td>
        <td>-981</td>
        <td>-4.6%</td>
        <td>-1,008</td>
        <td>-4.9%</td>
        <td>-1,123</td>
        <td>-2.9%</td>
        <td>-483</td>
      </tr>
      <tr>
        <th scope="row">Debt Held by Public</th>
        <td>76.0%</td>
        <td>14,665</td>
        <td>77.4%</td>
        <td>15,688</td>
        <td>79.2%</td>
        <td>16,762</td>
        <td>80.9%</td>
        <td>17,872</td>
        <td>83.1%</td>
        <td>18,998</td>
        <td>41.7%</td>
        <td>8,065</td>
      </tr>
    </tbody>
  </>
)

export const bordered = (): React.ReactElement => (
  <Table bordered>{testContent}</Table>
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

export const contentWidth = (): React.ReactElement => (
  <Table bordered caption="This table demonstrates the default layout (width)">
    <thead>
      <tr>
        <th scope="col">Document title</th>
        <th scope="col">Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Declaration of Independence</th>
        <td>1776</td>
      </tr>
      <tr>
        <th scope="row">Bill of Rights</th>
        <td>1791</td>
      </tr>
      <tr>
        <th scope="row">Declaration of Sentiments</th>
        <td>1848</td>
      </tr>
      <tr>
        <th scope="row">Emancipation Proclamation</th>
        <td>1863</td>
      </tr>
    </tbody>
  </Table>
)

export const fullWidth = (): React.ReactElement => (
  <Table
    bordered
    caption="This table uses the fullWidth prop to increase to 100% width"
    fullWidth>
    <thead>
      <tr>
        <th scope="col">Document title</th>
        <th scope="col">Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Declaration of Independence</th>
        <td>1776</td>
      </tr>
      <tr>
        <th scope="row">Bill of Rights</th>
        <td>1791</td>
      </tr>
      <tr>
        <th scope="row">Declaration of Sentiments</th>
        <td>1848</td>
      </tr>
      <tr>
        <th scope="row">Emancipation Proclamation</th>
        <td>1863</td>
      </tr>
    </tbody>
  </Table>
)

export const fixed = (): React.ReactElement => (
  <Table
    bordered
    caption="This table uses the fixed prop to force equal width columns"
    fullWidth
    fixed>
    <thead>
      <tr>
        <th scope="col">Document title</th>
        <th scope="col">Year</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Declaration of Independence</th>
        <td>1776</td>
      </tr>
      <tr>
        <th scope="row">Bill of Rights</th>
        <td>1791</td>
      </tr>
      <tr>
        <th scope="row">Declaration of Sentiments</th>
        <td>1848</td>
      </tr>
      <tr>
        <th scope="row">Emancipation Proclamation</th>
        <td>1863</td>
      </tr>
    </tbody>
  </Table>
)

export const scrollable = (): React.ReactElement => (
  <Table scrollable={true} caption="This is a scrollable table">
    {scrollableTestContent}
  </Table>
)

export const striped = (): React.ReactElement => (
  <Table striped caption="This is a striped table">
    {testContent}
  </Table>
)

export const compact = (): React.ReactElement => (
  <Table compact caption="This is a compact table">
    {testContent}
  </Table>
)

export const stackedStylesDemo = (argTypes): React.ReactElement => (
  <div className="width-mobile">
    <Table
      bordered={argTypes.bordered}
      stackedStyle={argTypes.stackedStyle}
      caption="This is a stacked table (when on a mobile-width screen)">
      <thead>
        <tr>
          <th scope="col">Document title</th>
          <th scope="col">Description</th>
          <th scope="col">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th data-label="Document title" scope="row">
            Declaration of Independence
          </th>
          <td data-label="Description">
            Statement adopted by the Continental Congress declaring independence
            from the British Empire.
          </td>
          <td data-label="Year">1776</td>
        </tr>
        <tr>
          <th data-label="Document title" scope="row">
            Bill of Rights
          </th>
          <td data-label="Description">
            The first ten amendments of the U.S. Constitution guaranteeing
            rights and freedoms.
          </td>
          <td data-label="Year">1791</td>
        </tr>
      </tbody>
    </Table>
  </div>
)
