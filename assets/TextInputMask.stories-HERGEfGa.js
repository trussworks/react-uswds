import{j as t}from"./jsx-runtime-CKrituN3.js";import{T as i}from"./TextInputMask-BzlQcUkm.js";import{L as r}from"./Label-CfwuEpQt.js";/* empty css              */import"./Alert-V59nW2hk.js";import"./Accordion-6Mo-cyDB.js";import"./Button-Thyd1SVx.js";import"./ButtonGroup-gCLps36L.js";import"./InPageNavigation-CmTKTFid.js";import"./Link-CkSfpXjB.js";import"./GovBanner-tryZJ-Wg.js";import"./Table-vHYJa_WX.js";import"./Tag-HHFo811X.js";import"./Tooltip-CH6-Dgmw.js";import"./SideNav-C1XA8AOy.js";import"./Pagination-3dvXxK_9.js";import"./CollectionCalendarDate-BMKUue6h.js";import"./GridContainer-C466nuBu.js";import"./Grid-DYV3xy40.js";import"./CharacterCount-DPNFkxL5.js";import"./Checkbox-Cca3xyl7.js";import"./ComboBox-CrgV33s6.js";import"./DateInputGroup-DoGUfozA.js";import"./DatePicker-B51BLj-6.js";import"./DateRangePicker-BEeFX6be.js";import"./ErrorMessage-CObF_KIU.js";import"./Fieldset-B_nbNNxJ.js";import"./FileInput-B1YhmZ5v.js";import{F as m}from"./Form-EF6HmHLa.js";import"./FormGroup-9HSr8Yaw.js";import"./InputGroup-URNx161j.js";import"./InputPrefix-w6oLsLPz.js";import"./InputSuffix-D2TlHTbY.js";import"./LanguageSelector-ClZ-2fQB.js";import"./Radio-B1G-YNcg.js";import"./RangeInput-B9t6FgCW.js";import"./Select-B4s8wwqZ.js";import"./Textarea-CDk2QcGd.js";import"./TextInput-DL9q-H81.js";import"./TimePicker-B3NDEBgJ.js";import"./ValidationItem-C1A4nfMt.js";import"./ExtendedNav-DJcEMa8-.js";import"./NavDropDownButton-6ZRzb6vL.js";import"./MegaMenu-v-QtzaFo.js";import"./Menu-Ca0dejC6.js";import"./NavCloseButton-Cg8v_3kY.js";import"./NavList-CQFzsEUl.js";import"./NavMenuButton-B6dOhRDi.js";import"./PrimaryNav-CgKtblFp.js";import"./Title-CNPJufDE.js";import"./IconListContent-CHADvKKO.js";import"./Icons-CQoMJF7S.js";import"./IdentifierLogos-3ZYqI2mG.js";import"./Address-C6F9dlH4.js";import"./FooterNav-D2ex_-yf.js";import"./Logo-B25uI6Rj.js";import"./SocialLinks-CBm8p92K.js";import"./ModalToggleButton-CcejbB4A.js";import"./ModalFooter-edgjOP8W.js";import"./CardFooter-B6OnTs4c.js";import"./BreadcrumbLink-B71CO-IG.js";import"./StepIndicatorStep-DiLAv5rO.js";import"./Search-CmLNRDYE.js";import"./SummaryBoxContent-rlHfgPUq.js";import"./ProcessListHeading-nksJhOEc.js";import"./SiteAlert-JtmY6AWc.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./icon-dot-gov-CWUvLSvM.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./SearchField-CWIFNtOj.js";import"./SearchButton-7GW53_OH.js";const It={title:"Components/Text input mask",component:i,parameters:{docs:{description:{component:`
### USWDS 3.0 TextInputMask component

Source: https://designsystem.digital.gov/components/input-mask/
`}}}},e=()=>t.jsxs(m,{onSubmit:()=>{},children:[t.jsx(r,{id:"first-name",htmlFor:"first-name",children:"Social Security Number"}),t.jsx("span",{id:"hint-ssn",className:"usa-hint",children:"For example, 123 45 6789"}),t.jsx(i,{id:"input-type-ssn",name:"input-type-ssn",type:"text","aria-labelledby":"first-name","aria-describedby":"hint-ssn",mask:"___ __ ____",pattern:"^(?!(000|666|9))\\d{3} (?!00)\\d{2} (?!0000)\\d{4}$"}),t.jsx(r,{id:"tel",htmlFor:"first-name",children:"US Telephone Number"}),t.jsx("span",{id:"hint-tel",className:"usa-hint",children:"For example, 123-456-7890"}),t.jsx(i,{id:"input-type-tel",name:"input-type-tel",type:"tel","aria-labelledby":"tel","aria-describedby":"hint-tel",mask:"___-___-____",pattern:"\\d{3}-\\d{3}-\\d{4}"}),t.jsx(r,{id:"zip",htmlFor:"first-name",children:"ZIP Code"}),t.jsx("span",{id:"hint-zip",className:"usa-hint",children:"For example, 12345-6789"}),t.jsx(i,{id:"input-type-zip",name:"input-type-zip",type:"text","aria-labelledby":"zip","aria-describedby":"hint-zip",mask:"_____-____",pattern:"^[0-9]{5}(?:-[0-9]{4})?$"}),t.jsx(r,{id:"alphanumeric",htmlFor:"first-name",children:"Alphanumeric"}),t.jsx("span",{id:"hint-alphanumeric",className:"usa-hint",children:"For example, A1B 2C3"}),t.jsx(i,{id:"input-type-alphanumeric",name:"input-type-alphanumeric",type:"text","aria-labelledby":"alphanumeric","aria-describedby":"hint-alphanumeric",mask:"___ ___",pattern:"\\w\\d\\w \\d\\w\\d",charset:"A#A #A#"})]});e.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,a,n;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`(): React.ReactElement => <Form onSubmit={(): void => {
  return;
}}>
    <Label id="first-name" htmlFor="first-name">
      Social Security Number
    </Label>
    <span id="hint-ssn" className="usa-hint">
      For example, 123 45 6789
    </span>
    <TextInputMask id="input-type-ssn" name="input-type-ssn" type="text" aria-labelledby="first-name" aria-describedby="hint-ssn" mask="___ __ ____" pattern="^(?!(000|666|9))\\d{3} (?!00)\\d{2} (?!0000)\\d{4}$" />

    <Label id="tel" htmlFor="first-name">
      US Telephone Number
    </Label>
    <span id="hint-tel" className="usa-hint">
      For example, 123-456-7890
    </span>
    <TextInputMask id="input-type-tel" name="input-type-tel" type="tel" aria-labelledby="tel" aria-describedby="hint-tel" mask="___-___-____" pattern="\\d{3}-\\d{3}-\\d{4}" />

    <Label id="zip" htmlFor="first-name">
      ZIP Code
    </Label>
    <span id="hint-zip" className="usa-hint">
      For example, 12345-6789
    </span>
    <TextInputMask id="input-type-zip" name="input-type-zip" type="text" aria-labelledby="zip" aria-describedby="hint-zip" mask="_____-____" pattern="^[0-9]{5}(?:-[0-9]{4})?$" />

    <Label id="alphanumeric" htmlFor="first-name">
      Alphanumeric
    </Label>
    <span id="hint-alphanumeric" className="usa-hint">
      For example, A1B 2C3
    </span>
    <TextInputMask id="input-type-alphanumeric" name="input-type-alphanumeric" type="text" aria-labelledby="alphanumeric" aria-describedby="hint-alphanumeric" mask="___ ___" pattern="\\w\\d\\w \\d\\w\\d" charset="A#A #A#" />
  </Form>`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Lt=["Default"];export{e as Default,Lt as __namedExportsOrder,It as default};
