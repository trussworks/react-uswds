import{j as t,a as d}from"./jsx-runtime-2xDJh5tt.js";import{r as h}from"./index-CBqU2yxZ.js";import{A as f}from"./Alert-Dqsz4m1Z.js";import{B as b}from"./Button-Dw-sXN3h.js";import{F as V}from"./Fieldset-CtQeKIio.js";import{F as g}from"./Form-DNY-009I.js";import{L as y}from"./Label-RQBQRD89.js";import{T as S}from"./TextInput-gKiZgmFb.js";import{V as m,a as i}from"./ValidationItem-XsPANOr3.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const T={title:"Components/Validation",component:m,subcomponents:{ValidationItem:i},parameters:{docs:{description:{component:`
### USWDS 3.0 Validation component

Source: https://designsystem.digital.gov/components/validation
`}}}},C=(e,a)=>{switch(e){case"uppercase":return/[A-Z]/.test(a);case"numerical":return/\d/.test(a);default:return console.warn(`No validation item found for: "${e}"`),!1}},n=()=>{const[e,a]=h.useState({uppercase:!1,numerical:!1}),u=p=>{const{target:{value:v}}=p,o={};Object.keys(e).forEach(s=>{o[s]=C(s,v)}),a({...e,...o})};return t(g,{onSubmit:()=>{console.log("submit")},children:d(V,{legend:"Enter a code",legendStyle:"large",children:[t(f,{type:"info",validation:!0,heading:"Code Requirements",headingLevel:"h4",children:d(m,{id:"validate-code",children:[t(i,{id:"uppercase",isValid:e.uppercase,children:"Use at least one uppercase character"}),t(i,{id:"numerical",isValid:e.numerical,children:"Use at least one number"})]})}),t(y,{htmlFor:"code",children:"Code"}),t(S,{id:"code",name:"code",type:"text","aria-describedby":"validate-code",onChange:u}),t(b,{type:"submit",children:"Submit code"})]})})};var r,l,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const D=["Default"];export{n as Default,D as __namedExportsOrder,T as default};
