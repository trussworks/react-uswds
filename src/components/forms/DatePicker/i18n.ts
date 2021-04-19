import {
  MONTH_LABELS,
  DAY_OF_WEEK_LABELS,
  DAY_OF_WEEK_SHORT_LABELS,
} from './constants'

export interface DatePickerLocalization {
  months: string[]
  daysOfWeek: string[]
  daysOfWeekShort: string[]
  statuses: string[]
  selectedDate: string
  selectAMonth: string
  toggleCalendar: string
  backOneYear: string
  backOneMonth: string
  clickToSelectMonth: string
  clickToSelectYear: string
  forwardOneYear: string
  forwardOneMonth: string
}

export const EN_US = {
  months: MONTH_LABELS,
  daysOfWeek: DAY_OF_WEEK_LABELS,
  daysOfWeekShort: DAY_OF_WEEK_SHORT_LABELS,
  statuses: [
    'You can navigate by day using left and right arrows',
    'Weeks by using up and down arrows',
    'Months by using page up and page down keys',
    'Years by using shift plus page up and shift plus page down',
    'Home and end keys navigate to the beginning and end of a week',
  ],
  selectedDate: 'Selected date',
  selectAMonth: 'Select a month.',
  toggleCalendar: 'Toggle calendar',
  backOneYear: 'Navigate back one year',
  backOneMonth: 'Navigate back one month',
  forwardOneYear: 'Navigate forward one year',
  forwardOneMonth: 'Navigate forward one month',
  clickToSelectMonth: 'Click to select month',
  clickToSelectYear: 'Click to select year',
}

export const sampleLocalization = {
  months: [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ],
  daysOfWeek: [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
  ],
  daysOfWeekShort: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
  statuses: [
    'Puede navegar por día usando las flechas izquierda y derecha',
    'Semanas usando flechas hacia arriba y hacia abajo',
    'Meses usando las teclas de avance y retroceso de página',
    'Años usando shift plus page up y shift plus page down',
    'Las teclas de inicio y finalización navegan hasta el principio y el final de una semana',
  ],
  selectedDate: 'Fecha seleccionada',
  selectAMonth: 'Selecciona un mes.',
  toggleCalendar: 'Alternar calendario',
  backOneYear: 'Navegar hacia atrás un año',
  backOneMonth: 'Navegar hacia atrás un mes',
  forwardOneYear: 'Navegar hacia adelante un año',
  forwardOneMonth: 'Navegar hacia adelante un mes',
  clickToSelectMonth: 'Haga clic para seleccionar el mes',
  clickToSelectYear: 'Haga clic para seleccionar el año',
}
