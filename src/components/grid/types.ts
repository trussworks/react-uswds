export const breakpoints = {
  mobile: 'mobile',
  mobileLg: 'mobile-lg',
  tablet: 'tablet',
  tabletLg: 'tablet-lg',
  desktop: 'desktop',
  desktopLg: 'desktop-lg',
  widescreen: 'widescreen',
}

export type BreakpointKeys = keyof typeof breakpoints

export type ContainerSizes =
  | 'card'
  | 'card-lg'
  | 'mobile'
  | 'mobile-lg'
  | 'tablet'
  | 'tablet-lg'
  | 'desktop'
  | 'desktop-lg'
  | 'widescreen'

export type GapSizes =
  | true
  | 'sm'
  | 'md'
  | 'lg'
  | '2px'
  | '05'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6

export type ColumnSizes =
  | true
  | 'auto'
  | 'fill'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12

export type ColumnOffsets = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

export interface GridItemProps {
  row?: boolean
  col?: ColumnSizes
  gap?: GapSizes
  offset?: ColumnOffsets
}
