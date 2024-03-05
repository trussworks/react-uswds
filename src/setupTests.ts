import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'

vi.mock('focus-trap-react')

// Workaround for issue: https://github.com/vitest-dev/vitest/issues/1430.
// Without this, tests will fail when running test:debug
afterEach(cleanup)
