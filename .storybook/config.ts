import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import 'uswds/dist/css/uswds.css'
import '../src/styles/index.scss'
import './custom-story.css'

configure(require.context('../src', true, /\.stories\.tsx?$/), module)

addDecorator(withInfo)
