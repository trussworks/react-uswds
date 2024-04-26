import 'happo-plugin-storybook/register'

import '@uswds/uswds/css/uswds.css'
import '../libSrc/styles/index.scss'
import './custom-styles.scss'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Preview } from '@storybook/react'
import USWDS from './USWDS'

const preview: Preview = {
  parameters: {
    docs: {
      theme: USWDS,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    options: {
      showPanel: true,
      storySort: {
        method: 'alphabetical',
        order: [
          'Welcome',
          'Design tokens',
          'Page Templates',
          'Components',
          'Other',
        ],
      },
    },
  },
}
export default preview
