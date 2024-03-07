import{a as m,j as e}from"./jsx-runtime-2xDJh5tt.js";import{D as t,s as M}from"./DatePicker-DHPX4dXQ.js";import{F as T}from"./Form-DNY-009I.js";import{F as C}from"./FormGroup-DUBGswQ6.js";import{L as p}from"./Label-RQBQRD89.js";import{T as U}from"./TextInput-84m5h5vG.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const J={title:"Components/Date picker",component:t,argTypes:{onSubmit:{action:"submitted"},disabled:{control:{type:"boolean"}},validationStatus:{control:{type:"select",options:[void 0,"success","error"]}}},parameters:{docs:{description:{component:`
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
`}}}},i={render:a=>m(T,{onSubmit:a.onSubmit,children:[m(C,{error:a.validationStatus==="error",children:[e(p,{id:"appointment-date-label",htmlFor:"appointment-date",error:a.validationStatus==="error",children:"Appointment date"}),e("div",{className:"usa-hint",id:"appointment-date-hint",children:"mm/dd/yyyy"}),e(t,{id:"appointment-date",name:"appointment-date","aria-describedby":"appointment-date-hint","aria-labelledby":"appointment-date-label",disabled:a.disabled,validationStatus:a.validationStatus})]}),e(p,{htmlFor:"otherInput",children:"Another unrelated input"}),e(U,{id:"otherInput",name:"otherInput",type:"tel"})]})},r=()=>e(t,{id:"birthdate",name:"birthdate"}),n=()=>e(t,{id:"birthdate",name:"birthdate",disabled:!0}),o={render:()=>e(t,{id:"birthdate",name:"birthdate",defaultValue:"1988-05-16"}),parameters:{happo:{waitForContent:"05/16/1988"}}},K=()=>e(t,{id:"birthdate",name:"birthdate",defaultValue:"1988-05-16",minDate:"2020-01-01"}),s=()=>e(t,{id:"birthdate",name:"birthdate",minDate:"2021-01-10",maxDate:"2021-01-20"}),d=()=>e(t,{id:"birthdate",name:"birthdate",minDate:"2020-01-01",maxDate:"2021-5-31"}),A=()=>e(t,{id:"birthdate",name:"birthdate",defaultValue:"2021-01-20",rangeDate:"2021-01-08"});A.parameters={happo:{waitForContent:"01/20/2021"}};const l=()=>e(t,{id:"birthdate",name:"birthdate",i18n:M});var c,h,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var b,D,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:'(): React.ReactElement => <DatePicker id="birthdate" name="birthdate" />',...(g=(D=r.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var f,y,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:'(): React.ReactElement => <DatePicker id="birthdate" name="birthdate" disabled />',...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,x,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (): React.ReactElement => <DatePicker id="birthdate" name="birthdate" defaultValue="1988-05-16" />,
  parameters: {
    happo: {
      waitForContent: '05/16/1988'
    }
  }
}`,...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var w,I,P;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:'(): React.ReactElement => <DatePicker id="birthdate" name="birthdate" minDate="2021-01-10" maxDate="2021-01-20" />',...(P=(I=s.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var R,F,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:'(): React.ReactElement => <DatePicker id="birthdate" name="birthdate" minDate="2020-01-01" maxDate="2021-5-31" />',...(W=(F=d.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var V,E,L;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:'(): React.ReactElement => <DatePicker id="birthdate" name="birthdate" i18n={sampleLocalization} />',...(L=(E=l.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const Q=["CompleteDatePicker","DefaultDatePicker","Disabled","WithDefaultValue","withDefaultInvalidValue","WithMinMaxInSameMonth","WithMinMax","withRangeDate","WithLocalizations"];export{i as CompleteDatePicker,r as DefaultDatePicker,n as Disabled,o as WithDefaultValue,l as WithLocalizations,d as WithMinMax,s as WithMinMaxInSameMonth,Q as __namedExportsOrder,J as default,K as withDefaultInvalidValue,A as withRangeDate};
