import { isEmpty, isNotEmpty } from '@stone-js/core'
import { HTMLMetaDescriptor, HeadContext, HTMLLinkDescriptor, HTMLScriptDescriptor, HTMLStyleDescriptor } from '@stone-js/router'

/**
  * Stone DOM Attribute.
  */
export const STONE_DOM_ATTR = 'data-stone-head'

/**
 * Apply meta tags to the document document.head.
 *
 * @param document - The document object.
 * @param meta - The meta tag descriptor.
 */
export const applyMeta = (document: Document, meta: HTMLMetaDescriptor): void => {
  const selector = isNotEmpty<string>(meta.name)
    ? `meta[name="${meta.name}"]`
    : isNotEmpty<string>(meta.property)
      ? `meta[property="${meta.property}"]`
      : null

  if (isEmpty(selector)) return

  const existing = document.head.querySelector<HTMLMetaElement>(`${selector}[${STONE_DOM_ATTR}]`)
  if (isNotEmpty<HTMLMetaElement>(existing)) {
    if (existing.content !== meta.content) {
      existing.content = meta.content
    }
  } else {
    const el = document.createElement('meta')
    if (isNotEmpty<string>(meta.name)) el.setAttribute('name', meta.name)
    if (isNotEmpty<string>(meta.property)) el.setAttribute('property', meta.property)
    el.setAttribute('content', meta.content)
    el.setAttribute(STONE_DOM_ATTR, '')
    document.head.appendChild(el)
  }
}

/**
 * Apply link tags to the document document.head.
 *
 * @param document - The document object.
 * @param link - The link tag descriptor.
 */
const applyLink = (document: Document, link: HTMLLinkDescriptor): void => {
  const selector = `link[rel="${link.rel}"][href="${link.href}"][${STONE_DOM_ATTR}]`
  const existing = document.head.querySelector<HTMLLinkElement>(selector)

  if (existing != null) {
    let needsUpdate = false
    for (const [key, value] of Object.entries(link)) {
      if (existing.getAttribute(key) !== value) {
        needsUpdate = true
        break
      }
    }
    if (needsUpdate) {
      for (const [key, value] of Object.entries(link)) {
        existing.setAttribute(key, value)
      }
      existing.setAttribute(STONE_DOM_ATTR, '')
    }
  } else {
    const el = document.createElement('link')
    for (const [key, value] of Object.entries(link)) {
      el.setAttribute(key, value)
    }
    el.setAttribute(STONE_DOM_ATTR, '')
    document.head.appendChild(el)
  }
}

/**
 * Apply script tags to the document document.head.
 *
 * @param document - The document object.
 * @param script - The script tag descriptor.
 */
const applyScript = (document: Document, script: HTMLScriptDescriptor): void => {
  const selector = `script[src="${script.src}"][${STONE_DOM_ATTR}]`
  const existing = document.head.querySelector<HTMLScriptElement>(selector)

  if (existing != null) {
    let needsUpdate = false
    for (const [key, value] of Object.entries(script)) {
      const attr = existing.getAttribute(key)
      if ((typeof value === 'boolean' ? attr !== '' : attr !== String(value))) {
        needsUpdate = true
        break
      }
    }
    if (needsUpdate) {
      for (const [key, value] of Object.entries(script)) {
        if (typeof value === 'boolean') {
          if (value) existing.setAttribute(key, '')
          else existing.removeAttribute(key)
        } else {
          existing.setAttribute(key, String(value))
        }
      }
      existing.setAttribute(STONE_DOM_ATTR, '')
    }
  } else {
    const el = document.createElement('script')
    for (const [key, value] of Object.entries(script)) {
      if (typeof value === 'boolean') {
        if (value) el.setAttribute(key, '')
      } else {
        el.setAttribute(key, String(value))
      }
    }
    el.setAttribute(STONE_DOM_ATTR, '')
    document.head.appendChild(el)
  }
}

/**
 * Apply style tags to the document document.head.
 *
 * @param document - The document object.
 * @param style - The style tag descriptor.
 */
const applyStyle = (document: Document, style: HTMLStyleDescriptor): void => {
  const existing = [...document.head.querySelectorAll<HTMLStyleElement>(`style[${STONE_DOM_ATTR}]`)]
    .find(s => s.textContent === style.content)

  if (existing == null) {
    const el = document.createElement('style')
    if (isNotEmpty<string>(style.type)) el.setAttribute('type', style.type)
    if (isNotEmpty<string>(style.media)) el.setAttribute('media', style.media)
    el.textContent = style.content
    el.setAttribute(STONE_DOM_ATTR, '')
    document.head.appendChild(el)
  }
}

/**
 * Apply the head context to the document document.head.
 *
 * @param document - The document object.
 * @param context - The head context containing meta, link, script, and style descriptors.
 */
export const applyHeadContextToDom = (document: Document, context: HeadContext): void => {
  if (isNotEmpty<string>(context.title) && document.title !== context.title) {
    document.title = context.title
  }

  if (isNotEmpty<string>(context.description)) {
    context.metas = context.metas ?? []
    context.metas.push({
      name: 'description',
      content: context.description
    })
  }

  context.metas?.forEach(v => applyMeta(document, v))
  context.links?.forEach(v => applyLink(document, v))
  context.styles?.forEach(v => applyStyle(document, v))
  context.scripts?.forEach(v => applyScript(document, v))
}

/**
 * Escape HTML special characters in a string.
 *
 * @param input - The input string to escape.
 * @returns The escaped string.
 */
const escapeHtml = (input: string): string =>
  input
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

/**
 * Escape HTML special characters in a string.
 *
 * @param context - The head context containing meta, link, script, and style descriptors.
 * @param html - The HTML string to escape.
 * @returns The escaped string.
 */
export const applyHeadContextToHtmlString = (context: HeadContext, html: string): string => {
  if (isEmpty(context) || isEmpty(html)) return html

  // Replace the existing <title> tag with the new title (if provided)
  if (isNotEmpty<string>(context.title)) {
    html = html.replace(
      /<title>.*?<\/title>/i,
      `<title>${escapeHtml(context.title)}</title>`
    )
  }

  // Build all additional head elements to insert into <!--app-head-->
  const parts: string[] = []

  // Meta tags
  context.metas?.forEach((meta) => {
    const attrs = Object.entries(meta)
      .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
      .join(' ')
    parts.push(`<meta ${attrs}>`)
  })

  // Link tags
  context.links?.forEach((link) => {
    const attrs = Object.entries(link)
      .map(([key, value]) => `${key}="${escapeHtml(String(value))}"`)
      .join(' ')
    parts.push(`<link ${attrs}>`)
  })

  // Script tags
  context.scripts?.forEach((script) => {
    const attrs = Object.entries(script)
      .map(([key, value]) =>
        typeof value === 'boolean'
          ? (value ? `${key}` : '')
          : `${key}="${escapeHtml(String(value))}"`
      )
      .filter(Boolean)
      .join(' ')
    parts.push(`<script ${attrs}></script>`)
  })

  // Style tags
  context.styles?.forEach((style) => {
    const attrs = Object.entries(style)
      .filter(([key]) => key !== 'content')
      .map(([key, value]) => `${key}="${escapeHtml(String(value))}"`)
      .join(' ')
    const content = escapeHtml(style.content)
    parts.push(`<style ${attrs}>${content}</style>`)
  })

  // Inject generated tags into the placeholder
  const headString = parts.join('\n').concat('\n<!--app-head-->')

  return html.replace('<!--app-head-->', headString)
}
