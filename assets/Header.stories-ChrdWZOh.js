import{a as t,F as o,j as e}from"./jsx-runtime-2xDJh5tt.js";import{r as p}from"./index-CBqU2yxZ.js";import{H as h,N as m}from"./NavDropDownButton-DfX1ZX96.js";import{T as w}from"./Title-B7JfdTzy.js";import{P as L}from"./PrimaryNav-JqZTjbNg.js";import{S as M}from"./Search-DTWrEcKU.js";import{M as z}from"./Menu-CliWZgj3.js";import{M as N}from"./MegaMenu-GoBckSTc.js";import{N as g}from"./NavMenuButton-BaDR33e2.js";import{E as F}from"./ExtendedNav-BCkYX0hD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./NavCloseButton-Bmhbi0qY.js";import"./Icons-CMWhi0me.js";import"./NavList-VQCA2U0H.js";import"./Form-DNY-009I.js";import"./SearchField-fuP9v_RH.js";import"./Label-RQBQRD89.js";import"./TextInput-84m5h5vG.js";import"./SearchButton-DPHr0WcA.js";import"./Button-Dw-sXN3h.js";const oe={title:"Components/Header",component:h,parameters:{docs:{description:{component:`
### USWDS 3.0 Header component

Source: https://designsystem.digital.gov/components/header/
`}}}},S=()=>{},u=(n,r)=>{r(a=>{const i=[!1,!1];return i[n]=!a[n],i})},k=()=>{const[n,r]=p.useState(!1),a=()=>r(c=>!c),i=[e("a",{href:"#linkOne",children:"Current link"},"one"),e("a",{href:"#linkTwo",children:"Simple link Two"},"two")],[l,s]=p.useState([!1,!1]),d=[t(o,{children:[e(m,{menuId:"testDropDownOne",onToggle:()=>{u(0,s)},isOpen:l[0],label:"Nav Label",isCurrent:!0}),e(z,{items:i,isOpen:l[0],id:"testDropDownOne"},"one")]}),e("a",{href:"#two",className:"usa-nav__link",children:e("span",{children:"Parent link"})},"two"),e("a",{href:"#three",className:"usa-nav__link",children:e("span",{children:"Parent link"})},"three")];return e(o,{children:e(h,{basic:!0,showMobileOverlay:n,children:t("div",{className:"usa-nav-container",children:[t("div",{className:"usa-navbar",children:[e(w,{children:"Project Title"}),e(g,{onClick:a,label:"Menu"})]}),e(L,{items:d,mobileExpanded:n,onToggleMobileNav:a,children:e(M,{size:"small",onSubmit:S})})]})})})},v=()=>{const[n,r]=p.useState(!1),a=()=>r(b=>!b),i=[[e("a",{href:"#linkOne",children:"Simple link one"},"one"),e("a",{href:"#linkTwo",children:"Simple link two"},"two")],[e("a",{href:"#linkThree",children:"Simple link three"},"three"),e("a",{href:"#linkFour",children:"Simple link four"},"four")]],l=[[e("a",{href:"#linkFive",children:"Simple link five"},"one"),e("a",{href:"#linkSix",children:"Simple link six"},"two")],[e("a",{href:"#linkSeven",children:"Simple link seven"},"three"),e("a",{href:"#linkEight",children:"Simple link eight"},"four")]],[s,d]=p.useState([!1,!1]),c=[t(o,{children:[e(m,{onToggle:()=>{u(0,d)},menuId:"testDropDownOne",isOpen:s[0],label:"Nav Label",isCurrent:!0}),e(N,{items:i,isOpen:s[0],id:"testDropDownOne"},"one")]}),t(o,{children:[e(m,{onToggle:()=>{u(1,d)},menuId:"testDropDownTwo",isOpen:s[1],label:"Nav Label"}),e(N,{items:l,isOpen:s[1],id:"testDropDownTwo"},"one")]}),e("a",{href:"#two",className:"usa-nav__link",children:e("span",{children:"Parent link"})},"two"),e("a",{href:"#three",className:"usa-nav__link",children:e("span",{children:"Parent link"})},"three")];return e(o,{children:e(h,{basic:!0,basicWithMegaMenu:!0,showMobileOverlay:n,children:t("div",{className:"usa-nav-container",children:[t("div",{className:"usa-navbar",children:[e(w,{children:"Project Title"}),e(g,{onClick:a,label:"Menu"})]}),e(L,{items:c,mobileExpanded:n,onToggleMobileNav:a,children:e(M,{size:"small",onSubmit:S})})]})})})},f=()=>{const[n,r]=p.useState(!1),a=()=>r(c=>!c),[i,l]=p.useState([!1]),s=[e("a",{href:"#linkOne",children:"Simple link one"},"one"),e("a",{href:"#linkTwo",children:"Simple link two"},"two")],d=[t(o,{children:[e(m,{onToggle:()=>{u(0,l)},menuId:"testDropDownOne",isOpen:i[0],label:"Nav Label",isCurrent:!0}),e(z,{items:s,isOpen:i[0],id:"testDropDownOne"},"one")]}),e("a",{href:"#two",className:"usa-nav__link",children:e("span",{children:"Parent link"})},"two"),e("a",{href:"#three",className:"usa-nav__link",children:e("span",{children:"Parent link"})},"three")];return e(o,{children:t(h,{extended:!0,showMobileOverlay:n,children:[t("div",{className:"usa-navbar",children:[e(w,{children:"Project Title"}),e(g,{onClick:a,label:"Menu"})]}),e(F,{primaryItems:d,secondaryItems:s,mobileExpanded:n,onToggleMobileNav:a,children:e(M,{size:"small",onSubmit:S})})]})})},O=()=>{const[n,r]=p.useState(!1),a=()=>r(b=>!b),i=[e("a",{href:"#linkOne",children:"Simple link one"},"one"),e("a",{href:"#linkTwo",children:"Simple link two"},"two")],l=[[e("a",{href:"#linkOne",children:"Simple link one"},"one"),e("a",{href:"#linkTwo",children:"Simple link two"},"two")],[e("a",{href:"#linkThree",children:"Simple link three"},"three"),e("a",{href:"#linkFour",children:"Simple link four"},"four")]],[s,d]=p.useState([!1,!1]),c=[t(o,{children:[e(m,{onToggle:()=>{u(0,d)},menuId:"testDropDownOne",isOpen:s[0],label:"Nav Label",isCurrent:!0}),e(N,{items:l,isOpen:s[0],id:"testDropDownOne"},"one")]}),e("a",{href:"#two",className:"usa-nav__link",children:e("span",{children:"Parent link"})},"two"),e("a",{href:"#three",className:"usa-nav__link",children:e("span",{children:"Parent link"})},"three")];return e(o,{children:t(h,{extended:!0,showMobileOverlay:n,children:[t("div",{className:"usa-navbar",children:[e(w,{children:"Project Title"}),e(g,{onClick:a,label:"Menu"})]}),e(F,{primaryItems:c,secondaryItems:i,mobileExpanded:n,onToggleMobileNav:a,children:e(M,{size:"small",onSubmit:S})})]})})};var x,T,I;k.parameters={...k.parameters,docs:{...(x=k.parameters)==null?void 0:x.docs,source:{originalSource:`(): React.ReactElement => {
  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => setExpanded(prvExpanded => !prvExpanded);
  const testMenuItems = [<a href="#linkOne" key="one">
      Current link
    </a>, <a href="#linkTwo" key="two">
      Simple link Two
    </a>];
  const [isOpen, setIsOpen] = useState([false, false]);
  const testItemsMenu = [<>
      <NavDropDownButton menuId="testDropDownOne" onToggle={(): void => {
      onToggle(0, setIsOpen);
    }} isOpen={isOpen[0]} label="Nav Label" isCurrent={true} />
      <Menu key="one" items={testMenuItems} isOpen={isOpen[0]} id="testDropDownOne" />
    </>, <a href="#two" key="two" className="usa-nav__link">
      <span>Parent link</span>
    </a>, <a href="#three" key="three" className="usa-nav__link">
      <span>Parent link</span>
    </a>];
  return <>
      <Header basic={true} showMobileOverlay={expanded}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>Project Title</Title>
            <NavMenuButton onClick={onClick} label="Menu" />
          </div>
          <PrimaryNav items={testItemsMenu} mobileExpanded={expanded} onToggleMobileNav={onClick}>
            <Search size="small" onSubmit={mockSubmit} />
          </PrimaryNav>
        </div>
      </Header>
    </>;
}`,...(I=(T=k.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var y,D,E;v.parameters={...v.parameters,docs:{...(y=v.parameters)==null?void 0:y.docs,source:{originalSource:`(): React.ReactElement => {
  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => setExpanded(prvExpanded => !prvExpanded);
  const testItemsMegaOne = [[<a href="#linkOne" key="one">
        Simple link one
      </a>, <a href="#linkTwo" key="two">
        Simple link two
      </a>], [<a href="#linkThree" key="three">
        Simple link three
      </a>, <a href="#linkFour" key="four">
        Simple link four
      </a>]];
  const testItemsMegaTwo = [[<a href="#linkFive" key="one">
        Simple link five
      </a>, <a href="#linkSix" key="two">
        Simple link six
      </a>], [<a href="#linkSeven" key="three">
        Simple link seven
      </a>, <a href="#linkEight" key="four">
        Simple link eight
      </a>]];
  const [isOpen, setIsOpen] = useState([false, false]);
  const testItemsMegaMenu = [<>
      <NavDropDownButton onToggle={(): void => {
      onToggle(0, setIsOpen);
    }} menuId="testDropDownOne" isOpen={isOpen[0]} label="Nav Label" isCurrent={true} />
      <MegaMenu key="one" items={testItemsMegaOne} isOpen={isOpen[0]} id="testDropDownOne" />
    </>, <>
      <NavDropDownButton onToggle={(): void => {
      onToggle(1, setIsOpen);
    }} menuId="testDropDownTwo" isOpen={isOpen[1]} label="Nav Label" />
      <MegaMenu key="one" items={testItemsMegaTwo} isOpen={isOpen[1]} id="testDropDownTwo" />
    </>, <a href="#two" key="two" className="usa-nav__link">
      <span>Parent link</span>
    </a>, <a href="#three" key="three" className="usa-nav__link">
      <span>Parent link</span>
    </a>];
  return <>
      <Header basic={true} basicWithMegaMenu={true} showMobileOverlay={expanded}>
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <Title>Project Title</Title>
            <NavMenuButton onClick={onClick} label="Menu" />
          </div>
          <PrimaryNav items={testItemsMegaMenu} mobileExpanded={expanded} onToggleMobileNav={onClick}>
            <Search size="small" onSubmit={mockSubmit} />
          </PrimaryNav>
        </div>
      </Header>
    </>;
}`,...(E=(D=v.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var _,C,P;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`(): React.ReactElement => {
  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => setExpanded(prvExpanded => !prvExpanded);
  const [isOpen, setIsOpen] = useState([false]);
  const testMenuItems = [<a href="#linkOne" key="one">
      Simple link one
    </a>, <a href="#linkTwo" key="two">
      Simple link two
    </a>];
  const testItemsMenu = [<>
      <NavDropDownButton onToggle={(): void => {
      onToggle(0, setIsOpen);
    }} menuId="testDropDownOne" isOpen={isOpen[0]} label="Nav Label" isCurrent={true} />
      <Menu key="one" items={testMenuItems} isOpen={isOpen[0]} id="testDropDownOne" />
    </>, <a href="#two" key="two" className="usa-nav__link">
      <span>Parent link</span>
    </a>, <a href="#three" key="three" className="usa-nav__link">
      <span>Parent link</span>
    </a>];
  return <>
      <Header extended={true} showMobileOverlay={expanded}>
        <div className="usa-navbar">
          <Title>Project Title</Title>
          <NavMenuButton onClick={onClick} label="Menu" />
        </div>
        <ExtendedNav primaryItems={testItemsMenu} secondaryItems={testMenuItems} mobileExpanded={expanded} onToggleMobileNav={onClick}>
          <Search size="small" onSubmit={mockSubmit} />
        </ExtendedNav>
      </Header>
    </>;
}`,...(P=(C=f.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var H,B,j;O.parameters={...O.parameters,docs:{...(H=O.parameters)==null?void 0:H.docs,source:{originalSource:`(): React.ReactElement => {
  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => setExpanded(prvExpanded => !prvExpanded);
  const testMenuItems = [<a href="#linkOne" key="one">
      Simple link one
    </a>, <a href="#linkTwo" key="two">
      Simple link two
    </a>];
  const testItemsMegaOne = [[<a href="#linkOne" key="one">
        Simple link one
      </a>, <a href="#linkTwo" key="two">
        Simple link two
      </a>], [<a href="#linkThree" key="three">
        Simple link three
      </a>, <a href="#linkFour" key="four">
        Simple link four
      </a>]];
  const [isOpen, setIsOpen] = useState([false, false]);
  const testItemsMenu = [<>
      <NavDropDownButton onToggle={(): void => {
      onToggle(0, setIsOpen);
    }} menuId="testDropDownOne" isOpen={isOpen[0]} label="Nav Label" isCurrent={true} />
      <MegaMenu key="one" items={testItemsMegaOne} isOpen={isOpen[0]} id="testDropDownOne" />
    </>, <a href="#two" key="two" className="usa-nav__link">
      <span>Parent link</span>
    </a>, <a href="#three" key="three" className="usa-nav__link">
      <span>Parent link</span>
    </a>];
  return <>
      <Header extended={true} showMobileOverlay={expanded}>
        <div className="usa-navbar">
          <Title>Project Title</Title>
          <NavMenuButton onClick={onClick} label="Menu" />
        </div>
        <ExtendedNav primaryItems={testItemsMenu} secondaryItems={testMenuItems} mobileExpanded={expanded} onToggleMobileNav={onClick}>
          <Search size="small" onSubmit={mockSubmit} />
        </ExtendedNav>
      </Header>
    </>;
}`,...(j=(B=O.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};const le=["BasicHeader","BasicHeaderWithMegaMenu","ExtendedHeader","ExtendedHeaderWithMegaMenu"];export{k as BasicHeader,v as BasicHeaderWithMegaMenu,f as ExtendedHeader,O as ExtendedHeaderWithMegaMenu,le as __namedExportsOrder,oe as default};
