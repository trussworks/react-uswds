import{a as o,j as e}from"./jsx-runtime-2xDJh5tt.js";import{r as d}from"./index-CBqU2yxZ.js";import{I as g}from"./Icons-CMWhi0me.js";/* empty css              */import"./Alert-Dqsz4m1Z.js";import"./Accordion-0puC1jT1.js";import"./Button-Dw-sXN3h.js";import"./ButtonGroup-CCQqufrl.js";import"./InPageNavigation-BjbWNsFv.js";import"./Link-D4aif8TW.js";import{B as f,a as h,b as u,f as B,c as b,d as w,e as r,g as i,M as a,h as v}from"./GovBanner-CbfNy4jG.js";import"./Table-BUwg16Ev.js";import"./Tag-DjABJyxd.js";import"./Tooltip-SqitgIlY.js";import"./SideNav-O4Fq3k96.js";import"./Pagination-DOIvdS3b.js";import"./CollectionCalendarDate-Df3qKeHd.js";import"./GridContainer-BKBqUhoJ.js";import"./Grid-mTTr9krk.js";import"./CharacterCount-BPFHGKTg.js";import"./Checkbox-pN08irY2.js";import"./ComboBox-B1EslE6X.js";import"./DateInputGroup-BLqvFqO8.js";import"./DatePicker-DHPX4dXQ.js";import"./DateRangePicker-CxaLgQyn.js";import"./ErrorMessage-DC3KMugT.js";import"./Fieldset-DLL_ZIrk.js";import"./FileInput-CD8rZ3Ce.js";import"./Form-DNY-009I.js";import"./FormGroup-DUBGswQ6.js";import"./InputGroup-BPx5YESD.js";import"./InputPrefix-DvGNzkTN.js";import"./InputSuffix-gmdBxKcd.js";import"./Label-RQBQRD89.js";import"./LanguageSelector-CZxdZ56M.js";import"./Radio--la2QrPn.js";import"./RangeInput-Bj159vdr.js";import"./Select-CZ6J1Uk9.js";import"./Textarea-BzlnUgDN.js";import"./TextInput-84m5h5vG.js";import"./ModalOpenLink-DqJe7Qra.js";import"./TimePicker-D9RBzKG9.js";import"./ValidationItem-XsPANOr3.js";import"./ExtendedNav-BCkYX0hD.js";import"./NavDropDownButton-DfX1ZX96.js";import"./MegaMenu-GoBckSTc.js";import"./Menu-CliWZgj3.js";import"./NavCloseButton-Bmhbi0qY.js";import"./NavList-VQCA2U0H.js";import"./NavMenuButton-BaDR33e2.js";import"./PrimaryNav-JqZTjbNg.js";import"./Title-B7JfdTzy.js";import"./IconListContent-BpLtpIHZ.js";import"./IdentifierLogos-DtoBwkvN.js";import"./Address-DUFkI5uq.js";import"./FooterNav-DOkZsnBk.js";import"./Logo-D61RGjPD.js";import"./SocialLinks-B6VBY4FT.js";import"./ModalToggleButton-Bk91EDnj.js";import"./ModalFooter-C1FQFrtH.js";import"./CardFooter-Zb5CnXWq.js";import"./BreadcrumbLink-9iu6s7gd.js";import"./StepIndicatorStep-BlDQSA-m.js";import"./Search-DTWrEcKU.js";import"./SummaryBoxContent-CJR_WHsb.js";import"./ProcessListHeading-CyR_K92g.js";import"./SiteAlert-Dml4QVtM.js";import{d as k}from"./icon-dot-gov-CWUvLSvM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./SearchField-fuP9v_RH.js";import"./SearchButton-DPHr0WcA.js";const n=()=>{const[t,c]=d.useState(!1);return o(f,{"aria-label":"Official website of the state department of something specific",children:[e(h,{isOpen:t,flagImg:e(u,{src:B,"aria-hidden":!0,alt:""}),headerText:"This is an official website of the state department of something specific",headerActionText:"Here's how you know",children:e(b,{isOpen:t,"aria-controls":"custom-banner",onClick:()=>{c(l=>!l)},children:"Here's how you know"})}),e(w,{id:"custom-banner",isOpen:t,children:o("div",{className:"grid-row grid-gap-lg",children:[o(r,{className:"tablet:grid-col-6",children:[e(i,{src:k,alt:""}),e(a,{children:o("p",{children:[e("strong",{children:"Official websites use .gov"}),e("br",{}),"A ",e("strong",{children:".gov"})," website belongs to an official government organization in the United States."]})})]}),o(r,{className:"tablet:grid-col-6",children:[e(i,{src:v,alt:""}),e(a,{children:o("p",{children:[e("strong",{children:"Secure .gov websites use HTTPS"}),e("br",{}),"A"," ",o("strong",{children:["lock (",e(g.Lock,{"aria-label":"Locked padlock icon"}),")"]})," ","or ",e("strong",{children:"https://"})," means you've safely connected to the .gov website. Share sensitive information only on official, secure websites."]})})]})]})})]})},De={title:"Components/Banner",component:n,parameters:{docs:{description:{component:`
### USWDS 3.0 Banner component

Source: https://designsystem.digital.gov/components/banner/
`}}}};var s,p,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`(): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return <Banner aria-label="Official website of the state department of something specific">
      <BannerHeader isOpen={isOpen} flagImg={<BannerFlag src={flagImg} aria-hidden alt="" />} headerText="This is an official website of the state department of something specific" headerActionText="Here's how you know">
        <BannerButton isOpen={isOpen} aria-controls="custom-banner" onClick={(): void => {
        setIsOpen(previousIsOpen => !previousIsOpen);
      }}>
          Here&apos;s how you know
        </BannerButton>
      </BannerHeader>
      <BannerContent id="custom-banner" isOpen={isOpen}>
        <div className="grid-row grid-gap-lg">
          <BannerGuidance className="tablet:grid-col-6">
            <BannerIcon src={dotGovIcon} alt="" />
            <MediaBlockBody>
              <p>
                <strong>Official websites use .gov</strong>
                <br />A <strong>.gov</strong> website belongs to an official
                government organization in the United States.
              </p>
            </MediaBlockBody>
          </BannerGuidance>
          <BannerGuidance className="tablet:grid-col-6">
            <BannerIcon src={httpsIcon} alt="" />
            <MediaBlockBody>
              <p>
                <strong>Secure .gov websites use HTTPS</strong>
                <br />A{' '}
                <strong>
                  lock (<Icon.Lock aria-label="Locked padlock icon" />)
                </strong>{' '}
                or <strong>https://</strong> means you&apos;ve safely connected
                to the .gov website. Share sensitive information only on
                official, secure websites.
              </p>
            </MediaBlockBody>
          </BannerGuidance>
        </div>
      </BannerContent>
    </Banner>;
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Re=["CustomBanner"];export{n as CustomBanner,Re as __namedExportsOrder,De as default};
