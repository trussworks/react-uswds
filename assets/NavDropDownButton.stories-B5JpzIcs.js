import{j as e,a as u}from"./jsx-runtime-2xDJh5tt.js";import{r as g}from"./index-CBqU2yxZ.js";import{N as t,H as v}from"./NavDropDownButton-DfX1ZX96.js";import{P as O}from"./PrimaryNav-JqZTjbNg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./NavCloseButton-Bmhbi0qY.js";import"./Icons-CMWhi0me.js";import"./NavList-VQCA2U0H.js";const B={title:"Components/Header/NavDropDownButton",component:t,parameters:{docs:{description:{component:`
### USWDS 3.0 NavDropDownButton component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`}}}},i="Nav Label",D=()=>{},n=()=>{const[o,c]=g.useState([!1,!1]),s=a=>{c(d=>{const r=[!1,!1];return r[a]=!d[a],r})};return e(v,{children:u("div",{className:"usa-nav-container",children:[e("div",{className:"usa-navbar"}),e(O,{items:[e(t,{label:i,menuId:"test",isOpen:o[0],onToggle:()=>{s(0)}},"testItemOne"),e(t,{label:i,menuId:"testTwo",isOpen:o[1],onToggle:()=>{s(1)},isCurrent:!0},"testItemTwo")],onToggleMobileNav:D})]})})};var p,l,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`(): React.ReactElement => {
  const [isOpen, setIsOpen] = useState([false, false]);
  const onToggle = (index: number): void => {
    setIsOpen(prevIsOpen => {
      const newIsOpen = [false, false];
      // eslint-disable-next-line security/detect-object-injection
      newIsOpen[index] = !prevIsOpen[index];
      return newIsOpen;
    });
  };
  return <Header>
      <div className="usa-nav-container">
        <div className="usa-navbar"></div>
        <PrimaryNav items={[<NavDropDownButton key="testItemOne" label={testLabel} menuId="test" isOpen={isOpen[0]} onToggle={(): void => {
        onToggle(0);
      }} />, <NavDropDownButton key="testItemTwo" label={testLabel} menuId="testTwo" isOpen={isOpen[1]} onToggle={(): void => {
        onToggle(1);
      }} isCurrent={true} />]} onToggleMobileNav={mockToggle} />
      </div>
    </Header>;
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const H=["DefaultDropDownMenu"];export{n as DefaultDropDownMenu,H as __namedExportsOrder,B as default};
