import { RemoteBrowserTarget } from 'happo.io'
import happoPluginStorybook from 'happo-plugin-storybook'
import dotenv from 'dotenv';

dotenv.config()

export const apiKey = process.env.HAPPO_API_KEY
export const apiSecret = process.env.HAPPO_API_SECRET
export const targets = {
  chrome: new RemoteBrowserTarget('chrome', {
    viewport: '1024x768',
  }),
  firefox: new RemoteBrowserTarget('firefox', {
    viewport: '1024x768',
  }),
  edge: new RemoteBrowserTarget('edge', {
    viewport: '1024x768',
  }),
  safari: new RemoteBrowserTarget('safari', {
    viewport: '1024x768',
  }),
  'ios-safari': new RemoteBrowserTarget('ios-safari', {
    viewport: '375x667',
  }),
}
export const plugins = [
  // see https://github.com/happo/happo-plugin-storybook for a list of options you can pass to the plugin
  happoPluginStorybook({
    outputDir: 'storybook-static',
    usePrebuiltPackage: true,
  }),
]
