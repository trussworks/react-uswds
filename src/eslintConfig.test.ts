import { ESLint } from 'eslint'

const eslint = new ESLint()

const lint = async (code: string, filePath: string) => {
  const [result] = await eslint.lintText(code, { filePath })

  expect(result.fatalErrorCount).toBe(0)

  return result.messages
}

describe('React Hooks lint configuration', () => {
  it('enforces source rules while allowing Storybook render functions', async () => {
    // Project Service requires probe paths that already exist in tsconfig.json.
    const sourceMessages = await lint(
      `import { useState } from 'react'
export function Example({ enabled }: { enabled: boolean }) {
  if (enabled) useState(0)
  return null
}`,
      'src/index.ts'
    )
    const storyMessages = await lint(
      `import { useState } from 'react'
export default { title: 'Example' }
export const Example = { render: () => { useState(0); return null } }`,
      'src/components/forms/FileInput/FileInput.stories.tsx'
    )

    expect(sourceMessages).toEqual([
      expect.objectContaining({
        ruleId: 'react-hooks/rules-of-hooks',
        severity: 2,
      }),
    ])
    expect(storyMessages).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ ruleId: 'react-hooks/rules-of-hooks' }),
      ])
    )
  }, 15_000)
})
