import{j as o,a as $}from"./jsx-runtime-2xDJh5tt.js";import{R as oo}from"./index-CBqU2yxZ.js";import{T as e}from"./Tooltip-SqitgIlY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const lo={title:"Components/Tooltip",component:e,parameters:{happo:{targets:["chrome","firefox","edge","safari"],beforeScreenshot:()=>{var t;const h=new MouseEvent("mouseover",{view:window,bubbles:!0,cancelable:!0});(t=document.querySelector(".usa-tooltip__trigger"))==null||t.dispatchEvent(h)},waitFor:()=>document.querySelector(".usa-tooltip__body.is-visible.is-set")},docs:{description:{component:`
### USWDS 3.0 Tooltip component

Source: https://designsystem.digital.gov/components/tooltip/
`}}}},a=()=>o("div",{className:"margin-4",children:o(e,{label:"Default",children:"Default"})}),n=()=>o("div",{className:"margin-4",children:o(e,{position:"top",label:"Top",children:"Show on top"})}),i=()=>o("div",{className:"margin-4",children:o(e,{position:"bottom",label:"Bottom",children:"Show on bottom"})}),l=()=>o("div",{className:"margin-4",children:o(e,{position:"right",label:"Right",children:"Show on right"})}),r=()=>o("div",{className:"margin-4",children:o(e,{position:"left",label:"Left",children:"Show on left"})}),s=()=>o("div",{className:"margin-4",children:o(e,{wrapperclasses:"width-full tablet:width-auto",position:"right",label:"Right",children:"Show on right"})}),c=()=>{const h=({to:G,className:K,children:Q,...V},Z)=>o("a",{ref:Z,href:G,className:K,...V,children:Q}),t=oo.forwardRef(h);return o("div",{className:"margin-4",children:$("p",{children:[o(e,{label:"Follow Link",asCustom:t,to:"http://www.truss.works",children:"This"})," is a custom component link."]})})},p=()=>o("div",{style:{marginTop:"32px"},children:o(e,{label:"You can only add 10 links to a collection. To add more links, please create a new collection.",children:"Default"})}),m=()=>o("div",{style:{position:"absolute",bottom:"32px"},children:o(e,{label:"You can only add 10 links to a collection. To add more links, please create a new collection.",children:"Default"})}),d=()=>o("div",{style:{marginTop:"32px",textAlign:"right"},children:o(e,{label:"You can only add 10 links to a collection. To add more links, please create a new collection.",children:"Default"})}),u=()=>o("div",{style:{position:"absolute",bottom:"32px",width:"100%",left:"0",paddingRight:"32px",textAlign:"right"},children:o(e,{label:"You can only add 10 links to a collection. To add more links, please create a new collection.",children:"Default"})});var T,g,f;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`(): React.ReactElement => <div className="margin-4">
    <Tooltip label="Default">Default</Tooltip>
  </div>`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var R,w,b;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`(): React.ReactElement => <div className="margin-4">
    <Tooltip position="top" label="Top">
      Show on top
    </Tooltip>
  </div>`,...(b=(w=n.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var v,k,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`(): React.ReactElement => <div className="margin-4">
    <Tooltip position="bottom" label="Bottom">
      Show on bottom
    </Tooltip>
  </div>`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var y,L,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`(): React.ReactElement => <div className="margin-4">
    <Tooltip position="right" label="Right">
      Show on right
    </Tooltip>
  </div>`,...(C=(L=l.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var x,N,E;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`(): React.ReactElement => <div className="margin-4">
    <Tooltip position="left" label="Left">
      Show on left
    </Tooltip>
  </div>`,...(E=(N=r.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var D,W,B;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`(): React.ReactElement => <div className="margin-4">
    <Tooltip wrapperclasses="width-full tablet:width-auto" position="right" label="Right">
      Show on right
    </Tooltip>
  </div>`,...(B=(W=s.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var F,Y,A;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(A=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};var P,_,j;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`(): React.ReactElement => <div style={{
  marginTop: '32px'
}}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>`,...(j=(_=p.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var M,U,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`(): React.ReactElement => <div style={{
  position: 'absolute',
  bottom: '32px'
}}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>`,...(q=(U=m.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var H,I,J;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`(): React.ReactElement => <div style={{
  marginTop: '32px',
  textAlign: 'right'
}}>
    <Tooltip label="You can only add 10 links to a collection. To add more links, please create a new collection.">
      Default
    </Tooltip>
  </div>`,...(J=(I=d.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var O,X,z;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`(): React.ReactElement => <div style={{
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
  </div>`,...(z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};const ro=["TooltipDefault","TooltipTop","TooltipBottom","TooltipRight","TooltipLeft","TooltipWithUtilityClass","CustomComponent","TooltipTopLeftWrap","TooltipBottomLeftWrap","TooltipTopRightWrap","TooltipBottomRightWrap"];export{c as CustomComponent,i as TooltipBottom,m as TooltipBottomLeftWrap,u as TooltipBottomRightWrap,a as TooltipDefault,r as TooltipLeft,l as TooltipRight,n as TooltipTop,p as TooltipTopLeftWrap,d as TooltipTopRightWrap,s as TooltipWithUtilityClass,ro as __namedExportsOrder,lo as default};
