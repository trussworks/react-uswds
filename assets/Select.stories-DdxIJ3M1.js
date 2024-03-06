import{a as T,F as W,j as e}from"./jsx-runtime-2xDJh5tt.js";import{S as l}from"./Select-CZ6J1Uk9.js";import{L as V}from"./Label-RQBQRD89.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const C={title:"Components/Select",component:l,parameters:{docs:{description:{component:`
        ### USWDS 3.0 Select component

        Source: https://designsystem.digital.gov/components/select/
        `}}},argTypes:{validationStatus:{options:["error","success","undefined"],control:"radio"},disabled:{control:"boolean"}}},o=T(W,{children:[e("option",{children:"- Select - "}),e("option",{value:"value1",children:"Option A"}),e("option",{value:"value2",children:"Option B"}),e("option",{value:"value3",children:"Option C"}),e("option",{value:"valueBIG",children:"Option of extra length to demonstrate how content like this will look different"})]}),i=F=>e(l,{...F,children:o}),t={render:i,args:{id:"input-select",name:"input-select"}},n={render:i,args:{id:"input-select",name:"input-select",defaultValue:"value2"}},r={render:i,args:{id:"input-select",name:"input-select",disabled:!0}},s=()=>T(W,{children:[e(V,{htmlFor:"input-select",children:"Select label"}),e(l,{id:"input-select",name:"input-select",children:o})]}),a=()=>e(l,{id:"input-multiselect",name:"input-multiselect",multiple:!0,children:o});var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    id: 'input-select',
    name: 'input-select'
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    id: 'input-select',
    name: 'input-select',
    defaultValue: 'value2'
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var S,g,f;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    id: 'input-select',
    name: 'input-select',
    disabled: true
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,v,D;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => <>
    <Label htmlFor="input-select">Select label</Label>
    <Select id="input-select" name="input-select">
      {options}
    </Select>
  </>`,...(D=(v=s.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var L,x,O;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Select id="input-multiselect" name="input-multiselect" multiple>
    {options}
  </Select>`,...(O=(x=a.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};const M=["Default","WithDefaultValue","Disabled","WithLabel","Multiselect"];export{t as Default,r as Disabled,a as Multiselect,n as WithDefaultValue,s as WithLabel,M as __namedExportsOrder,C as default};
