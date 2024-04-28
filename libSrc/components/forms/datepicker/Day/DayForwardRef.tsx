import { forwardRef } from 'react'
import Day from './Day.js'

const DayForwardRef = forwardRef(Day)

export type { BaseDayProps, DayProps } from './Day.js'

export default DayForwardRef
