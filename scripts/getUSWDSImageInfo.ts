import { glob } from 'glob'
import { writeFileSync, readFileSync } from 'node:fs'
import { pascalize } from 'fast-case'
import { join } from 'node:path'

const OUTPUT_PATH = 'src/utils/defaultUswdsImages.ts'
const FILENAME_REGEX = /.+\/(.+)\.(\w+)$/
const USWDS_PATH = 'node_modules/@uswds/uswds'
const USWDS_IMG_PATH = join(USWDS_PATH, 'dist/img')

// Manually set PascalCase names here
const manualDisplayName = {
  linkedin: 'LinkedIn',
}

function getImageEntry(f: string, isExtIncluded = false) {
  const [imageName, ext] = FILENAME_REGEX.exec(f)?.slice(1) ?? []
  if (imageName == null) throw new Error('Image name not found')

  return [
    // eslint-disable-next-line security/detect-object-injection
    manualDisplayName[imageName] ?? pascalize(imageName),
    isExtIncluded ? `${imageName}.${ext}` : imageName,
  ]
}

// All svg files under usa-icons are used in USWDS' sprite.svg using their filename
const spriteIcons = Object.fromEntries(
  glob
    .globSync(join(USWDS_IMG_PATH, 'usa-icons/*.svg'))
    .map((f) => getImageEntry(f))
)

// All other image files in USWDS img root
const otherImages = Object.fromEntries(
  glob
    .globSync(join(USWDS_IMG_PATH, '*.{svg,png,jpg,webp,gif}'))
    .map((f) => getImageEntry(f, true))
)

// Get USWDS package.json for version output
const packageJson = JSON.parse(
  readFileSync(join(USWDS_PATH, 'package.json'), { encoding: 'utf-8' })
)

const imagesObj = {
  version: packageJson.version,
  spriteIcons,
  otherImages,
  imageDir: USWDS_IMG_PATH,
}

// Write out to typescript file
writeFileSync(
  OUTPUT_PATH,
  'export default ' + JSON.stringify(imagesObj, undefined, 2) + ' as const;'
)
