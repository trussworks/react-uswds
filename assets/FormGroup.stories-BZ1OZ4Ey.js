import{a as i,j as t}from"./jsx-runtime-2xDJh5tt.js";import{F as o}from"./FormGroup-DUBGswQ6.js";import{L as l}from"./Label-RQBQRD89.js";import{T as c}from"./TextInput-84m5h5vG.js";import{E as x}from"./ErrorMessage-DC3KMugT.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const f={title:"Components/Form elements/FormGroup",component:o,parameters:{docs:{description:{component:`
### USWDS 3.0 FormGroup component

Source: https://designsystem.digital.gov/components/form-templates/
`}}}},e=()=>i(o,{children:[t(l,{htmlFor:"input-type-text",children:"Text input label"}),t(c,{id:"input-type-text",name:"input-type-text",type:"text"})]}),r=()=>i(o,{error:!0,children:[t(l,{htmlFor:"input-type-text",error:!0,children:"Text input label"}),t(x,{children:"Helpful error message"}),t(c,{id:"input-type-text",name:"input-type-text",type:"text",validationStatus:"error"})]});var p,n,a;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="input-type-text">Text input label</Label>
    <TextInput id="input-type-text" name="input-type-text" type="text" />
  </FormGroup>`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var s,m,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(): React.ReactElement => <FormGroup error>
    <Label htmlFor="input-type-text" error>
      Text input label
    </Label>
    <ErrorMessage>Helpful error message</ErrorMessage>
    <TextInput id="input-type-text" name="input-type-text" type="text" validationStatus="error" />
  </FormGroup>`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const E=["TextInputFormGroup","TextInputErrorFormGroup"];export{r as TextInputErrorFormGroup,e as TextInputFormGroup,E as __namedExportsOrder,f as default};
