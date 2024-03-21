import{j as l}from"./jsx-runtime-CKrituN3.js";import{r as F}from"./index-CBqU2yxZ.js";import{L as e}from"./LanguageSelector-ClZ-2fQB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./Menu-Ca0dejC6.js";import"./NavList-CQFzsEUl.js";import"./Button-Thyd1SVx.js";const V={title:"Components/LanguageSelector",component:e,argTypes:{displayLang:{control:"string"},small:{control:"boolean"}},parameters:{docs:{description:{component:`
### USWDS 3.0 LanguageSelector component

Source: https://designsystem.digital.gov/components/language-selector/
`}}}},q=a=>{const[d,o]=F.useState(a.displayLang),L=[{label:"简体字",label_local:"Chinese - Simplified",attr:"zh",on_click:()=>{o("en")}},{label:"English",attr:"en",on_click:()=>{o("zh")}}];return l.jsx(e,{langs:L,displayLang:d})},t=q.bind({});t.args={displayLang:"en"};const v=a=>{const[d,o]=F.useState(a.displayLang),L=[{label:"العربية",label_local:"Arabic",attr:"ar",on_click:()=>{o("ar")}},{label:"简体字",label_local:"Chinese - Simplified",attr:"zh",on_click:()=>{o("zh")}},{label:"English",attr:"en",on_click:()=>{o("en")}}];return l.jsx(e,{langs:L,displayLang:d})},p=v.bind({});t.args={displayLang:"en"};const s="#test",m=[{label:"العربية",label_local:"Arabic",attr:"ar",on_click:s},{label:"简体字",label_local:"Chinese - Simplified",attr:"zh",on_click:s},{label:"English",attr:"en",on_click:s},{label:"Español",label_local:"Spanish",attr:"es",on_click:s},{label:"Français",label_local:"French",attr:"fr",on_click:s},{label:"Italiano",label_local:"Italian",attr:"it",on_click:s},{label:"Pусский",label_local:"Russian",attr:"ru",on_click:s}],n=()=>console.log("click"),b=[{label:"العربية",label_local:"Arabic",attr:"ar",on_click:n},{label:"简体字",label_local:"Chinese - Simplified",attr:"zh",on_click:n},{label:"English",attr:"en",on_click:n},{label:"Español",label_local:"Spanish",attr:"es",on_click:n},{label:"Français",label_local:"French",attr:"fr",on_click:n},{label:"Italiano",label_local:"Italian",attr:"it",on_click:n},{label:"Pусский",label_local:"Russian",attr:"ru",on_click:n}],r=a=>l.jsx(e,{langs:[m[2],m[3]],small:a.small}),g=a=>l.jsx(e,{langs:[b[2],b[3]],small:a.small}),c=a=>l.jsx(e,{langs:m,label:"Languages",small:a.small}),i=a=>l.jsx(e,{langs:b,label:"Languages",small:a.small}),u=a=>l.jsx(e,{langs:m,label:"Languages",small:a.small,className:"usa-button--unstyled"});r.__docgenInfo={description:"",methods:[],displayName:"TwoLanguagesAsALink",props:{small:{required:!1,tsType:{name:"boolean"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"TwoLanguagesAsAButton",props:{small:{required:!1,tsType:{name:"boolean"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"MoreThanTwoLanguagesAsALink",props:{small:{required:!1,tsType:{name:"boolean"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"MoreThanTwoLanguagesAsAButton",props:{small:{required:!1,tsType:{name:"boolean"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"CustomClass",props:{small:{required:!1,tsType:{name:"boolean"},description:""}}};var _,y,T;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [lang, setLang] = useState<string | undefined>(args.displayLang);
  const languagesDisplayProp: LanguageDefinition[] = [{
    label: '简体字',
    label_local: 'Chinese - Simplified',
    attr: 'zh',
    on_click: () => {
      setLang(\`en\`);
    }
  }, {
    label: 'English',
    attr: 'en',
    on_click: () => {
      setLang(\`zh\`);
    }
  }];
  return <LanguageSelector langs={languagesDisplayProp} displayLang={lang} />;
}`,...(T=(y=t.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var k,S,h;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [lang, setLang] = useState<string | undefined>(args.displayLang);
  const languagesDisplayProp: LanguageDefinition[] = [{
    label: 'العربية',
    label_local: 'Arabic',
    attr: 'ar',
    on_click: () => {
      setLang(\`ar\`);
    }
  }, {
    label: '简体字',
    label_local: 'Chinese - Simplified',
    attr: 'zh',
    on_click: () => {
      setLang(\`zh\`);
    }
  }, {
    label: 'English',
    attr: 'en',
    on_click: () => {
      setLang(\`en\`);
    }
  }];
  return <LanguageSelector langs={languagesDisplayProp} displayLang={lang} />;
}`,...(h=(S=p.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var A,f,w;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:"(argTypes: StorybookArguments): React.ReactElement => <LanguageSelector langs={[languagesLink[2], languagesLink[3]]} small={argTypes.small} />",...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var x,E,B;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:"(argTypes: StorybookArguments): React.ReactElement => <LanguageSelector langs={[languagesButton[2], languagesButton[3]]} small={argTypes.small} />",...(B=(E=g.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var C,D,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:'(argTypes: StorybookArguments): React.ReactElement => <LanguageSelector langs={languagesLink} label="Languages" small={argTypes.small} />',...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var P,z,j;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:'(argTypes: StorybookArguments): React.ReactElement => <LanguageSelector langs={languagesButton} label="Languages" small={argTypes.small} />',...(j=(z=i.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var I,M,N;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:'(argTypes: StorybookArguments): React.ReactElement => <LanguageSelector langs={languagesLink} label="Languages" small={argTypes.small} className="usa-button--unstyled" />',...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const X=["LanguagesDisplayPropSandbox","LanguagesDisplayMoreThanTwoLanguagesPropSandbox","TwoLanguagesAsALink","TwoLanguagesAsAButton","MoreThanTwoLanguagesAsALink","MoreThanTwoLanguagesAsAButton","CustomClass"];export{u as CustomClass,p as LanguagesDisplayMoreThanTwoLanguagesPropSandbox,t as LanguagesDisplayPropSandbox,i as MoreThanTwoLanguagesAsAButton,c as MoreThanTwoLanguagesAsALink,g as TwoLanguagesAsAButton,r as TwoLanguagesAsALink,X as __namedExportsOrder,V as default};
