import React, { type JSX } from 'react'

import { ModalRef } from './Modal'
import {
  CustomLinkProps,
  DefaultLinkProps,
  isCustomProps,
  Link,
} from '../Link/Link'

type ModalOpenLinkProps = {
  modalRef: React.RefObject<ModalRef | null>
}

export function ModalOpenLink(
  props: DefaultLinkProps & ModalOpenLinkProps
): JSX.Element
export function ModalOpenLink<T>(
  props: CustomLinkProps<T> & ModalOpenLinkProps
): JSX.Element
export function ModalOpenLink<FCProps = DefaultLinkProps & ModalOpenLinkProps>({
  modalRef,
  ...props
}:
  | (DefaultLinkProps & ModalOpenLinkProps)
  | (CustomLinkProps<FCProps> & ModalOpenLinkProps)): JSX.Element {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (!modalRef || !modalRef.current) {
      console.error('ModalRef is required')
      return false
    }

    e.preventDefault()
    modalRef.current.toggleModal(e, true)
  }

  const linkProps = {
    ...props,
    role: 'button',
    'aria-controls': modalRef?.current?.modalId,
    'data-open-modal': true,
    onClick: handleClick,
  } as DefaultLinkProps | CustomLinkProps<FCProps>

  if (isCustomProps(linkProps)) {
    return <Link<FCProps> {...linkProps} />
  }

  const definitelyLinkProps = linkProps as DefaultLinkProps

  return <Link {...definitelyLinkProps} />
}
