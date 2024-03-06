import{j as o}from"./jsx-runtime-2xDJh5tt.js";import{L as a}from"./Logo-D61RGjPD.js";import{l as n}from"./logo-img-CoX76WCd.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const N={title:"Components/Footer/Logo",component:a,parameters:{docs:{description:{component:`
Display logo image with optional heading.  Used in USWDS 3.0 Footer component.

Source: https://designsystem.digital.gov/components/footer
`}}}},e=()=>o("div",{className:"usa-footer__secondary-section",children:o(a,{size:"slim",image:o("img",{className:"usa-footer__logo-img",src:n,alt:"Mock logo"}),heading:o("p",{className:"usa-footer__logo-heading",children:"Name of Agency"})})}),s=()=>o("div",{className:"usa-footer__secondary-section",children:o(a,{image:o("img",{className:"usa-footer__logo-img",src:n,alt:"Mock logo"})})});var r,t,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(): React.ReactElement => <div className="usa-footer__secondary-section">
    <Logo size="slim" image={<img className="usa-footer__logo-img" src={logoImg} alt="Mock logo" />} heading={<p className="usa-footer__logo-heading">Name of Agency</p>} />
  </div>`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var m,c,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(): React.ReactElement => <div className="usa-footer__secondary-section">
    <Logo image={<img className="usa-footer__logo-img" src={logoImg} alt="Mock logo" />} />
  </div>`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const h=["Slim","NoHeading"];export{s as NoHeading,e as Slim,h as __namedExportsOrder,N as default};
