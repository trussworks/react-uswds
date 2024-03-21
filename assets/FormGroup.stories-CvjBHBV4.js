import{j as t}from"./jsx-runtime-CKrituN3.js";import{F as o}from"./FormGroup-9HSr8Yaw.js";import{L as u}from"./Label-CfwuEpQt.js";import{T as x}from"./TextInput-DL9q-H81.js";import{E as l}from"./ErrorMessage-CObF_KIU.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const f={title:"Components/Form elements/FormGroup",component:o,parameters:{docs:{description:{component:`
### USWDS 3.0 FormGroup component

Source: https://designsystem.digital.gov/components/form-templates/
`}}}},e=()=>t.jsxs(o,{children:[t.jsx(u,{htmlFor:"input-type-text",children:"Text input label"}),t.jsx(x,{id:"input-type-text",name:"input-type-text",type:"text"})]}),r=()=>t.jsxs(o,{error:!0,children:[t.jsx(u,{htmlFor:"input-type-text",error:!0,children:"Text input label"}),t.jsx(l,{children:"Helpful error message"}),t.jsx(x,{id:"input-type-text",name:"input-type-text",type:"text",validationStatus:"error"})]});e.__docgenInfo={description:"",methods:[],displayName:"TextInputFormGroup"};r.__docgenInfo={description:"",methods:[],displayName:"TextInputErrorFormGroup"};var p,n,s;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="input-type-text">Text input label</Label>
    <TextInput id="input-type-text" name="input-type-text" type="text" />
  </FormGroup>`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,a,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(): React.ReactElement => <FormGroup error>
    <Label htmlFor="input-type-text" error>
      Text input label
    </Label>
    <ErrorMessage>Helpful error message</ErrorMessage>
    <TextInput id="input-type-text" name="input-type-text" type="text" validationStatus="error" />
  </FormGroup>`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const E=["TextInputFormGroup","TextInputErrorFormGroup"];export{r as TextInputErrorFormGroup,e as TextInputFormGroup,E as __namedExportsOrder,f as default};
