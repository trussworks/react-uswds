import{j as o}from"./jsx-runtime-CKrituN3.js";import{R as $}from"./index-CBqU2yxZ.js";import{T as e}from"./Tooltip-CH6-Dgmw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const so={title:"Components/Tooltip",component:e,parameters:{happo:{targets:["chrome","firefox","edge","safari"],beforeScreenshot:()=>{var u;const h=new MouseEvent("mouseover",{view:window,bubbles:!0,cancelable:!0});(u=document.querySelector(".usa-tooltip__trigger"))==null||u.dispatchEvent(h)},waitFor:()=>document.querySelector(".usa-tooltip__body.is-visible.is-set")},docs:{description:{component:`
### USWDS 3.0 Tooltip component

Source: https://designsystem.digital.gov/components/tooltip/
`}}}},t=()=>o.jsx("div",{className:"margin-4",children:o.jsx(e,{label:"Default",children:"Default"})}),a=()=>o.jsx("div",{className:"margin-4",children:o.jsx(e,{position:"top",label:"Top",children:"Show on top"})}),i=()=>o.jsx("div",{className:"margin-4",children:o.jsx(e,{position:"bottom",label:"Bottom",children:"Show on bottom"})}),s=()=>o.jsx("div",{className:"margin-4",children:o.jsx(e,{position:"right",label:"Right",children:"Show on right"})}),n=()=>o.jsx("div",{className:"margin-4",children:o.jsx(e,{position:"left",label:"Left",children:"Show on left"})}),l=()=>o.jsx("div",{className:"margin-4",children:o.jsx(e,{wrapperclasses:"width-full tablet:width-auto",position:"right",label:"Right",children:"Show on right"})}),r=()=>{const h=({to:G,className:K,children:Q,...V},Z)=>o.jsx("a",{ref:Z,href:G,className:K,...V,children:Q}),u=$.forwardRef(h);return o.jsx("div",{className:"margin-4",children:o.jsxs("p",{children:[o.jsx(e,{label:"Follow Link",asCustom:u,to:"http://www.truss.works",children:"This"})," is a custom component link."]})})},c=()=>o.jsx("div",{style:{marginTop:"32px"},children:o.jsx(e,{label:"You can only add 10 links to a collection. To add more links, please create a new collection.",children:"Default"})}),p=()=>o.jsx("div",{style:{position:"absolute",bottom:"32px"},children:o.jsx(e,{label:"You can only add 10 links to a collection. To add more links, please create a new collection.",children:"Default"})}),d=()=>o.jsx("div",{style:{marginTop:"32px",textAlign:"right"},children:o.jsx(e,{label:"You can only add 10 links to a collection. To add more links, please create a new collection.",children:"Default"})}),m=()=>o.jsx("div",{style:{position:"absolute",bottom:"32px",width:"100%",left:"0",paddingRight:"32px",textAlign:"right"},children:o.jsx(e,{label:"You can only add 10 links to a collection. To add more links, please create a new collection.",children:"Default"})});t.__docgenInfo={description:"",methods:[],displayName:"TooltipDefault"};a.__docgenInfo={description:"",methods:[],displayName:"TooltipTop"};i.__docgenInfo={description:"",methods:[],displayName:"TooltipBottom"};s.__docgenInfo={description:"",methods:[],displayName:"TooltipRight"};n.__docgenInfo={description:"",methods:[],displayName:"TooltipLeft"};l.__docgenInfo={description:"",methods:[],displayName:"TooltipWithUtilityClass"};r.__docgenInfo={description:"",methods:[],displayName:"CustomComponent"};c.__docgenInfo={description:"",methods:[],displayName:"TooltipTopLeftWrap"};p.__docgenInfo={description:"",methods:[],displayName:"TooltipBottomLeftWrap"};d.__docgenInfo={description:"",methods:[],displayName:"TooltipTopRightWrap"};m.__docgenInfo={description:"",methods:[],displayName:"TooltipBottomRightWrap"};var T,g,f;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`(): React.ReactElement => <div className="margin-4">
    <Tooltip label="Default">Default</Tooltip>
  </div>`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var R,w,b;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`(): React.ReactElement => <div className="margin-4">
    <Tooltip position="top" label="Top">
      Show on top
    </Tooltip>
  </div>`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var x,v,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`(): React.ReactElement => <div className="margin-4">
    <Tooltip position="bottom" label="Bottom">
      Show on bottom
    </Tooltip>
  </div>`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var k,N,_;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`(): React.ReactElement => <div className="margin-4">
    <Tooltip position="right" label="Right">
      Show on right
    </Tooltip>
  </div>`,...(_=(N=s.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var S,j,L;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`(): React.ReactElement => <div className="margin-4">
    <Tooltip position="left" label="Left">
      Show on left
    </Tooltip>
  </div>`,...(L=(j=n.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var C,E,W;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`(): React.ReactElement => <div className="margin-4">
    <Tooltip wrapperclasses="width-full tablet:width-auto" position="right" label="Right">
      Show on right
    </Tooltip>
  </div>`,...(W=(E=l.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var D,I,B;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`(): React.ReactElement => {
  type CustomLinkProps = React.PropsWithChildren<{
    to: string;
    className?: string;
  }> & JSX.IntrinsicElements['a'] & React.RefAttributes<HTMLAnchorElement>;
  const CustomLinkForwardRef: React.ForwardRefRenderFunction<HTMLAnchorElement, CustomLinkProps> = ({
    to,
    className,
    children,
    ...tooltipProps
  }: CustomLinkProps, ref) => <a ref={ref} href={to} className={className} {...tooltipProps}>
      {children}
    </a>;
  const CustomLink = React.forwardRef(CustomLinkForwardRef);
  return <div className="margin-4">
      <p>
        <Tooltip<CustomLinkProps> label="Follow Link" asCustom={CustomLink} to="http://www.truss.works">
          This
        </Tooltip>
        &nbsp;is a custom component link.
      </p>
    </div>;
}`,...(B=(I=r.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var F,Y,A;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`(): React.ReactElement => <div style={{
  marginTop: '32px'
}}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>`,...(A=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};var P,U,M;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`(): React.ReactElement => <div style={{
  position: 'absolute',
  bottom: '32px'
}}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>`,...(M=(U=p.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var q,H,J;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`(): React.ReactElement => <div style={{
  marginTop: '32px',
  textAlign: 'right'
}}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var O,X,z;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`(): React.ReactElement => <div style={{
  position: 'absolute',
  bottom: '32px',
  width: '100%',
  left: '0',
  paddingRight: '32px',
  textAlign: 'right'
}}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>`,...(z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};const no=["TooltipDefault","TooltipTop","TooltipBottom","TooltipRight","TooltipLeft","TooltipWithUtilityClass","CustomComponent","TooltipTopLeftWrap","TooltipBottomLeftWrap","TooltipTopRightWrap","TooltipBottomRightWrap"];export{r as CustomComponent,i as TooltipBottom,p as TooltipBottomLeftWrap,m as TooltipBottomRightWrap,t as TooltipDefault,n as TooltipLeft,s as TooltipRight,a as TooltipTop,c as TooltipTopLeftWrap,d as TooltipTopRightWrap,l as TooltipWithUtilityClass,no as __namedExportsOrder,so as default};
