import { addons } from 'storybook/manager-api';
import USWDS from './USWDS.js';

addons.setConfig({
  theme: USWDS,
});
