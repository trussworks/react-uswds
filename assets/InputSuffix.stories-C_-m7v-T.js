import{j as r,a as p}from"./jsx-runtime-2xDJh5tt.js";import{I as o}from"./InputSuffix-gmdBxKcd.js";import{I as u}from"./InputGroup-BPx5YESD.js";import{F as a}from"./FormGroup-DUBGswQ6.js";import{T as s}from"./TextInput-84m5h5vG.js";import{I as l}from"./Icons-CMWhi0me.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const j={title:"Components/Input prefix or suffix/InputSuffix",component:o,parameters:{docs:{description:{component:`
### USWDS 3.0 InputSuffix component

Source: https://designsystem.digital.gov/components/input-prefix-suffix/
`}}}},t=()=>r(a,{children:p(u,{children:[r(s,{id:"search",name:"search",type:"search"}),r(o,{children:r(l.Search,{})})]})}),e=()=>r(a,{children:p(u,{error:!0,children:[r(s,{id:"search",name:"search",type:"search",validationStatus:"error"}),r(o,{children:r(l.Search,{})})]})}),n=()=>r(a,{children:p(u,{children:[r(s,{id:"weight",name:"weight",type:"text"}),r(o,{children:"lbs."})]})});var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <InputGroup>
      <TextInput id="search" name="search" type="search" />
      <InputSuffix>
        <Icon.Search />
      </InputSuffix>
    </InputGroup>
  </FormGroup>`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var f,I,h;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <InputGroup error>
      <TextInput id="search" name="search" type="search" validationStatus="error" />
      <InputSuffix>
        <Icon.Search />
      </InputSuffix>
    </InputGroup>
  </FormGroup>`,...(h=(I=e.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var d,x,S;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <InputGroup>
      <TextInput id="weight" name="weight" type="text" />
      <InputSuffix>lbs.</InputSuffix>
    </InputGroup>
  </FormGroup>`,...(S=(x=n.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const v=["InputWithIconInputSuffix","InputWithIconInputSuffixError","InputWithTextInputSuffix"];export{t as InputWithIconInputSuffix,e as InputWithIconInputSuffixError,n as InputWithTextInputSuffix,v as __namedExportsOrder,j as default};
