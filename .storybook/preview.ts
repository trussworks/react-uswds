import 'happo-plugin-storybook/register'

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
      order: ['Components', 'Design tokens', 'Page templates', 'Other'],
    },
  },
}
