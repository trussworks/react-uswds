import{j as e}from"./jsx-runtime-CKrituN3.js";import{r}from"./index-CBqU2yxZ.js";import{M as a,a as n}from"./ModalToggleButton-CcejbB4A.js";import{M as c,a as u}from"./ModalFooter-edgjOP8W.js";import{B as m}from"./ButtonGroup-gCLps36L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./Button-Thyd1SVx.js";import"./index-Bl6ORisp.js";import"./Icons-CQoMJF7S.js";const k={title:"Components/Modal",component:a,parameters:{docs:{description:{component:`
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
`}}}},t=()=>{const o=r.useRef(null);return e.jsx("div",{children:e.jsxs("div",{children:[e.jsx(n,{modalRef:o,opener:!0,children:"Open default modal"}),e.jsxs(a,{ref:o,id:"example-modal-1","aria-labelledby":"modal-1-heading","aria-describedby":"modal-1-description",children:[e.jsx(c,{id:"modal-1-heading",children:"Are you sure you want to continue?"}),e.jsx("div",{className:"usa-prose",children:e.jsx("p",{id:"modal-1-description",children:"You have unsaved changes that will be lost."})}),e.jsx(u,{children:e.jsxs(m,{children:[e.jsx(n,{modalRef:o,closer:!0,children:"Continue without saving"}),e.jsx(n,{modalRef:o,closer:!0,unstyled:!0,className:"padding-105 text-center",children:"Go back"})]})})]})]})})},l=()=>{const o=r.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(n,{modalRef:o,opener:!0,children:"Open large modal"}),e.jsxs(a,{ref:o,isLarge:!0,"aria-labelledby":"modal-2-heading","aria-describedby":"modal-2-description",id:"example-modal-2",children:[e.jsx(c,{id:"modal-2-heading",children:"Are you sure you want to continue?"}),e.jsx("div",{className:"usa-prose",children:e.jsx("p",{id:"modal-2-description",children:"You have unsaved changes that will be lost."})}),e.jsx(u,{children:e.jsxs(m,{children:[e.jsx(n,{modalRef:o,closer:!0,children:"Continue without saving"}),e.jsx(n,{modalRef:o,closer:!0,unstyled:!0,className:"padding-105 text-center",children:"Go back"})]})})]})]})},d=()=>{const o=r.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(n,{modalRef:o,opener:!0,children:"Open modal with forced action"}),e.jsxs(a,{ref:o,forceAction:!0,"aria-labelledby":"modal-3-heading","aria-describedby":"modal-3-description",id:"example-modal-3",children:[e.jsx(c,{id:"modal-3-heading",children:"Your session will end soon."}),e.jsx("div",{className:"usa-prose",children:e.jsx("p",{id:"modal-3-description",children:"You’ve been inactive for too long. Please choose to stay signed in or sign out. Otherwise, you’ll be signed out automatically in 5 minutes."})}),e.jsx(u,{children:e.jsxs(m,{children:[e.jsx(n,{modalRef:o,closer:!0,children:"Yes, stay signed in"}),e.jsx(n,{modalRef:o,closer:!0,unstyled:!0,className:"padding-105 text-center",children:"Sign out"})]})})]})]})},s=()=>{const o=r.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(n,{modalRef:o,opener:!0,children:"Open modal with custom initial focus element"}),e.jsxs(a,{ref:o,id:"example-modal-1","aria-labelledby":"modal-1-heading","aria-describedby":"modal-1-description",children:[e.jsx(c,{id:"modal-1-heading",children:"Are you sure you want to continue?"}),e.jsxs("div",{className:"usa-prose",children:[e.jsx("p",{id:"modal-1-description",children:"You have unsaved changes that will be lost."}),e.jsx("button",{type:"button",children:"Decoy button"}),e.jsx("button",{type:"button","data-focus":"true",children:"Focus me first"})]}),e.jsx(u,{children:e.jsxs(m,{children:[e.jsx(n,{modalRef:o,closer:!0,children:"Continue without saving"}),e.jsx(n,{modalRef:o,closer:!0,unstyled:!0,className:"padding-105 text-center",children:"Go back"})]})})]})]})},i=()=>{const o=r.useRef(null);return e.jsx("div",{children:e.jsxs("div",{children:[e.jsx(n,{modalRef:o,opener:!0,children:"Open default modal"}),e.jsxs(a,{ref:o,id:"example-modal-1","aria-labelledby":"modal-1-heading","aria-describedby":"modal-1-description",isInitiallyOpen:!0,children:[e.jsx(c,{id:"modal-1-heading",children:"Are you sure you want to continue?"}),e.jsx("div",{className:"usa-prose",children:e.jsx("p",{id:"modal-1-description",children:"You have unsaved changes that will be lost."})}),e.jsx(u,{children:e.jsxs(m,{children:[e.jsx(n,{modalRef:o,closer:!0,children:"Continue without saving"}),e.jsx(n,{modalRef:o,closer:!0,unstyled:!0,className:"padding-105 text-center",children:"Go back"})]})})]})]})})};t.__docgenInfo={description:"",methods:[],displayName:"DefaultModal"};l.__docgenInfo={description:"",methods:[],displayName:"LargeModal"};d.__docgenInfo={description:"",methods:[],displayName:"ForceActionModal"};s.__docgenInfo={description:"",methods:[],displayName:"CustomFocusElementModal"};i.__docgenInfo={description:"",methods:[],displayName:"InitiallyOpenModal"};var p,g,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,M,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(b=(M=l.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var x,y,v;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var R,j,B;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(B=(j=s.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var w,T,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(N=(T=i.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const D=["DefaultModal","LargeModal","ForceActionModal","CustomFocusElementModal","InitiallyOpenModal"];export{s as CustomFocusElementModal,t as DefaultModal,d as ForceActionModal,i as InitiallyOpenModal,l as LargeModal,D as __namedExportsOrder,k as default};
