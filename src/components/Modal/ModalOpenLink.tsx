import React, { forwardRef } from 'react'

import { ModalRef } from './Modal'
import Link, {
  LinkProps,
  isCustomProps,
} from '../Link/Link'

export type BaseModalOpenLinkProps = {
  modalRef: React.RefObject<ModalRef>
}

export type ModalOpenLinkProps = BaseModalOpenLinkProps & LinkProps

export const ModalOpenLinkForwardRef: React.ForwardRefRenderFunction<HTMLAnchorElement, ModalOpenLinkProps> = ({
  modalRef,
  ...props
}, ref): React.ReactElement => {
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
    return <Link ref={ref} {...linkProps} />
  }

  const definitelyLinkProps = linkProps as DefaultLinkProps

  return <Link ref={ref} {...definitelyLinkProps} />
}

export const ModalOpenLink = forwardRef(ModalOpenLinkForwardRef)

export default ModalOpenLink