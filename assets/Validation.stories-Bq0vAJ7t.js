import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as v}from"./index-CBqU2yxZ.js";import{A as h}from"./Alert-V59nW2hk.js";import{B as f}from"./Button-Thyd1SVx.js";import{F as b}from"./Fieldset-B_nbNNxJ.js";import{F as g}from"./Form-EF6HmHLa.js";import{L as V}from"./Label-CfwuEpQt.js";import{T as x}from"./TextInput-DL9q-H81.js";import{V as c,a as i}from"./ValidationItem-C1A4nfMt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const _={title:"Components/Validation",component:c,subcomponents:{ValidationItem:i},parameters:{docs:{description:{component:`
### USWDS 3.0 Validation component

Source: https://designsystem.digital.gov/components/validation
`}}}},j=(t,n)=>{switch(t){case"uppercase":return/[A-Z]/.test(n);case"numerical":return/\d/.test(n);default:return console.warn(`No validation item found for: "${t}"`),!1}},a=()=>{const[t,n]=v.useState({uppercase:!1,numerical:!1}),m=u=>{const{target:{value:p}}=u,o={};Object.keys(t).forEach(s=>{o[s]=j(s,p)}),n({...t,...o})};return e.jsx(g,{onSubmit:()=>{console.log("submit")},children:e.jsxs(b,{legend:"Enter a code",legendStyle:"large",children:[e.jsx(h,{type:"info",validation:!0,heading:"Code Requirements",headingLevel:"h4",children:e.jsxs(c,{id:"validate-code",children:[e.jsx(i,{id:"uppercase",isValid:t.uppercase,children:"Use at least one uppercase character"}),e.jsx(i,{id:"numerical",isValid:t.numerical,children:"Use at least one number"})]})}),e.jsx(V,{htmlFor:"code",children:"Code"}),e.jsx(x,{id:"code",name:"code",type:"text","aria-describedby":"validate-code",onChange:m}),e.jsx(f,{type:"submit",children:"Submit code"})]})})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};var d,r,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`(): React.ReactElement => {
  const [validations, setValidations] = useState({
    uppercase: false,
    numerical: false
  });
  const validateInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: {
        value
      }
    } = event;
    const updatedValidations: Record<string, boolean> = {};
    Object.keys(validations).forEach(validator => {
      // eslint-disable-next-line security/detect-object-injection
      updatedValidations[validator] = validate(validator, value);
    });
    setValidations({
      ...validations,
      ...updatedValidations
    });
  };
  return <Form onSubmit={(): void => {
    console.log('submit');
  }}>
      <Fieldset legend="Enter a code" legendStyle="large">
        <Alert type="info" validation heading="Code Requirements" headingLevel="h4">
          <ValidationChecklist id="validate-code">
            <ValidationItem id="uppercase" isValid={validations.uppercase}>
              Use at least one uppercase character
            </ValidationItem>
            <ValidationItem id="numerical" isValid={validations.numerical}>
              Use at least one number
            </ValidationItem>
          </ValidationChecklist>
        </Alert>
        <Label htmlFor="code">Code</Label>
        <TextInput id="code" name="code" type="text" aria-describedby="validate-code" onChange={validateInput} />
        <Button type="submit">Submit code</Button>
      </Fieldset>
    </Form>;
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const B=["Default"];export{a as Default,B as __namedExportsOrder,_ as default};
