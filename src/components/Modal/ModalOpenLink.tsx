import React from 'react'

import { ModalRef } from './Modal'
import {
  CustomLinkProps,
  DefaultLinkProps,
  isCustomProps,
  Link,
} from '../Link/Link'

type ModalOpenLinkProps = {
  modalRef: React.RefObject<ModalRef>
}

export function ModalOpenLink(
  props: DefaultLinkProps & ModalOpenLinkProps
): React.ReactElement
export function ModalOpenLink<T>(
  props: CustomLinkProps<T> & ModalOpenLinkProps
): React.ReactElement
export function ModalOpenLink<FCProps = DefaultLinkProps & ModalOpenLinkProps>({
  modalRef,
  ...props
}:
  | (DefaultLinkProps & ModalOpenLinkProps)
  | (CustomLinkProps<FCProps> & ModalOpenLinkProps)): React.ReactElement {
  const linkProps = props as DefaultLinkProps | CustomLinkProps<FCProps>

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (!modalRef || !modalRef.current) {
      console.error('ModalRef is required')
      return false
    }

    e.preventDefault()
    modalRef.current.toggleModal(e, true)
  }

  if (isCustomProps(linkProps)) {
    return <Link<FCProps> {...linkProps} />
  }

  const definitelyLinkProps = linkProps as DefaultLinkProps

  return (
    <Link
      {...definitelyLinkProps}
      role="button"
      aria-controls={modalRef?.current?.modalId}
      data-open-modal
      onClick={handleClick}
    />
  )
}
