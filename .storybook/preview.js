import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import 'happo-plugin-storybook/register';

import 'uswds/dist/css/uswds.css'
import '../src/styles/index.scss'

addDecorator(withInfo)
