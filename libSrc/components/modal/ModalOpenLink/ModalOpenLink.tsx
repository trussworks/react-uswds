import React from 'react'

import type { ModalRef } from '../Modal/Modal.js'
import Link, {
  type CustomLinkProps,
  type DefaultLinkProps,
} from '../../Link/Link.js'
import { isCustomProps } from '../../Link/utils.js'

export type ModalOpenLinkProps = {
  modalRef: React.RefObject<ModalRef>
}

export type DefaultModalOpenLinkProps = ModalOpenLinkProps & DefaultLinkProps

export type CustomModalOpenLinkProps<T> = CustomLinkProps<T> &
  ModalOpenLinkProps

export default function ModalOpenLink(
  props: DefaultModalOpenLinkProps
): React.ReactElement
export default function ModalOpenLink<T>(
  props: CustomModalOpenLinkProps<T>
): React.ReactElement
export default function ModalOpenLink<
  FCProps = DefaultLinkProps & ModalOpenLinkProps,
>({
  modalRef,
  ...props
}:
  | (DefaultLinkProps & ModalOpenLinkProps)
  | (CustomLinkProps<FCProps> & ModalOpenLinkProps)): React.ReactElement {
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
