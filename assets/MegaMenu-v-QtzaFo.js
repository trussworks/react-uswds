import{j as e}from"./jsx-runtime-CKrituN3.js";import{c as l}from"./index-Bl6ORisp.js";import{N as o}from"./NavList-CQFzsEUl.js";const u=({items:a,isOpen:n,className:s,...r})=>{const t=l("usa-nav__submenu usa-megamenu",s);return e.jsx("div",{className:t,hidden:!n,"data-testid":"megamenu",children:e.jsx("div",{className:"grid-row grid-gap-4",children:a.map((m,i)=>e.jsx("div",{className:"usa-col",children:e.jsx(o,{items:m,type:"megamenu",...r})},`subnav_col_${i}`))})})};u.__docgenInfo={description:"",methods:[],displayName:"MegaMenu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},type:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'subnav'
| 'megamenu'
| 'footerSecondary'
| 'language'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'subnav'"},{name:"literal",value:"'megamenu'"},{name:"literal",value:"'footerSecondary'"},{name:"literal",value:"'language'"}]},description:""}}};export{u as M};
