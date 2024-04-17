import { IconProps, makeUSWDSIcon } from './Icon'
import { USWDS_IMAGES } from '../../utils/uswdsImages'
import { ComponentType } from 'react'

export type SpriteEntry = Record<string, string>

export let Icon = makeUSWDSIcons(
  `${USWDS_IMAGES.imageDir}/${USWDS_IMAGES.otherImages.Sprite}`
)

export function makeUSWDSIcons<
  const T extends SpriteEntry = (typeof USWDS_IMAGES)['spriteIcons'],
>(spriteUrl: string, iconNames?: T): Record<keyof T, ComponentType<IconProps>> {
  const Icon = Object.fromEntries(
    Object.entries(iconNames ?? USWDS_IMAGES.spriteIcons).map(
      ([displayName, spriteName]) => {
        const Component = makeUSWDSIcon(spriteName, displayName, spriteUrl)
        if (!Component.displayName)
          throw new Error('Icon displayName not found')

        return [Component.displayName, Component]
      }
    )
  ) as Record<keyof T, ComponentType<IconProps>>

  return Icon
}

export function setUSWDSIcons(icon: Record<string, ComponentType<IconProps>>) {
  Icon = icon
}

export default Icon
