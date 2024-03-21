import{j as t}from"./jsx-runtime-CKrituN3.js";import{I as o}from"./InputSuffix-D2TlHTbY.js";import{I as p}from"./InputGroup-URNx161j.js";import{F as s}from"./FormGroup-9HSr8Yaw.js";import{T as u}from"./TextInput-DL9q-H81.js";import{I as S}from"./Icons-CQoMJF7S.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const T={title:"Components/Input prefix or suffix/InputSuffix",component:o,parameters:{docs:{description:{component:`
### USWDS 3.0 InputSuffix component

Source: https://designsystem.digital.gov/components/input-prefix-suffix/
`}}}},r=()=>t.jsx(s,{children:t.jsxs(p,{children:[t.jsx(u,{id:"search",name:"search",type:"search"}),t.jsx(o,{children:t.jsx(S.Search,{})})]})}),e=()=>t.jsx(s,{children:t.jsxs(p,{error:!0,children:[t.jsx(u,{id:"search",name:"search",type:"search",validationStatus:"error"}),t.jsx(o,{children:t.jsx(S.Search,{})})]})}),n=()=>t.jsx(s,{children:t.jsxs(p,{children:[t.jsx(u,{id:"weight",name:"weight",type:"text"}),t.jsx(o,{children:"lbs."})]})});r.__docgenInfo={description:"",methods:[],displayName:"InputWithIconInputSuffix"};e.__docgenInfo={description:"",methods:[],displayName:"InputWithIconInputSuffixError"};n.__docgenInfo={description:"",methods:[],displayName:"InputWithTextInputSuffix"};var i,a,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <InputGroup>
      <TextInput id="search" name="search" type="search" />
      <InputSuffix>
        <Icon.Search />
      </InputSuffix>
    </InputGroup>
  </FormGroup>`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var m,I,f;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <InputGroup error>
      <TextInput id="search" name="search" type="search" validationStatus="error" />
      <InputSuffix>
        <Icon.Search />
      </InputSuffix>
    </InputGroup>
  </FormGroup>`,...(f=(I=e.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var x,d,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <InputGroup>
      <TextInput id="weight" name="weight" type="text" />
      <InputSuffix>lbs.</InputSuffix>
    </InputGroup>
  </FormGroup>`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const R=["InputWithIconInputSuffix","InputWithIconInputSuffixError","InputWithTextInputSuffix"];export{r as InputWithIconInputSuffix,e as InputWithIconInputSuffixError,n as InputWithTextInputSuffix,R as __namedExportsOrder,T as default};
