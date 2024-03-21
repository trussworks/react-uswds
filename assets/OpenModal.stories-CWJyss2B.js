import{j as e}from"./jsx-runtime-CKrituN3.js";import{b as t,c as s,M as i,a as r}from"./ModalFooter-edgjOP8W.js";import{B as c}from"./ButtonGroup-gCLps36L.js";import{B as n}from"./Button-Thyd1SVx.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./Icons-CQoMJF7S.js";const M=()=>{},I={title:"Components/Modal/Open states",argTypes:{handleClose:M},parameters:{docs:{description:{component:`
### USWDS 3.0 Modal component

Source: http://designsystem.digital.gov/components/modal
`}}}},a={render:o=>e.jsx(t,{role:"dialog",id:"example-modal-1",isVisible:!0,handleClose:o.handleClose,forceAction:!1,"aria-labelledby":"modal-1-heading","aria-describedby":"modal-1-description",children:e.jsxs(s,{modalId:"example-modal-1",tabIndex:-1,handleClose:o.handleClose,children:[e.jsx(i,{id:"modal-1-heading",children:"Are you sure you want to continue?"}),e.jsx("div",{className:"usa-prose",children:e.jsx("p",{id:"modal-1-description",children:"You have unsaved changes that will be lost."})}),e.jsx(r,{children:e.jsxs(c,{children:[e.jsx(n,{type:"button",onClick:o.handleClose,children:"Continue without saving"}),e.jsx(n,{type:"button",onClick:o.handleClose,unstyled:!0,className:"padding-105 text-center",children:"Go back"})]})})]})})},l={render:o=>e.jsx(t,{role:"dialog",id:"example-modal-2",isVisible:!0,handleClose:o.handleClose,forceAction:!1,"aria-labelledby":"modal-2-heading","aria-describedby":"modal-2-description",children:e.jsxs(s,{isLarge:!0,modalId:"example-modal-2",tabIndex:-1,handleClose:o.handleClose,children:[e.jsx(i,{id:"modal-2-heading",children:"Are you sure you want to continue?"}),e.jsx("div",{className:"usa-prose",children:e.jsx("p",{id:"modal-2-description",children:"You have unsaved changes that will be lost."})}),e.jsx(r,{children:e.jsxs(c,{children:[e.jsx(n,{type:"button",onClick:o.handleClose,children:"Continue without saving"}),e.jsx(n,{type:"button",onClick:o.handleClose,unstyled:!0,className:"padding-105 text-center",children:"Go back"})]})})]})})},d={render:o=>e.jsx(t,{role:"dialog",id:"example-modal-3",isVisible:!0,handleClose:o.handleClose,forceAction:!0,"aria-labelledby":"modal-3-heading","aria-describedby":"modal-3-description",children:e.jsxs(s,{forceAction:!0,modalId:"example-modal-3",tabIndex:-1,handleClose:o.handleClose,children:[e.jsx(i,{id:"modal-3-heading",children:"Your session will end soon."}),e.jsx("div",{className:"usa-prose",children:e.jsx("p",{id:"modal-3-description",children:"You’ve been inactive for too long. Please choose to stay signed in or sign out. Otherwise, you’ll be signed out automatically in 5 minutes."})}),e.jsx(r,{children:e.jsxs(c,{children:[e.jsx(n,{type:"button",onClick:o.handleClose,children:"Yes, stay signed in"}),e.jsx(n,{type:"button",onClick:o.handleClose,unstyled:!0,className:"padding-105 text-center",children:"Sign out"})]})})]})})};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (argTypes: StorybookArguments): React.ReactElement => {
    return <ModalWrapper role="dialog" id="example-modal-1" isVisible={true} handleClose={argTypes.handleClose} forceAction={false} aria-labelledby="modal-1-heading" aria-describedby="modal-1-description">
        <ModalWindow modalId="example-modal-1" tabIndex={-1} handleClose={argTypes.handleClose}>
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
              <Button type="button" onClick={argTypes.handleClose}>
                Continue without saving
              </Button>
              <Button type="button" onClick={argTypes.handleClose} unstyled className="padding-105 text-center">
                Go back
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalWindow>
      </ModalWrapper>;
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,g,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (argTypes: StorybookArguments): React.ReactElement => {
    return <ModalWrapper role="dialog" id="example-modal-2" isVisible={true} handleClose={argTypes.handleClose} forceAction={false} aria-labelledby="modal-2-heading" aria-describedby="modal-2-description">
        <ModalWindow isLarge modalId="example-modal-2" tabIndex={-1} handleClose={argTypes.handleClose}>
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
              <Button type="button" onClick={argTypes.handleClose}>
                Continue without saving
              </Button>
              <Button type="button" onClick={argTypes.handleClose} unstyled className="padding-105 text-center">
                Go back
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalWindow>
      </ModalWrapper>;
  }
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,x,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (argTypes: StorybookArguments): React.ReactElement => {
    return <ModalWrapper role="dialog" id="example-modal-3" isVisible={true} handleClose={argTypes.handleClose} forceAction={true} aria-labelledby="modal-3-heading" aria-describedby="modal-3-description">
        <ModalWindow forceAction modalId="example-modal-3" tabIndex={-1} handleClose={argTypes.handleClose}>
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
              <Button type="button" onClick={argTypes.handleClose}>
                Yes, stay signed in
              </Button>
              <Button type="button" onClick={argTypes.handleClose} unstyled className="padding-105 text-center">
                Sign out
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalWindow>
      </ModalWrapper>;
  }
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const N=["DefaultModal","LargeModal","ForceActionModal"];export{a as DefaultModal,d as ForceActionModal,l as LargeModal,N as __namedExportsOrder,I as default};
