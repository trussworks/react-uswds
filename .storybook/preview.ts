import 'happo-plugin-storybook/register'

import 'uswds/dist/css/uswds.css'
import '../src/styles/index.scss'
import './custom-styles.scss'

import { addParameters } from '@storybook/client-api'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
