import{j as s}from"./jsx-runtime-2xDJh5tt.js";import{r as v}from"./index-CBqU2yxZ.js";import{L as e}from"./LanguageSelector-CZxdZ56M.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./Menu-CliWZgj3.js";import"./NavList-VQCA2U0H.js";import"./Button-Dw-sXN3h.js";const V={title:"Components/LanguageSelector",component:e,argTypes:{displayLang:{control:"string"},small:{control:"boolean"}},parameters:{docs:{description:{component:`
### USWDS 3.0 LanguageSelector component

Source: https://designsystem.digital.gov/components/language-selector/
`}}}},N=a=>{const[b,o]=v.useState(a.displayLang);return s(e,{langs:[{label:"简体字",label_local:"Chinese - Simplified",attr:"zh",on_click:()=>{o("en")}},{label:"English",attr:"en",on_click:()=>{o("zh")}}],displayLang:b})},t=N.bind({});t.args={displayLang:"en"};const O=a=>{const[b,o]=v.useState(a.displayLang);return s(e,{langs:[{label:"العربية",label_local:"Arabic",attr:"ar",on_click:()=>{o("ar")}},{label:"简体字",label_local:"Chinese - Simplified",attr:"zh",on_click:()=>{o("zh")}},{label:"English",attr:"en",on_click:()=>{o("en")}}],displayLang:b})},r=O.bind({});t.args={displayLang:"en"};const l="#test",m=[{label:"العربية",label_local:"Arabic",attr:"ar",on_click:l},{label:"简体字",label_local:"Chinese - Simplified",attr:"zh",on_click:l},{label:"English",attr:"en",on_click:l},{label:"Español",label_local:"Spanish",attr:"es",on_click:l},{label:"Français",label_local:"French",attr:"fr",on_click:l},{label:"Italiano",label_local:"Italian",attr:"it",on_click:l},{label:"Pусский",label_local:"Russian",attr:"ru",on_click:l}],n=()=>console.log("click"),L=[{label:"العربية",label_local:"Arabic",attr:"ar",on_click:n},{label:"简体字",label_local:"Chinese - Simplified",attr:"zh",on_click:n},{label:"English",attr:"en",on_click:n},{label:"Español",label_local:"Spanish",attr:"es",on_click:n},{label:"Français",label_local:"French",attr:"fr",on_click:n},{label:"Italiano",label_local:"Italian",attr:"it",on_click:n},{label:"Pусский",label_local:"Russian",attr:"ru",on_click:n}],g=a=>s(e,{langs:[m[2],m[3]],small:a.small}),c=a=>s(e,{langs:[L[2],L[3]],small:a.small}),i=a=>s(e,{langs:m,label:"Languages",small:a.small}),u=a=>s(e,{langs:L,label:"Languages",small:a.small}),p=a=>s(e,{langs:m,label:"Languages",small:a.small,className:"usa-button--unstyled"});var d,_,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
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
}`,...(y=(_=t.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var S,k,h;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
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
}`,...(h=(k=r.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var T,A,f;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:"(argTypes: StorybookArguments): React.ReactElement => <LanguageSelector langs={[languagesLink[2], languagesLink[3]]} small={argTypes.small} />",...(f=(A=g.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var D,E,P;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:"(argTypes: StorybookArguments): React.ReactElement => <LanguageSelector langs={[languagesButton[2], languagesButton[3]]} small={argTypes.small} />",...(P=(E=c.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var B,w,R;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:'(argTypes: StorybookArguments): React.ReactElement => <LanguageSelector langs={languagesLink} label="Languages" small={argTypes.small} />',...(R=(w=i.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var C,z,x;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:'(argTypes: StorybookArguments): React.ReactElement => <LanguageSelector langs={languagesButton} label="Languages" small={argTypes.small} />',...(x=(z=u.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var M,F,I;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:'(argTypes: StorybookArguments): React.ReactElement => <LanguageSelector langs={languagesLink} label="Languages" small={argTypes.small} className="usa-button--unstyled" />',...(I=(F=p.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const X=["LanguagesDisplayPropSandbox","LanguagesDisplayMoreThanTwoLanguagesPropSandbox","TwoLanguagesAsALink","TwoLanguagesAsAButton","MoreThanTwoLanguagesAsALink","MoreThanTwoLanguagesAsAButton","CustomClass"];export{p as CustomClass,r as LanguagesDisplayMoreThanTwoLanguagesPropSandbox,t as LanguagesDisplayPropSandbox,u as MoreThanTwoLanguagesAsAButton,i as MoreThanTwoLanguagesAsALink,c as TwoLanguagesAsAButton,g as TwoLanguagesAsALink,X as __namedExportsOrder,V as default};
