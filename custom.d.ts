// https://vite.dev/guide/features#client-types
/// <reference types="vite/client" />

declare module '*.svg?svgr' {
  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}

declare namespace globalThis {
  interface Window {
    MSStream: object
  }
}
