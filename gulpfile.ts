import uswds from '@uswds/compile'

uswds.settings.version = 3
uswds.paths.dist = {
  ...uswds.paths.dist,
  theme: 'dist/assets/uswds/sass',
  img: 'dist/assets/uswds/img',
  fonts: 'dist/assets/uswds/fonts',
  js: 'dist/assets/uswds/js',
  css: 'dist/assets/uswds/css',
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
