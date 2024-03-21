import{j as e}from"./jsx-runtime-CKrituN3.js";import{D as t,s as V}from"./DatePicker-B51BLj-6.js";import{F as E}from"./Form-EF6HmHLa.js";import{F as L}from"./FormGroup-9HSr8Yaw.js";import{L as m}from"./Label-CfwuEpQt.js";import{T as N}from"./TextInput-DL9q-H81.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const J={title:"Components/Date picker",component:t,argTypes:{onSubmit:{action:"submitted"},disabled:{control:{type:"boolean"}},validationStatus:{control:{type:"select",options:[void 0,"success","error"]}}},parameters:{docs:{description:{component:`
### USWDS 3.0 DatePicker component

Source: https://designsystem.digital.gov/components/date-picker

**Note:** There is one small difference in functionality between this component and the USWDS implementation, related to validating the input. The USWDS implementation validates when:
- setting the initial value based on the default value passed in
- clicking on a date in the calendar UI
- typing the Enter key in the external text input
- on focusout (blur) of the external text input

Because this component uses the useEffect hook to trigger validation whenever the date value changes (regardless of how), the React DatePicker will validate when:
- setting the initial value based on the default value passed in (same as above)
- clicking on a date in the calendar UI (same as above)
- on input (change) of the external text input

It's also worth mentioning that validation in this case is just calling [setCustomValidity](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity) on the external text input, and library users should be able to determine how & when they want invalid UI to display by inspecting the [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) of the external input.

We may find that we want to expose props for custom event handlers or even a ref to the component for better integration with 3rd party form libraries. If you are running into this, please [file an issue](https://github.com/trussworks/react-uswds/issues/new/choose) describing your use case.
`}}}},d={render:a=>e.jsxs(E,{onSubmit:a.onSubmit,children:[e.jsxs(L,{error:a.validationStatus==="error",children:[e.jsx(m,{id:"appointment-date-label",htmlFor:"appointment-date",error:a.validationStatus==="error",children:"Appointment date"}),e.jsx("div",{className:"usa-hint",id:"appointment-date-hint",children:"mm/dd/yyyy"}),e.jsx(t,{id:"appointment-date",name:"appointment-date","aria-describedby":"appointment-date-hint","aria-labelledby":"appointment-date-label",disabled:a.disabled,validationStatus:a.validationStatus})]}),e.jsx(m,{htmlFor:"otherInput",children:"Another unrelated input"}),e.jsx(N,{id:"otherInput",name:"otherInput",type:"tel"})]})},i=()=>e.jsx(t,{id:"birthdate",name:"birthdate"}),n=()=>e.jsx(t,{id:"birthdate",name:"birthdate",disabled:!0}),l={render:()=>e.jsx(t,{id:"birthdate",name:"birthdate",defaultValue:"1988-05-16"}),parameters:{happo:{waitForContent:"05/16/1988"}}},T=()=>e.jsx(t,{id:"birthdate",name:"birthdate",defaultValue:"1988-05-16",minDate:"2020-01-01"}),r=()=>e.jsx(t,{id:"birthdate",name:"birthdate",minDate:"2021-01-10",maxDate:"2021-01-20"}),o=()=>e.jsx(t,{id:"birthdate",name:"birthdate",minDate:"2020-01-01",maxDate:"2021-5-31"}),F=()=>e.jsx(t,{id:"birthdate",name:"birthdate",defaultValue:"2021-01-20",rangeDate:"2021-01-08"});F.parameters={happo:{waitForContent:"01/20/2021"}};const s=()=>e.jsx(t,{id:"birthdate",name:"birthdate",i18n:V});i.__docgenInfo={description:"",methods:[],displayName:"DefaultDatePicker"};n.__docgenInfo={description:"",methods:[],displayName:"Disabled"};T.__docgenInfo={description:"",methods:[],displayName:"withDefaultInvalidValue"};r.__docgenInfo={description:"",methods:[],displayName:"WithMinMaxInSameMonth"};o.__docgenInfo={description:"",methods:[],displayName:"WithMinMax"};F.__docgenInfo={description:"",methods:[],displayName:"withRangeDate"};s.__docgenInfo={description:"",methods:[],displayName:"WithLocalizations"};var p,c,h;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (argTypes: StorybookArguments): React.ReactElement => <Form onSubmit={argTypes.onSubmit}>
      <FormGroup error={argTypes.validationStatus === 'error'}>
        <Label id="appointment-date-label" htmlFor="appointment-date" error={argTypes.validationStatus === 'error'}>
          Appointment date
        </Label>
        <div className="usa-hint" id="appointment-date-hint">
          mm/dd/yyyy
        </div>
        <DatePicker id="appointment-date" name="appointment-date" aria-describedby="appointment-date-hint" aria-labelledby="appointment-date-label" disabled={argTypes.disabled} validationStatus={argTypes.validationStatus} />
      </FormGroup>
      <Label htmlFor="otherInput">Another unrelated input</Label>
      <TextInput id="otherInput" name="otherInput" type="tel" />
    </Form>
}`,...(h=(c=d.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var u,b,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:'(): React.ReactElement => <DatePicker id="birthdate" name="birthdate" />',...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,D,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:'(): React.ReactElement => <DatePicker id="birthdate" name="birthdate" disabled />',...(y=(D=n.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var x,S,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (): React.ReactElement => <DatePicker id="birthdate" name="birthdate" defaultValue="1988-05-16" />,
  parameters: {
    happo: {
      waitForContent: '05/16/1988'
    }
  }
}`,...(v=(S=l.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var I,w,k;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:'(): React.ReactElement => <DatePicker id="birthdate" name="birthdate" minDate="2021-01-10" maxDate="2021-01-20" />',...(k=(w=r.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var j,R,P;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:'(): React.ReactElement => <DatePicker id="birthdate" name="birthdate" minDate="2020-01-01" maxDate="2021-5-31" />',...(P=(R=o.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var W,_,M;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:'(): React.ReactElement => <DatePicker id="birthdate" name="birthdate" i18n={sampleLocalization} />',...(M=(_=s.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};const K=["CompleteDatePicker","DefaultDatePicker","Disabled","WithDefaultValue","withDefaultInvalidValue","WithMinMaxInSameMonth","WithMinMax","withRangeDate","WithLocalizations"];export{d as CompleteDatePicker,i as DefaultDatePicker,n as Disabled,l as WithDefaultValue,s as WithLocalizations,o as WithMinMax,r as WithMinMaxInSameMonth,K as __namedExportsOrder,J as default,T as withDefaultInvalidValue,F as withRangeDate};
