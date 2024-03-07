import{j as r,a as p}from"./jsx-runtime-2xDJh5tt.js";import{I as o}from"./InputPrefix-DvGNzkTN.js";import{I as P}from"./Icons-CMWhi0me.js";import{T as c}from"./TextInput-84m5h5vG.js";import{I as i}from"./InputGroup-BPx5YESD.js";import{F as a}from"./FormGroup-DUBGswQ6.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const R={title:"Components/Input prefix or suffix/InputPrefix",component:o,parameters:{docs:{description:{component:`
### USWDS 3.0 InputPrefix component

Source: https://designsystem.digital.gov/components/input-prefix-suffix/
`}}}},t=()=>r(a,{children:p(i,{children:[r(o,{children:"cvc"}),r(c,{id:"cvc",name:"cvc",type:"text"})]})}),e=()=>r(a,{children:p(i,{error:!0,children:[r(o,{children:"cvc"}),r(c,{id:"cvc",name:"cvc",type:"text",validationStatus:"error"})]})}),n=()=>r(a,{children:p(i,{children:[r(o,{children:r(P.CreditCard,{})}),r(c,{id:"card",name:"card",type:"text"})]})});var u,s,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <InputGroup>
      <InputPrefix>cvc</InputPrefix>
      <TextInput id="cvc" name="cvc" type="text" />
    </InputGroup>
  </FormGroup>`,...(m=(s=t.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var d,I,x;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <InputGroup error>
      <InputPrefix>cvc</InputPrefix>
      <TextInput id="cvc" name="cvc" type="text" validationStatus="error" />
    </InputGroup>
  </FormGroup>`,...(x=(I=e.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var f,l,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <InputGroup>
      <InputPrefix>
        <Icon.CreditCard />
      </InputPrefix>
      <TextInput id="card" name="card" type="text" />
    </InputGroup>
  </FormGroup>`,...(h=(l=n.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const C=["InputWithTextInputPrefix","InputWithTextInputPrefixError","InputWithIconInputPrefix"];export{n as InputWithIconInputPrefix,t as InputWithTextInputPrefix,e as InputWithTextInputPrefixError,C as __namedExportsOrder,R as default};
