import{a as l,j as e}from"./jsx-runtime-2xDJh5tt.js";import{r as q}from"./index-CBqU2yxZ.js";import{C as u}from"./ComboBox-B1EslE6X.js";import{F as s}from"./Form-DNY-009I.js";import{L as i}from"./Label-RQBQRD89.js";import{T as _}from"./TextInput-gKiZgmFb.js";import{B as S}from"./Button-Dw-sXN3h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const c={apple:"Apple",apricot:"Apricot",avocado:"Avocado",banana:"Banana",blackberry:"Blackberry","blood orange":"Blood orange",blueberry:"Blueberry",boysenberry:"Boysenberry",breadfruit:"Breadfruit","buddhas hand citron":"Buddha's hand citron",cantaloupe:"Cantaloupe",clementine:"Clementine","crab apple":"Crab apple",currant:"Currant",cherry:"Cherry","custard apple":"Custard apple",coconut:"Coconut",cranberry:"Cranberry",date:"Date",dragonfruit:"Dragonfruit",durian:"Durian",elderberry:"Elderberry",fig:"Fig",gooseberry:"Gooseberry",grape:"Grape",grapefruit:"Grapefruit",guava:"Guava","honeydew melon":"Honeydew melon",jackfruit:"Jackfruit",kiwifruit:"Kiwifruit",kumquat:"Kumquat",lemon:"Lemon",lime:"Lime",lychee:"Lychee",mandarine:"Mandarine",mango:"Mango",mangosteen:"Mangosteen",marionberry:"Marionberry",nectarine:"Nectarine",orange:"Orange",papaya:"Papaya",passionfruit:"Passionfruit",peach:"Peach",pear:"Pear",persimmon:"Persimmon",plantain:"Plantain",plum:"Plum",pineapple:"Pineapple",pluot:"Pluot",pomegranate:"Pomegranate",pomelo:"Pomelo",quince:"Quince",raspberry:"Raspberry",rambutan:"Rambutan",soursop:"Soursop",starfruit:"Starfruit",strawberry:"Strawberry",tamarind:"Tamarind",tangelo:"Tangelo",tangerine:"Tangerine","ugli fruit":"Ugli fruit",watermelon:"Watermelon","white currant":"White currant",yuzu:"Yuzu"},Z={title:"Components/Combo box",component:u,parameters:{docs:{description:{component:`
### USWDS 3.0 ComboBox component

Source: https://designsystem.digital.gov/components/combo-box
`}}}},r=()=>{},p=()=>{const t=Object.entries(c).map(([n,a])=>({value:n,label:a}));return l(s,{onSubmit:r,children:[e(i,{htmlFor:"input-ComboBox",children:"Select a fruit"}),e(u,{id:"input-ComboBox",name:"input-ComboBox",options:t,onChange:r})]})},f=()=>{const t=Object.entries(c).map(([n,a])=>({value:n,label:a}));return l(s,{onSubmit:r,children:[e(i,{htmlFor:"input-ComboBox",children:"Select a fruit"}),e(u,{id:"input-ComboBox",name:"input-ComboBox",options:t,onChange:r,defaultValue:"mango"})]})},b=()=>{const t=Object.entries(c).map(([n,a])=>({value:n,label:a}));return l(s,{onSubmit:r,children:[e(i,{htmlFor:"fruit",children:"Select a fruit"}),e(u,{id:"fruit",name:"fruit",options:t,onChange:r,ulProps:{"aria-labelledby":"fruit-label"}})]})},d=()=>{const t=Object.entries(c).map(([n,a])=>({value:n,label:a}));return l(s,{onSubmit:r,children:[e(i,{htmlFor:"fruit",children:"Select a fruit"}),e(u,{id:"fruit",name:"fruit",options:t,onChange:r,disabled:!0})]})},h=()=>{const t=Object.entries(c).map(([n,a])=>({value:n,label:a}));return l(s,{onSubmit:r,children:[e(i,{htmlFor:"fruit",children:"Select a fruit"}),e(u,{id:"fruit",name:"fruit",options:t,onChange:r}),e(i,{htmlFor:"fruitDescription",children:"Description"}),e(_,{id:"fruitDescription",name:"fruitDescription",type:"text"})]})},C=()=>{const t=q.useRef(null),n=Object.entries(c).map(([o,y])=>({value:o,label:y}));return l(s,{onSubmit:r,children:[e(i,{htmlFor:"fruit",children:"Select a fruit"}),e(u,{id:"fruit",name:"fruit",options:n,onChange:r,ref:t}),e(S,{type:"reset",onClick:()=>{var o;return(o=t.current)==null?void 0:o.clearSelection()},children:"Clear Selected Value"}),e(S,{type:"button",onClick:()=>{var o;return(o=t.current)==null?void 0:o.focus()},children:"Focus on input"})]})},g=()=>{const t=Object.entries(c).map(([m,o])=>({value:m,label:o})),n=[...t];return l(s,{onSubmit:r,children:[e(i,{htmlFor:"fruit",children:"Select a fruit"}),e(u,{id:"fruit",name:"fruit",options:n,onChange:r,inputProps:{onChange:m=>{const{value:o}=m.target;o&&t.findIndex(y=>y.value===o)<0&&(n.length===t.length?n.push({value:o,label:o}):n[n.length-1]={value:o,label:`Add new: ${o}`})}}})]})};var L,F,v;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`(): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([key, value]) => ({
    value: key,
    label: value
  }));
  return <Form onSubmit={noop}>
      <Label htmlFor="input-ComboBox">Select a fruit</Label>
      <ComboBox id="input-ComboBox" name="input-ComboBox" options={fruitList} onChange={noop} />
    </Form>;
}`,...(v=(F=p.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var x,B,k;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`(): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key
  }));
  return <Form onSubmit={noop}>
      <Label htmlFor="input-ComboBox">Select a fruit</Label>
      <ComboBox id="input-ComboBox" name="input-ComboBox" options={fruitList} onChange={noop} defaultValue="mango" />
    </Form>;
}`,...(k=(B=f.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var R,O,j;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`(): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key
  }));
  return <Form onSubmit={noop}>
      <Label htmlFor="fruit">Select a fruit</Label>
      <ComboBox id="fruit" name="fruit" options={fruitList} onChange={noop} ulProps={{
      'aria-labelledby': 'fruit-label'
    }} />
    </Form>;
}`,...(j=(O=b.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var D,P,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`(): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key
  }));
  return <Form onSubmit={noop}>
      <Label htmlFor="fruit">Select a fruit</Label>
      <ComboBox id="fruit" name="fruit" options={fruitList} onChange={noop} disabled />
    </Form>;
}`,...(E=(P=d.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var w,I,W;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`(): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key
  }));
  return <Form onSubmit={noop}>
      <Label htmlFor="fruit">Select a fruit</Label>
      <ComboBox id="fruit" name="fruit" options={fruitList} onChange={noop} />
      <Label htmlFor="fruitDescription">Description</Label>
      <TextInput id="fruitDescription" name="fruitDescription" type="text" />
    </Form>;
}`,...(W=(I=h.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var M,T,A;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`(): React.ReactElement => {
  const ref = useRef<ComboBoxRef>(null);
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key
  }));
  const handleClearSelection = (): void => ref.current?.clearSelection();
  const handleFocus = (): void => ref.current?.focus();
  return <Form onSubmit={noop}>
      <Label htmlFor="fruit">Select a fruit</Label>
      <ComboBox id="fruit" name="fruit" options={fruitList} onChange={noop} ref={ref} />
      <Button type="reset" onClick={handleClearSelection}>
        Clear Selected Value
      </Button>

      <Button type="button" onClick={handleFocus}>
        Focus on input
      </Button>
    </Form>;
}`,...(A=(T=C.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var V,G,H;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`(): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key
  }));
  const options = [...fruitList];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value
    } = e.target;
    if (value && fruitList.findIndex(f => f.value === value) < 0) {
      if (options.length === fruitList.length) {
        // Add new option to end of list
        options.push({
          value,
          label: value
        });
      } else {
        // Rewrite the new option
        options[options.length - 1] = {
          value,
          label: \`Add new: \${value}\`
        };
      }
    }
  };
  return <Form onSubmit={noop}>
      <Label htmlFor="fruit">Select a fruit</Label>
      <ComboBox id="fruit" name="fruit" options={options} onChange={noop} inputProps={{
      onChange: handleInputChange
    }} />
    </Form>;
}`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const ee=["DefaultComboBoxWithPropOptions","WithDefaultValue","WithLabel","Disabled","WithOtherFields","ExposedRefMethods","CustomInputChangeHandler"];export{g as CustomInputChangeHandler,p as DefaultComboBoxWithPropOptions,d as Disabled,C as ExposedRefMethods,f as WithDefaultValue,b as WithLabel,h as WithOtherFields,ee as __namedExportsOrder,Z as default};
