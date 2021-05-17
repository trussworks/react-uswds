import React from 'react'

import { Modal } from './Modal'
import { ModalDescription } from '../ModalDescription/ModalDescription'
// import close from 'uswds/src/img/close.svg'

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `
### USWDS 2.0 SiteAlert component

Source: http://designsystem.digital.gov/components/modal
`,
      },
    },
  },
}

// const testContent = (
//   <div className="usa-modal__content">
//     <div className="usa-modal__main">
//       <h2 className="usa-modal__heading" id="modal-1-heading">
//         Are you sure you want to continue?
//       </h2>
//       <div className="usa-prose">
//         <p id="modal-1-description">
//           You have unsaved changes that will be lost.
//         </p>
//       </div>
//       <div className="usa-modal__footer">
//         <ul className="usa-button-group">
//           <li className="usa-button-group__item">
//             <button type="button" className="usa-button" data-close-modal>
//               Continue without saving
//             </button>
//           </li>
//           <li className="usa-button-group__item">
//             <button
//               type="button"
//               className="usa-button usa-button--unstyled padding-105 text-center"
//               data-close-modal>
//               Go back
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//     <button
//       className="usa-button usa-modal__close"
//       aria-label="Close this window"
//       data-close-modal>
//       <img className="usa-icon" src={close} alt="close" />
//     </button>
//   </div>
// )

// export const modalWithTestContent = (): React.ReactElement => (
//   <div className="margin-y-3">
//     <a
//       href="#example-modal-1"
//       className="usa-button"
//       aria-controls="example-modal-1"
//       data-open-modal>
//       Open default modal
//     </a>
//     <Modal
//       id="example-modal-1"
//       aria-labelledby="modal-1-heading"
//       aria-describedby="modal-1-description">
//       {testContent}
//     </Modal>
//   </div>
// )

export const defaultModal = (): React.ReactElement => (
  <Modal>default modal</Modal>
)

export const largeModal = (): React.ReactElement => (
  <Modal isLarge>large modal</Modal>
)

export const modalWithForcedAction = (): React.ReactElement => (
  <Modal>forced action</Modal>
)
