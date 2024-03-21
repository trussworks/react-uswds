import{j as e}from"./jsx-runtime-CKrituN3.js";import{S as l}from"./Select-B4s8wwqZ.js";import{L as W}from"./Label-CfwuEpQt.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const M={title:"Components/Select",component:l,parameters:{docs:{description:{component:`
        ### USWDS 3.0 Select component

        Source: https://designsystem.digital.gov/components/select/
        `}}},argTypes:{validationStatus:{options:["error","success","undefined"],control:"radio"},disabled:{control:"boolean"}}},o=e.jsxs(e.Fragment,{children:[e.jsx("option",{children:"- Select - "}),e.jsx("option",{value:"value1",children:"Option A"}),e.jsx("option",{value:"value2",children:"Option B"}),e.jsx("option",{value:"value3",children:"Option C"}),e.jsx("option",{value:"valueBIG",children:"Option of extra length to demonstrate how content like this will look different"})]}),i=_=>e.jsx(l,{..._,children:o}),n={render:i,args:{id:"input-select",name:"input-select"}},r={render:i,args:{id:"input-select",name:"input-select",defaultValue:"value2"}},a={render:i,args:{id:"input-select",name:"input-select",disabled:!0}},t=()=>e.jsxs(e.Fragment,{children:[e.jsx(W,{htmlFor:"input-select",children:"Select label"}),e.jsx(l,{id:"input-select",name:"input-select",children:o})]}),s=()=>e.jsx(l,{id:"input-multiselect",name:"input-multiselect",multiple:!0,children:o});t.__docgenInfo={description:"",methods:[],displayName:"WithLabel"};s.__docgenInfo={description:"",methods:[],displayName:"Multiselect"};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    id: 'input-select',
    name: 'input-select'
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    id: 'input-select',
    name: 'input-select',
    defaultValue: 'value2'
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var S,g,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    id: 'input-select',
    name: 'input-select',
    disabled: true
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,b,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`() => <>
    <Label htmlFor="input-select">Select label</Label>
    <Select id="input-select" name="input-select">
      {options}
    </Select>
  </>`,...(j=(b=t.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var v,D,L;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => <Select id="input-multiselect" name="input-multiselect" multiple>
    {options}
  </Select>`,...(L=(D=s.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const k=["Default","WithDefaultValue","Disabled","WithLabel","Multiselect"];export{n as Default,a as Disabled,s as Multiselect,r as WithDefaultValue,t as WithLabel,k as __namedExportsOrder,M as default};
