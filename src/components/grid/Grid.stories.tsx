import React from 'react'

import { GridContainer } from './GridContainer/GridContainer'
import { Grid } from './Grid/Grid'

export default {
  title: 'Grid',
  parameters: {
    info: `
USWDS 2.0 Grid components

Source: https://designsystem.digital.gov/utilities/layout-grid/
`,
  },
}

const exampleStyles = {
  border: '1px solid',
  padding: '1rem',
  backgroundColor: '#e1e7f1',
}

const testContent = <div style={exampleStyles}>Content</div>

export const defaultContainer = (): React.ReactElement => (
  <GridContainer>
    <Grid row>
      <Grid col>{testContent}</Grid>
      <Grid col>{testContent}</Grid>
      <Grid col>{testContent}</Grid>
    </Grid>
  </GridContainer>
)

export const columnSpans = (): React.ReactElement => (
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

export const autoLayoutColumns = (): React.ReactElement => (
  <GridContainer>
    <Grid row>
      <Grid col="auto">{testContent}</Grid>
      <Grid col="fill">{testContent}</Grid>
      <Grid col="fill">{testContent}</Grid>
      <Grid col="auto">{testContent}</Grid>
    </Grid>
  </GridContainer>
)

export const offsetColumns = (): React.ReactElement => (
  <GridContainer>
    <Grid row>
      <Grid col={8} offset={4}>
        {testContent}
      </Grid>
    </Grid>
  </GridContainer>
)

export const mobileContainer = (): React.ReactElement => (
  <GridContainer containerSize="mobile">{testContent}</GridContainer>
)

export const mobileLgContainer = (): React.ReactElement => (
  <GridContainer containerSize="mobile-lg">{testContent}</GridContainer>
)

export const tabletContainer = (): React.ReactElement => (
  <GridContainer containerSize="tablet">{testContent}</GridContainer>
)

export const tabletLgContainer = (): React.ReactElement => (
  <GridContainer containerSize="tablet-lg">{testContent}</GridContainer>
)

export const desktopContainer = (): React.ReactElement => (
  <GridContainer containerSize="desktop">{testContent}</GridContainer>
)

export const desktopLgContainer = (): React.ReactElement => (
  <GridContainer containerSize="desktop-lg">{testContent}</GridContainer>
)

export const widescreenContainer = (): React.ReactElement => (
  <GridContainer containerSize="widescreen">{testContent}</GridContainer>
)
