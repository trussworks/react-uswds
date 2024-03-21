import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as u}from"./index-CBqU2yxZ.js";import{N as t,H as g}from"./NavDropDownButton-6ZRzb6vL.js";import{P as v}from"./PrimaryNav-CgKtblFp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./NavCloseButton-Cg8v_3kY.js";import"./Icons-CQoMJF7S.js";import"./NavList-CQFzsEUl.js";const h={title:"Components/Header/NavDropDownButton",component:t,parameters:{docs:{description:{component:`
### USWDS 3.0 NavDropDownButton component used within the Header component

Source: https://designsystem.digital.gov/components/header/
`}}}},i="Nav Label",D=()=>{},n=()=>{const[o,c]=u.useState([!1,!1]),s=a=>{c(d=>{const r=[!1,!1];return r[a]=!d[a],r})};return e.jsx(g,{children:e.jsxs("div",{className:"usa-nav-container",children:[e.jsx("div",{className:"usa-navbar"}),e.jsx(v,{items:[e.jsx(t,{label:i,menuId:"test",isOpen:o[0],onToggle:()=>{s(0)}},"testItemOne"),e.jsx(t,{label:i,menuId:"testTwo",isOpen:o[1],onToggle:()=>{s(1)},isCurrent:!0},"testItemTwo")],onToggleMobileNav:D})]})})};n.__docgenInfo={description:"",methods:[],displayName:"DefaultDropDownMenu"};var p,l,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const y=["DefaultDropDownMenu"];export{n as DefaultDropDownMenu,y as __namedExportsOrder,h as default};
