import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'

const require = createRequire(import.meta.url)
const contributorsRequire = createRequire(
  require.resolve('all-contributors-cli/package.json')
)
const inquirerRequire = createRequire(contributorsRequire.resolve('inquirer'))
const editorRequire = createRequire(inquirerRequire.resolve('external-editor'))
const { ExternalEditor } = inquirerRequire(
  'external-editor'
) as typeof import('external-editor')
const tmp = editorRequire('tmp') as {
  tmpdir: string
  tmpNameSync: (options: { prefix: string | string[] }) => string
}

describe('external-editor tmp override', () => {
  beforeEach(() => {
    vi.spyOn(fs, 'writeFileSync').mockImplementation(() => undefined)
    vi.spyOn(fs, 'unlinkSync').mockImplementation(() => undefined)
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it.each([{}, { mode: 0o600 }])(
    'preserves temporary file creation and cleanup with options %j',
    (fileOptions) => {
      const text = 'Contributor résumé\n'
      const editor = new ExternalEditor(text, fileOptions)

      expect(path.dirname(editor.tempFile)).toBe(tmp.tmpdir)
      expect(path.basename(editor.tempFile)).toMatch(/^tmp-/)
      expect(fs.writeFileSync).toHaveBeenCalledExactlyOnceWith(
        editor.tempFile,
        text,
        { encoding: 'utf8', ...fileOptions }
      )

      editor.cleanup()

      expect(fs.unlinkSync).toHaveBeenCalledExactlyOnceWith(editor.tempFile)
    }
  )

  it('rejects a string prefix containing traversal', () => {
    expect(() => tmp.tmpNameSync({ prefix: '../escape' })).toThrow(
      'Relative value not allowed'
    )
  })

  it('rejects a non-string prefix containing traversal', () => {
    expect(() => tmp.tmpNameSync({ prefix: ['../escape'] })).toThrow(
      'prefix option must be a string'
    )
  })
})
