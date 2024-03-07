import{j as e,a as n}from"./jsx-runtime-2xDJh5tt.js";import{D as t,a as b}from"./DateInputGroup-BLqvFqO8.js";import{F as L}from"./Fieldset-DLL_ZIrk.js";import{L as y}from"./Label-RQBQRD89.js";import{S as x}from"./Select-CZ6J1Uk9.js";import{F as f}from"./FormGroup-DUBGswQ6.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./TextInput-84m5h5vG.js";const Y={title:"Components/Date input",component:t,parameters:{docs:{description:{component:`
### USWDS 3.0 DateInput component

Source: https://designsystem.digital.gov/components/text-input/
`}}}},a=()=>e(t,{id:"testDateInput",name:"testName",label:"Month",unit:"month",maxLength:2,minLength:2}),o=()=>e(t,{id:"testDateInput",name:"testName",label:"Day",unit:"day",maxLength:2,minLength:1}),r=()=>e(t,{id:"testDateInput",name:"testName",label:"Year",unit:"year",maxLength:4,minLength:4}),i=()=>n(L,{legend:"Date of birth",children:[e("span",{className:"usa-hint",id:"dateOfBirthHint",children:"For example: April 28 1986"}),n(b,{children:[n(f,{className:"usa-form-group--month usa-form-group--select",children:[e(y,{htmlFor:"input-select",children:"Month"}),n(x,{id:"testDateInput",name:"testDateInput",children:[e("option",{children:"- Select -"}),e("option",{value:"1",children:"01 - January"}),e("option",{value:"2",children:"02 - February"}),e("option",{value:"3",children:"03 - March"}),e("option",{value:"4",children:"04 - April"}),e("option",{value:"5",children:"05 - May"}),e("option",{value:"6",children:"06 - June"}),e("option",{value:"7",children:"07 - July"}),e("option",{value:"8",children:"08 - August"}),e("option",{value:"9",children:"09 - September"}),e("option",{value:"10",children:"10 - October"}),e("option",{value:"11",children:"11 - November"}),e("option",{value:"12",children:"12 - December"})]})]}),e(t,{id:"testDateInput",name:"testName",label:"Day",unit:"day",maxLength:2,minLength:2}),e(t,{id:"testDateInput",name:"testName",label:"Year",unit:"year",maxLength:4,minLength:4})]})]});var p,s,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:'(): React.ReactElement => <DateInput id="testDateInput" name="testName" label="Month" unit="month" maxLength={2} minLength={2} />',...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var u,l,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:'(): React.ReactElement => <DateInput id="testDateInput" name="testName" label="Day" unit="day" maxLength={2} minLength={1} />',...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,h,D;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:'(): React.ReactElement => <DateInput id="testDateInput" name="testName" label="Year" unit="year" maxLength={4} minLength={4} />',...(D=(h=r.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var g,I,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(): React.ReactElement => <Fieldset legend="Date of birth">
    <span className="usa-hint" id="dateOfBirthHint">
      For example: April 28 1986
    </span>
    <DateInputGroup>
      <FormGroup className="usa-form-group--month usa-form-group--select">
        <Label htmlFor="input-select">Month</Label>
        <Select id="testDateInput" name="testDateInput">
          <option>- Select -</option>
          <option value="1">01 - January</option>
          <option value="2">02 - February</option>
          <option value="3">03 - March</option>
          <option value="4">04 - April</option>
          <option value="5">05 - May</option>
          <option value="6">06 - June</option>
          <option value="7">07 - July</option>
          <option value="8">08 - August</option>
          <option value="9">09 - September</option>
          <option value="10">10 - October</option>
          <option value="11">11 - November</option>
          <option value="12">12 - December</option>
        </Select>
      </FormGroup>
      <DateInput id="testDateInput" name="testName" label="Day" unit="day" maxLength={2} minLength={2} />
      <DateInput id="testDateInput" name="testName" label="Year" unit="year" maxLength={4} minLength={4} />
    </DateInputGroup>
  </Fieldset>`,...(v=(I=i.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};const B=["MonthDateInput","DayDateInput","YearDateInput","DateOfBirthExample"];export{i as DateOfBirthExample,o as DayDateInput,a as MonthDateInput,r as YearDateInput,B as __namedExportsOrder,Y as default};
