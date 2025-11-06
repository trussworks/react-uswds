import React from 'react'
import jsxRuntime from 'react/jsx-runtime'
import reactDom from 'react-dom'
import FocusTrap from 'focus-trap-react'
import { render, within } from '@testing-library/react'
import fs from 'node:fs'

describe('test lib bundles', () => {
  async function setup({
    filename,
    isEval,
  }: {
    type: string
    filename: string
    isEval?: boolean
  }) {
    let ReactUSWDS
    if (!isEval) {
      ReactUSWDS = await vi.importActual(`../lib/${filename}`)
    } else {
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      const file = fs.readFileSync(`./lib/${filename}`).toString()
      // IIFE expects to be ran as a HTML script import which assigns to global namespace.
      // So we remove 'var ' from beginning of the file so that it assigns to our local
      // variable instead.
      // eslint-disable-next-line security/detect-eval-with-expression
      eval(file.replace('var ', ''))
    }
    return ReactUSWDS
  }
  beforeEach(() => {
    // stub globals for IIFE
    vi.stubGlobal('jsxRuntime', jsxRuntime)
    vi.stubGlobal('React', React)
    vi.stubGlobal('ReactDOM', reactDom)
    vi.stubGlobal('FocusTrap', FocusTrap)
  })
  afterEach(() => {
    vi.unstubAllGlobals()
  })
  describe.each([
    { type: 'cjs', filename: 'index.cjs' },
    { type: 'esm', filename: 'index.js' },
    { type: 'umd', filename: 'index.umd.cjs' },
    { type: 'iife', filename: 'index.iife.js', isEval: true },
  ])('type: $type', (info) => {
    test('imports', async () => {
      const lib = await setup(info)
      expect(lib?.Button).toBeDefined()
    })
    test('renders', async () => {
      const lib = await setup(info)
      const Button = (lib?.Button ?? React.Fragment) as React.ComponentType<
        React.PropsWithChildren<{ type: string }>
      >
      const { getByRole } = render(
        <Button type="button">Component test</Button>
      )
      const button = getByRole('button')
      expect(button).toBeInTheDocument()
      expect(within(button).getByText('Component test')).toBeInTheDocument()
    })
  })
})
