import{a as t,j as e,F as B}from"./jsx-runtime-2xDJh5tt.js";import{r as y}from"./index-CBqU2yxZ.js";import{F as r}from"./FileInput-CD8rZ3Ce.js";import{F as l}from"./FormGroup-DUBGswQ6.js";import{L as a}from"./Label-RQBQRD89.js";import{E as J}from"./ErrorMessage-DC3KMugT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const te={title:"Components/File input",component:r,argTypes:{onChange:{action:"changed"},onDrop:{action:"dropped"}},parameters:{docs:{description:{component:`
### USWDS 3.0 FileInput component
Source: https://designsystem.digital.gov/components/file-input
`}}}},s=()=>t(l,{children:[e(a,{htmlFor:"file-input-single",children:"Input accepts a single file"}),e(r,{id:"file-input-single",name:"file-input-single"})]}),p=()=>t(l,{children:[e(a,{htmlFor:"file-input-specific",children:"Input accepts only specific file types"}),e("span",{className:"usa-hint",id:"file-input-specific-hint",children:"Select PDF or TXT files"}),e(r,{id:"file-input-specific",name:"file-input-specific",accept:".pdf,.txt","aria-describedby":"file-input-specific-hint",multiple:!0})]}),o=()=>t(l,{children:[e(a,{htmlFor:"file-input-wildcard",children:"Input accepts any kind of image"}),e("span",{className:"usa-hint",id:"file-input-wildcard-hint",children:"Select any type of image format"}),e(r,{id:"file-input-wildcard",name:"file-input-wildcard",accept:"image/*","aria-describedby":"file-input-wildcard-hint",multiple:!0})]}),c=()=>t(l,{children:[e(a,{htmlFor:"file-input-multiple",children:"Input accepts multiple files"}),e("span",{className:"usa-hint",id:"file-input-multiple-hint",children:"Select one or more files"}),e(r,{id:"file-input-multiple",name:"file-input-multiple","aria-describedby":"file-input-multiple-hint",multiple:!0})]}),u=()=>e("div",{style:{marginLeft:"1.25em"},children:t(l,{error:!0,children:[e(a,{htmlFor:"file-input-error",error:!0,children:"Input has an error"}),e("span",{className:"usa-hint",id:"file-input-error-hint",children:"Select any valid file"}),e(J,{id:"file-input-error-alert",children:"Display a helpful error message"}),e(r,{id:"file-input-error",name:"file-input-error","aria-describedby":"file-input-error-hint file-input-error-alert"})]})}),d=()=>t(l,{children:[e(a,{htmlFor:"file-input-disabled",children:"Input in a disabled state"}),e(r,{id:"file-input-disabled",name:"file-input-disabled",disabled:!0})]}),m={render:h=>{const[i,O]=y.useState(null),F=y.useRef(null),U=()=>{var n;return(n=F.current)==null?void 0:n.clearFiles()},z=n=>{var b;h.onChange(n),O((b=n.target)==null?void 0:b.files)},g=[];if(i)for(let n=0;n<(i==null?void 0:i.length);n++)g.push(e("li",{children:i==null?void 0:i[Number(n)].name},`file_${n}`));return t(B,{children:[t(l,{children:[e(a,{htmlFor:"file-input-async",children:"Input implements custom handlers"}),e(r,{id:"file-input-async",name:"file-input-async",multiple:!0,onChange:z,onDrop:h.onDrop,ref:F})]}),e("button",{type:"button",onClick:U,children:"Clear files"}),t("p",{children:[(i==null?void 0:i.length)||0," files added:"]}),e("ul",{children:g})]})}},f=()=>t(l,{children:[e(a,{htmlFor:"file-input-single",children:"La entrada acepta un solo archivo"}),e(r,{id:"file-input-single",name:"file-input-single",dragText:"Arrastre el archivo aquí o ",chooseText:"elija de una carpeta",errorText:"Este no es un tipo de archivo válido.",accept:".no"})]});var I,L,R;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="file-input-single">Input accepts a single file</Label>
    <FileInput id="file-input-single" name="file-input-single" />
  </FormGroup>`,...(R=(L=s.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var S,E,C;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="file-input-specific">
      Input accepts only specific file types
    </Label>
    <span className="usa-hint" id="file-input-specific-hint">
      Select PDF or TXT files
    </span>
    <FileInput id="file-input-specific" name="file-input-specific" accept=".pdf,.txt" aria-describedby="file-input-specific-hint" multiple />
  </FormGroup>`,...(C=(E=p.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var x,T,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="file-input-wildcard">Input accepts any kind of image</Label>
    <span className="usa-hint" id="file-input-wildcard-hint">
      Select any type of image format
    </span>
    <FileInput id="file-input-wildcard" name="file-input-wildcard" accept="image/*" aria-describedby="file-input-wildcard-hint" multiple />
  </FormGroup>`,...(v=(T=o.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var G,D,A;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="file-input-multiple">Input accepts multiple files</Label>
    <span className="usa-hint" id="file-input-multiple-hint">
      Select one or more files
    </span>
    <FileInput id="file-input-multiple" name="file-input-multiple" aria-describedby="file-input-multiple-hint" multiple />
  </FormGroup>`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var w,N,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`(): React.ReactElement => <div style={{
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
  </div>`,...(k=(N=u.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var M,j,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="file-input-disabled">Input in a disabled state</Label>
    <FileInput id="file-input-disabled" name="file-input-disabled" disabled />
  </FormGroup>`,...(W=(j=d.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var _,P,H;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(H=(P=m.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var q,X,$;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`(): React.ReactElement => <FormGroup>
    <Label htmlFor="file-input-single">La entrada acepta un solo archivo</Label>
    <FileInput id="file-input-single" name="file-input-single" dragText="Arrastre el archivo aquí o " chooseText="elija de una carpeta" errorText="Este no es un tipo de archivo válido." accept=".no" />
  </FormGroup>`,...($=(X=f.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};const re=["SingleFileInput","AcceptTextAndPDF","AcceptImages","MultipleFilesInput","WithError","Disabled","WithRefAndCustomHandlers","CustomText"];export{o as AcceptImages,p as AcceptTextAndPDF,f as CustomText,d as Disabled,c as MultipleFilesInput,s as SingleFileInput,u as WithError,m as WithRefAndCustomHandlers,re as __namedExportsOrder,te as default};
