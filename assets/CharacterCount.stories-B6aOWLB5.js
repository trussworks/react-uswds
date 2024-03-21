import{j as t}from"./jsx-runtime-CKrituN3.js";import{C as i}from"./CharacterCount-DPNFkxL5.js";import{F as h}from"./Form-EF6HmHLa.js";import{F as o}from"./FormGroup-9HSr8Yaw.js";import{L as s}from"./Label-CfwuEpQt.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";import"./TextInput-DL9q-H81.js";import"./Textarea-CDk2QcGd.js";const A={title:"Components/CharacterCount",component:i,parameters:{docs:{description:{component:`
### USWDS 3.0 Character count component

Source: https://designsystem.digital.gov/components/character-count
`}}}},c=()=>{},r=()=>t.jsx(h,{onSubmit:c,children:t.jsxs(o,{children:[t.jsx(s,{htmlFor:"with-hint-input",children:"Text input"}),t.jsx("span",{id:"with-hint-input-hint",className:"usa-hint",children:"This is an input with a character counter."}),t.jsx(i,{id:"with-hint-input",name:"with-hint-input","aria-describedby":"with-hint-input-info with-hint-input-hint",maxLength:25})]})}),n=()=>t.jsx(h,{onSubmit:c,children:t.jsxs(o,{children:[t.jsx(s,{htmlFor:"with-hint-textarea",children:"Textarea"}),t.jsx("span",{id:"with-hint-textarea-hint",className:"usa-hint",children:"This is a textarea with a character counter."}),t.jsx(i,{id:"with-hint-textarea",name:"with-hint-textarea",maxLength:50,isTextArea:!0,rows:2,"aria-describedby":"with-hint-textarea-info with-hint-textarea-hint"})]})}),g=()=>{const C=e=>{const a=(e.match(/⭐️/g)||[]).length;return Array.from(e).length-a*2},f=(e,a)=>{const m=a-e;return m>=0?`${m} of ${a} remain`:""},T=(e,a)=>a-e<5?`${a-e}`:"";return t.jsxs(h,{onSubmit:c,children:[t.jsxs(o,{children:[t.jsx(s,{htmlFor:"character-count-input",children:"Custom - stars are free"}),t.jsx(i,{id:"character-count-input",name:"characterCountInput",defaultValue:"⭐️⭐️⭐️",getCharacterCount:C,getMessage:f,maxLength:10})]}),t.jsxs(o,{children:[t.jsx(s,{htmlFor:"character-count-textarea",children:"Custom - Twitter style"}),t.jsx(i,{id:"character-count-textarea",name:"characterCountTextArea",isTextArea:!0,defaultValue:"In most cases, the text content of a Tweet can contain up to 280 characters or Unicode glyphs. The exact definition of which characters have weights greater than one character is found in the configuration file for the twitter-text Tweet parsing library. This is just an example using regex😇",maxLength:280,getMessage:T})]})]})};g.parameters={happo:{delay:100}};r.__docgenInfo={description:"",methods:[],displayName:"TextInput"};n.__docgenInfo={description:"",methods:[],displayName:"Textarea"};g.__docgenInfo={description:"",methods:[],displayName:"withCustomCharacterCount"};var u,p,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(): React.ReactElement => <Form onSubmit={mockSubmit}>
    <FormGroup>
      <Label htmlFor="with-hint-input">Text input</Label>
      <span id="with-hint-input-hint" className="usa-hint">
        This is an input with a character counter.
      </span>
      <CharacterCount id="with-hint-input" name="with-hint-input" aria-describedby="with-hint-input-info with-hint-input-hint" maxLength={25} />
    </FormGroup>
  </Form>`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var x,l,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`(): React.ReactElement => <Form onSubmit={mockSubmit}>
    <FormGroup>
      <Label htmlFor="with-hint-textarea">Textarea</Label>
      <span id="with-hint-textarea-hint" className="usa-hint">
        This is a textarea with a character counter.
      </span>
      <CharacterCount id="with-hint-textarea" name="with-hint-textarea" maxLength={50} isTextArea rows={2} aria-describedby="with-hint-textarea-info with-hint-textarea-hint" />
    </FormGroup>
  </Form>`,...(w=(l=n.parameters)==null?void 0:l.docs)==null?void 0:w.source}}};const G=["TextInput","Textarea","withCustomCharacterCount"];export{r as TextInput,n as Textarea,G as __namedExportsOrder,A as default,g as withCustomCharacterCount};
