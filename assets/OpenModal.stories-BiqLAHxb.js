import{j as e,a as n}from"./jsx-runtime-2xDJh5tt.js";import{b as i,c as r,M as s,a as c}from"./ModalFooter-C1FQFrtH.js";import{B as u}from"./ButtonGroup-CCQqufrl.js";import{B as a}from"./Button-Dw-sXN3h.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./Icons-CMWhi0me.js";const v=()=>{},G={title:"Components/Modal/Open states",argTypes:{handleClose:v},parameters:{docs:{description:{component:`
### USWDS 3.0 Modal component

Source: http://designsystem.digital.gov/components/modal
`}}}},l={render:o=>e(i,{role:"dialog",id:"example-modal-1",isVisible:!0,handleClose:o.handleClose,forceAction:!1,"aria-labelledby":"modal-1-heading","aria-describedby":"modal-1-description",children:n(r,{modalId:"example-modal-1",tabIndex:-1,handleClose:o.handleClose,children:[e(s,{id:"modal-1-heading",children:"Are you sure you want to continue?"}),e("div",{className:"usa-prose",children:e("p",{id:"modal-1-description",children:"You have unsaved changes that will be lost."})}),e(c,{children:n(u,{children:[e(a,{type:"button",onClick:o.handleClose,children:"Continue without saving"}),e(a,{type:"button",onClick:o.handleClose,unstyled:!0,className:"padding-105 text-center",children:"Go back"})]})})]})})},d={render:o=>e(i,{role:"dialog",id:"example-modal-2",isVisible:!0,handleClose:o.handleClose,forceAction:!1,"aria-labelledby":"modal-2-heading","aria-describedby":"modal-2-description",children:n(r,{isLarge:!0,modalId:"example-modal-2",tabIndex:-1,handleClose:o.handleClose,children:[e(s,{id:"modal-2-heading",children:"Are you sure you want to continue?"}),e("div",{className:"usa-prose",children:e("p",{id:"modal-2-description",children:"You have unsaved changes that will be lost."})}),e(c,{children:n(u,{children:[e(a,{type:"button",onClick:o.handleClose,children:"Continue without saving"}),e(a,{type:"button",onClick:o.handleClose,unstyled:!0,className:"padding-105 text-center",children:"Go back"})]})})]})})},t={render:o=>e(i,{role:"dialog",id:"example-modal-3",isVisible:!0,handleClose:o.handleClose,forceAction:!0,"aria-labelledby":"modal-3-heading","aria-describedby":"modal-3-description",children:n(r,{forceAction:!0,modalId:"example-modal-3",tabIndex:-1,handleClose:o.handleClose,children:[e(s,{id:"modal-3-heading",children:"Your session will end soon."}),e("div",{className:"usa-prose",children:e("p",{id:"modal-3-description",children:"You’ve been inactive for too long. Please choose to stay signed in or sign out. Otherwise, you’ll be signed out automatically in 5 minutes."})}),e(c,{children:n(u,{children:[e(a,{type:"button",onClick:o.handleClose,children:"Yes, stay signed in"}),e(a,{type:"button",onClick:o.handleClose,unstyled:!0,className:"padding-105 text-center",children:"Sign out"})]})})]})})};var p,m,h;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,b,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(b=d.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var C,M,x;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(x=(M=t.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};const S=["DefaultModal","LargeModal","ForceActionModal"];export{l as DefaultModal,t as ForceActionModal,d as LargeModal,S as __namedExportsOrder,G as default};
