import React from 'react'

export default {
  title: 'Welcome',
  parameters: {
    options: {
      showPanel: false,
    },
  },
}

export const Welcome = (): React.ReactElement => {
  return (
    <div
      className="sfds display-flex flex-column"
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '40px auto',
      }}>
      <div>
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true">
          <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
        </svg>
        <a rel="author" href="https://github.com/trussworks">
          trussworks
        </a>
        /
        <strong>
          <a
            href="https://github.com/trussworks/react-uswds"
            target="_blank"
            rel="noreferrer">
            react-uswds
          </a>
        </strong>
      </div>
      <div className="display-flex flex-align-center flex-justify-center padding-top-4">
        <div className="margin-right-3" style={{ width: '150px' }}>
          <img 
            src="/uswds.svg" 
            alt="USWDS logo" 
          />
        </div>
        <div>
          <h1 className="margin-y-0" style={{ maxWidth: '527px' }}>
            ReactUSWDS Component Library
          </h1>
        </div>
      </div>
      <p className="line-height-sans-4">
        This is a frontend component library built by{' '}
        <a href="https://truss.works">Truss</a>, using{' '}
        <a href="https://reactjs.org/">React</a> with{' '}
        <a href="https://www.typescriptlang.org/">Typescript</a>, based on
        design patterns defined by the{' '}
        <a href="https://designsystem.digital.gov/">
          United States Web Design System (USWDS)
        </a>
        . Our primary goal is to document and provide common UI components
        following the USWDS specification. This library removes a significant
        amount of overhead UI development for projects based on this standard.
      </p>
      <h2 className="margin-bottom-0">See also</h2>
      <ul>
        <li className="padding-bottom-1 line-height-sans-4">
          <a
            href="https://truss.works/blog/uswds-for-engineers"
            target="_blank"
            rel="noreferrer">
            Using the USWDS as an Engineer
          </a>
        </li>
        <li className="padding-bottom-1 line-height-sans-4">
          <a
            href="https://github.com/trussworks/react-uswds"
            target="_blank"
            rel="noreferrer">
            React-USWDS Github
          </a>
        </li>
        <li className="padding-bottom-1 line-height-sans-4">
          <a
            href="https://designsystem.digital.gov/"
            target="_blank"
            rel="noreferrer">
            USWDS website
          </a>
        </li>
        <li className="padding-bottom-1 line-height-sans-4">
          <a
            href="https://www.figma.com/community/file/836611771720754351"
            target="_blank"
            rel="noreferrer">
            USWDS Figma library
          </a>
        </li>
      </ul>
    </div>
  )
}
