import { screen, render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { TextInputMask } from './TextInputMask'

describe('TextInputMask component', () => {
  const setup = () => {
    const utils = render(
      <TextInputMask
        id="input-type-alphanumeric"
        name="input-type-alphanumeric"
        type="text"
        aria-describedby="hint-alphanumeric"
        mask="___ ___"
        pattern="\w\d\w \d\w\d"
        charset="A#A #A#"
      />
    )
    const input = screen.getByTestId('textInput')
    const mask = screen.getByTestId('input-type-alphanumericMask')
    const user = userEvent.setup()
    return {
      input,
      mask,
      user,
      ...utils,
    }
  }

  it('renders with class and placeholder', () => {
    const { input, mask } = setup()
    expect(input).toHaveClass('usa-masked')
    expect(mask).toHaveTextContent('___ ___')
  })

  it('autoformats inputted text', async () => {
    const { input, user } = setup()
    await user.type(input, 'A1B2C3')
    expect((input as HTMLInputElement).value).toBe('A1B 2C3')
  })

  it('rejects entry based on charset', async () => {
    const { input, user } = setup()
    await user.type(input, 'A1B 2C')
    expect((input as HTMLInputElement).value).toBe('A1B 2C')
  })
})
