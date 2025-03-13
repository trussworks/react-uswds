import React, { type JSX } from 'react'

import { GridContainer } from './GridContainer/GridContainer'
import { Grid } from './Grid/Grid'

export default {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 3.0 Grid components

Source: https://designsystem.digital.gov/utilities/layout-grid/
`,
      },
    },
  },
}

const exampleStyles = {
  border: '1px solid',
  padding: '1rem',
  backgroundColor: '#e1e7f1',
}

const testContent = <div style={exampleStyles}>Content</div>

type CustomGridProps = JSX.IntrinsicElements['li']

const CustomGrid: React.FunctionComponent<CustomGridProps> = ({
  children,
  className,
  ...liProps
}: CustomGridProps): JSX.Element => (
  <li className={className} {...liProps}>
    {children}
  </li>
)

type CustomGridContainerProps = JSX.IntrinsicElements['ul']

const CustomGridContainer: React.FunctionComponent<
  CustomGridContainerProps
> = ({
  children,
  className,
  ...ulProps
}: CustomGridContainerProps): JSX.Element => (
  <ul className={className} {...ulProps}>
    {children}
  </ul>
)

export const DefaultContainer = (): JSX.Element => (
  <GridContainer>
    <Grid row>
      <Grid tablet={{ col: true }}>{testContent}</Grid>
      <Grid tablet={{ col: true }}>{testContent}</Grid>
      <Grid tablet={{ col: true }}>{testContent}</Grid>
    </Grid>
  </GridContainer>
)

export const CustomElements = (): JSX.Element => (
  <GridContainer<CustomGridContainerProps> asCustom={CustomGridContainer}>
    <Grid<CustomGridProps> asCustom={CustomGrid}>
      <Grid col={11}>{testContent}</Grid>
      <Grid col={2}>{testContent}</Grid>
    </Grid>
    <Grid<CustomGridProps> asCustom={CustomGrid}>
      <Grid col={10}>{testContent}</Grid>
      <Grid col={3}>{testContent}</Grid>
    </Grid>
    <Grid<CustomGridProps> asCustom={CustomGrid}>
      <Grid col={9}>{testContent}</Grid>
      <Grid col={4}>{testContent}</Grid>
    </Grid>
    <Grid<CustomGridProps> asCustom={CustomGrid}>
      <Grid col={8}>{testContent}</Grid>
      <Grid col={5}>{testContent}</Grid>
    </Grid>
    <Grid<CustomGridProps> asCustom={CustomGrid}>
      <Grid col={7}>{testContent}</Grid>
      <Grid col={6}>{testContent}</Grid>
    </Grid>
    <Grid<CustomGridProps> asCustom={CustomGrid}>
      <Grid col={5}>{testContent}</Grid>
    </Grid>
    <Grid<CustomGridProps> asCustom={CustomGrid}>
      <Grid col={6}>{testContent}</Grid>
      <Grid col={7}>{testContent}</Grid>
    </Grid>
    <Grid<CustomGridProps> asCustom={CustomGrid}>
      <Grid col={5}>{testContent}</Grid>
      <Grid col={8}>{testContent}</Grid>
    </Grid>
    <Grid<CustomGridProps> asCustom={CustomGrid}>
      <Grid col={4}>{testContent}</Grid>
      <Grid col={9}>{testContent}</Grid>
    </Grid>
    <Grid<CustomGridProps> asCustom={CustomGrid}>
      <Grid col={3}>{testContent}</Grid>
      <Grid col={10}>{testContent}</Grid>
    </Grid>
    <Grid<CustomGridProps> asCustom={CustomGrid}>
      <Grid col={2}>{testContent}</Grid>
      <Grid col={11}>{testContent}</Grid>
    </Grid>
  </GridContainer>
)

export const ColumnSpans = (): JSX.Element => (
  <GridContainer>
    <Grid row>
      <Grid col={1}>{testContent}</Grid>
      <Grid col={11}>{testContent}</Grid>
    </Grid>
    <Grid row>
      <Grid col={2}>{testContent}</Grid>
      <Grid col={10}>{testContent}</Grid>
    </Grid>
    <Grid row>
      <Grid col={3}>{testContent}</Grid>
      <Grid col={9}>{testContent}</Grid>
    </Grid>
    <Grid row>
      <Grid col={4}>{testContent}</Grid>
      <Grid col={8}>{testContent}</Grid>
    </Grid>
    <Grid row>
      <Grid col={5}>{testContent}</Grid>
      <Grid col={7}>{testContent}</Grid>
    </Grid>
    <Grid row>
      <Grid col={6}>{testContent}</Grid>
      <Grid col={6}>{testContent}</Grid>
    </Grid>
    <Grid row>
      <Grid col={1}>{testContent}</Grid>
      <Grid col={1}>{testContent}</Grid>
      <Grid col={1}>{testContent}</Grid>
      <Grid col={1}>{testContent}</Grid>
      <Grid col={1}>{testContent}</Grid>
      <Grid col={1}>{testContent}</Grid>
      <Grid col={1}>{testContent}</Grid>
      <Grid col={1}>{testContent}</Grid>
      <Grid col={1}>{testContent}</Grid>
      <Grid col={1}>{testContent}</Grid>
      <Grid col={1}>{testContent}</Grid>
      <Grid col={1}>{testContent}</Grid>
    </Grid>
    <Grid row>
      <Grid col={2}>{testContent}</Grid>
      <Grid col={2}>{testContent}</Grid>
      <Grid col={2}>{testContent}</Grid>
      <Grid col={2}>{testContent}</Grid>
      <Grid col={2}>{testContent}</Grid>
      <Grid col={2}>{testContent}</Grid>
    </Grid>
    <Grid row>
      <Grid col={3}>{testContent}</Grid>
      <Grid col={3}>{testContent}</Grid>
      <Grid col={3}>{testContent}</Grid>
      <Grid col={3}>{testContent}</Grid>
    </Grid>
    <Grid row>
      <Grid col={4}>{testContent}</Grid>
      <Grid col={4}>{testContent}</Grid>
      <Grid col={4}>{testContent}</Grid>
    </Grid>
  </GridContainer>
)

export const AutoLayoutColumns = (): JSX.Element => (
  <GridContainer>
    <Grid row>
      <Grid col="auto">{testContent}</Grid>
      <Grid col="fill">{testContent}</Grid>
      <Grid col="fill">{testContent}</Grid>
      <Grid col="auto">{testContent}</Grid>
    </Grid>
  </GridContainer>
)

export const Responsive = (): JSX.Element => (
  <>
    <h2>Same at all breakpoints</h2>
    <GridContainer>
      <Grid row>
        <Grid col={1}>{testContent}</Grid>
        <Grid col={2}>{testContent}</Grid>
        <Grid col={3}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={2}>{testContent}</Grid>
      </Grid>
      <Grid row>
        <Grid col={8}>{testContent}</Grid>
        <Grid col={2}>{testContent}</Grid>
        <Grid col={2}>{testContent}</Grid>
      </Grid>
    </GridContainer>

    <h2>Stacked columns at narrow widths</h2>
    <GridContainer>
      <Grid row>
        <Grid tablet={{ col: true }}>{testContent}</Grid>
        <Grid tablet={{ col: true }}>{testContent}</Grid>
        <Grid tablet={{ col: true }}>{testContent}</Grid>
      </Grid>
      <Grid row>
        <Grid tablet={{ col: 4 }}>{testContent}</Grid>
        <Grid tablet={{ col: 8 }}>{testContent}</Grid>
      </Grid>
    </GridContainer>

    <h2>Mix and match</h2>
    <GridContainer>
      <Grid row>
        <Grid tablet={{ col: 8 }}>{testContent}</Grid>
        <Grid col={6} tablet={{ col: 4 }}>
          {testContent}
        </Grid>
      </Grid>
      <Grid row>
        <Grid col={6} tablet={{ col: 4 }}>
          {testContent}
        </Grid>
        <Grid col={6} tablet={{ col: 4 }}>
          {testContent}
        </Grid>
        <Grid col={6} tablet={{ col: 4 }}>
          {testContent}
        </Grid>
      </Grid>
      <Grid row>
        <Grid col={6}>{testContent}</Grid>
        <Grid col={6}>{testContent}</Grid>
      </Grid>
    </GridContainer>
  </>
)

export const OffsetColumns = (): JSX.Element => (
  <GridContainer>
    <Grid row>
      <Grid col>{testContent}</Grid>
    </Grid>
    <Grid row>
      <Grid col={1}>{testContent}</Grid>
    </Grid>
    <Grid row>
      <Grid col={1} offset={1}>
        {testContent}
      </Grid>
    </Grid>
    <Grid row>
      <Grid col={1} offset={2}>
        {testContent}
      </Grid>
    </Grid>
    <Grid row>
      <Grid col={1} offset={3}>
        {testContent}
      </Grid>
    </Grid>
    <Grid row>
      <Grid col={1} offset={4}>
        {testContent}
      </Grid>
    </Grid>
    <Grid row>
      <Grid col={1} offset={5}>
        {testContent}
      </Grid>
    </Grid>
    <Grid row>
      <Grid col={1} offset={6}>
        {testContent}
      </Grid>
    </Grid>
    <Grid row>
      <Grid col={1} offset={7}>
        {testContent}
      </Grid>
    </Grid>
    <Grid row>
      <Grid col={1} offset={8}>
        {testContent}
      </Grid>
    </Grid>
    <Grid row>
      <Grid col={1} offset={9}>
        {testContent}
      </Grid>
    </Grid>
    <Grid row>
      <Grid col={1} offset={10}>
        {testContent}
      </Grid>
    </Grid>
    <Grid row>
      <Grid col={1} offset={11}>
        {testContent}
      </Grid>
    </Grid>
    <Grid row>
      <Grid col={8} offset={4}>
        {testContent}
      </Grid>
    </Grid>
  </GridContainer>
)

export const ColumnWrapping = (): JSX.Element => (
  <GridContainer>
    <Grid row>
      <Grid col={8}>{testContent}</Grid>
      <Grid col={3}>{testContent}</Grid>
      <Grid col={5}>{testContent}</Grid>
    </Grid>
  </GridContainer>
)

export const Gutters = (): JSX.Element => (
  <>
    <h2>Default gutter</h2>
    <GridContainer>
      <Grid row gap>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
      </Grid>
    </GridContainer>

    <h2>Small gutter</h2>
    <GridContainer>
      <Grid row gap="sm">
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
      </Grid>
    </GridContainer>

    <h2>Medium gutter</h2>
    <GridContainer>
      <Grid row gap="md">
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
      </Grid>
    </GridContainer>

    <h2>Large gutter</h2>
    <GridContainer>
      <Grid row gap="lg">
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
      </Grid>
    </GridContainer>

    <h2>2px gutter</h2>
    <GridContainer>
      <Grid row gap="2px">
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
      </Grid>
    </GridContainer>

    <h2>05 gutter</h2>
    <GridContainer>
      <Grid row gap="05">
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
      </Grid>
    </GridContainer>

    <h2>1 gutter</h2>
    <GridContainer>
      <Grid row gap={1}>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
      </Grid>
    </GridContainer>

    <h2>2 gutter</h2>
    <GridContainer>
      <Grid row gap={2}>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
      </Grid>
    </GridContainer>

    <h2>3 gutter</h2>
    <GridContainer>
      <Grid row gap={3}>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
      </Grid>
    </GridContainer>

    <h2>4 gutter</h2>
    <GridContainer>
      <Grid row gap={4}>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
      </Grid>
    </GridContainer>

    <h2>5 gutter</h2>
    <GridContainer>
      <Grid row gap={5}>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
      </Grid>
    </GridContainer>

    <h2>6 gutter</h2>
    <GridContainer>
      <Grid row gap={6}>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
        <Grid col={4}>{testContent}</Grid>
      </Grid>
    </GridContainer>
  </>
)

export const CardContainer = (): JSX.Element => (
  <GridContainer containerSize="card">{testContent}</GridContainer>
)

export const CardLgContainer = (): JSX.Element => (
  <GridContainer containerSize="card-lg">{testContent}</GridContainer>
)

export const MobileContainer = (): JSX.Element => (
  <GridContainer containerSize="mobile">{testContent}</GridContainer>
)

export const MobileLgContainer = (): JSX.Element => (
  <GridContainer containerSize="mobile-lg">{testContent}</GridContainer>
)

export const TabletContainer = (): JSX.Element => (
  <GridContainer containerSize="tablet">{testContent}</GridContainer>
)

export const TabletLgContainer = (): JSX.Element => (
  <GridContainer containerSize="tablet-lg">{testContent}</GridContainer>
)

export const DesktopContainer = (): JSX.Element => (
  <GridContainer containerSize="desktop">{testContent}</GridContainer>
)

export const DesktopLgContainer = (): JSX.Element => (
  <GridContainer containerSize="desktop-lg">{testContent}</GridContainer>
)

export const WidescreenContainer = (): JSX.Element => (
  <GridContainer containerSize="widescreen">{testContent}</GridContainer>
)

export const FooterLayout = (): JSX.Element => (
  <GridContainer>
    <Grid row gap>
      <Grid tablet={{ col: 8 }}>
        <Grid row gap={4}>
          <Grid mobileLg={{ col: 6 }} desktop={{ col: 3 }}>
            Secondary nav
          </Grid>
          <Grid mobileLg={{ col: 6 }} desktop={{ col: 3 }}>
            Secondary nav
          </Grid>
          <Grid mobileLg={{ col: 6 }} desktop={{ col: 3 }}>
            Secondary nav
          </Grid>
          <Grid mobileLg={{ col: 6 }} desktop={{ col: 3 }}>
            Secondary nav
          </Grid>
        </Grid>
      </Grid>
      <Grid tablet={{ col: 4 }}>Sign up form</Grid>
    </Grid>
    <Grid row gap>
      <Grid row mobileLg={{ col: 6, gap: 2 }}>
        <Grid mobileLg={{ col: 'auto' }}>Logo</Grid>
        <Grid mobileLg={{ col: 'auto' }}>Name of Agency</Grid>
      </Grid>
      <Grid mobileLg={{ col: 6 }}>
        <Grid row gap={1}>
          <Grid col="auto">Social</Grid>
          <Grid col="auto">Social</Grid>
          <Grid col="auto">Social</Grid>
          <Grid col="auto">Social</Grid>
        </Grid>
        <Grid row gap>
          Contact Info
        </Grid>
      </Grid>
    </Grid>
  </GridContainer>
)
