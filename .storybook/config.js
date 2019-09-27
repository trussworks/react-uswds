import { configure } from '@storybook/react'

import 'uswds/dist/css/uswds.css'

configure(require.context('../src', true, /\.stories\.jsx?$/), module)
