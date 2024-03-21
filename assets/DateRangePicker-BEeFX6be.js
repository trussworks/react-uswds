import{j as n}from"./jsx-runtime-CKrituN3.js";import{c as v}from"./index-Bl6ORisp.js";import{r as q}from"./index-CBqU2yxZ.js";import{D as T,p as l,f as t,a as j}from"./DatePicker-B51BLj-6.js";import{F as L}from"./FormGroup-9HSr8Yaw.js";import{L as P}from"./Label-CfwuEpQt.js";const O=b=>{const{startDateLabel:u,startDateHint:m,startDatePickerProps:r,endDateLabel:o,endDateHint:c,endDatePickerProps:i,className:h}=b,[d,H]=q.useState(r.defaultValue),[g,I]=q.useState(i.defaultValue),M=()=>{const{maxDate:s}=r,a=s&&l(s),e=g&&l(g);return e&&a?e.getTime()<a.getTime()?t(e):t(a):e&&t(e)||a&&t(a)||void 0},R=()=>{const{minDate:s}=i,a=s&&l(s),e=d&&l(d);return e&&a?e.getTime()>a.getTime()?t(e):t(a):e&&t(e)||a&&t(a)||void 0},D=(s,a)=>e=>{const y=e&&l(e,j);if(y){const N=t(y);a(N)}else a(e);s&&s(e)},F=D(r.onChange,H),w=D(i.onChange,I),S=v(h,"usa-date-range-picker"),C=v(r.className,"usa-date-range-picker__range-start"),x=v(i.className,"usa-date-range-picker__range-end"),p=`${r.id}-label`,E=`${r.id}-hint`,k=`${i.id}-label`,f=`${i.id}-hint`;return n.jsxs("div",{className:S,"data-testid":"date-range-picker",children:[n.jsxs(L,{children:[u&&n.jsx(P,{id:p,htmlFor:r.id,children:u}),m&&n.jsx("div",{className:"usa-hint",id:E,children:m}),n.jsx(T,{className:C,rangeDate:g,...r,"aria-labelledby":u&&p,"aria-describedby":m&&E,onChange:F,maxDate:M()})]}),n.jsxs(L,{children:[o&&n.jsx(P,{id:k,htmlFor:i.id,children:o}),c&&n.jsx("div",{className:"usa-hint",id:f,children:c}),n.jsx(T,{className:x,rangeDate:d,...i,"aria-labelledby":o&&k,"aria-describedby":c&&f,onChange:w,minDate:R()})]})]})};O.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{startDateLabel:{required:!1,tsType:{name:"string"},description:""},startDateHint:{required:!1,tsType:{name:"string"},description:""},startDatePickerProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`BaseDatePickerProps &
Omit<JSX.IntrinsicElements['input'], 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  id: string
  name: string
  className?: string
  validationStatus?: ValidationStatus
  disabled?: boolean
  required?: boolean
  defaultValue?: string
  minDate?: string
  maxDate?: string
  rangeDate?: string
  onChange?: (val?: string) => void
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLDivElement>
  ) => void
  i18n?: DatePickerLocalization
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"validationStatus",value:{name:"union",raw:"'error' | 'success'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"defaultValue",value:{name:"string",required:!1}},{key:"minDate",value:{name:"string",required:!1}},{key:"maxDate",value:{name:"string",required:!1}},{key:"rangeDate",value:{name:"string",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(val?: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}},required:!1}},{key:"onBlur",value:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLDivElement>
) => void`,signature:{arguments:[{type:{name:"union",raw:"React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLDivElement>",elements:[{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}},required:!1}},{key:"i18n",value:{name:"DatePickerLocalization",required:!1}}]}},{name:"Omit",elements:[{name:"JSX.IntrinsicElements['input']",raw:"JSX.IntrinsicElements['input']"},{name:"literal",value:"'onChange'"}],raw:"Omit<JSX.IntrinsicElements['input'], 'onChange'>"}]},{name:"literal",value:"'rangeDate'"}],raw:"Omit<DatePickerProps, 'rangeDate'>"},description:""},endDateLabel:{required:!1,tsType:{name:"string"},description:""},endDateHint:{required:!1,tsType:{name:"string"},description:""},endDatePickerProps:{required:!0,tsType:{name:"Omit",elements:[{name:"intersection",raw:`BaseDatePickerProps &
Omit<JSX.IntrinsicElements['input'], 'onChange'>`,elements:[{name:"signature",type:"object",raw:`{
  id: string
  name: string
  className?: string
  validationStatus?: ValidationStatus
  disabled?: boolean
  required?: boolean
  defaultValue?: string
  minDate?: string
  maxDate?: string
  rangeDate?: string
  onChange?: (val?: string) => void
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLDivElement>
  ) => void
  i18n?: DatePickerLocalization
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"validationStatus",value:{name:"union",raw:"'error' | 'success'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}],required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"required",value:{name:"boolean",required:!1}},{key:"defaultValue",value:{name:"string",required:!1}},{key:"minDate",value:{name:"string",required:!1}},{key:"maxDate",value:{name:"string",required:!1}},{key:"rangeDate",value:{name:"string",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(val?: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}},required:!1}},{key:"onBlur",value:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLDivElement>
) => void`,signature:{arguments:[{type:{name:"union",raw:"React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLDivElement>",elements:[{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}},required:!1}},{key:"i18n",value:{name:"DatePickerLocalization",required:!1}}]}},{name:"Omit",elements:[{name:"JSX.IntrinsicElements['input']",raw:"JSX.IntrinsicElements['input']"},{name:"literal",value:"'onChange'"}],raw:"Omit<JSX.IntrinsicElements['input'], 'onChange'>"}]},{name:"literal",value:"'rangeDate'"}],raw:"Omit<DatePickerProps, 'rangeDate'>"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{O as D};
