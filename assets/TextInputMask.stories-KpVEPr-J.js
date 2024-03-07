import{a as m,j as t}from"./jsx-runtime-2xDJh5tt.js";import{T as i}from"./ModalOpenLink-DqJe7Qra.js";import{L as e}from"./Label-RQBQRD89.js";/* empty css              */import"./Alert-Dqsz4m1Z.js";import"./Accordion-0puC1jT1.js";import"./Button-Dw-sXN3h.js";import"./ButtonGroup-CCQqufrl.js";import"./InPageNavigation-BjbWNsFv.js";import"./Link-D4aif8TW.js";import"./GovBanner-CbfNy4jG.js";import"./Table-BUwg16Ev.js";import"./Tag-DjABJyxd.js";import"./Tooltip-SqitgIlY.js";import"./SideNav-O4Fq3k96.js";import"./Pagination-DOIvdS3b.js";import"./CollectionCalendarDate-Df3qKeHd.js";import"./GridContainer-BKBqUhoJ.js";import"./Grid-mTTr9krk.js";import"./CharacterCount-BPFHGKTg.js";import"./Checkbox-pN08irY2.js";import"./ComboBox-B1EslE6X.js";import"./DateInputGroup-BLqvFqO8.js";import"./DatePicker-DHPX4dXQ.js";import"./DateRangePicker-CxaLgQyn.js";import"./ErrorMessage-DC3KMugT.js";import"./Fieldset-DLL_ZIrk.js";import"./FileInput-CD8rZ3Ce.js";import{F as o}from"./Form-DNY-009I.js";import"./FormGroup-DUBGswQ6.js";import"./InputGroup-BPx5YESD.js";import"./InputPrefix-DvGNzkTN.js";import"./InputSuffix-gmdBxKcd.js";import"./LanguageSelector-CZxdZ56M.js";import"./Radio--la2QrPn.js";import"./RangeInput-Bj159vdr.js";import"./Select-CZ6J1Uk9.js";import"./Textarea-BzlnUgDN.js";import"./TextInput-84m5h5vG.js";import"./TimePicker-D9RBzKG9.js";import"./ValidationItem-XsPANOr3.js";import"./ExtendedNav-BCkYX0hD.js";import"./NavDropDownButton-DfX1ZX96.js";import"./MegaMenu-GoBckSTc.js";import"./Menu-CliWZgj3.js";import"./NavCloseButton-Bmhbi0qY.js";import"./NavList-VQCA2U0H.js";import"./NavMenuButton-BaDR33e2.js";import"./PrimaryNav-JqZTjbNg.js";import"./Title-B7JfdTzy.js";import"./IconListContent-BpLtpIHZ.js";import"./Icons-CMWhi0me.js";import"./IdentifierLogos-DtoBwkvN.js";import"./Address-DUFkI5uq.js";import"./FooterNav-DOkZsnBk.js";import"./Logo-D61RGjPD.js";import"./SocialLinks-B6VBY4FT.js";import"./ModalToggleButton-Bk91EDnj.js";import"./ModalFooter-C1FQFrtH.js";import"./CardFooter-Zb5CnXWq.js";import"./BreadcrumbLink-9iu6s7gd.js";import"./StepIndicatorStep-BlDQSA-m.js";import"./Search-DTWrEcKU.js";import"./SummaryBoxContent-CJR_WHsb.js";import"./ProcessListHeading-CyR_K92g.js";import"./SiteAlert-Dml4QVtM.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./icon-dot-gov-CWUvLSvM.js";import"./index-Dk74W0Oi.js";import"./index-BtM5VmRH.js";import"./SearchField-fuP9v_RH.js";import"./SearchButton-DPHr0WcA.js";const Mt={title:"Components/Text input mask",component:i,parameters:{docs:{description:{component:`
### USWDS 3.0 TextInputMask component

Source: https://designsystem.digital.gov/components/input-mask/
`}}}},r=()=>m(o,{onSubmit:()=>{},children:[t(e,{id:"first-name",htmlFor:"first-name",children:"Social Security Number"}),t("span",{id:"hint-ssn",className:"usa-hint",children:"For example, 123 45 6789"}),t(i,{id:"input-type-ssn",name:"input-type-ssn",type:"text","aria-labelledby":"first-name","aria-describedby":"hint-ssn",mask:"___ __ ____",pattern:"^(?!(000|666|9))\\d{3} (?!00)\\d{2} (?!0000)\\d{4}$"}),t(e,{id:"tel",htmlFor:"first-name",children:"US Telephone Number"}),t("span",{id:"hint-tel",className:"usa-hint",children:"For example, 123-456-7890"}),t(i,{id:"input-type-tel",name:"input-type-tel",type:"tel","aria-labelledby":"tel","aria-describedby":"hint-tel",mask:"___-___-____",pattern:"\\d{3}-\\d{3}-\\d{4}"}),t(e,{id:"zip",htmlFor:"first-name",children:"ZIP Code"}),t("span",{id:"hint-zip",className:"usa-hint",children:"For example, 12345-6789"}),t(i,{id:"input-type-zip",name:"input-type-zip",type:"text","aria-labelledby":"zip","aria-describedby":"hint-zip",mask:"_____-____",pattern:"^[0-9]{5}(?:-[0-9]{4})?$"}),t(e,{id:"alphanumeric",htmlFor:"first-name",children:"Alphanumeric"}),t("span",{id:"hint-alphanumeric",className:"usa-hint",children:"For example, A1B 2C3"}),t(i,{id:"input-type-alphanumeric",name:"input-type-alphanumeric",type:"text","aria-labelledby":"alphanumeric","aria-describedby":"hint-alphanumeric",mask:"___ ___",pattern:"\\w\\d\\w \\d\\w\\d",charset:"A#A #A#"})]});var a,p,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(): React.ReactElement => <Form onSubmit={(): void => {
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
  </Form>`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const wt=["Default"];export{r as Default,wt as __namedExportsOrder,Mt as default};
