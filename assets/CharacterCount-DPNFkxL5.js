import{j as c}from"./jsx-runtime-CKrituN3.js";import{r as m}from"./index-CBqU2yxZ.js";import{c as T}from"./index-Bl6ORisp.js";import{T as q}from"./TextInput-DL9q-H81.js";import{T as B}from"./Textarea-CDk2QcGd.js";const w=a=>Array.from(a).length,A=(a,u)=>{const f=`${u} characters allowed`,r="$0 characters left",n="$0 character left",l="$0 character over limit",g="$0 characters over limit",s=u-a;switch(s){case u:return f;case 1:return n.replace("$0","1");case-1:return l.replace("$0","1");default:return s>=0?r.replace("$0",s.toString()):g.replace("$0",Math.abs(s).toString())}},I=({id:a,name:u,className:f,maxLength:r,value:n="",defaultValue:l="",isTextArea:g=!1,getCharacterCount:s=w,getMessage:F=A,...S})=>{const d=s(n||l),[p,P]=m.useState(d),[V,N]=m.useState(F(d,r)),[M,R]=m.useState(d<r),h=m.useRef(null),y=T("usa-character-count__field",f),b=T("usa-hint","usa-character-count__status",{"usa-character-count__status--invalid":!M});m.useEffect(()=>{const e=F(p,r);N(e),R(p<=r);const t=setTimeout(()=>{h.current&&(h.current.textContent=e)},1e3);return()=>clearTimeout(t)},[p]);const _=(e,t)=>{const o=M?"":"The content is too long.";e.target.setCustomValidity(o),t&&t(e)},j=(e,t)=>{const{target:{value:o=""}}=e;P(s(o)),t&&t(e)};let C;if(g){const{onBlur:e,onChange:t,inputRef:o,...v}=S,$={id:a,name:u,className:y,...n?{value:n}:{defaultValue:l},onBlur:i=>_(i,e),onChange:i=>j(i,t),inputRef:o,...v};C=c.jsx(B,{...$})}else{const{onBlur:e,onChange:t,inputRef:o,type:v="text",...$}=S,i={id:a,type:v,name:u,className:y,...n?{value:n}:{defaultValue:l},onBlur:x=>_(x,e),onChange:x=>j(x,t),inputRef:o,...$};C=c.jsx(q,{...i})}return c.jsxs(c.Fragment,{children:[C,c.jsxs("span",{className:"usa-sr-only",id:`${a}-info`,children:["You can enter up to ",r," characters"]}),c.jsx("div",{className:b,"aria-hidden":"true","data-testid":"characterCountMessage",children:V}),c.jsx("div",{ref:h,className:"usa-character-count__sr-status usa-sr-only","aria-live":"polite","data-testid":"characterCountSRMessage"})]})};I.__docgenInfo={description:"",methods:[],displayName:"CharacterCount",props:{value:{defaultValue:{value:"''",computed:!1},required:!1},defaultValue:{defaultValue:{value:"''",computed:!1},required:!1},isTextArea:{defaultValue:{value:"false",computed:!1},required:!1},getCharacterCount:{defaultValue:{value:"(text: string): number => Array.from(text).length",computed:!1},required:!1},getMessage:{defaultValue:{value:`(count: number, max: number): string => {
  const emptyMessageFormat = \`\${max} characters allowed\`
  const remainingPluralFormat = '$0 characters left'
  const remainingSingularFormat = '$0 character left'
  const overSingularFormat = '$0 character over limit'
  const overPluralFormat = '$0 characters over limit'
  const remainingCount = max - count

  switch (remainingCount) {
    case max:
      return emptyMessageFormat
    case 1:
      return remainingSingularFormat.replace('$0', '1')
    case -1:
      return overSingularFormat.replace('$0', '1')
    default:
      return remainingCount >= 0
        ? remainingPluralFormat.replace('$0', remainingCount.toString())
        : overPluralFormat.replace('$0', Math.abs(remainingCount).toString())
  }
}`,computed:!1},required:!1}}};export{I as C};
