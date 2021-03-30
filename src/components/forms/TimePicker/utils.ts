import { ComboBoxOption } from '../ComboBox/ComboBox'

/**
 * Parse a string of hh:mm into minutes
 *
 * @param {string} timeStr the time string to parse
 * @returns {number} the number of minutes
 */
export const parseTimeString = (timeStr: string): number | undefined => {
  let minutes

  if (timeStr) {
    const [hours, mins] = timeStr.split(':').map((str) => {
      let value: number | undefined
      const parsed = parseInt(str, 10)
      if (!Number.isNaN(parsed)) value = parsed
      return value
    })

    if (hours != null && mins != null) {
      minutes = hours * 60 + mins
    }
  }

  return minutes
}

interface TimeContext {
  minute: number
  hour12: number
  hour24: number
  ampm: 'am' | 'pm'
}

const getTimeContext = (minutes: number): TimeContext => {
  const minute = minutes % 60
  const hour24 = Math.floor(minutes / 60)
  const hour12 = hour24 % 12 || 12
  const ampm = hour24 < 12 ? 'am' : 'pm'

  return {
    minute,
    hour24,
    hour12,
    ampm,
  }
}

const padZeros = (value: number, length: number): string => {
  return `0000${value}`.slice(-length)
}

export const getTimeOptions = (
  minTimeMinutes: number,
  maxTimeMinutes: number,
  step: number
): ComboBoxOption[] => {
  const timeOptions: ComboBoxOption[] = []

  for (
    let minutes = minTimeMinutes;
    minutes <= maxTimeMinutes;
    minutes += step
  ) {
    const { minute, hour24, hour12, ampm } = getTimeContext(minutes)

    timeOptions.push({
      value: `${padZeros(hour24, 2)}:${padZeros(minute, 2)}`,
      label: `${hour12}:${padZeros(minute, 2)}${ampm}`,
    })
  }

  return timeOptions
}
