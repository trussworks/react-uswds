import React from 'react'
import { render, screen } from '@testing-library/react'

import { ModalRef } from './Modal'
import { ModalOpenLink } from './ModalOpenLink'
import userEvent from '@testing-library/user-event'

describe('ModalOpenLink', () => {
  it('renders an anchor tag with the modal control attributes', () => {
    const mockRef: ModalRef = {
      modalIsOpen: false,
      modalId: 'testModal',
      toggleModal: jest.fn().mockReturnValue(true),
    }

    const modalRef: React.RefObject<ModalRef> = {
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

  it('throws an error if clicked when the modal ref is null', () => {
    const consoleSpy = jest.spyOn(console, 'error')

    const modalRef: React.RefObject<ModalRef> = {
      current: null,
    }

    render(
      <ModalOpenLink href="#testModal" modalRef={modalRef}>
        Open modal
      </ModalOpenLink>
    )

    const button = screen.getByRole('button', { name: 'Open modal' })
    userEvent.click(button)
    expect(consoleSpy).toHaveBeenCalledWith('ModalRef is required')
  })

  it('opens the modal when clicked', () => {
    const mockRef: ModalRef = {
      modalIsOpen: false,
      modalId: 'testModal',
      toggleModal: jest.fn().mockReturnValue(true),
    }

    const modalRef: React.RefObject<ModalRef> = {
      current: mockRef,
    }

    render(
      <ModalOpenLink href="#testModal" modalRef={modalRef}>
        Open modal
      </ModalOpenLink>
    )

    const button = screen.getByRole('button', { name: 'Open modal' })
    userEvent.click(button)
    expect(mockRef.toggleModal).toHaveBeenCalledWith(expect.anything(), true)
  })

  it('renders with a custom component', () => {
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
    }: CustomLinkProps): React.ReactElement => (
      <a href={to} className={className} {...linkProps}>
        {children}
      </a>
    )

    const mockRef: ModalRef = {
      modalIsOpen: false,
      modalId: 'testModal',
      toggleModal: jest.fn().mockReturnValue(true),
    }

    const modalRef: React.RefObject<ModalRef> = {
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
    userEvent.click(button)
    expect(mockRef.toggleModal).toHaveBeenCalledWith(expect.anything(), true)
  })
})
