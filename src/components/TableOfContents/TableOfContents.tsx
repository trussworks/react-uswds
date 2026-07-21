import classNames from 'classnames'
import React, { useEffect, useState } from 'react'

type TocItem = {
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

function compileTOCFromDOM(container: ParentNode): TocItem[] {
  return Array.from(container.querySelectorAll('h2, h3, h4, h5, h6'))
    .map((heading) => {
      const text = heading.textContent?.trim() ?? ''

      if (!heading.id && text) {
        heading.id = slugify(text)
      }

      return {
        id: heading.id,
        level: Number.parseInt(heading.tagName.slice(1), 10),
        text,
      }
    })
    .filter((heading) => heading.id && heading.text)
}

function compileTOCFromMarkdown(markdown: string): TocItem[] {
  const headingRegex = /^(#{2,6})\s+(.+)$/gm
  const items: TocItem[] = []
  let match: RegExpExecArray | null

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length
    const rawText = match[2].trim()

    const text = rawText
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_~`]/g, '')

    if (text) {
      items.push({
        id: slugify(text),
        level,
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
    if (markdown) {
      setItems(compileTOCFromMarkdown(markdown))
    } else {
      const frameId = requestAnimationFrame(() => {
        const container = document.querySelector(selector)
        if (container) {
          setItems(compileTOCFromDOM(container))
        }
      })
      return () => cancelAnimationFrame(frameId)
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
                  const target = document.getElementById(item.id)
                  if (target) {
                    target.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                  }
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
