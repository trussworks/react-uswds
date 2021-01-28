import React from 'react'

export default {
  title: 'Design tokens/Swatches',
}

export const BackgroundColors = (): React.ReactElement => (
  <div className="grid-container">
    <h1>Background color</h1>
    <h2>Primary</h2>
    <hr />
    <div className="grid-row">
      <div className="grid-col-2">
        <div className="square-15 bg-primary-lighter" />
        <p>Primary lighter</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-primary-light" />
        <p>Primary light</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-primary" />
        <p>Primary</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-primary-dark" />
        <p>Primary dark</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-primary-darker" />
        <p>Primary darker</p>
      </div>
    </div>
    <h2>Base</h2>
    <hr />
    <div className="grid-row">
      <div className="grid-col-2">
        <div className="square-15 bg-base-lightest" />
        <p>Base lightest</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-base-lighter" />
        <p>Base lighter</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-base-light" />
        <p>Base light</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-base" />
        <p>Base</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-base-dark" />
        <p>Base dark</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-base-darker" />
        <p>Base darker</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-base-darkest" />
        <p>Base darkest</p>
      </div>
    </div>
    <h2>Secondary</h2>
    <hr />
    <div className="grid-row">
      <div className="grid-col-2">
        <div className="square-15 bg-secondary-lighter" />
        <p>Secondary lighter</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-secondary-light" />
        <p>Secondary light</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-secondary" />
        <p>Secondary</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-secondary-dark" />
        <p>Secondary dark</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-secondary-darker" />
        <p>Secondary darker</p>
      </div>
    </div>
    <h2>Accent cool</h2>
    <hr />
    <div className="grid-row">
      <div className="grid-col-2">
        <div className="square-15 bg-accent-cool-lighter" />
        <p>Accent cool lighter</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-accent-cool-light" />
        <p>Accent cool light</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-accent-cool" />
        <p>Accent cool</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-accent-cool-dark" />
        <p>Accent cool dark</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-accent-cool-darker" />
        <p>Accent cool darker</p>
      </div>
    </div>
    <h2>Accent warm</h2>
    <hr />
    <div className="grid-row">
      <div className="grid-col-2">
        <div className="square-15 bg-accent-warm-lighter" />
        <p>Accent warm lighter</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-accent-warm-light" />
        <p>Accent warm light</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-accent-warm" />
        <p>Accent warm</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-accent-warm-dark" />
        <p>Accent warm dark</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-accent-warm-darker" />
        <p>Accent warm darker</p>
      </div>
    </div>
    <h2>State</h2>
    <hr />
    <h3>Info</h3>
    <div className="grid-row">
      <div className="grid-col-2">
        <div className="square-15 bg-info-lighter" />
        <p>Info lighter</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-info-light" />
        <p>Info light</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-info" />
        <p>Info</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-info-dark" />
        <p>Info dark</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-info-darker" />
        <p>Info darker</p>
      </div>
    </div>
    <h3>Error</h3>
    <div className="grid-row">
      <div className="grid-col-2">
        <div className="square-15 bg-error-lighter" />
        <p>Error lighter</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-error-light" />
        <p>Error light</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-error" />
        <p>Error</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-error-dark" />
        <p>Error dark</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-error-darker" />
        <p>Error darker</p>
      </div>
    </div>
    <h3>Warning</h3>
    <div className="grid-row">
      <div className="grid-col-2">
        <div className="square-15 bg-warning-lighter" />
        <p>Warning lighter</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-warning-light" />
        <p>Warning light</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-warning" />
        <p>Warning</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-warning-dark" />
        <p>Warning dark</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-warning-darker" />
        <p>Warning darker</p>
      </div>
    </div>
    <h3>Success</h3>
    <div className="grid-row">
      <div className="grid-col-2">
        <div className="square-15 bg-success-lighter" />
        <p>success lighter</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-success-light" />
        <p>success light</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-success" />
        <p>success</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-success-dark" />
        <p>success dark</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-success-darker" />
        <p>success darker</p>
      </div>
    </div>
    <h3>Disabled</h3>
    <div className="grid-row">
      <div className="grid-col-2">
        <div className="square-15 bg-disabled-light" />
        <p>Disabled light</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-disabled" />
        <p>Disabled</p>
      </div>
      <div className="grid-col-2">
        <div className="square-15 bg-disabled-dark" />
        <p>Disabled dark</p>
      </div>
    </div>
  </div>
)
