import{j as t,a as r}from"./jsx-runtime-2xDJh5tt.js";import{C as n}from"./CharacterCount-Do7-TVqF.js";import{F as c}from"./Form-DNY-009I.js";import{F as h}from"./FormGroup-DUBGswQ6.js";import{L as s}from"./Label-RQBQRD89.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./TextInput-gKiZgmFb.js";import"./Textarea-BzlnUgDN.js";const N={title:"Components/CharacterCount",component:n,parameters:{docs:{description:{component:`
### USWDS 3.0 Character count component

Source: https://designsystem.digital.gov/components/character-count
`}}}},m=()=>{},i=()=>t(c,{onSubmit:m,children:r(h,{children:[t(s,{htmlFor:"with-hint-input",children:"Text input"}),t("span",{id:"with-hint-input-hint",className:"usa-hint",children:"This is an input with a character counter."}),t(n,{id:"with-hint-input",name:"with-hint-input","aria-describedby":"with-hint-input-info with-hint-input-hint",maxLength:25})]})}),o=()=>t(c,{onSubmit:m,children:r(h,{children:[t(s,{htmlFor:"with-hint-textarea",children:"Textarea"}),t("span",{id:"with-hint-textarea-hint",className:"usa-hint",children:"This is a textarea with a character counter."}),t(n,{id:"with-hint-textarea",name:"with-hint-textarea",maxLength:50,isTextArea:!0,rows:2,"aria-describedby":"with-hint-textarea-info with-hint-textarea-hint"})]})}),C=()=>r(c,{onSubmit:m,children:[r(h,{children:[t(s,{htmlFor:"character-count-input",children:"Custom - stars are free"}),t(n,{id:"character-count-input",name:"characterCountInput",defaultValue:"⭐️⭐️⭐️",getCharacterCount:e=>{const a=(e.match(/⭐️/g)||[]).length;return Array.from(e).length-a*2},getMessage:(e,a)=>{const u=a-e;return u>=0?`${u} of ${a} remain`:""},maxLength:10})]}),r(h,{children:[t(s,{htmlFor:"character-count-textarea",children:"Custom - Twitter style"}),t(n,{id:"character-count-textarea",name:"characterCountTextArea",isTextArea:!0,defaultValue:"In most cases, the text content of a Tweet can contain up to 280 characters or Unicode glyphs. The exact definition of which characters have weights greater than one character is found in the configuration file for the twitter-text Tweet parsing library. This is just an example using regex😇",maxLength:280,getMessage:(e,a)=>a-e<5?`${a-e}`:""})]})]});C.parameters={happo:{delay:100}};var p,d,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`(): React.ReactElement => <Form onSubmit={mockSubmit}>
    <FormGroup>
      <Label htmlFor="with-hint-input">Text input</Label>
      <span id="with-hint-input-hint" className="usa-hint">
        This is an input with a character counter.
      </span>
      <CharacterCount id="with-hint-input" name="with-hint-input" aria-describedby="with-hint-input-info with-hint-input-hint" maxLength={25} />
    </FormGroup>
  </Form>`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var w,x,g;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`(): React.ReactElement => <Form onSubmit={mockSubmit}>
    <FormGroup>
      <Label htmlFor="with-hint-textarea">Textarea</Label>
      <span id="with-hint-textarea-hint" className="usa-hint">
        This is a textarea with a character counter.
      </span>
      <CharacterCount id="with-hint-textarea" name="with-hint-textarea" maxLength={50} isTextArea rows={2} aria-describedby="with-hint-textarea-info with-hint-textarea-hint" />
    </FormGroup>
  </Form>`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const R=["TextInput","Textarea","withCustomCharacterCount"];export{i as TextInput,o as Textarea,R as __namedExportsOrder,N as default,C as withCustomCharacterCount};
