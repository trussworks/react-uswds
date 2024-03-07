import{j as e,a as t}from"./jsx-runtime-2xDJh5tt.js";import{R as T}from"./index-CBqU2yxZ.js";import{F as i}from"./Form-DNY-009I.js";import{A as k}from"./Alert-Dqsz4m1Z.js";import{B as C}from"./Button-Dw-sXN3h.js";import{E}from"./ErrorMessage-DC3KMugT.js";import{F as r}from"./Fieldset-DLL_ZIrk.js";import{F as R}from"./FormGroup-DUBGswQ6.js";import{L as n,R as z}from"./Label-RQBQRD89.js";import{T as o}from"./TextInput-84m5h5vG.js";import{T as D}from"./Textarea-BzlnUgDN.js";import{S as H}from"./Select-CZ6J1Uk9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const Q={title:"Components/Form templates",component:i,parameters:{docs:{description:{component:`
### USWDS 3.0 Form component

Source: https://designsystem.digital.gov/components/form-templates/
`}}}},s=()=>{},l=()=>e("div",{style:{marginLeft:"4rem"},children:t(i,{onSubmit:s,children:[e(n,{htmlFor:"input-type-text",children:"Text input label"}),e(o,{id:"input-type-text",name:"input-type-text",type:"text"}),e(n,{htmlFor:"input-focus",children:"Text input focused"}),e(o,{id:"input-focus",name:"input-focus",className:"usa-focus",type:"text"}),t(R,{error:!0,children:[e(n,{htmlFor:"input-error",error:!0,children:"Text input error"}),e(E,{id:"input-error-message",children:"Helpful error message"}),e(o,{id:"input-error",name:"input-error",type:"text",validationStatus:"error","aria-describedby":"input-error-message"})]}),e(n,{htmlFor:"input-success",children:"Text input success"}),e(o,{id:"input-success",name:"input-success",type:"text",validationStatus:"success"}),e(n,{htmlFor:"input-type-textarea",children:"Text area label"}),e(D,{id:"input-type-textarea",name:"input-type-textarea"})]})}),p=()=>t(i,{onSubmit:s,children:[t(r,{legend:"Name",legendStyle:"large",children:[e(n,{htmlFor:"first-name",children:"First or given name"}),e("span",{className:"usa-hint",children:"For example, Jose, Darren, or Mai"}),e(o,{id:"first-name",name:"first-name",type:"text"}),e(n,{htmlFor:"middle-name",children:"Middle name"}),e(o,{id:"middle-name",name:"middle-name",type:"text"}),e(n,{htmlFor:"last-name",children:"Last or family name"}),e("span",{className:"usa-hint",children:"For example, Martinez Gonzalez, Gu, or Smith"}),e(o,{id:"last-name",name:"last-name",type:"text"})]}),t(r,{legend:"Full name",legendStyle:"large",children:[e(n,{htmlFor:"full-name",children:"Full name"}),e("span",{className:"usa-hint",children:"For example, Prof. Madeline Martinez Hernandez"}),e(o,{id:"full-name",name:"full-name",type:"text"})]}),t(r,{legend:"Preferred name",legendStyle:"large",children:[e(n,{htmlFor:"preferred-name",children:"I prefer to be addressed as"}),e("span",{className:"usa-hint",children:"For example, Dr. Gu, Mrs. Schmidt, Alix Martinez"}),e(o,{id:"preferred-name",name:"preferred-name",type:"text"})]})]}),d=()=>e(i,{onSubmit:s,large:!0,children:t(r,{legend:"Mailing address",legendStyle:"large",children:[t("p",{children:["Required fields are marked with an asterisk (",e(z,{}),")."]}),e(n,{htmlFor:"mailing-address-1",children:"Street address"}),e(o,{id:"mailing-address-1",name:"mailing-address-1",type:"text"}),e(n,{htmlFor:"mailing-address-2",children:"Street address line 2"}),e(o,{id:"mailing-address-2",name:"mailing-address-2",type:"text"}),e(n,{htmlFor:"city",requiredMarker:!0,children:"City"}),e(o,{id:"city",name:"city",type:"text",required:!0}),e(n,{htmlFor:"state",requiredMarker:!0,children:"State, territory, or military post"}),t(H,{id:"state",name:"state",required:!0,children:[e("option",{children:"- Select -"}),e("option",{value:"AL",children:"Alabama"}),e("option",{value:"AK",children:"Alaska"}),e("option",{value:"AZ",children:"Arizona"}),e("option",{value:"AR",children:"Arkansas"}),e("option",{value:"CA",children:"California"}),e("option",{value:"CO",children:"Colorado"}),e("option",{value:"CT",children:"Connecticut"}),e("option",{value:"DE",children:"Delaware"}),e("option",{value:"DC",children:"District of Columbia"}),e("option",{value:"FL",children:"Florida"}),e("option",{value:"GA",children:"Georgia"}),e("option",{value:"HI",children:"Hawaii"}),e("option",{value:"ID",children:"Idaho"}),e("option",{value:"IL",children:"Illinois"}),e("option",{value:"IN",children:"Indiana"}),e("option",{value:"IA",children:"Iowa"}),e("option",{value:"KS",children:"Kansas"}),e("option",{value:"KY",children:"Kentucky"}),e("option",{value:"LA",children:"Louisiana"}),e("option",{value:"ME",children:"Maine"}),e("option",{value:"MD",children:"Maryland"}),e("option",{value:"MA",children:"Massachusetts"}),e("option",{value:"MI",children:"Michigan"}),e("option",{value:"MN",children:"Minnesota"}),e("option",{value:"MS",children:"Mississippi"}),e("option",{value:"MO",children:"Missouri"}),e("option",{value:"MT",children:"Montana"}),e("option",{value:"NE",children:"Nebraska"}),e("option",{value:"NV",children:"Nevada"}),e("option",{value:"NH",children:"New Hampshire"}),e("option",{value:"NJ",children:"New Jersey"}),e("option",{value:"NM",children:"New Mexico"}),e("option",{value:"NY",children:"New York"}),e("option",{value:"NC",children:"North Carolina"}),e("option",{value:"ND",children:"North Dakota"}),e("option",{value:"OH",children:"Ohio"}),e("option",{value:"OK",children:"Oklahoma"}),e("option",{value:"OR",children:"Oregon"}),e("option",{value:"PA",children:"Pennsylvania"}),e("option",{value:"RI",children:"Rhode Island"}),e("option",{value:"SC",children:"South Carolina"}),e("option",{value:"SD",children:"South Dakota"}),e("option",{value:"TN",children:"Tennessee"}),e("option",{value:"TX",children:"Texas"}),e("option",{value:"UT",children:"Utah"}),e("option",{value:"VT",children:"Vermont"}),e("option",{value:"VA",children:"Virginia"}),e("option",{value:"WA",children:"Washington"}),e("option",{value:"WV",children:"West Virginia"}),e("option",{value:"WI",children:"Wisconsin"}),e("option",{value:"WY",children:"Wyoming"}),e("option",{value:"AA",children:"AA - Armed Forces Americas"}),e("option",{value:"AE",children:"AE - Armed Forces Africa"}),e("option",{value:"AE",children:"AE - Armed Forces Canada"}),e("option",{value:"AE",children:"AE - Armed Forces Europe"}),e("option",{value:"AE",children:"AE - Armed Forces Middle East"}),e("option",{value:"AP",children:"AP - Armed Forces Pacific"})]}),e(n,{htmlFor:"zip",children:"ZIP Code"}),e(o,{id:"zip",name:"zip",type:"text",inputSize:"medium",pattern:"[\\d]{5}(-[\\d]{4})?"}),e(n,{htmlFor:"urbanization",children:"Urbanization (Puerto Rico only)"}),e(o,{id:"urbanization",name:"urbanization",type:"text"})]})}),u=()=>{const[a,c]=T.useState(!1);return e(i,{onSubmit:s,large:!0,children:t(r,{legend:"Sign In",legendStyle:"large",children:[t("span",{children:["or ",e("a",{href:"javascript:void(0);",children:"create an account"})]}),e(n,{htmlFor:"username",children:"Username or email address"}),e(o,{id:"username",name:"username",type:"text",autoCapitalize:"off",autoCorrect:"off"}),e(n,{htmlFor:"password-sign-in",children:"Password"}),e(o,{id:"password-sign-in",name:"password-sign-in",type:a?"text":"password"}),e("button",{title:"Show password",type:"button",className:"usa-show-password","aria-controls":"password-sign-in",onClick:()=>c(h=>!h),children:a?"Hide password":"Show password"}),e(C,{type:"submit",children:"Sign in"}),e("p",{children:e("a",{href:"javascript:void(0);",title:"Forgot username",children:"Forgot username?"})}),e("p",{children:e("a",{href:"javascript:void(0);",title:"Forgot password",children:"Forgot password?"})})]})})},m=()=>{const[a,c]=T.useState(!1);return e(i,{onSubmit:s,large:!0,children:t(r,{legend:"Reset password",legendStyle:"large",children:[e("span",{children:"Please enter your new password"}),t(k,{type:"info",heading:"Password information",headingLevel:"h4",children:["Length requirements",e("br",{}),"Character constraints, if any"]}),e(n,{htmlFor:"newPassword",children:"New password"}),e(o,{id:"newPassword",name:"newPassword",type:a?"text":"password"}),e(n,{htmlFor:"confirmPassword",children:"Confirm password"}),e(o,{id:"confirmPassword",name:"confirmPassword",type:a?"text":"password"}),e("button",{type:"button",className:"usa-show-password","aria-controls":"newPassword confirmPassword",onClick:()=>c(h=>!h),children:a?"Hide my typing":"Show my typing"}),e(C,{type:"submit",children:"Reset password"})]})})};var v,w,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`(): React.ReactElement => <div style={{
  marginLeft: '4rem'
}}>
    <Form onSubmit={mockSubmit}>
      <Label htmlFor="input-type-text">Text input label</Label>
      <TextInput id="input-type-text" name="input-type-text" type="text" />

      <Label htmlFor="input-focus">Text input focused</Label>
      <TextInput id="input-focus" name="input-focus" className="usa-focus" type="text" />

      <FormGroup error>
        <Label htmlFor="input-error" error>
          Text input error
        </Label>
        <ErrorMessage id="input-error-message">
          Helpful error message
        </ErrorMessage>
        <TextInput id="input-error" name="input-error" type="text" validationStatus="error" aria-describedby="input-error-message" />
      </FormGroup>

      <Label htmlFor="input-success">Text input success</Label>
      <TextInput id="input-success" name="input-success" type="text" validationStatus="success" />

      <Label htmlFor="input-type-textarea">Text area label</Label>
      <Textarea id="input-type-textarea" name="input-type-textarea"></Textarea>
    </Form>
  </div>`,...(g=(w=l.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var F,y,x;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`(): React.ReactElement => <Form onSubmit={mockSubmit}>
    <Fieldset legend="Name" legendStyle="large">
      <Label htmlFor="first-name">First or given name</Label>
      <span className="usa-hint">For example, Jose, Darren, or Mai</span>
      <TextInput id="first-name" name="first-name" type="text" />
      <Label htmlFor="middle-name">Middle name</Label>
      <TextInput id="middle-name" name="middle-name" type="text" />
      <Label htmlFor="last-name">Last or family name</Label>
      <span className="usa-hint">
        For example, Martinez Gonzalez, Gu, or Smith
      </span>
      <TextInput id="last-name" name="last-name" type="text" />
    </Fieldset>
    <Fieldset legend="Full name" legendStyle="large">
      <Label htmlFor="full-name">Full name</Label>
      <span className="usa-hint">
        For example, Prof. Madeline Martinez Hernandez
      </span>
      <TextInput id="full-name" name="full-name" type="text" />
    </Fieldset>
    <Fieldset legend="Preferred name" legendStyle="large">
      <Label htmlFor="preferred-name">I prefer to be addressed as</Label>
      <span className="usa-hint">
        For example, Dr. Gu, Mrs. Schmidt, Alix Martinez
      </span>
      <TextInput id="preferred-name" name="preferred-name" type="text" />
    </Fieldset>
  </Form>`,...(x=(y=p.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var f,b,S;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`(): React.ReactElement => <Form onSubmit={mockSubmit} large>
    <Fieldset legend="Mailing address" legendStyle="large">
      <p>
        Required fields are marked with an asterisk (<RequiredMarker />
        ).
      </p>
      <Label htmlFor="mailing-address-1">Street address</Label>
      <TextInput id="mailing-address-1" name="mailing-address-1" type="text" />

      <Label htmlFor="mailing-address-2">Street address line 2</Label>
      <TextInput id="mailing-address-2" name="mailing-address-2" type="text" />

      <Label htmlFor="city" requiredMarker>
        City
      </Label>
      <TextInput id="city" name="city" type="text" required />

      <Label htmlFor="state" requiredMarker>
        State, territory, or military post
      </Label>
      <Select id="state" name="state" required>
        <option>- Select -</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
        <option value="AA">AA - Armed Forces Americas</option>
        <option value="AE">AE - Armed Forces Africa</option>
        <option value="AE">AE - Armed Forces Canada</option>
        <option value="AE">AE - Armed Forces Europe</option>
        <option value="AE">AE - Armed Forces Middle East</option>
        <option value="AP">AP - Armed Forces Pacific</option>
      </Select>

      <Label htmlFor="zip">ZIP Code</Label>
      <TextInput id="zip" name="zip" type="text" inputSize="medium" pattern="[\\d]{5}(-[\\d]{4})?" />

      <Label htmlFor="urbanization">Urbanization (Puerto Rico only)</Label>
      <TextInput id="urbanization" name="urbanization" type="text" />
    </Fieldset>
  </Form>`,...(S=(b=d.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var A,M,P;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`(): React.ReactElement => {
  const [showPassword, setShowPassword] = React.useState(false);
  return <Form onSubmit={mockSubmit} large>
      <Fieldset legend="Sign In" legendStyle="large">
        <span>
          or <a href="javascript:void(0);">create an account</a>
        </span>
        <Label htmlFor="username">Username or email address</Label>
        <TextInput id="username" name="username" type="text" autoCapitalize="off" autoCorrect="off" />
        <Label htmlFor="password-sign-in">Password</Label>
        <TextInput id="password-sign-in" name="password-sign-in" type={showPassword ? 'text' : 'password'} />
        <button title="Show password" type="button" className="usa-show-password" aria-controls="password-sign-in" onClick={(): void => setShowPassword(showPassword => !showPassword)}>
          {showPassword ? 'Hide password' : 'Show password'}
        </button>

        <Button type="submit">Sign in</Button>
        <p>
          <a href="javascript:void(0);" title="Forgot username">
            Forgot username?
          </a>
        </p>
        <p>
          <a href="javascript:void(0);" title="Forgot password">
            Forgot password?
          </a>
        </p>
      </Fieldset>
    </Form>;
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var L,N,I;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`(): React.ReactElement => {
  const [showPassword, setShowPassword] = React.useState(false);
  return <Form onSubmit={mockSubmit} large>
      <Fieldset legend="Reset password" legendStyle="large">
        <span>Please enter your new password</span>
        <Alert type="info" heading="Password information" headingLevel="h4">
          Length requirements
          <br />
          Character constraints, if any
        </Alert>

        <Label htmlFor="newPassword">New password</Label>
        <TextInput id="newPassword" name="newPassword" type={showPassword ? 'text' : 'password'} />

        <Label htmlFor="confirmPassword">Confirm password</Label>
        <TextInput id="confirmPassword" name="confirmPassword" type={showPassword ? 'text' : 'password'} />
        <button type="button" className="usa-show-password" aria-controls="newPassword confirmPassword" onClick={(): void => setShowPassword(showPassword => !showPassword)}>
          {showPassword ? 'Hide my typing' : 'Show my typing'}
        </button>

        <Button type="submit">Reset password</Button>
      </Fieldset>
    </Form>;
}`,...(I=(N=m.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const $=["TextInputForm","NameForm","AddressForm","SignInForm","PasswordResetForm"];export{d as AddressForm,p as NameForm,m as PasswordResetForm,u as SignInForm,l as TextInputForm,$ as __namedExportsOrder,Q as default};
