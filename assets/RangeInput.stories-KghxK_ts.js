import{j as e}from"./jsx-runtime-CKrituN3.js";import{R as r}from"./RangeInput-B9t6FgCW.js";import{L as j}from"./Label-CfwuEpQt.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const L={title:"Components/Range slider",component:r,parameters:{docs:{description:{component:`
### USWDS 3.0 RangeInput component

Source: https://designsystem.digital.gov/components/range-slider
`}}}},f=e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("span",{children:"Start:"})," ",e.jsx("span",{children:"0"})]}),e.jsxs("div",{children:[e.jsx("span",{children:"End:"})," ",e.jsx("span",{children:"100"})]})]}),I=e.jsx(e.Fragment,{children:"(drag to adjust or use arrow keys)"}),n=()=>e.jsxs(e.Fragment,{children:[e.jsx(j,{htmlFor:"range-slider",hint:I,children:f}),e.jsx(r,{id:"range-slider",name:"range"})]}),a=()=>e.jsx(r,{id:"custom-range-slider",name:"rangeValue",className:"dark-theme",min:1,max:11,step:2,defaultValue:3}),t=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"range-slider",name:"range",min:0,max:4,defaultValue:2,list:"range-list-id"}),e.jsxs("datalist",{id:"range-list-id",children:[e.jsx("option",{children:"0"}),e.jsx("option",{children:"1"}),e.jsx("option",{children:"2"}),e.jsx("option",{children:"3"}),e.jsx("option",{children:"4"})]})]}),s=()=>e.jsx(r,{id:"custom-range-slider",name:"rangeValue",textPreposition:"de",textUnit:"por ciento"});n.__docgenInfo={description:"",methods:[],displayName:"DefaultRange"};a.__docgenInfo={description:"",methods:[],displayName:"CustomRange"};t.__docgenInfo={description:"",methods:[],displayName:"DataListRange"};s.__docgenInfo={description:"",methods:[],displayName:"WithUnitAndPreposition"};var i,o,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`(): React.ReactElement => <>
    <Label htmlFor="range-slider" hint={labelHint}>
      {labelChildren}
    </Label>
    <RangeInput id="range-slider" name="range" />
  </>`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:'(): React.ReactElement => <RangeInput id="custom-range-slider" name="rangeValue" className="dark-theme" min={1} max={11} step={2} defaultValue={3} />',...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`(): React.ReactElement => <>
    <RangeInput id="range-slider" name="range" min={0} max={4} defaultValue={2} list="range-list-id" />
    <datalist id="range-list-id">
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </datalist>
  </>`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,x,R;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:'(): React.ReactElement => <RangeInput id="custom-range-slider" name="rangeValue" textPreposition="de" textUnit="por ciento" />',...(R=(x=s.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};const y=["DefaultRange","CustomRange","DataListRange","WithUnitAndPreposition"];export{a as CustomRange,t as DataListRange,n as DefaultRange,s as WithUnitAndPreposition,y as __namedExportsOrder,L as default};
