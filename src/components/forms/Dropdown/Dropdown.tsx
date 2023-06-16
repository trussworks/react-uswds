/*
  TODO: Remove this component
*/

import { Select } from '../Select/Select'
import { withDeprecationWarning } from '../../hoc/withDeprecationWarning'

export const Dropdown = withDeprecationWarning(
  Select,
  'Dropdown is deprecated and will be removed in the future. Please use the Select component instead.'
)
