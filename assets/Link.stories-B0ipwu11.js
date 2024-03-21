import{j as e}from"./jsx-runtime-CKrituN3.js";import{L as s}from"./Link-CkSfpXjB.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const J={title:"Components/Link",component:s,parameters:{docs:{description:{component:`
Based on Typography guide: https://designsystem.digital.gov/components/typography/#links
`}}}},n=()=>e.jsxs("p",{children:[e.jsx(s,{href:"#",children:" This"})," is a text link."]}),a=()=>e.jsxs("p",{children:[e.jsx(s,{className:"usa-color-text-visited",href:"#",children:"This"})," is a visited link."]}),t=()=>e.jsx("div",{className:"usa-dark-background",style:{padding:"10px"},children:e.jsxs("p",{children:[e.jsx(s,{href:"#",children:"This"})," is a text link on a dark background"]})}),r=()=>e.jsxs("p",{children:["This is a link that goes to an ",e.jsx(s,{variant:"external",href:"http://www.truss.works",children:"external website"}),"."]}),i=()=>e.jsxs("p",{children:["This is a ",e.jsx(s,{variant:"nav",href:"#",children:"NavLink"})]}),o=()=>e.jsxs("p",{children:[e.jsx(s,{className:"usa-button",variant:"unstyled",allowSpacebarActivation:!0,href:"#",children:"This"}),"is a link styled to look like a button; it can be activated with the spacebar."]}),c=()=>{const E=({to:S,className:I,children:B,...P})=>e.jsx("a",{href:S,className:I,...P,children:B});return e.jsxs("p",{children:[e.jsx(s,{className:"abc",asCustom:E,to:"http://www.truss.works",children:"This"})," is a custom component link."]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Visited"};t.__docgenInfo={description:"",methods:[],displayName:"DarkBackground"};r.__docgenInfo={description:"",methods:[],displayName:"ExternalLink"};i.__docgenInfo={description:"",methods:[],displayName:"NavLink"};o.__docgenInfo={description:"",methods:[],displayName:"StyledAsButton"};c.__docgenInfo={description:"",methods:[],displayName:"CustomComponentLink"};var p,d,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`(): React.ReactElement => <p>
    <Link href={'#'}> This</Link> is a text link.
  </p>`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,k,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`(): React.ReactElement => <p>
    <Link className="usa-color-text-visited" href={'#'}>
      This
    </Link>
    &nbsp;is a visited link.
  </p>`,...(h=(k=a.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var u,L,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`(): React.ReactElement => <div className="usa-dark-background" style={{
  padding: '10px'
}}>
    <p>
      <Link href={'#'}>This</Link> is a text link on a dark background
    </p>
  </div>`,...(x=(L=t.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var g,f,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`(): React.ReactElement => <p>
    This is a link that goes to an&nbsp;
    <Link variant="external" href={'http://www.truss.works'}>
      external website
    </Link>
    .
  </p>`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var N,b,w;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`(): React.ReactElement => <p>
    This is a&nbsp;
    <Link variant="nav" href={'#'}>
      NavLink
    </Link>
  </p>`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,R,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`(): React.ReactElement => <p>
    <Link className="usa-button" variant="unstyled" allowSpacebarActivation href={'#'}>
      This
    </Link>
    is a link styled to look like a button; it can be activated with the
    spacebar.
  </p>`,...(j=(R=o.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var _,T,C;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`(): React.ReactElement => {
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
  return <p>
      <Link<MockLinkProps> className="abc" asCustom={CustomLink} to="http://www.truss.works">
        This
      </Link>
      &nbsp;is a custom component link.
    </p>;
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const O=["Default","Visited","DarkBackground","ExternalLink","NavLink","StyledAsButton","CustomComponentLink"];export{c as CustomComponentLink,t as DarkBackground,n as Default,r as ExternalLink,i as NavLink,o as StyledAsButton,a as Visited,O as __namedExportsOrder,J as default};
