import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

export type TocItem = {
  id: string
  level: number
  text: string
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Pure DOM reader: extracts TOC items and ensures target headings have IDs */
function compileTOCFromDOM(container: ParentNode): TocItem[] {
  const headings = Array.from(
    container.querySelectorAll<HTMLElement>('h2, h3, h4, h5, h6')
  )

  const items: TocItem[] = []

  for (const heading of headings) {
    const text = heading.textContent?.trim() ?? ''
    if (!text) continue

    let id = heading.id
    if (!id) {
      id = slugify(text)
      heading.setAttribute('id', id)
    }

    const level = Number.parseInt(heading.tagName.slice(1), 10)

    items.push({
      id,
      level: Number.isNaN(level) ? 2 : level,
      text,
    })
  }

  return items
}

/** Stateless line-by-line Markdown header parser */
function compileTOCFromMarkdown(markdown: string): TocItem[] {
  const lines = markdown.split('\n')
  const items: TocItem[] = []

  for (const line of lines) {
    const match = line.trim().match(/^(#{2,6})\s+(.+)$/)
    if (!match) continue

    const hashes = match[1] ?? ''
    const rawText = match[2] ?? ''

    // Clean inline markdown syntax
    const text = rawText
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_~`]/g, '')
      .trim()

    if (text) {
      items.push({
        id: slugify(text),
        level: hashes.length,
        text,
      })
    }
  }

  return items
}

export interface TableOfContentsProps {
  className?: string
  selector?: string
  markdown?: string
}

export function TableOfContents({
  className,
  selector = '[data-mdx-content]',
  markdown,
}: TableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>([])

  useEffect(() => {
    // SSR Guard
    if (typeof window === 'undefined') return

    if (markdown) {
      setItems(compileTOCFromMarkdown(markdown))
    } else {
      const frameId = window.requestAnimationFrame(() => {
        const container = document.querySelector(selector)
        if (container) {
          setItems(compileTOCFromDOM(container))
        }
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [markdown, selector])

  if (items.length === 0) {
    return null
  }

  return (
    <details className={className}>
      <summary>Table of Contents</summary>

      <nav aria-label="Table of contents" className="padding-2">
        <ul className="usa-list usa-list--unstyled margin-0">
          {items.map((item) => (
            <li
              key={`${item.id}-${item.level}`}
              className={classNames('margin-bottom-1', {
                [`margin-left-${(item.level - 1) * 2}`]:
                  item.level >= 3 && item.level <= 6,
              })}>
              <a
                className="usa-link"
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  if (typeof document === 'undefined') return

                  const target = document.getElementById(item.id)
                  // Safe optional chaining
                  target?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  )
}

export default TableOfContents
