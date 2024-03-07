import{a as n,F as s,j as e}from"./jsx-runtime-2xDJh5tt.js";import{R as a}from"./RangeInput-Bj159vdr.js";import{L as V}from"./Label-RQBQRD89.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const F={title:"Components/Range slider",component:a,parameters:{docs:{description:{component:`
### USWDS 3.0 RangeInput component

Source: https://designsystem.digital.gov/components/range-slider
`}}}},b=n(s,{children:[n("div",{children:[e("span",{children:"Start:"})," ",e("span",{children:"0"})]}),n("div",{children:[e("span",{children:"End:"})," ",e("span",{children:"100"})]})]}),I=e(s,{children:"(drag to adjust or use arrow keys)"}),t=()=>n(s,{children:[e(V,{htmlFor:"range-slider",hint:I,children:b}),e(a,{id:"range-slider",name:"range"})]}),r=()=>e(a,{id:"custom-range-slider",name:"rangeValue",className:"dark-theme",min:1,max:11,step:2,defaultValue:3}),i=()=>n(s,{children:[e(a,{id:"range-slider",name:"range",min:0,max:4,defaultValue:2,list:"range-list-id"}),n("datalist",{id:"range-list-id",children:[e("option",{children:"0"}),e("option",{children:"1"}),e("option",{children:"2"}),e("option",{children:"3"}),e("option",{children:"4"})]})]}),o=()=>e(a,{id:"custom-range-slider",name:"rangeValue",textPreposition:"de",textUnit:"por ciento"});var d,l,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`(): React.ReactElement => <>
    <Label htmlFor="range-slider" hint={labelHint}>
      {labelChildren}
    </Label>
    <RangeInput id="range-slider" name="range" />
  </>`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:'(): React.ReactElement => <RangeInput id="custom-range-slider" name="rangeValue" className="dark-theme" min={1} max={11} step={2} defaultValue={3} />',...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,h,R;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`(): React.ReactElement => <>
    <RangeInput id="range-slider" name="range" min={0} max={4} defaultValue={2} list="range-list-id" />
    <datalist id="range-list-id">
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </datalist>
  </>`,...(R=(h=i.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var x,f,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:'(): React.ReactElement => <RangeInput id="custom-range-slider" name="rangeValue" textPreposition="de" textUnit="por ciento" />',...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const P=["DefaultRange","CustomRange","DataListRange","WithUnitAndPreposition"];export{r as CustomRange,i as DataListRange,t as DefaultRange,o as WithUnitAndPreposition,P as __namedExportsOrder,F as default};
