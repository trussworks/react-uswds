import 'happo-plugin-storybook/register'

import 'uswds/dist/css/uswds.css'
import '../src/styles/index.scss'
import './custom-styles.scss'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Design tokens', 'Components', 'Page templates', 'Other'],
    },
  },
}
