import{a as t,j as r}from"./jsx-runtime-2xDJh5tt.js";import{B as c,a as e,b as n}from"./BreadcrumbLink-DWybuNZ4.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./Link-D3tnaV38.js";const H={title:"Components/Breadcrumb",component:c,subcomponents:{Breadcrumb:e,BreadcrumbLink:n},parameters:{docs:{description:{component:`
### USWDS 3.0 Breadcrumb component

Provide secondary navigation to help users understand where they are in a website.
    
Source: https://designsystem.digital.gov/components/breadcrumb/
        `}}}},s=()=>t(c,{children:[r(e,{children:r(n,{href:"#",children:r("span",{children:"Home"})})}),r(e,{children:r(n,{href:"#",children:r("span",{children:"Federal Contracting"})})}),r(e,{children:r(n,{href:"#",children:r("span",{children:"Contracting assistance programs"})})}),r(e,{current:!0,children:r("span",{children:"Women-owned small business federal contracting program"})})]}),o=()=>{const a={ol:{vocab:"http://schema.org/",typeof:"BreadcrumbList"},li:{property:"itemListElement",typeof:"ListItem"},a:{property:"item",typeof:"WebPage"}};return t(c,{listProps:{...a.ol},children:[t(e,{...a.li,children:[r(n,{href:"#",...a.a,children:r("span",{property:"name",children:"Home"})}),r("meta",{property:"position",content:"1"})]}),t(e,{...a.li,children:[r(n,{href:"#",...a.a,children:r("span",{property:"name",children:"Federal Contracting"})}),r("meta",{property:"position",content:"2"})]}),t(e,{...a.li,children:[r(n,{href:"#",...a.a,children:r("span",{property:"name",children:"Contracting assistance programs"})}),r("meta",{property:"position",content:"3"})]}),t(e,{current:!0,...a.li,children:[r("span",{property:"name",children:"Women-owned small business federal contracting program"}),r("meta",{property:"position",content:"4"})]})]})},i=()=>t(c,{variant:"wrap",children:[r(e,{children:r(n,{href:"#",children:r("span",{children:"Home"})})}),r(e,{children:r(n,{href:"#",children:r("span",{children:"Federal Contracting"})})}),r(e,{children:r(n,{href:"#",children:r("span",{children:"Contracting assistance programs"})})}),r(e,{current:!0,children:r("span",{children:"Women-owned small business federal contracting program"})})]}),m=()=>{const a=({to:C,className:M,children:w,...W})=>r("a",{href:C,className:M,...W,children:w});return t(c,{children:[r(e,{children:r(n,{className:"abc",asCustom:a,to:"#",children:"Home"})}),r(e,{children:r(n,{className:"abc",asCustom:a,to:"#",children:"Federal Contracting"})}),r(e,{children:r(n,{className:"abc",asCustom:a,to:"#",children:"Contracting assistance programs"})}),r(e,{current:!0,children:"Women-owned small business federal contracting program"})]})};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(): React.ReactElement => <BreadcrumbBar>
    <Breadcrumb>
      <BreadcrumbLink href="#">
        <span>Home</span>
      </BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbLink href="#">
        <span>Federal Contracting</span>
      </BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbLink href="#">
        <span>Contracting assistance programs</span>
      </BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb current>
      <span>Women-owned small business federal contracting program</span>
    </Breadcrumb>
  </BreadcrumbBar>`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,b,B;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`(): React.ReactElement => {
  const rdfaMetadata = {
    ol: {
      vocab: 'http://schema.org/',
      typeof: 'BreadcrumbList'
    },
    li: {
      property: 'itemListElement',
      typeof: 'ListItem'
    },
    a: {
      property: 'item',
      typeof: 'WebPage'
    }
  };
  return <BreadcrumbBar listProps={{
    ...rdfaMetadata.ol
  }}>
      <Breadcrumb {...rdfaMetadata.li}>
        <BreadcrumbLink href="#" {...rdfaMetadata.a}>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <span property="name">Home</span>
        </BreadcrumbLink>
        <meta property="position" content="1" />
      </Breadcrumb>
      <Breadcrumb {...rdfaMetadata.li}>
        <BreadcrumbLink href="#" {...rdfaMetadata.a}>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <span property="name">Federal Contracting</span>
        </BreadcrumbLink>
        <meta property="position" content="2" />
      </Breadcrumb>
      <Breadcrumb {...rdfaMetadata.li}>
        <BreadcrumbLink href="#" {...rdfaMetadata.a}>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <span property="name">Contracting assistance programs</span>
        </BreadcrumbLink>
        <meta property="position" content="3" />
      </Breadcrumb>
      <Breadcrumb current {...rdfaMetadata.li}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <span property="name">
          Women-owned small business federal contracting program
        </span>
        <meta property="position" content="4" />
      </Breadcrumb>
    </BreadcrumbBar>;
}`,...(B=(b=o.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var h,g,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`(): React.ReactElement => <BreadcrumbBar variant="wrap">
    <Breadcrumb>
      <BreadcrumbLink href="#">
        <span>Home</span>
      </BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbLink href="#">
        <span>Federal Contracting</span>
      </BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb>
      <BreadcrumbLink href="#">
        <span>Contracting assistance programs</span>
      </BreadcrumbLink>
    </Breadcrumb>
    <Breadcrumb current>
      <span>Women-owned small business federal contracting program</span>
    </Breadcrumb>
  </BreadcrumbBar>`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var k,L,y;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`(): React.ReactElement => {
  type MockLinkProps = React.PropsWithChildren<{
    to: string;
    className: string;
  }> & JSX.IntrinsicElements['a'];
  const CustomLink: React.FunctionComponent<MockLinkProps> = ({
    to,
    className,
    children,
    ...linkProps
  }: MockLinkProps): React.ReactElement => <a href={to} className={className} {...linkProps}>
      {children}
    </a>;
  return <BreadcrumbBar>
      <Breadcrumb>
        <BreadcrumbLink<MockLinkProps> className="abc" asCustom={CustomLink} to="#">
          Home
        </BreadcrumbLink>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink<MockLinkProps> className="abc" asCustom={CustomLink} to="#">
          Federal Contracting
        </BreadcrumbLink>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbLink<MockLinkProps> className="abc" asCustom={CustomLink} to="#">
          Contracting assistance programs
        </BreadcrumbLink>
      </Breadcrumb>
      <Breadcrumb current>
        Women-owned small business federal contracting program
      </Breadcrumb>
    </BreadcrumbBar>;
}`,...(y=(L=m.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};const S=["DefaultBreadcrumb","BreadcrumbWithRdfaMetadata","WrappingBreadcrumb","CustomBreadcrumbLinks"];export{o as BreadcrumbWithRdfaMetadata,m as CustomBreadcrumbLinks,s as DefaultBreadcrumb,i as WrappingBreadcrumb,S as __namedExportsOrder,H as default};
