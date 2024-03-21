import{j as r}from"./jsx-runtime-CKrituN3.js";import{a as i,F as f}from"./FooterNav-D2ex_-yf.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./NavList-CQFzsEUl.js";const N={title:"Components/Footer/FooterNav",component:i,parameters:{docs:{description:{component:`
Display single list of nav items, or grouped nav items in an extended nav. Used in USWDS 3.0 Footer component.

Source: https://designsystem.digital.gov/components/footer
`}}}},e=()=>r.jsx(i,{"aria-label":"Footer navigation",size:"slim",links:Array(4).fill(r.jsx("a",{className:"usa-footer__primary-link",href:"#",children:"PrimaryLink"}))}),a=()=>r.jsx(i,{"aria-label":"Footer navigation",size:"medium",links:Array(4).fill(r.jsx("a",{className:"usa-footer__primary-link",href:"#",children:"PrimaryLink"}))}),o={render:()=>r.jsx(f,{size:"big",primary:r.jsx(i,{"aria-label":"Footer navigation",size:"big",links:[["Topic",...Array(3).fill(r.jsx("a",{href:"#",children:"Secondary link"}))],["Topic",r.jsx("a",{href:"#",children:"Secondary link that is pretty long"},"2"),...Array(2).fill(r.jsx("a",{href:"#",children:"Secondary link"}))],["Topic",...Array(3).fill(r.jsx("a",{href:"#",children:"Secondary link"}))]]}),secondary:r.jsx(r.Fragment,{})}),parameters:{happo:{waitForContent:"Secondary link that is pretty long"}}};e.__docgenInfo={description:"",methods:[],displayName:"SlimFooterNav"};a.__docgenInfo={description:"",methods:[],displayName:"MediumFooterNav"};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(): React.ReactElement => <FooterNav aria-label="Footer navigation" size="slim" links={Array(4).fill(<a className="usa-footer__primary-link" href="#">
        PrimaryLink
      </a>)} />`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`(): React.ReactElement => <FooterNav aria-label="Footer navigation" size="medium" links={Array(4).fill(<a className="usa-footer__primary-link" href="#">
        PrimaryLink
      </a>)} />`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (): React.ReactElement => <Footer size="big" primary={<FooterNav aria-label="Footer navigation" size="big" links={[['Topic', ...Array(3).fill(<a href="#">Secondary link</a>)], ['Topic', <a key="2" href="#">
                Secondary link that is pretty long
              </a>, ...Array(2).fill(<a href="#">Secondary link</a>)], ['Topic', ...Array(3).fill(<a href="#">Secondary link</a>)]]} />} secondary={<></>} />,
  parameters: {
    happo: {
      waitForContent: 'Secondary link that is pretty long'
    }
  }
}`,...(y=(d=o.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const S=["SlimFooterNav","MediumFooterNav","BigFooterNav"];export{o as BigFooterNav,a as MediumFooterNav,e as SlimFooterNav,S as __namedExportsOrder,N as default};
