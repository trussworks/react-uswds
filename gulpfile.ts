import uswds from '@uswds/compile'

uswds.settings.version = 3
uswds.paths.dist = {
  ...uswds.paths.dist,
  theme: 'lib/assets/uswds/sass',
  img: 'lib/assets/uswds/img',
  fonts: 'lib/assets/uswds/fonts',
  js: 'lib/assets/uswds/js',
  css: 'lib/assets/uswds/css',
}

export {
  settings,
  paths,
  sprite,
  copyTheme,
  copyFonts,
  copyImages,
  copyJS,
  copyAssets,
  copyAll,
  compileSass,
  compileIcons,
  compile,
  updateUswds,
  init,
  watch,
} from '@uswds/compile'
