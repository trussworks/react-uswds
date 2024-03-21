import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as x}from"./index-CBqU2yxZ.js";import{F as t}from"./FileInput-B1YhmZ5v.js";import{F as r}from"./FormGroup-9HSr8Yaw.js";import{L as l}from"./Label-CfwuEpQt.js";import{E as z}from"./ErrorMessage-CObF_KIU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const ie={title:"Components/File input",component:t,argTypes:{onChange:{action:"changed"},onDrop:{action:"dropped"}},parameters:{docs:{description:{component:`
### USWDS 3.0 FileInput component
Source: https://designsystem.digital.gov/components/file-input
`}}}},s=()=>e.jsxs(r,{children:[e.jsx(l,{htmlFor:"file-input-single",children:"Input accepts a single file"}),e.jsx(t,{id:"file-input-single",name:"file-input-single"})]}),a=()=>e.jsxs(r,{children:[e.jsx(l,{htmlFor:"file-input-specific",children:"Input accepts only specific file types"}),e.jsx("span",{className:"usa-hint",id:"file-input-specific-hint",children:"Select PDF or TXT files"}),e.jsx(t,{id:"file-input-specific",name:"file-input-specific",accept:".pdf,.txt","aria-describedby":"file-input-specific-hint",multiple:!0})]}),o=()=>e.jsxs(r,{children:[e.jsx(l,{htmlFor:"file-input-wildcard",children:"Input accepts any kind of image"}),e.jsx("span",{className:"usa-hint",id:"file-input-wildcard-hint",children:"Select any type of image format"}),e.jsx(t,{id:"file-input-wildcard",name:"file-input-wildcard",accept:"image/*","aria-describedby":"file-input-wildcard-hint",multiple:!0})]}),p=()=>e.jsxs(r,{children:[e.jsx(l,{htmlFor:"file-input-multiple",children:"Input accepts multiple files"}),e.jsx("span",{className:"usa-hint",id:"file-input-multiple-hint",children:"Select one or more files"}),e.jsx(t,{id:"file-input-multiple",name:"file-input-multiple","aria-describedby":"file-input-multiple-hint",multiple:!0})]}),c=()=>e.jsx("div",{style:{marginLeft:"1.25em"},children:e.jsxs(r,{error:!0,children:[e.jsx(l,{htmlFor:"file-input-error",error:!0,children:"Input has an error"}),e.jsx("span",{className:"usa-hint",id:"file-input-error-hint",children:"Select any valid file"}),e.jsx(z,{id:"file-input-error-alert",children:"Display a helpful error message"}),e.jsx(t,{id:"file-input-error",name:"file-input-error","aria-describedby":"file-input-error-hint file-input-error-alert"})]})}),u=()=>e.jsxs(r,{children:[e.jsx(l,{htmlFor:"file-input-disabled",children:"Input in a disabled state"}),e.jsx(t,{id:"file-input-disabled",name:"file-input-disabled",disabled:!0})]}),m={render:f=>{const[i,$]=x.useState(null),h=x.useRef(null),O=()=>{var n;return(n=h.current)==null?void 0:n.clearFiles()},U=n=>{var F;f.onChange(n),$((F=n.target)==null?void 0:F.files)},g=[];if(i)for(let n=0;n<(i==null?void 0:i.length);n++)g.push(e.jsx("li",{children:i==null?void 0:i[Number(n)].name},`file_${n}`));return e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(l,{htmlFor:"file-input-async",children:"Input implements custom handlers"}),e.jsx(t,{id:"file-input-async",name:"file-input-async",multiple:!0,onChange:U,onDrop:f.onDrop,ref:h})]}),e.jsx("button",{type:"button",onClick:O,children:"Clear files"}),e.jsxs("p",{children:[(i==null?void 0:i.length)||0," files added:"]}),e.jsx("ul",{children:g})]})}},d=()=>e.jsxs(r,{children:[e.jsx(l,{htmlFor:"file-input-single",children:"La entrada acepta un solo archivo"}),e.jsx(t,{id:"file-input-single",name:"file-input-single",dragText:"Arrastre el archivo aquí o ",chooseText:"elija de una carpeta",errorText:"Este no es un tipo de archivo válido.",accept:".no"})]});s.__docgenInfo={description:"",methods:[],displayName:"SingleFileInput"};a.__docgenInfo={description:"",methods:[],displayName:"AcceptTextAndPDF"};o.__docgenInfo={description:"",methods:[],displayName:"AcceptImages"};p.__docgenInfo={description:"",methods:[],displayName:"MultipleFilesInput"};c.__docgenInfo={description:"",methods:[],displayName:"WithError"};u.__docgenInfo={description:"",methods:[],displayName:"Disabled"};d.__docgenInfo={description:"",methods:[],displayName:"CustomText"};var b,I,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="file-input-single">Input accepts a single file</Label>
    <FileInput id="file-input-single" name="file-input-single" />
  </FormGroup>`,...(y=(I=s.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var j,L,R;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="file-input-specific">
      Input accepts only specific file types
    </Label>
    <span className="usa-hint" id="file-input-specific-hint">
      Select PDF or TXT files
    </span>
    <FileInput id="file-input-specific" name="file-input-specific" accept=".pdf,.txt" aria-describedby="file-input-specific-hint" multiple />
  </FormGroup>`,...(R=(L=a.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var S,E,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="file-input-wildcard">Input accepts any kind of image</Label>
    <span className="usa-hint" id="file-input-wildcard-hint">
      Select any type of image format
    </span>
    <FileInput id="file-input-wildcard" name="file-input-wildcard" accept="image/*" aria-describedby="file-input-wildcard-hint" multiple />
  </FormGroup>`,...(C=(E=o.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var T,_,v;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="file-input-multiple">Input accepts multiple files</Label>
    <span className="usa-hint" id="file-input-multiple-hint">
      Select one or more files
    </span>
    <FileInput id="file-input-multiple" name="file-input-multiple" aria-describedby="file-input-multiple-hint" multiple />
  </FormGroup>`,...(v=(_=p.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var D,G,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`(): React.ReactElement => <div style={{
  marginLeft: '1.25em'
}}>
    <FormGroup error>
      <Label htmlFor="file-input-error" error>
        Input has an error
      </Label>
      <span className="usa-hint" id="file-input-error-hint">
        Select any valid file
      </span>
      <ErrorMessage id="file-input-error-alert">
        Display a helpful error message
      </ErrorMessage>
      <FileInput id="file-input-error" name="file-input-error" aria-describedby="file-input-error-hint file-input-error-alert" />
    </FormGroup>
  </div>`,...(N=(G=c.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var A,w,M;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="file-input-disabled">Input in a disabled state</Label>
    <FileInput id="file-input-disabled" name="file-input-disabled" disabled />
  </FormGroup>`,...(M=(w=u.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var k,W,P;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (argTypes: StorybookArguments): React.ReactElement => {
    const [files, setFiles] = useState<FileList | null>(null);
    const fileInputRef = useRef<FileInputRef>(null);
    const handleClearFiles = (): void => fileInputRef.current?.clearFiles();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      argTypes.onChange(e);
      setFiles(e.target?.files);
    };
    const fileList = [];
    if (files) {
      for (let i = 0; i < files?.length; i++) {
        fileList.push(<li key={\`file_\${i}\`}>{files?.[Number(i)].name}</li>);
      }
    }
    return <>
        <FormGroup>
          <Label htmlFor="file-input-async">
            Input implements custom handlers
          </Label>
          <FileInput id="file-input-async" name="file-input-async" multiple onChange={handleChange} onDrop={argTypes.onDrop} ref={fileInputRef} />
        </FormGroup>

        <button type="button" onClick={handleClearFiles}>
          Clear files
        </button>

        <p>{files?.length || 0} files added:</p>
        <ul>{fileList}</ul>
      </>;
  }
}`,...(P=(W=m.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var H,q,X;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="file-input-single">La entrada acepta un solo archivo</Label>
    <FileInput id="file-input-single" name="file-input-single" dragText="Arrastre el archivo aquí o " chooseText="elija de una carpeta" errorText="Este no es un tipo de archivo válido." accept=".no" />
  </FormGroup>`,...(X=(q=d.parameters)==null?void 0:q.docs)==null?void 0:X.source}}};const ne=["SingleFileInput","AcceptTextAndPDF","AcceptImages","MultipleFilesInput","WithError","Disabled","WithRefAndCustomHandlers","CustomText"];export{o as AcceptImages,a as AcceptTextAndPDF,d as CustomText,u as Disabled,p as MultipleFilesInput,s as SingleFileInput,c as WithError,m as WithRefAndCustomHandlers,ne as __namedExportsOrder,ie as default};
