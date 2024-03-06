import{j as e,a}from"./jsx-runtime-2xDJh5tt.js";import{A as l}from"./Address-DUFkI5uq.js";import{B as v}from"./Button-Dw-sXN3h.js";import{F as s,a as t}from"./FooterNav-DOkZsnBk.js";import{F as T}from"./Form-DNY-009I.js";import{L as b}from"./Label-RQBQRD89.js";import{L as c}from"./Logo-D61RGjPD.js";import{S,a as i}from"./SocialLinks-B6VBY4FT.js";import{T as L}from"./TextInput-gKiZgmFb.js";import{l as m}from"./logo-img-CoX76WCd.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./NavList-VQCA2U0H.js";import"./Icons-CMWhi0me.js";const D={title:"Components/Footer",component:s,parameters:{docs:{description:{component:`
### USWDS 3.0 Footer component

Source: https://designsystem.digital.gov/components/footer
`}}}},z=()=>{},d=e("div",{className:"grid-container usa-footer__return-to-top",children:e(v,{type:"button",unstyled:!0,children:"Return to top"})}),A=[e(i,{name:"Facebook",href:"#"},"facebook"),e(i,{name:"Twitter",href:"#"},"twitter"),e(i,{name:"YouTube",href:"#"},"youtube"),e(i,{name:"Instagram",href:"#"},"instagram"),e(i,{name:"RSS",href:"#"},"rss")],F=()=>a("div",{className:"usa-sign-up",children:[e("h3",{className:"usa-sign-up__heading",children:"Sign up"}),a(T,{onSubmit:z,children:[e(b,{htmlFor:"email",children:"Your email address"}),e(L,{id:"email",name:"email",type:"email"}),e(v,{type:"submit",children:"Sign up"})]})]}),o=()=>e(s,{size:"slim",returnToTop:d,primary:a("div",{className:"usa-footer__primary-container grid-row",children:[e("div",{className:"mobile-lg:grid-col-8",children:e(t,{size:"slim",links:Array(4).fill(e("a",{className:"usa-footer__primary-link",href:"#",children:"Primary Link"}))})}),e("div",{className:"tablet:grid-col-4",children:e(l,{size:"slim",items:[e("a",{href:"tel:1-800-555-5555",children:"(800) CALL-GOVT"},"telephone"),e("a",{href:"mailto:info@agency.gov",children:"info@agency.gov"},"email")]})})]}),secondary:e(c,{size:"slim",image:e("img",{className:"usa-footer__logo-img",alt:"img alt text",src:m}),heading:e("p",{className:"usa-footer__logo-heading",children:"Name of Agency"})})}),r=()=>e(s,{size:"medium",returnToTop:d,primary:e(t,{size:"medium",links:Array(4).fill(e("a",{className:"usa-footer__primary-link",href:"#",children:"Primary Link"}))}),secondary:a("div",{className:"grid-row grid-gap",children:[e(c,{size:"medium",image:e("img",{className:"usa-footer__logo-img",alt:"img alt text",src:m}),heading:e("p",{className:"usa-footer__logo-heading",children:"Name of Agency"})}),a("div",{className:"usa-footer__contact-links mobile-lg:grid-col-6",children:[e(S,{links:A}),e("h3",{className:"usa-footer__contact-heading",children:"Agency Contact Center"}),e(l,{size:"medium",items:[e("a",{href:"tel:1-800-555-5555",children:"(800) CALL-GOVT"},"telephone"),e("a",{href:"mailto:info@agency.gov",children:"info@agency.gov"},"email")]})]})]})}),n=()=>e(s,{size:"big",returnToTop:d,primary:e("div",{className:"grid-container",children:a("div",{className:"grid-row grid-gap",children:[e("div",{className:"tablet:grid-col-8",children:e(t,{size:"big",links:[["Topic",...Array(2).fill(e("a",{href:"#",children:"Secondary link"})),e("a",{href:"#",children:"Secondary link that is a bit longer than most of the others"},"4"),e("a",{href:"#",children:"Secondary link"},"5")],["Topic",e("a",{href:"#",children:"Secondary link that is pretty long"},"2"),...Array(3).fill(e("a",{href:"#",children:"Secondary link"}))],["Topic",...Array(4).fill(e("a",{className:"usa-footer__secondary-link",href:"#",children:"Secondary link"}))],["Topic",...Array(4).fill(e("a",{className:"usa-footer__secondary-link",href:"#",children:"Secondary link"}))]]})}),e("div",{className:"tablet:grid-col-4",children:e(F,{})})]})}),secondary:a("div",{className:"grid-row grid-gap",children:[e(c,{size:"big",image:e("img",{className:"usa-footer__logo-img",alt:"img alt text",src:m}),heading:e("p",{className:"usa-footer__logo-heading",children:"Name of Agency"})}),a("div",{className:"usa-footer__contact-links mobile-lg:grid-col-6",children:[e(S,{links:A}),e("h3",{className:"usa-footer__contact-heading",children:"Agency Contact Center"}),e(l,{size:"big",items:[e("a",{href:"tel:1-800-555-5555",children:"(800) CALL-GOVT"},"telephone"),e("a",{href:"mailto:info@agency.gov",children:"info@agency.gov"},"email")]})]})]})});var g,h,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(): React.ReactElement => <Footer size="slim" returnToTop={returnToTop} primary={<div className="usa-footer__primary-container grid-row">
        <div className="mobile-lg:grid-col-8">
          <FooterNav size="slim" links={Array(4).fill(<a className="usa-footer__primary-link" href="#">
                Primary Link
              </a>)} />
        </div>
        <div className="tablet:grid-col-4">
          <Address size="slim" items={[<a key="telephone" href="tel:1-800-555-5555">
                (800) CALL-GOVT
              </a>, <a key="email" href="mailto:info@agency.gov">
                info@agency.gov
              </a>]} />
        </div>
      </div>} secondary={<Logo size="slim" image={<img className="usa-footer__logo-img" alt="img alt text" src={logoImg} />} heading={<p className="usa-footer__logo-heading">Name of Agency</p>} />} />`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var p,y,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(): React.ReactElement => <Footer size="medium" returnToTop={returnToTop} primary={<FooterNav size="medium" links={Array(4).fill(<a className="usa-footer__primary-link" href="#">
            Primary Link
          </a>)} />} secondary={<div className="grid-row grid-gap">
        <Logo size="medium" image={<img className="usa-footer__logo-img" alt="img alt text" src={logoImg} />} heading={<p className="usa-footer__logo-heading">Name of Agency</p>} />
        <div className="usa-footer__contact-links mobile-lg:grid-col-6">
          <SocialLinks links={socialLinkItems} />
          <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
          <Address size="medium" items={[<a key="telephone" href="tel:1-800-555-5555">
                (800) CALL-GOVT
              </a>, <a key="email" href="mailto:info@agency.gov">
                info@agency.gov
              </a>]} />
        </div>
      </div>} />`,...(u=(y=r.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var _,k,N;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`(): React.ReactElement => <Footer size="big" returnToTop={returnToTop} primary={<div className="grid-container">
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-8">
            <FooterNav size="big" links={[['Topic', ...Array(2).fill(<a href="#">Secondary link</a>), <a key="4" href="#">
                    Secondary link that is a bit longer than most of the others
                  </a>, <a key="5" href="#">
                    Secondary link
                  </a>], ['Topic', <a key="2" href="#">
                    Secondary link that is pretty long
                  </a>, ...Array(3).fill(<a href="#">Secondary link</a>)], ['Topic', ...Array(4).fill(<a className="usa-footer__secondary-link" href="#">
                      Secondary link
                    </a>)], ['Topic', ...Array(4).fill(<a className="usa-footer__secondary-link" href="#">
                      Secondary link
                    </a>)]]} />
          </div>
          <div className="tablet:grid-col-4">
            <SignUpForm />
          </div>
        </div>
      </div>} secondary={<div className="grid-row grid-gap">
        <Logo size="big" image={<img className="usa-footer__logo-img" alt="img alt text" src={logoImg} />} heading={<p className="usa-footer__logo-heading">Name of Agency</p>} />
        <div className="usa-footer__contact-links mobile-lg:grid-col-6">
          <SocialLinks links={socialLinkItems} />
          <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
          <Address size="big" items={[<a key="telephone" href="tel:1-800-555-5555">
                (800) CALL-GOVT
              </a>, <a key="email" href="mailto:info@agency.gov">
                info@agency.gov
              </a>]} />
        </div>
      </div>} />`,...(N=(k=n.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const W=["SlimFooter","MediumFooter","BigFooter"];export{n as BigFooter,r as MediumFooter,o as SlimFooter,W as __namedExportsOrder,D as default};
