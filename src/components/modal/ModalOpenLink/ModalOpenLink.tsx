import React from 'react'

import { ModalRef } from '../Modal/Modal'
import Link, {
  CustomLinkProps,
  DefaultLinkProps,
  isCustomProps,
} from '../../Link/Link'

type ModalOpenLinkProps = {
  modalRef: React.RefObject<ModalRef>
}

function ModalOpenLink(
  props: DefaultLinkProps & ModalOpenLinkProps
): React.ReactElement
function ModalOpenLink<T>(
  props: CustomLinkProps<T> & ModalOpenLinkProps
): React.ReactElement
function ModalOpenLink<FCProps = DefaultLinkProps & ModalOpenLinkProps>({
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

export default ModalOpenLink
