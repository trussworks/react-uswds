import{j as e}from"./jsx-runtime-CKrituN3.js";import{S as a,a as t}from"./StepIndicatorStep-DiLAv5rO.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const N={title:"Components/Step Indicator",component:a,parameters:{docs:{description:{component:`
### USWDS 3.0 Step Indicator component

Source: https://designsystem.digital.gov/components/step-indicator/

Updates users on their progress through a multi-step process.
    `}}},argTypes:{stepText:{control:"text"},ofText:{control:"text"}},args:{stepText:"Step",ofText:"of"}},o=s=>e.jsxs(a,{headingLevel:"h4",ofText:s.ofText,stepText:s.stepText,children:[e.jsx(t,{label:"Personal information",status:"complete"}),e.jsx(t,{label:"Household status",status:"complete"}),e.jsx(t,{label:"Supporting documents",status:"current"}),e.jsx(t,{label:"Signature"}),e.jsx(t,{label:"Review and submit"})]}),r=s=>e.jsxs(a,{showLabels:!1,headingLevel:"h4",ofText:s.ofText,stepText:s.stepText,children:[e.jsx(t,{label:"Personal information",status:"complete"}),e.jsx(t,{label:"Household status",status:"complete"}),e.jsx(t,{label:"Supporting documents",status:"current"}),e.jsx(t,{label:"Signature"}),e.jsx(t,{label:"Review and submit"})]}),n=s=>e.jsxs(a,{centered:!0,headingLevel:"h4",ofText:s.ofText,stepText:s.stepText,children:[e.jsx(t,{label:"Personal information",status:"complete"}),e.jsx(t,{label:"Household status",status:"complete"}),e.jsx(t,{label:"Supporting documents",status:"current"}),e.jsx(t,{label:"Signature"}),e.jsx(t,{label:"Review and submit"})]}),p=s=>e.jsxs(a,{counters:"default",headingLevel:"h4",ofText:s.ofText,stepText:s.stepText,children:[e.jsx(t,{label:"Personal information",status:"complete"}),e.jsx(t,{label:"Household status",status:"complete"}),e.jsx(t,{label:"Supporting documents",status:"current"}),e.jsx(t,{label:"Signature"}),e.jsx(t,{label:"Review and submit"})]}),i=s=>e.jsxs(a,{counters:"small",headingLevel:"h4",ofText:s.ofText,stepText:s.stepText,children:[e.jsx(t,{label:"Personal information",status:"complete"}),e.jsx(t,{label:"Household status",status:"complete"}),e.jsx(t,{label:"Supporting documents",status:"current"}),e.jsx(t,{label:"Signature"}),e.jsx(t,{label:"Review and submit"})]}),l=s=>e.jsxs(a,{headingLevel:"h2",ofText:s.ofText,stepText:s.stepText,children:[e.jsx(t,{label:"Personal information",status:"complete"}),e.jsx(t,{label:"Household status",status:"complete"}),e.jsx(t,{label:"Supporting documents",status:"current"}),e.jsx(t,{label:"Signature"}),e.jsx(t,{label:"Review and submit"})]});o.__docgenInfo={description:"",methods:[],displayName:"DefaultStepIndicator",props:{stepText:{required:!0,tsType:{name:"string"},description:""},ofText:{required:!0,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"NoLabels",props:{stepText:{required:!0,tsType:{name:"string"},description:""},ofText:{required:!0,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"Centered",props:{stepText:{required:!0,tsType:{name:"string"},description:""},ofText:{required:!0,tsType:{name:"string"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"Counters",props:{stepText:{required:!0,tsType:{name:"string"},description:""},ofText:{required:!0,tsType:{name:"string"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"SmallCounters",props:{stepText:{required:!0,tsType:{name:"string"},description:""},ofText:{required:!0,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"DifferentHeadingLevel",props:{stepText:{required:!0,tsType:{name:"string"},description:""},ofText:{required:!0,tsType:{name:"string"},description:""}}};var c,u,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`(args: StorybookArguments): React.ReactElement => <StepIndicator headingLevel="h4" ofText={args.ofText} stepText={args.stepText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,S,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(args: StorybookArguments): React.ReactElement => <StepIndicator showLabels={false} headingLevel="h4" ofText={args.ofText} stepText={args.stepText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var g,b,T;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(args: StorybookArguments): React.ReactElement => <StepIndicator centered headingLevel="h4" ofText={args.ofText} stepText={args.stepText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var f,I,h;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`(args: StorybookArguments): React.ReactElement => <StepIndicator counters="default" headingLevel="h4" ofText={args.ofText} stepText={args.stepText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>`,...(h=(I=p.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var j,v,y;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`(args: StorybookArguments): React.ReactElement => <StepIndicator counters="small" headingLevel="h4" ofText={args.ofText} stepText={args.stepText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var R,L,H;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`(args: StorybookArguments): React.ReactElement => <StepIndicator headingLevel="h2" ofText={args.ofText} stepText={args.stepText}>
    <StepIndicatorStep label="Personal information" status="complete" />
    <StepIndicatorStep label="Household status" status="complete" />
    <StepIndicatorStep label="Supporting documents" status="current" />
    <StepIndicatorStep label="Signature" />
    <StepIndicatorStep label="Review and submit" />
  </StepIndicator>`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};const E=["DefaultStepIndicator","NoLabels","Centered","Counters","SmallCounters","DifferentHeadingLevel"];export{n as Centered,p as Counters,o as DefaultStepIndicator,l as DifferentHeadingLevel,r as NoLabels,i as SmallCounters,E as __namedExportsOrder,N as default};
