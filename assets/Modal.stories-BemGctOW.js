import{j as e,a as n,F as h}from"./jsx-runtime-2xDJh5tt.js";import{r as l}from"./index-CBqU2yxZ.js";import{M as t,a}from"./ModalToggleButton-Bk91EDnj.js";import{M as d,a as i}from"./ModalFooter-C1FQFrtH.js";import{B as r}from"./ButtonGroup-CCQqufrl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./Button-Dw-sXN3h.js";import"./index-Bl6ORisp.js";import"./Icons-CMWhi0me.js";const P={title:"Components/Modal",component:t,parameters:{docs:{description:{component:`
### USWDS 3.0 Modal component

Source: http://designsystem.digital.gov/components/modal

To use this component, you will need to create a ref and pass it into the rendered Modal component. This ref will expose several properties (also described by the exported ModalRef type):

- modalId: string
  - the value of the id attribute given to the modal
- modalIsOpen: boolean
  - true if the modal is currently open, otherwise false
- toggleModal: (e?: React.MouseEvent, open?: boolean) => boolean
  - use this function to open or close the modal.
  - if attached to an event handler, pass the event in
  - if the second argument is provided, it will explicitly open the modal if true, or explicitly close it if false
  - returns true if the toggle operation was successful, false if the event was prevented.

Follow the [USWDS](https://designsystem.digital.gov/components/modal/) guidance for using modals:

- Pass a unique ID into each modal component.
- Any component that opens the modal should be a button or anchor element, have the [data-open-modal] attribute, and [aria-controls] attribute with the value of the modal ID.
- Any component that closes the modal should be a button element, and have the [data-close-modal] attribute, and [aria-controls] attribute with the value of the modal ID.
- Use the forceAction prop on the modal component if the user should be forced to take an action before closing the modal.

You can also use the provided ModalToggleButton and/or ModalOpenLink components, which will adhere to the above guidelines for convenience.
`}}}},s=()=>{const o=l.useRef(null);return e("div",{children:n("div",{children:[e(a,{modalRef:o,opener:!0,children:"Open default modal"}),n(t,{ref:o,id:"example-modal-1","aria-labelledby":"modal-1-heading","aria-describedby":"modal-1-description",children:[e(d,{id:"modal-1-heading",children:"Are you sure you want to continue?"}),e("div",{className:"usa-prose",children:e("p",{id:"modal-1-description",children:"You have unsaved changes that will be lost."})}),e(i,{children:n(r,{children:[e(a,{modalRef:o,closer:!0,children:"Continue without saving"}),e(a,{modalRef:o,closer:!0,unstyled:!0,className:"padding-105 text-center",children:"Go back"})]})})]})]})})},u=()=>{const o=l.useRef(null);return n(h,{children:[e(a,{modalRef:o,opener:!0,children:"Open large modal"}),n(t,{ref:o,isLarge:!0,"aria-labelledby":"modal-2-heading","aria-describedby":"modal-2-description",id:"example-modal-2",children:[e(d,{id:"modal-2-heading",children:"Are you sure you want to continue?"}),e("div",{className:"usa-prose",children:e("p",{id:"modal-2-description",children:"You have unsaved changes that will be lost."})}),e(i,{children:n(r,{children:[e(a,{modalRef:o,closer:!0,children:"Continue without saving"}),e(a,{modalRef:o,closer:!0,unstyled:!0,className:"padding-105 text-center",children:"Go back"})]})})]})]})},c=()=>{const o=l.useRef(null);return n(h,{children:[e(a,{modalRef:o,opener:!0,children:"Open modal with forced action"}),n(t,{ref:o,forceAction:!0,"aria-labelledby":"modal-3-heading","aria-describedby":"modal-3-description",id:"example-modal-3",children:[e(d,{id:"modal-3-heading",children:"Your session will end soon."}),e("div",{className:"usa-prose",children:e("p",{id:"modal-3-description",children:"You’ve been inactive for too long. Please choose to stay signed in or sign out. Otherwise, you’ll be signed out automatically in 5 minutes."})}),e(i,{children:n(r,{children:[e(a,{modalRef:o,closer:!0,children:"Yes, stay signed in"}),e(a,{modalRef:o,closer:!0,unstyled:!0,className:"padding-105 text-center",children:"Sign out"})]})})]})]})},m=()=>{const o=l.useRef(null);return n(h,{children:[e(a,{modalRef:o,opener:!0,children:"Open modal with custom initial focus element"}),n(t,{ref:o,id:"example-modal-1","aria-labelledby":"modal-1-heading","aria-describedby":"modal-1-description",children:[e(d,{id:"modal-1-heading",children:"Are you sure you want to continue?"}),n("div",{className:"usa-prose",children:[e("p",{id:"modal-1-description",children:"You have unsaved changes that will be lost."}),e("button",{type:"button",children:"Decoy button"}),e("button",{type:"button","data-focus":"true",children:"Focus me first"})]}),e(i,{children:n(r,{children:[e(a,{modalRef:o,closer:!0,children:"Continue without saving"}),e(a,{modalRef:o,closer:!0,unstyled:!0,className:"padding-105 text-center",children:"Go back"})]})})]})]})},p=()=>{const o=l.useRef(null);return e("div",{children:n("div",{children:[e(a,{modalRef:o,opener:!0,children:"Open default modal"}),n(t,{ref:o,id:"example-modal-1","aria-labelledby":"modal-1-heading","aria-describedby":"modal-1-description",isInitiallyOpen:!0,children:[e(d,{id:"modal-1-heading",children:"Are you sure you want to continue?"}),e("div",{className:"usa-prose",children:e("p",{id:"modal-1-description",children:"You have unsaved changes that will be lost."})}),e(i,{children:n(r,{children:[e(a,{modalRef:o,closer:!0,children:"Continue without saving"}),e(a,{modalRef:o,closer:!0,unstyled:!0,className:"padding-105 text-center",children:"Go back"})]})})]})]})})};var g,f,M;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`(): React.ReactElement => {
  const modalRef = useRef<ModalRef>(null);
  return <div>
      <div>
        <ModalToggleButton modalRef={modalRef} opener>
          Open default modal
        </ModalToggleButton>
        <Modal ref={modalRef} id="example-modal-1" aria-labelledby="modal-1-heading" aria-describedby="modal-1-description">
          <ModalHeading id="modal-1-heading">
            Are you sure you want to continue?
          </ModalHeading>
          <div className="usa-prose">
            <p id="modal-1-description">
              You have unsaved changes that will be lost.
            </p>
          </div>
          <ModalFooter>
            <ButtonGroup>
              <ModalToggleButton modalRef={modalRef} closer>
                Continue without saving
              </ModalToggleButton>
              <ModalToggleButton modalRef={modalRef} closer unstyled className="padding-105 text-center">
                Go back
              </ModalToggleButton>
            </ButtonGroup>
          </ModalFooter>
        </Modal>
      </div>
    </div>;
}`,...(M=(f=s.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var b,y,v;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`(): React.ReactElement => {
  const modalRef = useRef<ModalRef>(null);
  return <>
      <ModalToggleButton modalRef={modalRef} opener>
        Open large modal
      </ModalToggleButton>
      <Modal ref={modalRef} isLarge aria-labelledby="modal-2-heading" aria-describedby="modal-2-description" id="example-modal-2">
        <ModalHeading id="modal-2-heading">
          Are you sure you want to continue?
        </ModalHeading>
        <div className="usa-prose">
          <p id="modal-2-description">
            You have unsaved changes that will be lost.
          </p>
        </div>
        <ModalFooter>
          <ButtonGroup>
            <ModalToggleButton modalRef={modalRef} closer>
              Continue without saving
            </ModalToggleButton>
            <ModalToggleButton modalRef={modalRef} closer unstyled className="padding-105 text-center">
              Go back
            </ModalToggleButton>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>;
}`,...(v=(y=u.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var R,B,w;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`(): React.ReactElement => {
  const modalRef = useRef<ModalRef>(null);
  return <>
      <ModalToggleButton modalRef={modalRef} opener>
        Open modal with forced action
      </ModalToggleButton>
      <Modal ref={modalRef} forceAction aria-labelledby="modal-3-heading" aria-describedby="modal-3-description" id="example-modal-3">
        <ModalHeading id="modal-3-heading">
          Your session will end soon.
        </ModalHeading>
        <div className="usa-prose">
          <p id="modal-3-description">
            You’ve been inactive for too long. Please choose to stay signed in
            or sign out. Otherwise, you’ll be signed out automatically in 5
            minutes.
          </p>
        </div>
        <ModalFooter>
          <ButtonGroup>
            <ModalToggleButton modalRef={modalRef} closer>
              Yes, stay signed in
            </ModalToggleButton>
            <ModalToggleButton modalRef={modalRef} closer unstyled className="padding-105 text-center">
              Sign out
            </ModalToggleButton>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>;
}`,...(w=(B=c.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var T,x,F;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`(): React.ReactElement => {
  const modalRef = useRef<ModalRef>(null);
  return <>
      <ModalToggleButton modalRef={modalRef} opener>
        Open modal with custom initial focus element
      </ModalToggleButton>
      <Modal ref={modalRef} id="example-modal-1" aria-labelledby="modal-1-heading" aria-describedby="modal-1-description">
        <ModalHeading id="modal-1-heading">
          Are you sure you want to continue?
        </ModalHeading>
        <div className="usa-prose">
          <p id="modal-1-description">
            You have unsaved changes that will be lost.
          </p>
          <button type="button">Decoy button</button>
          <button type="button" data-focus="true">
            Focus me first
          </button>
        </div>
        <ModalFooter>
          <ButtonGroup>
            <ModalToggleButton modalRef={modalRef} closer>
              Continue without saving
            </ModalToggleButton>
            <ModalToggleButton modalRef={modalRef} closer unstyled className="padding-105 text-center">
              Go back
            </ModalToggleButton>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    </>;
}`,...(F=(x=m.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var N,G,O;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`(): React.ReactElement => {
  const modalRef = useRef<ModalRef>(null);
  return <div>
      <div>
        <ModalToggleButton modalRef={modalRef} opener>
          Open default modal
        </ModalToggleButton>
        <Modal ref={modalRef} id="example-modal-1" aria-labelledby="modal-1-heading" aria-describedby="modal-1-description" isInitiallyOpen>
          <ModalHeading id="modal-1-heading">
            Are you sure you want to continue?
          </ModalHeading>
          <div className="usa-prose">
            <p id="modal-1-description">
              You have unsaved changes that will be lost.
            </p>
          </div>
          <ModalFooter>
            <ButtonGroup>
              <ModalToggleButton modalRef={modalRef} closer>
                Continue without saving
              </ModalToggleButton>
              <ModalToggleButton modalRef={modalRef} closer unstyled className="padding-105 text-center">
                Go back
              </ModalToggleButton>
            </ButtonGroup>
          </ModalFooter>
        </Modal>
      </div>
    </div>;
}`,...(O=(G=p.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};const U=["DefaultModal","LargeModal","ForceActionModal","CustomFocusElementModal","InitiallyOpenModal"];export{m as CustomFocusElementModal,s as DefaultModal,c as ForceActionModal,p as InitiallyOpenModal,u as LargeModal,U as __namedExportsOrder,P as default};
