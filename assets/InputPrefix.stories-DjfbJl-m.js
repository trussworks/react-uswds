import{j as t}from"./jsx-runtime-CKrituN3.js";import{I as o}from"./InputPrefix-w6oLsLPz.js";import{I as h}from"./Icons-CQoMJF7S.js";import{T as p}from"./TextInput-DL9q-H81.js";import{I as i}from"./InputGroup-URNx161j.js";import{F as c}from"./FormGroup-9HSr8Yaw.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const E={title:"Components/Input prefix or suffix/InputPrefix",component:o,parameters:{docs:{description:{component:`
### USWDS 3.0 InputPrefix component

Source: https://designsystem.digital.gov/components/input-prefix-suffix/
`}}}},r=()=>t.jsx(c,{children:t.jsxs(i,{children:[t.jsx(o,{children:"cvc"}),t.jsx(p,{id:"cvc",name:"cvc",type:"text"})]})}),e=()=>t.jsx(c,{children:t.jsxs(i,{error:!0,children:[t.jsx(o,{children:"cvc"}),t.jsx(p,{id:"cvc",name:"cvc",type:"text",validationStatus:"error"})]})}),n=()=>t.jsx(c,{children:t.jsxs(i,{children:[t.jsx(o,{children:t.jsx(h.CreditCard,{})}),t.jsx(p,{id:"card",name:"card",type:"text"})]})});r.__docgenInfo={description:"",methods:[],displayName:"InputWithTextInputPrefix"};e.__docgenInfo={description:"",methods:[],displayName:"InputWithTextInputPrefixError"};n.__docgenInfo={description:"",methods:[],displayName:"InputWithIconInputPrefix"};var s,u,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <InputGroup>
      <InputPrefix>cvc</InputPrefix>
      <TextInput id="cvc" name="cvc" type="text" />
    </InputGroup>
  </FormGroup>`,...(a=(u=r.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};var m,x,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <InputGroup error>
      <InputPrefix>cvc</InputPrefix>
      <TextInput id="cvc" name="cvc" type="text" validationStatus="error" />
    </InputGroup>
  </FormGroup>`,...(d=(x=e.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};var I,f,l;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <InputGroup>
      <InputPrefix>
        <Icon.CreditCard />
      </InputPrefix>
      <TextInput id="card" name="card" type="text" />
    </InputGroup>
  </FormGroup>`,...(l=(f=n.parameters)==null?void 0:f.docs)==null?void 0:l.source}}};const F=["InputWithTextInputPrefix","InputWithTextInputPrefixError","InputWithIconInputPrefix"];export{n as InputWithIconInputPrefix,r as InputWithTextInputPrefix,e as InputWithTextInputPrefixError,F as __namedExportsOrder,E as default};
