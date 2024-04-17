import uswdsImages from './defaultUswdsImages'

export let USWDS_IMAGES: typeof uswdsImages = uswdsImages

export interface USWDSImagesConfig {
  version: string
  spriteIcons: Record<string, string>
  otherImages: Record<string, string>
  imageDir: string
}

export function setUSWDSImages(config: USWDSImagesConfig) {
  USWDS_IMAGES = config as never
}
