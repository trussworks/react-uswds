import React from 'react'

import type { ModalRef } from '../Modal/Modal.js'
import Link, {
  type CustomLinkProps,
  type DefaultLinkProps,
} from '../../Link/Link.js'
import { isCustomProps } from '../../Link/utils.js'

export interface BaseModalOpenLinkProps {
  modalRef: React.RefObject<ModalRef>
}

export type DefaultModalOpenLinkProps = BaseModalOpenLinkProps &
  DefaultLinkProps

export type CustomModalOpenLinkProps<T> = CustomLinkProps<T> &
  BaseModalOpenLinkProps

export type ModalOpenLinkProps<T = DefaultLinkProps & BaseModalOpenLinkProps> =
  | (DefaultLinkProps & BaseModalOpenLinkProps)
  | (CustomLinkProps<T> & BaseModalOpenLinkProps)

function ModalOpenLink(props: DefaultModalOpenLinkProps): React.ReactElement
function ModalOpenLink<T>(
  props: CustomModalOpenLinkProps<T>
): React.ReactElement
function ModalOpenLink<FCProps = DefaultLinkProps & BaseModalOpenLinkProps>({
  modalRef,
  ...props
}: ModalOpenLinkProps<FCProps>): React.ReactElement {
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
