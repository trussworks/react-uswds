import{a as t,j as e,F as L}from"./jsx-runtime-2xDJh5tt.js";import{F as l}from"./Fieldset-CtQeKIio.js";import{L as n,R as W}from"./Label-RQBQRD89.js";import{T as r}from"./TextInput-gKiZgmFb.js";import{C as a}from"./Checkbox-pN08irY2.js";import{R as i}from"./Radio--la2QrPn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const M={title:"Components/Form elements/Fieldset",component:l,parameters:{docs:{description:{component:`
### USWDS 3.0 Fieldset component

Source: https://designsystem.digital.gov/components/form-controls/
`}}}},s=()=>t(l,{legend:"Name",legendStyle:"large",children:[e(n,{htmlFor:"title",hint:" (optional)",children:"Title"}),e(r,{id:"title",name:"title",type:"text",inputSize:"small"}),e(n,{htmlFor:"first-name",children:"First name"}),e(r,{id:"first-name",name:"first-name",type:"text"}),e(n,{htmlFor:"middle-name",hint:" (optional)",children:"Middle name"}),e(r,{id:"middle-name",name:"middle-name",type:"text"}),e(n,{htmlFor:"last-name",children:"Last name"}),e(r,{id:"last-name",name:"last-name",type:"text"})]}),o=()=>t(l,{legend:"Historical figures 1",legendStyle:"srOnly",children:[e(a,{id:"truth",name:"historical-figures-1",value:"truth",defaultChecked:!0,label:"Sojourner Truth"}),e(a,{id:"douglass",name:"historical-figures-1",value:"douglass",label:"Frederick Douglass"}),e(a,{id:"washington",name:"historical-figures-1",value:"washington",label:"Booker T. Washington"}),e(a,{id:"carver",name:"historical-figures-1",label:"George Washington Carver",disabled:!0})]}),d=()=>t(L,{children:[t("p",{children:["Required fields are marked with an asterisk (",e(W,{}),")."]}),t(l,{legend:"Historical figures 1",requiredMarker:!0,children:[e(a,{required:!0,id:"truth",name:"historical-figures-1",value:"truth",defaultChecked:!0,label:"Sojourner Truth"}),e(a,{id:"douglass",name:"historical-figures-1",value:"douglass",label:"Frederick Douglass"}),e(a,{id:"washington",name:"historical-figures-1",value:"washington",label:"Booker T. Washington"}),e(a,{id:"carver",name:"historical-figures-1",label:"George Washington Carver",disabled:!0})]})]}),u=()=>t(l,{legend:"Historical figures 2",legendStyle:"srOnly",children:[e(i,{id:"stanton",name:"historical-figures-2",defaultChecked:!0,label:"Elizabeth Cady Stanton",value:"stanton"}),e(i,{id:"anthony",name:"historical-figures-2",label:"Susan B. Anthony",value:"anthony"}),e(i,{id:"tubman",name:"historical-figures-2",label:"Harriet Tubman",value:"tubman"}),e(i,{id:"invalid",name:"historical-figures-2",label:"Invalid option",value:"invalid",disabled:!0})]}),m=()=>t(l,{legend:"Historical figures 2",children:[e(i,{id:"stanton",name:"historical-figures-2",defaultChecked:!0,label:"Elizabeth Cady Stanton",value:"stanton"}),e(i,{id:"anthony",name:"historical-figures-2",label:"Susan B. Anthony",value:"anthony"}),e(i,{id:"tubman",name:"historical-figures-2",label:"Harriet Tubman",value:"tubman"}),e(i,{id:"invalid",name:"historical-figures-2",label:"Invalid option",value:"invalid",disabled:!0})]});var c,h,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`(): React.ReactElement => <Fieldset legend="Name" legendStyle="large">
    <Label htmlFor="title" hint=" (optional)">
      Title
    </Label>
    <TextInput id="title" name="title" type="text" inputSize="small" />
    <Label htmlFor="first-name">First name</Label>
    <TextInput id="first-name" name="first-name" type="text" />
    <Label htmlFor="middle-name" hint=" (optional)">
      Middle name
    </Label>
    <TextInput id="middle-name" name="middle-name" type="text" />
    <Label htmlFor="last-name">Last name</Label>
    <TextInput id="last-name" name="last-name" type="text" />
  </Fieldset>`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,f,p;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`(): React.ReactElement => <Fieldset legend="Historical figures 1" legendStyle="srOnly">
    <Checkbox id="truth" name="historical-figures-1" value="truth" defaultChecked label="Sojourner Truth" />
    <Checkbox id="douglass" name="historical-figures-1" value="douglass" label="Frederick Douglass" />
    <Checkbox id="washington" name="historical-figures-1" value="washington" label="Booker T. Washington" />
    <Checkbox id="carver" name="historical-figures-1" label="George Washington Carver" disabled />
  </Fieldset>`,...(p=(f=o.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var v,F,k;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`(): React.ReactElement => <>
    <p>
      Required fields are marked with an asterisk (<RequiredMarker />
      ).
    </p>
    <Fieldset legend="Historical figures 1" requiredMarker>
      <Checkbox required id="truth" name="historical-figures-1" value="truth" defaultChecked label="Sojourner Truth" />
      <Checkbox id="douglass" name="historical-figures-1" value="douglass" label="Frederick Douglass" />
      <Checkbox id="washington" name="historical-figures-1" value="washington" label="Booker T. Washington" />
      <Checkbox id="carver" name="historical-figures-1" label="George Washington Carver" disabled />
    </Fieldset>
  </>`,...(k=(F=d.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var y,C,x;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`(): React.ReactElement => <Fieldset legend="Historical figures 2" legendStyle="srOnly">
    <Radio id="stanton" name="historical-figures-2" defaultChecked label="Elizabeth Cady Stanton" value="stanton" />
    <Radio id="anthony" name="historical-figures-2" label="Susan B. Anthony" value="anthony" />
    <Radio id="tubman" name="historical-figures-2" label="Harriet Tubman" value="tubman" />
    <Radio id="invalid" name="historical-figures-2" label="Invalid option" value="invalid" disabled />
  </Fieldset>`,...(x=(C=u.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var R,S,T;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`(): React.ReactElement => <Fieldset legend="Historical figures 2">
    <Radio id="stanton" name="historical-figures-2" defaultChecked label="Elizabeth Cady Stanton" value="stanton" />
    <Radio id="anthony" name="historical-figures-2" label="Susan B. Anthony" value="anthony" />
    <Radio id="tubman" name="historical-figures-2" label="Harriet Tubman" value="tubman" />
    <Radio id="invalid" name="historical-figures-2" label="Invalid option" value="invalid" disabled />
  </Fieldset>`,...(T=(S=m.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const O=["NameFieldset","CheckboxFieldset","CheckboxFieldsetWithDefaultLegend","RadioFieldset","RadioFieldsetWithDefaultLegend"];export{o as CheckboxFieldset,d as CheckboxFieldsetWithDefaultLegend,s as NameFieldset,u as RadioFieldset,m as RadioFieldsetWithDefaultLegend,O as __namedExportsOrder,M as default};
