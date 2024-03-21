import{j as e}from"./jsx-runtime-CKrituN3.js";import{F as t}from"./Fieldset-B_nbNNxJ.js";import{L as d,R as S}from"./Label-CfwuEpQt.js";import{T as u}from"./TextInput-DL9q-H81.js";import{C as a}from"./Checkbox-Cca3xyl7.js";import{R as i}from"./Radio-B1G-YNcg.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const N={title:"Components/Form elements/Fieldset",component:t,parameters:{docs:{description:{component:`
### USWDS 3.0 Fieldset component

Source: https://designsystem.digital.gov/components/form-controls/
`}}}},s=()=>e.jsxs(t,{legend:"Name",legendStyle:"large",children:[e.jsx(d,{htmlFor:"title",hint:" (optional)",children:"Title"}),e.jsx(u,{id:"title",name:"title",type:"text",inputSize:"small"}),e.jsx(d,{htmlFor:"first-name",children:"First name"}),e.jsx(u,{id:"first-name",name:"first-name",type:"text"}),e.jsx(d,{htmlFor:"middle-name",hint:" (optional)",children:"Middle name"}),e.jsx(u,{id:"middle-name",name:"middle-name",type:"text"}),e.jsx(d,{htmlFor:"last-name",children:"Last name"}),e.jsx(u,{id:"last-name",name:"last-name",type:"text"})]}),n=()=>e.jsxs(t,{legend:"Historical figures 1",legendStyle:"srOnly",children:[e.jsx(a,{id:"truth",name:"historical-figures-1",value:"truth",defaultChecked:!0,label:"Sojourner Truth"}),e.jsx(a,{id:"douglass",name:"historical-figures-1",value:"douglass",label:"Frederick Douglass"}),e.jsx(a,{id:"washington",name:"historical-figures-1",value:"washington",label:"Booker T. Washington"}),e.jsx(a,{id:"carver",name:"historical-figures-1",label:"George Washington Carver",disabled:!0})]}),l=()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Required fields are marked with an asterisk (",e.jsx(S,{}),")."]}),e.jsxs(t,{legend:"Historical figures 1",requiredMarker:!0,children:[e.jsx(a,{required:!0,id:"truth",name:"historical-figures-1",value:"truth",defaultChecked:!0,label:"Sojourner Truth"}),e.jsx(a,{id:"douglass",name:"historical-figures-1",value:"douglass",label:"Frederick Douglass"}),e.jsx(a,{id:"washington",name:"historical-figures-1",value:"washington",label:"Booker T. Washington"}),e.jsx(a,{id:"carver",name:"historical-figures-1",label:"George Washington Carver",disabled:!0})]})]}),r=()=>e.jsxs(t,{legend:"Historical figures 2",legendStyle:"srOnly",children:[e.jsx(i,{id:"stanton",name:"historical-figures-2",defaultChecked:!0,label:"Elizabeth Cady Stanton",value:"stanton"}),e.jsx(i,{id:"anthony",name:"historical-figures-2",label:"Susan B. Anthony",value:"anthony"}),e.jsx(i,{id:"tubman",name:"historical-figures-2",label:"Harriet Tubman",value:"tubman"}),e.jsx(i,{id:"invalid",name:"historical-figures-2",label:"Invalid option",value:"invalid",disabled:!0})]}),o=()=>e.jsxs(t,{legend:"Historical figures 2",children:[e.jsx(i,{id:"stanton",name:"historical-figures-2",defaultChecked:!0,label:"Elizabeth Cady Stanton",value:"stanton"}),e.jsx(i,{id:"anthony",name:"historical-figures-2",label:"Susan B. Anthony",value:"anthony"}),e.jsx(i,{id:"tubman",name:"historical-figures-2",label:"Harriet Tubman",value:"tubman"}),e.jsx(i,{id:"invalid",name:"historical-figures-2",label:"Invalid option",value:"invalid",disabled:!0})]});s.__docgenInfo={description:"",methods:[],displayName:"NameFieldset"};n.__docgenInfo={description:"",methods:[],displayName:"CheckboxFieldset"};l.__docgenInfo={description:"",methods:[],displayName:"CheckboxFieldsetWithDefaultLegend"};r.__docgenInfo={description:"",methods:[],displayName:"RadioFieldset"};o.__docgenInfo={description:"",methods:[],displayName:"RadioFieldsetWithDefaultLegend"};var m,c,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(): React.ReactElement => <Fieldset legend="Name" legendStyle="large">
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
  </Fieldset>`,...(h=(c=s.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var g,b,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(): React.ReactElement => <Fieldset legend="Historical figures 1" legendStyle="srOnly">
    <Checkbox id="truth" name="historical-figures-1" value="truth" defaultChecked label="Sojourner Truth" />
    <Checkbox id="douglass" name="historical-figures-1" value="douglass" label="Frederick Douglass" />
    <Checkbox id="washington" name="historical-figures-1" value="washington" label="Booker T. Washington" />
    <Checkbox id="carver" name="historical-figures-1" label="George Washington Carver" disabled />
  </Fieldset>`,...(p=(b=n.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var f,x,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(): React.ReactElement => <>
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
  </>`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var F,y,k;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`(): React.ReactElement => <Fieldset legend="Historical figures 2" legendStyle="srOnly">
    <Radio id="stanton" name="historical-figures-2" defaultChecked label="Elizabeth Cady Stanton" value="stanton" />
    <Radio id="anthony" name="historical-figures-2" label="Susan B. Anthony" value="anthony" />
    <Radio id="tubman" name="historical-figures-2" label="Harriet Tubman" value="tubman" />
    <Radio id="invalid" name="historical-figures-2" label="Invalid option" value="invalid" disabled />
  </Fieldset>`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var j,C,R;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`(): React.ReactElement => <Fieldset legend="Historical figures 2">
    <Radio id="stanton" name="historical-figures-2" defaultChecked label="Elizabeth Cady Stanton" value="stanton" />
    <Radio id="anthony" name="historical-figures-2" label="Susan B. Anthony" value="anthony" />
    <Radio id="tubman" name="historical-figures-2" label="Harriet Tubman" value="tubman" />
    <Radio id="invalid" name="historical-figures-2" label="Invalid option" value="invalid" disabled />
  </Fieldset>`,...(R=(C=o.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};const q=["NameFieldset","CheckboxFieldset","CheckboxFieldsetWithDefaultLegend","RadioFieldset","RadioFieldsetWithDefaultLegend"];export{n as CheckboxFieldset,l as CheckboxFieldsetWithDefaultLegend,s as NameFieldset,r as RadioFieldset,o as RadioFieldsetWithDefaultLegend,q as __namedExportsOrder,N as default};
