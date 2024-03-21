import{j as e}from"./jsx-runtime-CKrituN3.js";import{D as t,a as I}from"./DateInputGroup-DoGUfozA.js";import{F as y}from"./Fieldset-B_nbNNxJ.js";import{L as v}from"./Label-CfwuEpQt.js";import{S as j}from"./Select-B4s8wwqZ.js";import{F as b}from"./FormGroup-9HSr8Yaw.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./TextInput-DL9q-H81.js";const Y={title:"Components/Date input",component:t,parameters:{docs:{description:{component:`
### USWDS 3.0 DateInput component

Source: https://designsystem.digital.gov/components/text-input/
`}}}},n=()=>e.jsx(t,{id:"testDateInput",name:"testName",label:"Month",unit:"month",maxLength:2,minLength:2}),a=()=>e.jsx(t,{id:"testDateInput",name:"testName",label:"Day",unit:"day",maxLength:2,minLength:1}),o=()=>e.jsx(t,{id:"testDateInput",name:"testName",label:"Year",unit:"year",maxLength:4,minLength:4}),r=()=>e.jsxs(y,{legend:"Date of birth",children:[e.jsx("span",{className:"usa-hint",id:"dateOfBirthHint",children:"For example: April 28 1986"}),e.jsxs(I,{children:[e.jsxs(b,{className:"usa-form-group--month usa-form-group--select",children:[e.jsx(v,{htmlFor:"input-select",children:"Month"}),e.jsxs(j,{id:"testDateInput",name:"testDateInput",children:[e.jsx("option",{children:"- Select -"}),e.jsx("option",{value:"1",children:"01 - January"}),e.jsx("option",{value:"2",children:"02 - February"}),e.jsx("option",{value:"3",children:"03 - March"}),e.jsx("option",{value:"4",children:"04 - April"}),e.jsx("option",{value:"5",children:"05 - May"}),e.jsx("option",{value:"6",children:"06 - June"}),e.jsx("option",{value:"7",children:"07 - July"}),e.jsx("option",{value:"8",children:"08 - August"}),e.jsx("option",{value:"9",children:"09 - September"}),e.jsx("option",{value:"10",children:"10 - October"}),e.jsx("option",{value:"11",children:"11 - November"}),e.jsx("option",{value:"12",children:"12 - December"})]})]}),e.jsx(t,{id:"testDateInput",name:"testName",label:"Day",unit:"day",maxLength:2,minLength:2}),e.jsx(t,{id:"testDateInput",name:"testName",label:"Year",unit:"year",maxLength:4,minLength:4})]})]});n.__docgenInfo={description:"",methods:[],displayName:"MonthDateInput"};a.__docgenInfo={description:"",methods:[],displayName:"DayDateInput"};o.__docgenInfo={description:"",methods:[],displayName:"YearDateInput"};r.__docgenInfo={description:"",methods:[],displayName:"DateOfBirthExample"};var s,i,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:'(): React.ReactElement => <DateInput id="testDateInput" name="testName" label="Month" unit="month" maxLength={2} minLength={2} />',...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,u,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:'(): React.ReactElement => <DateInput id="testDateInput" name="testName" label="Day" unit="day" maxLength={2} minLength={1} />',...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,d,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:'(): React.ReactElement => <DateInput id="testDateInput" name="testName" label="Year" unit="year" maxLength={4} minLength={4} />',...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var D,x,g;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`(): React.ReactElement => <Fieldset legend="Date of birth">
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
  </Fieldset>`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const A=["MonthDateInput","DayDateInput","YearDateInput","DateOfBirthExample"];export{r as DateOfBirthExample,a as DayDateInput,n as MonthDateInput,o as YearDateInput,A as __namedExportsOrder,Y as default};
