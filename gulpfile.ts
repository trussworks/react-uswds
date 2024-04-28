import uswds from '@uswds/compile'

uswds.settings.version = 3
uswds.paths.dist = {
  ...uswds.paths.dist,
  theme: 'lib/dist/assets/uswds/sass',
  img: 'lib/dist/assets/uswds/img',
  fonts: 'lib/dist/assets/uswds/fonts',
  js: 'lib/dist/assets/uswds/js',
  css: 'lib/dist/assets/uswds/css',
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
