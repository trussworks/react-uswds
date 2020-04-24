import React from 'react'
import { HorizontalNav } from './HorizontalNav'

export default {
  title: 'HorizontalNav',
}

const testItems = [
  <a href="#one" className="usa-current" key="one">
    Current page
  </a>,
  <a href="#two" key="two">
    Link one
  </a>,
  <a href="#three" key="three">
    Link two
  </a>,
]

export const flat = (): React.ReactElement => (
  <HorizontalNav items={testItems} />
)
