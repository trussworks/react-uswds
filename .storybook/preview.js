import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import 'uswds/dist/css/uswds.css'
import '../src/styles/index.scss'

addDecorator(withInfo)
