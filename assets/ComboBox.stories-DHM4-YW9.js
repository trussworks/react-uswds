import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as S}from"./index-CBqU2yxZ.js";import{C as s}from"./ComboBox-CrgV33s6.js";import{F as u}from"./Form-EF6HmHLa.js";import{L as i}from"./Label-CfwuEpQt.js";import{B as v}from"./Button-Thyd1SVx.js";import{R as j}from"./Radio-B1G-YNcg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const c={apple:"Apple",apricot:"Apricot",avocado:"Avocado",banana:"Banana",blackberry:"Blackberry","blood orange":"Blood orange",blueberry:"Blueberry",boysenberry:"Boysenberry",breadfruit:"Breadfruit","buddhas hand citron":"Buddha's hand citron",cantaloupe:"Cantaloupe",clementine:"Clementine","crab apple":"Crab apple",currant:"Currant",cherry:"Cherry","custard apple":"Custard apple",coconut:"Coconut",cranberry:"Cranberry",date:"Date",dragonfruit:"Dragonfruit",durian:"Durian",elderberry:"Elderberry",fig:"Fig",gooseberry:"Gooseberry",grape:"Grape",grapefruit:"Grapefruit",guava:"Guava","honeydew melon":"Honeydew melon",jackfruit:"Jackfruit",kiwifruit:"Kiwifruit",kumquat:"Kumquat",lemon:"Lemon",lime:"Lime",lychee:"Lychee",mandarine:"Mandarine",mango:"Mango",mangosteen:"Mangosteen",marionberry:"Marionberry",nectarine:"Nectarine",orange:"Orange",papaya:"Papaya",passionfruit:"Passionfruit",peach:"Peach",pear:"Pear",persimmon:"Persimmon",plantain:"Plantain",plum:"Plum",pineapple:"Pineapple",pluot:"Pluot",pomegranate:"Pomegranate",pomelo:"Pomelo",quince:"Quince",raspberry:"Raspberry",rambutan:"Rambutan",soursop:"Soursop",starfruit:"Starfruit",strawberry:"Strawberry",tamarind:"Tamarind",tangelo:"Tangelo",tangerine:"Tangerine","ugli fruit":"Ugli fruit",watermelon:"Watermelon","white currant":"White currant",yuzu:"Yuzu"},K={celery:"Celery",onion:"Onion",pepper:"Pepper"},te={title:"Components/Combo box",component:s,parameters:{docs:{description:{component:`
### USWDS 3.0 ComboBox component

Source: https://designsystem.digital.gov/components/combo-box
`}}}},r=()=>{},f=()=>{const t=Object.entries(c).map(([o,a])=>({value:o,label:a}));return e.jsxs(u,{onSubmit:r,children:[e.jsx(i,{htmlFor:"input-ComboBox",children:"Select a fruit"}),e.jsx(s,{id:"input-ComboBox",name:"input-ComboBox",options:t,onChange:r})]})},b=()=>{const t=Object.entries(c).map(([o,a])=>({value:o,label:a}));return e.jsxs(u,{onSubmit:r,children:[e.jsx(i,{htmlFor:"input-ComboBox",children:"Select a fruit"}),e.jsx(s,{id:"input-ComboBox",name:"input-ComboBox",options:t,onChange:r,defaultValue:"mango"})]})},h=()=>{const t=Object.entries(c).map(([o,a])=>({value:o,label:a}));return e.jsxs(u,{onSubmit:r,children:[e.jsx(i,{htmlFor:"fruit",children:"Select a fruit"}),e.jsx(s,{id:"fruit",name:"fruit",options:t,onChange:r,ulProps:{"aria-labelledby":"fruit-label"}})]})},g=()=>{const t=Object.entries(c).map(([o,a])=>({value:o,label:a}));return e.jsxs(u,{onSubmit:r,children:[e.jsx(i,{htmlFor:"fruit",children:"Select a fruit"}),e.jsx(s,{id:"fruit",name:"fruit",options:t,onChange:r,disabled:!0})]})},C=()=>{const t=Object.entries(c).map(([p,d])=>({value:p,label:d})),o=Object.entries(K).map(([p,d])=>({value:p,label:d})),[a,l]=S.useState(t),n=S.useRef(null),m=p=>{var L;(L=n.current)==null||L.clearSelection();const d=p.target.id;l(d==="fruit"?t:o)};return e.jsxs(u,{onSubmit:r,children:[e.jsx(i,{htmlFor:"food",children:"Select a group"}),e.jsx(j,{name:"food",id:"fruit",label:"Fruits",onChange:m,defaultChecked:!0}),e.jsx(j,{name:"food",id:"veggie",label:"Vegetables",onChange:m}),e.jsx(i,{htmlFor:"food",children:"Select a food"}),e.jsx(s,{id:"fruit",name:"fruit",options:a,onChange:r,ref:n})]})},x=()=>{const t=S.useRef(null),o=Object.entries(c).map(([n,m])=>({value:n,label:m})),a=()=>{var n;return(n=t.current)==null?void 0:n.clearSelection()},l=()=>{var n;return(n=t.current)==null?void 0:n.focus()};return e.jsxs(u,{onSubmit:r,children:[e.jsx(i,{htmlFor:"fruit",children:"Select a fruit"}),e.jsx(s,{id:"fruit",name:"fruit",options:o,onChange:r,ref:t}),e.jsx(v,{type:"reset",onClick:a,children:"Clear Selected Value"}),e.jsx(v,{type:"button",onClick:l,children:"Focus on input"})]})},y=()=>{const t=Object.entries(c).map(([l,n])=>({value:l,label:n})),o=[...t],a=l=>{const{value:n}=l.target;n&&t.findIndex(m=>m.value===n)<0&&(o.length===t.length?o.push({value:n,label:n}):o[o.length-1]={value:n,label:`Add new: ${n}`})};return e.jsxs(u,{onSubmit:r,children:[e.jsx(i,{htmlFor:"fruit",children:"Select a fruit"}),e.jsx(s,{id:"fruit",name:"fruit",options:o,onChange:r,inputProps:{onChange:a}})]})};f.__docgenInfo={description:"",methods:[],displayName:"DefaultComboBoxWithPropOptions"};b.__docgenInfo={description:"",methods:[],displayName:"WithDefaultValue"};h.__docgenInfo={description:"",methods:[],displayName:"WithLabel"};g.__docgenInfo={description:"",methods:[],displayName:"Disabled"};C.__docgenInfo={description:"",methods:[],displayName:"WithOtherFields"};x.__docgenInfo={description:"",methods:[],displayName:"ExposedRefMethods"};y.__docgenInfo={description:"",methods:[],displayName:"CustomInputChangeHandler"};var F,B,R;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`(): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([key, value]) => ({
    value: key,
    label: value
  }));
  return <Form onSubmit={noop}>
      <Label htmlFor="input-ComboBox">Select a fruit</Label>
      <ComboBox id="input-ComboBox" name="input-ComboBox" options={fruitList} onChange={noop} />
    </Form>;
}`,...(R=(B=f.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var k,O,P;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`(): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key
  }));
  return <Form onSubmit={noop}>
      <Label htmlFor="input-ComboBox">Select a fruit</Label>
      <ComboBox id="input-ComboBox" name="input-ComboBox" options={fruitList} onChange={noop} defaultValue="mango" />
    </Form>;
}`,...(P=(O=b.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var E,I,_;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(_=(I=h.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var W,w,D;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`(): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key
  }));
  return <Form onSubmit={noop}>
      <Label htmlFor="fruit">Select a fruit</Label>
      <ComboBox id="fruit" name="fruit" options={fruitList} onChange={noop} disabled />
    </Form>;
}`,...(D=(w=g.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var M,V,N;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`(): React.ReactElement => {
  const fruitList = Object.entries(fruits).map(([value, key]) => ({
    value: value,
    label: key
  }));
  const veggieList = Object.entries(veggies).map(([value, key]) => ({
    value: value,
    label: key
  }));
  const [options, setOptions] = useState(fruitList);
  const ref = useRef<ComboBoxRef>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    ref.current?.clearSelection();
    const selection = e.target.id;
    setOptions(selection === 'fruit' ? fruitList : veggieList);
  };
  return <Form onSubmit={noop}>
      <Label htmlFor="food">Select a group</Label>
      <Radio name="food" id="fruit" label="Fruits" onChange={handleChange} defaultChecked></Radio>
      <Radio name="food" id="veggie" label="Vegetables" onChange={handleChange}></Radio>
      <Label htmlFor="food">Select a food</Label>
      <ComboBox id="fruit" name="fruit" options={options} onChange={noop} ref={ref} />
    </Form>;
}`,...(N=(V=C.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var A,H,T;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(T=(H=x.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var G,q,z;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(z=(q=y.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const oe=["DefaultComboBoxWithPropOptions","WithDefaultValue","WithLabel","Disabled","WithOtherFields","ExposedRefMethods","CustomInputChangeHandler"];export{y as CustomInputChangeHandler,f as DefaultComboBoxWithPropOptions,g as Disabled,x as ExposedRefMethods,b as WithDefaultValue,h as WithLabel,C as WithOtherFields,oe as __namedExportsOrder,te as default};
