import{j as r}from"./jsx-runtime-CKrituN3.js";import{B as i,a as e,b as n}from"./BreadcrumbLink-B71CO-IG.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./Link-CkSfpXjB.js";const _={title:"Components/Breadcrumb",component:i,subcomponents:{Breadcrumb:e,BreadcrumbLink:n},parameters:{docs:{description:{component:`
### USWDS 3.0 Breadcrumb component

Provide secondary navigation to help users understand where they are in a website.
    
Source: https://designsystem.digital.gov/components/breadcrumb/
        `}}}},s=()=>r.jsxs(i,{children:[r.jsx(e,{children:r.jsx(n,{href:"#",children:r.jsx("span",{children:"Home"})})}),r.jsx(e,{children:r.jsx(n,{href:"#",children:r.jsx("span",{children:"Federal Contracting"})})}),r.jsx(e,{children:r.jsx(n,{href:"#",children:r.jsx("span",{children:"Contracting assistance programs"})})}),r.jsx(e,{current:!0,children:r.jsx("span",{children:"Women-owned small business federal contracting program"})})]}),t=()=>{const a={ol:{vocab:"http://schema.org/",typeof:"BreadcrumbList"},li:{property:"itemListElement",typeof:"ListItem"},a:{property:"item",typeof:"WebPage"}};return r.jsxs(i,{listProps:{...a.ol},children:[r.jsxs(e,{...a.li,children:[r.jsx(n,{href:"#",...a.a,children:r.jsx("span",{property:"name",children:"Home"})}),r.jsx("meta",{property:"position",content:"1"})]}),r.jsxs(e,{...a.li,children:[r.jsx(n,{href:"#",...a.a,children:r.jsx("span",{property:"name",children:"Federal Contracting"})}),r.jsx("meta",{property:"position",content:"2"})]}),r.jsxs(e,{...a.li,children:[r.jsx(n,{href:"#",...a.a,children:r.jsx("span",{property:"name",children:"Contracting assistance programs"})}),r.jsx("meta",{property:"position",content:"3"})]}),r.jsxs(e,{current:!0,...a.li,children:[r.jsx("span",{property:"name",children:"Women-owned small business federal contracting program"}),r.jsx("meta",{property:"position",content:"4"})]})]})},c=()=>r.jsxs(i,{variant:"wrap",children:[r.jsx(e,{children:r.jsx(n,{href:"#",children:r.jsx("span",{children:"Home"})})}),r.jsx(e,{children:r.jsx(n,{href:"#",children:r.jsx("span",{children:"Federal Contracting"})})}),r.jsx(e,{children:r.jsx(n,{href:"#",children:r.jsx("span",{children:"Contracting assistance programs"})})}),r.jsx(e,{current:!0,children:r.jsx("span",{children:"Women-owned small business federal contracting program"})})]}),o=()=>{const a=({to:k,className:L,children:y,...C})=>r.jsx("a",{href:k,className:L,...C,children:y});return r.jsxs(i,{children:[r.jsx(e,{children:r.jsx(n,{className:"abc",asCustom:a,to:"#",children:"Home"})}),r.jsx(e,{children:r.jsx(n,{className:"abc",asCustom:a,to:"#",children:"Federal Contracting"})}),r.jsx(e,{children:r.jsx(n,{className:"abc",asCustom:a,to:"#",children:"Contracting assistance programs"})}),r.jsx(e,{current:!0,children:"Women-owned small business federal contracting program"})]})};s.__docgenInfo={description:"",methods:[],displayName:"DefaultBreadcrumb"};t.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbWithRdfaMetadata"};c.__docgenInfo={description:"",methods:[],displayName:"WrappingBreadcrumb"};o.__docgenInfo={description:"",methods:[],displayName:"CustomBreadcrumbLinks"};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(): React.ReactElement => <BreadcrumbBar>
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
  </BreadcrumbBar>`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,l,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(b=(l=t.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};var B,h,g;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`(): React.ReactElement => <BreadcrumbBar variant="wrap">
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
  </BreadcrumbBar>`,...(g=(h=c.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const E=["DefaultBreadcrumb","BreadcrumbWithRdfaMetadata","WrappingBreadcrumb","CustomBreadcrumbLinks"];export{t as BreadcrumbWithRdfaMetadata,o as CustomBreadcrumbLinks,s as DefaultBreadcrumb,c as WrappingBreadcrumb,E as __namedExportsOrder,_ as default};
