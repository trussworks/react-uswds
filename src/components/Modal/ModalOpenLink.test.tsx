import React, { type JSX } from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import { ModalRef } from './Modal'
import { ModalOpenLink } from './ModalOpenLink'
import { userEvent } from '@testing-library/user-event'

describe('ModalOpenLink', () => {
  it('renders an anchor tag with the modal control attributes', () => {
    const mockRef: ModalRef = {
      modalIsOpen: false,
      modalId: 'testModal',
      toggleModal: vi.fn().mockReturnValue(true),
    }

    const modalRef: React.RefObject<ModalRef | null> = {
      current: mockRef,
    }

    render(
      <ModalOpenLink href="#testModal" modalRef={modalRef}>
        Open modal
      </ModalOpenLink>
    )

    const button = screen.getByRole('button', { name: 'Open modal' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-controls', mockRef.modalId)
    expect(button).toHaveAttribute('data-open-modal')
  })

  it('throws an error if clicked when the modal ref is null', async () => {
    const consoleSpy = vi.spyOn(console, 'error')

    const modalRef: React.RefObject<ModalRef | null> = {
      current: null,
    }

    render(
      <ModalOpenLink href="#testModal" modalRef={modalRef}>
        Open modal
      </ModalOpenLink>
    )

    const button = screen.getByRole('button', { name: 'Open modal' })
    await userEvent.click(button)
    await waitFor(() =>
      expect(consoleSpy).toHaveBeenCalledWith('ModalRef is required')
    )
  })

  it('opens the modal when clicked', async () => {
    const mockRef: ModalRef = {
      modalIsOpen: false,
      modalId: 'testModal',
      toggleModal: vi.fn().mockReturnValue(true),
    }

    const modalRef: React.RefObject<ModalRef | null> = {
      current: mockRef,
    }

    render(
      <ModalOpenLink href="#testModal" modalRef={modalRef}>
        Open modal
      </ModalOpenLink>
    )

    const button = screen.getByRole('button', { name: 'Open modal' })
    await userEvent.click(button)
    expect(mockRef.toggleModal).toHaveBeenCalledWith(expect.anything(), true)
  })

  it('renders with a custom component', async () => {
    type CustomLinkProps = React.PropsWithChildren<{
      to: string
      className?: string
    }> &
      JSX.IntrinsicElements['a']

    const CustomLink: React.FunctionComponent<CustomLinkProps> = ({
      to,
      children,
      className,
      ...linkProps
    }: CustomLinkProps): JSX.Element => (
      <a href={to} className={className} {...linkProps}>
        {children}
      </a>
    )

    const mockRef: ModalRef = {
      modalIsOpen: false,
      modalId: 'testModal',
      toggleModal: vi.fn().mockReturnValue(true),
    }

    const modalRef: React.RefObject<ModalRef | null> = {
      current: mockRef,
    }

    render(
      <ModalOpenLink<CustomLinkProps>
        to="#testModal"
        asCustom={CustomLink}
        modalRef={modalRef}>
        Open modal
      </ModalOpenLink>
    )

    const button = screen.getByRole('button', { name: 'Open modal' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-controls', mockRef.modalId)
    expect(button).toHaveAttribute('data-open-modal')
    expect(button).toHaveAttribute('href', '#testModal')
    await userEvent.click(button)
    expect(mockRef.toggleModal).toHaveBeenCalledWith(expect.anything(), true)
  })
})
