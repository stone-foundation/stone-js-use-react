import { isEmpty, isNotEmpty } from '@stone-js/core'
import {
  HeadContext,
  serializeHead,
  serializeAttributes,
  MetaDescriptor as HTMLMetaDescriptor,
  LinkDescriptor as HTMLLinkDescriptor,
  ScriptDescriptor as HTMLScriptDescriptor,
  StyleDescriptor as HTMLStyleDescriptor
} from '@stone-js/use-view'

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
  const metaProp = isNotEmpty<string>(meta.property) ? `meta[property="${meta.property}"]` : null
  const selector = isNotEmpty<string>(meta.name) ? `meta[name="${meta.name}"]` : metaProp

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
        el2SetAttribute(existing, key, value)
      }
      existing.setAttribute(STONE_DOM_ATTR, '')
    }
  } else {
    const el = document.createElement('link')
    for (const [key, value] of Object.entries(link)) {
      el2SetAttribute(el, key, value)
    }
    el.setAttribute(STONE_DOM_ATTR, '')
    document.head.appendChild(el)
  }
}

/**
 * Set an attribute, coercing the (possibly unknown) value to string.
 *
 * @param el - The target element.
 * @param key - The attribute name.
 * @param value - The attribute value.
 */
const el2SetAttribute = (el: Element, key: string, value: unknown): void => {
  el.setAttribute(key, String(value))
}

/**
 * Update attributes of an HTML element.
 *
 * @param el - The HTML element to update.
 * @param attrs - The attributes to set on the element.
 */
const updateAttributes = (el: HTMLElement, attrs: Record<string, unknown>): void => {
  for (const [key, value] of Object.entries(attrs)) {
    if (typeof value === 'boolean') {
      value ? el.setAttribute(key, '') : el.removeAttribute(key)
    } else {
      el.setAttribute(key, String(value))
    }
  }
  el.setAttribute(STONE_DOM_ATTR, '')
}

/**
 * Check if an element needs attribute updates.
 *
 * @param el - The HTML element to check.
 * @param attrs - The attributes to compare against the element's current attributes.
 * @returns True if any attribute needs updating, false otherwise.
 */
const needsAttributeUpdate = (el: HTMLElement, attrs: Record<string, unknown>): boolean => {
  return Object.entries(attrs).some(([key, value]) => {
    const attr = el.getAttribute(key)
    return typeof value === 'boolean' ? attr !== '' : attr !== String(value)
  })
}

/**
 * Apply script tags to the document.head.
 *
 * @param document - The document object.
 * @param script - The script tag descriptor.
 */
const applyScript = (document: Document, script: HTMLScriptDescriptor): void => {
  const selector = `script[src="${script.src ?? ''}"][${STONE_DOM_ATTR}]`
  const existing = document.head.querySelector<HTMLScriptElement>(selector)

  if (existing != null) {
    if (needsAttributeUpdate(existing, script)) {
      updateAttributes(existing, script)
    }
  } else {
    const el = document.createElement('script')
    updateAttributes(el, script)
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
  const title = isNotEmpty<string>(context.titleTemplate) && isNotEmpty<string>(context.title)
    ? context.titleTemplate.replace('%s', context.title)
    : context.title

  if (isNotEmpty<string>(title) && document.title !== title) {
    document.title = title
  }

  const metas = [...(context.metas ?? [])]
  if (isNotEmpty<string>(context.description)) {
    metas.push({ name: 'description', content: context.description })
  }

  metas.forEach(v => applyMeta(document, v))
  context.links?.forEach(v => applyLink(document, v))
  context.styles?.forEach(v => applyStyle(document, v))
  context.scripts?.forEach(v => applyScript(document, v))
  context.jsonLd?.forEach(v => applyJsonLd(document, v))

  applyElementAttributes(document.documentElement, context.htmlAttributes)
  if (document.body !== null) { applyElementAttributes(document.body, context.bodyAttributes) }
}

/**
 * Apply a JSON-LD structured-data block to the document head.
 *
 * @param document - The document object.
 * @param data - The JSON-LD object.
 */
export const applyJsonLd = (document: Document, data: Record<string, unknown>): void => {
  const script = document.createElement('script')
  script.setAttribute('type', 'application/ld+json')
  script.setAttribute(STONE_DOM_ATTR, 'true')
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

/**
 * Apply an attribute map to an element (used for `<html>` / `<body>` attributes).
 *
 * @param element - The target element.
 * @param attributes - The attribute map.
 */
export const applyElementAttributes = (element: Element | null, attributes?: Record<string, string>): void => {
  if (element === null || attributes === undefined) { return }
  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value)
  }
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

  // Title: apply the template then replace the existing <title>. Function replacer so a
  // title containing `$&`/`$'` is inserted literally.
  const title = isNotEmpty<string>(context.titleTemplate) && isNotEmpty<string>(context.title)
    ? context.titleTemplate.replace('%s', context.title)
    : context.title

  if (isNotEmpty<string>(title)) {
    html = html.replace(/<title>.*?<\/title>/i, () => `<title>${escapeHtml(title)}</title>`)
  }

  // Everything else is serialized by the agnostic use-view head serializer, which escapes
  // attribute names and values, leaves inline style/script content intact, and renders
  // base/description/jsonLd. Title is excluded here (handled above) to avoid a duplicate.
  const { title: _t, titleTemplate: _tt, htmlAttributes, bodyAttributes, ...rest } = context
  const headString = serializeHead(rest).concat('\n<!--app-head-->')
  html = html.replace('<!--app-head-->', () => headString)

  // Optional <html>/<body> attributes.
  const htmlAttrs = serializeAttributes(htmlAttributes)
  if (htmlAttrs.length > 0) { html = html.replace(/<html\b([^>]*)>/i, (_m, existing) => `<html${String(existing)}${htmlAttrs}>`) }
  const bodyAttrs = serializeAttributes(bodyAttributes)
  if (bodyAttrs.length > 0) { html = html.replace(/<body\b([^>]*)>/i, (_m, existing) => `<body${String(existing)}${bodyAttrs}>`) }

  return html
}
