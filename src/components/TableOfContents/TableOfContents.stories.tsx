import React from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'
import { TableOfContents } from './TableOfContents'

const meta: Meta<typeof TableOfContents> = {
  title: 'Components/TableOfContents',
  component: TableOfContents,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Table of Contents component

Generates navigation anchor links automatically by scanning rendered HTML DOM nodes or by parsing raw Markdown text strings.
`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const declarationMarkdown = `
# Declaration of Independence

When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.

## Preamble
We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.

### Fundamental Rights
Life, Liberty and the pursuit of Happiness.

## List of Grievances
- He has refused his Assent to Laws, the most wholesome and necessary for the public good.
- He has forbidden his Governors to pass Laws of immediate and pressing importance, unless suspended in their operation till his Assent should be obtained; and when so suspended, he has utterly neglected to attend to them.
- He has refused to pass other Laws for the accommodation of large districts of people, unless those people would relinquish the right of Representation in the Legislature, a right inestimable to them and formidable to tyrants only.
- He has called together legislative bodies at places unusual, uncomfortable, and distant from the depository of their public Records, for the sole purpose of fatiguing them into compliance with his measures.

## Conclusion
We, therefore, the Representatives of the united States of America, in General Congress, Assembled, appealing to the Supreme Judge of the world for the rectitude of our intentions, do, in the Name, and by Authority of the good People of these Colonies, solemnly publish and declare, That these United Colonies are, and of Right ought to be Free and Independent States; that they are Absolved from all Allegiance to the British Crown, and that all political connection between them and the State of Great Britain, is and ought to be totally dissolved; and that as Free and Independent States, they have full Power to levy War, conclude Peace, contract Alliances, establish Commerce, and to do all other Acts and Things which Independent States may of right do. And for the support of this Declaration, with a firm reliance on the protection of divine Providence, we mutually pledge to each other our Lives, our Fortunes and our sacred Honor.
`

/** Story 1: HTML / DOM Extraction mode */
export const FromHTML: Story = {
  name: 'HTML Content (DOM Extraction)',
  render: () => (
    <div className="usa-prose">
      <TableOfContents selector="[data-mdx-content]" />
      <div data-mdx-content>
        <h1>Declaration of Independence</h1>
        <p>
          When in the Course of human events, it becomes necessary for one
          people to dissolve the political bands which have connected them with
          another, and to assume among the powers of the earth, the separate and
          equal station to which the Laws of Nature and of Nature&apos;s God
          entitle them, a decent respect to the opinions of mankind requires
          that they should declare the causes which impel them to the
          separation.
        </p>
        <h2>Preamble</h2>
        <p>
          We hold these truths to be self-evident, that all men are created
          equal, that they are endowed by their Creator with certain unalienable
          Rights, that among these are Life, Liberty and the pursuit of
          Happiness.
        </p>
        <h3>Fundamental Rights</h3>
        <p>Life, Liberty and the pursuit of Happiness.</p>
        <h2>List of Grievances</h2>
        <ul>
          <li>
            He has refused his Assent to Laws, the most wholesome and necessary
            for the public good.
          </li>
          <li>
            He has forbidden his Governors to pass Laws of immediate and
            pressing importance, unless suspended in their operation till his
            Assent should be obtained; and when so suspended, he has utterly
            neglected to attend to them.
          </li>
          <li>
            He has refused to pass other Laws for the accommodation of large
            districts of people, unless those people would relinquish the right
            of Representation in the Legislature, a right inestimable to them
            and formidable to tyrants only.
          </li>
          <li>
            He has called together legislative bodies at places unusual,
            uncomfortable, and distant from the depository of their public
            Records, for the sole purpose of fatiguing them into compliance with
            his measures.
          </li>
        </ul>
        <h2>Conclusion</h2>
        <p>
          We, therefore, the Representatives of the united States of America, in
          General Congress, Assembled, appealing to the Supreme Judge of the
          world for the rectitude of our intentions, do, in the Name, and by
          Authority of the good People of these Colonies, solemnly publish and
          declare, That these United Colonies are, and of Right ought to be Free
          and Independent States; that they are Absolved from all Allegiance to
          the British Crown, and that all political connection between them and
          the State of Great Britain, is and ought to be totally dissolved; and
          that as Free and Independent States, they have full Power to levy War,
          conclude Peace, contract Alliances, establish Commerce, and to do all
          other Acts and Things which Independent States may of right do. And
          for the support of this Declaration, with a firm reliance on the
          protection of divine Providence, we mutually pledge to each other our
          Lives, our Fortunes and our sacred Honor.
        </p>
      </div>
    </div>
  ),
}

/** Story 2: Markdown string prop mode */
export const FromMarkdown: Story = {
  name: 'Markdown Content (String Prop)',
  args: {
    markdown: declarationMarkdown,
  },
  render: (args) => (
    <div className="usa-prose">
      <TableOfContents {...args} />
      <div
        style={{
          marginTop: '2rem',
          padding: '1rem',
          background: '#f4f4f4',
          borderRadius: '4px',
        }}>
        <p>
          <strong>Raw Markdown Source:</strong>
        </p>
        <pre>
          <code>{args.markdown}</code>
        </pre>
      </div>
    </div>
  ),
}
