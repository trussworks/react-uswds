import{a,j as e}from"./jsx-runtime-2xDJh5tt.js";import{L as n}from"./Link-D4aif8TW.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const O={title:"Components/Link",component:n,parameters:{docs:{description:{component:`
Based on Typography guide: https://designsystem.digital.gov/components/typography/#links
`}}}},s=()=>a("p",{children:[e(n,{href:"#",children:" This"})," is a text link."]}),t=()=>a("p",{children:[e(n,{className:"usa-color-text-visited",href:"#",children:"This"})," is a visited link."]}),r=()=>e("div",{className:"usa-dark-background",style:{padding:"10px"},children:a("p",{children:[e(n,{href:"#",children:"This"})," is a text link on a dark background"]})}),i=()=>a("p",{children:["This is a link that goes to an ",e(n,{variant:"external",href:"http://www.truss.works",children:"external website"}),"."]}),o=()=>a("p",{children:["This is a ",e(n,{variant:"nav",href:"#",children:"NavLink"})]}),c=()=>a("p",{children:[e(n,{className:"usa-button",variant:"unstyled",allowSpacebarActivation:!0,href:"#",children:"This"}),"is a link styled to look like a button; it can be activated with the spacebar."]}),p=()=>a("p",{children:[e(n,{className:"abc",asCustom:({to:B,className:A,children:D,...M})=>e("a",{href:B,className:A,...M,children:D}),to:"http://www.truss.works",children:"This"})," is a custom component link."]});var l,d,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`(): React.ReactElement => <p>
    <Link href={'#'}> This</Link> is a text link.
  </p>`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var k,u,h;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`(): React.ReactElement => <p>
    <Link className="usa-color-text-visited" href={'#'}>
      This
    </Link>
    &nbsp;is a visited link.
  </p>`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var L,g,v;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`(): React.ReactElement => <div className="usa-dark-background" style={{
  padding: '10px'
}}>
    <p>
      <Link href={'#'}>This</Link> is a text link on a dark background
    </p>
  </div>`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,w,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`(): React.ReactElement => <p>
    This is a link that goes to an&nbsp;
    <Link variant="external" href={'http://www.truss.works'}>
      external website
    </Link>
    .
  </p>`,...(f=(w=i.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var x,R,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`(): React.ReactElement => <p>
    This is a&nbsp;
    <Link variant="nav" href={'#'}>
      NavLink
    </Link>
  </p>`,...(N=(R=o.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var T,y,C;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`(): React.ReactElement => <p>
    <Link className="usa-button" variant="unstyled" allowSpacebarActivation href={'#'}>
      This
    </Link>
    is a link styled to look like a button; it can be activated with the
    spacebar.
  </p>`,...(C=(y=c.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var E,S,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(P=(S=p.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const W=["Default","Visited","DarkBackground","ExternalLink","NavLink","StyledAsButton","CustomComponentLink"];export{p as CustomComponentLink,r as DarkBackground,s as Default,i as ExternalLink,o as NavLink,c as StyledAsButton,t as Visited,W as __namedExportsOrder,O as default};
