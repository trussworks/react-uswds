import { subset } from 'semver'
import packageJson from '../package.json'

const peerDependencies = packageJson.peerDependencies
const sharedDependencies = Object.entries(packageJson.devDependencies).filter(
  ([name]) => name in peerDependencies
)

describe('package metadata', () => {
  it.each(sharedDependencies)(
    'tests a supported version of %s',
    (name, developmentRange) => {
      const peerRange = peerDependencies[name as keyof typeof peerDependencies]

      expect(subset(developmentRange, peerRange)).toBe(true)
    }
  )
})
