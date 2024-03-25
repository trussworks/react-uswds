import { createRoot } from 'react-dom/client'
import React, { useEffect, useRef } from 'react'
import { Search } from './components/Search/Search/Search'

import '@uswds/uswds/css/uswds.css'
import './styles/index.scss'

function Playground({
  compareHtml,
  children,
}: React.PropsWithChildren<{ compareHtml: string }>) {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const reactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (frameRef.current && reactRef.current) {
      frameRef.current.addEventListener('load', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(window as any).showHtml(
          frameRef.current?.contentDocument?.body.innerHTML,
          reactRef.current?.innerHTML
        )
      })
    }
  }, [frameRef.current, reactRef.current])

  return (
    <>
      <style>
        {`
      iframe {
        width: 100%;
        border: transparent;
      }

      body {
        margin: 10px !important;
      }

      .row {
        display: flex;
        gap: 5px;
      }

      .col {
        flex: 1;
      }
      `}
      </style>
      <h1>React USWDS Playground</h1>
      <div className="row">
        <div className="col">
          <h2>USWDS</h2>
          <iframe src={compareHtml} ref={frameRef} title="uswds" />
        </div>
        <div className="col">
          <h2>React USWDS</h2>
          <div ref={reactRef}>{children}</div>
        </div>
      </div>
      <div className="row">
        <pre className="col">
          <code id="uswdsBox" className="language-markup"></code>
        </pre>
        <pre className="col">
          <code id="reactUswdsBox" className="language-markup"></code>
        </pre>
      </div>
    </>
  )
}

const container = document.querySelector('#root')

if (!container) throw new Error('Container element not found')

const root = createRoot(container)

root.render(
  <Playground compareHtml="uswds.html">
    <Search onSubmit={() => void 0} />
  </Playground>
)
