import type { Ref, LegacyRef } from 'react'

/**
 * Provides React 16-19 compatibility for the prior inputRef type by referring
 * to project's React.Ref and React.LegacyRef types. Prior inputRef typing:
 * ```
 * | string
 * | ((instance: HTMLInputElement | null) => void)
 * | React.RefObject<HTMLInputElement>
 * | null
 * | undefined
 * ```
 * @deprecated React 19 includes the `ref` prop by default on all components.
 */
export type LegacyInputRef<T = HTMLInputElement> =
  | Ref<T>
  | LegacyRef<T>
  | undefined
