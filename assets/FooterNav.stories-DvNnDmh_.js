import{j as r,F as f}from"./jsx-runtime-2xDJh5tt.js";import{a as i,F}from"./FooterNav-DOkZsnBk.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./NavList-VQCA2U0H.js";const N={title:"Components/Footer/FooterNav",component:i,parameters:{docs:{description:{component:`
Display single list of nav items, or grouped nav items in an extended nav. Used in USWDS 3.0 Footer component.

Source: https://designsystem.digital.gov/components/footer
`}}}},a=()=>r(i,{"aria-label":"Footer navigation",size:"slim",links:Array(4).fill(r("a",{className:"usa-footer__primary-link",href:"#",children:"PrimaryLink"}))}),e=()=>r(i,{"aria-label":"Footer navigation",size:"medium",links:Array(4).fill(r("a",{className:"usa-footer__primary-link",href:"#",children:"PrimaryLink"}))}),o={render:()=>r(F,{size:"big",primary:r(i,{"aria-label":"Footer navigation",size:"big",links:[["Topic",...Array(3).fill(r("a",{href:"#",children:"Secondary link"}))],["Topic",r("a",{href:"#",children:"Secondary link that is pretty long"},"2"),...Array(2).fill(r("a",{href:"#",children:"Secondary link"}))],["Topic",...Array(3).fill(r("a",{href:"#",children:"Secondary link"}))]]}),secondary:r(f,{})}),parameters:{happo:{waitForContent:"Secondary link that is pretty long"}}};var t,n,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`(): React.ReactElement => <FooterNav aria-label="Footer navigation" size="slim" links={Array(4).fill(<a className="usa-footer__primary-link" href="#">
        PrimaryLink
      </a>)} />`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,c,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`(): React.ReactElement => <FooterNav aria-label="Footer navigation" size="medium" links={Array(4).fill(<a className="usa-footer__primary-link" href="#">
        PrimaryLink
      </a>)} />`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (): React.ReactElement => <Footer size="big" primary={<FooterNav aria-label="Footer navigation" size="big" links={[['Topic', ...Array(3).fill(<a href="#">Secondary link</a>)], ['Topic', <a key="2" href="#">
                Secondary link that is pretty long
              </a>, ...Array(2).fill(<a href="#">Secondary link</a>)], ['Topic', ...Array(3).fill(<a href="#">Secondary link</a>)]]} />} secondary={<></>} />,
  parameters: {
    happo: {
      waitForContent: 'Secondary link that is pretty long'
    }
  }
}`,...(y=(d=o.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const _=["SlimFooterNav","MediumFooterNav","BigFooterNav"];export{o as BigFooterNav,e as MediumFooterNav,a as SlimFooterNav,_ as __namedExportsOrder,N as default};
