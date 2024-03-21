import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as l}from"./index-CBqU2yxZ.js";import{I as d}from"./Icons-CQoMJF7S.js";/* empty css              */import"./Alert-V59nW2hk.js";import"./Accordion-6Mo-cyDB.js";import"./Button-Thyd1SVx.js";import"./ButtonGroup-gCLps36L.js";import"./InPageNavigation-CmTKTFid.js";import"./Link-CkSfpXjB.js";import{B as g,a as f,b as h,f as u,c as B,d as b,e as t,g as r,M as i,h as x}from"./GovBanner-tryZJ-Wg.js";import"./Table-vHYJa_WX.js";import"./Tag-HHFo811X.js";import"./Tooltip-CH6-Dgmw.js";import"./SideNav-C1XA8AOy.js";import"./Pagination-3dvXxK_9.js";import"./CollectionCalendarDate-BMKUue6h.js";import"./GridContainer-C466nuBu.js";import"./Grid-DYV3xy40.js";import"./CharacterCount-DPNFkxL5.js";import"./Checkbox-Cca3xyl7.js";import"./ComboBox-CrgV33s6.js";import"./DateInputGroup-DoGUfozA.js";import"./DatePicker-B51BLj-6.js";import"./DateRangePicker-BEeFX6be.js";import"./ErrorMessage-CObF_KIU.js";import"./Fieldset-B_nbNNxJ.js";import"./FileInput-B1YhmZ5v.js";import"./Form-EF6HmHLa.js";import"./FormGroup-9HSr8Yaw.js";import"./InputGroup-URNx161j.js";import"./InputPrefix-w6oLsLPz.js";import"./InputSuffix-D2TlHTbY.js";import"./Label-CfwuEpQt.js";import"./LanguageSelector-ClZ-2fQB.js";import"./Radio-B1G-YNcg.js";import"./RangeInput-B9t6FgCW.js";import"./Select-B4s8wwqZ.js";import"./Textarea-CDk2QcGd.js";import"./TextInput-DL9q-H81.js";import"./TextInputMask-BzlQcUkm.js";import"./TimePicker-B3NDEBgJ.js";import"./ValidationItem-C1A4nfMt.js";import"./ExtendedNav-DJcEMa8-.js";import"./NavDropDownButton-6ZRzb6vL.js";import"./MegaMenu-v-QtzaFo.js";import"./Menu-Ca0dejC6.js";import"./NavCloseButton-Cg8v_3kY.js";import"./NavList-CQFzsEUl.js";import"./NavMenuButton-B6dOhRDi.js";import"./PrimaryNav-CgKtblFp.js";import"./Title-CNPJufDE.js";import"./IconListContent-CHADvKKO.js";import"./IdentifierLogos-3ZYqI2mG.js";import"./Address-C6F9dlH4.js";import"./FooterNav-D2ex_-yf.js";import"./Logo-B25uI6Rj.js";import"./SocialLinks-CBm8p92K.js";import"./ModalToggleButton-CcejbB4A.js";import"./ModalFooter-edgjOP8W.js";import"./CardFooter-B6OnTs4c.js";import"./BreadcrumbLink-B71CO-IG.js";import"./StepIndicatorStep-DiLAv5rO.js";import"./Search-CmLNRDYE.js";import"./SummaryBoxContent-rlHfgPUq.js";import"./ProcessListHeading-nksJhOEc.js";import"./SiteAlert-JtmY6AWc.js";import{d as j}from"./icon-dot-gov-CWUvLSvM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./SearchField-CWIFNtOj.js";import"./SearchButton-7GW53_OH.js";const o=()=>{const[n,m]=l.useState(!1);return e.jsxs(g,{"aria-label":"Official website of the state department of something specific",children:[e.jsx(f,{isOpen:n,flagImg:e.jsx(h,{src:u,"aria-hidden":!0,alt:""}),headerText:"This is an official website of the state department of something specific",headerActionText:"Here's how you know",children:e.jsx(B,{isOpen:n,"aria-controls":"custom-banner",onClick:()=>{m(c=>!c)},children:"Here's how you know"})}),e.jsx(b,{id:"custom-banner",isOpen:n,children:e.jsxs("div",{className:"grid-row grid-gap-lg",children:[e.jsxs(t,{className:"tablet:grid-col-6",children:[e.jsx(r,{src:j,alt:""}),e.jsx(i,{children:e.jsxs("p",{children:[e.jsx("strong",{children:"Official websites use .gov"}),e.jsx("br",{}),"A ",e.jsx("strong",{children:".gov"})," website belongs to an official government organization in the United States."]})})]}),e.jsxs(t,{className:"tablet:grid-col-6",children:[e.jsx(r,{src:x,alt:""}),e.jsx(i,{children:e.jsxs("p",{children:[e.jsx("strong",{children:"Secure .gov websites use HTTPS"}),e.jsx("br",{}),"A"," ",e.jsxs("strong",{children:["lock (",e.jsx(d.Lock,{"aria-label":"Locked padlock icon"}),")"]})," ","or ",e.jsx("strong",{children:"https://"})," means you've safely connected to the .gov website. Share sensitive information only on official, secure websites."]})})]})]})})]})},Pe={title:"Components/Banner",component:o,parameters:{docs:{description:{component:`
### USWDS 3.0 Banner component

Source: https://designsystem.digital.gov/components/banner/
`}}}};o.__docgenInfo={description:"",methods:[],displayName:"CustomBanner"};var s,a,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const Re=["CustomBanner"];export{o as CustomBanner,Re as __namedExportsOrder,Pe as default};
