import { applyHeadContextToDom, STONE_DOM_ATTR, applyHeadContextToHtmlString } from '../src/DomUtils'

const createTestDocument = (): Document => {
  return globalThis.document.implementation.createHTMLDocument('TestDoc')
}

describe('DomUtils', () => {
  let doc: Document

  beforeEach(() => {
    doc = createTestDocument()
  })

  it('sets title and description meta', () => {
    applyHeadContextToDom(doc, {
      title: 'My Title',
      description: 'My desc'
    })

    expect(doc.title).toBe('My Title')

    const meta = doc.head.querySelector('meta[name="description"]')
    expect(meta?.getAttribute('content')).toBe('My desc')
    expect(meta?.hasAttribute(STONE_DOM_ATTR)).toBe(true)
  })

  it('applies meta and updates content if different', () => {
    applyHeadContextToDom(doc, {
      metas: [{ name: 'viewport', content: 'initial-scale=1.0' }]
    })

    const el: any = doc.head.querySelector('meta[name="viewport"]')
    expect(el?.content).toBe('initial-scale=1.0')

    applyHeadContextToDom(doc, {
      metas: [{ name: 'viewport', content: 'width=device-width' }]
    })

    expect(el?.content).toBe('width=device-width')
  })

  it('applies <link> tag and updates if needed', () => {
    applyHeadContextToDom(doc, {
      links: [{ rel: 'stylesheet', href: '/style.css' }]
    })

    const el = doc.head.querySelector('link[rel="stylesheet"]')
    expect(el?.getAttribute('href')).toBe('/style.css')
    expect(el?.hasAttribute(STONE_DOM_ATTR)).toBe(true)
  })

  it('applies <script> tag with boolean attributes', () => {
    applyHeadContextToDom(doc, {
      scripts: [{ src: '/app.js', async: true }]
    })

    const el = doc.head.querySelector('script[src="/app.js"]')
    expect(el?.hasAttribute('async')).toBe(true)
    expect(el?.hasAttribute(STONE_DOM_ATTR)).toBe(true)
  })

  it('applies <style> tag with content', () => {
    applyHeadContextToDom(doc, {
      styles: [{ content: 'body{color:red}' }]
    })

    const el = doc.head.querySelector('style')
    expect(el?.textContent).toBe('body{color:red}')
    expect(el?.hasAttribute(STONE_DOM_ATTR)).toBe(true)
  })

  it('produces valid HTML string with escaped head context', () => {
    const html = '<html><head><title>Old</title><!--app-head--></head></html>'
    const context = {
      title: 'New <Title>',
      metas: [{ name: 'viewport', content: 'width=device-width' }],
      links: [{ rel: 'icon', href: '/favicon.ico' }],
      scripts: [{ src: '/main.js', async: true }],
      styles: [{ content: 'body{margin:0}', type: 'text/css' }]
    }

    const result = applyHeadContextToHtmlString(context, html)

    expect(result).toContain('<title>New &lt;Title&gt;</title>')
    expect(result).toContain('<meta name="viewport" content="width=device-width">')
    expect(result).toContain('<link rel="icon" href="/favicon.ico">')
    expect(result).toContain('<script src="/main.js" async></script>')
    expect(result).toContain('<style type="text/css">body{margin:0}</style>')
  })

  it('returns original HTML if context or html is empty', () => {
    const html = '<html><head><!--app-head--></head></html>'
    expect(applyHeadContextToHtmlString({}, html)).toBe(html)
    expect(applyHeadContextToHtmlString(undefined as any, html)).toBe(html)
    expect(applyHeadContextToHtmlString({ title: 'ok' }, '')).toBe('')
  })

  it('updates script attributes (string + boolean)', () => {
    const doc = createTestDocument()

    applyHeadContextToDom(doc, {
      scripts: [{ src: '/a.js', async: true }]
    })

    const el = doc.head.querySelector('script[src="/a.js"]')
    expect(el?.hasAttribute('async')).toBe(true)

    // Now change `async: false`, and add a string attribute
    applyHeadContextToDom(doc, {
      scripts: [{ src: '/a.js', async: false, type: 'module' }]
    })

    expect(el?.hasAttribute('async')).toBe(false)
    expect(el?.getAttribute('type')).toBe('module')
  })

  it('applies style tag with type and media attributes', () => {
    const doc = createTestDocument()

    applyHeadContextToDom(doc, {
      styles: [{
        content: 'body { background: white; }',
        type: 'text/css',
        media: 'screen'
      }]
    })

    const el = doc.head.querySelector('style')
    expect(el?.textContent).toContain('background: white')
    expect(el?.getAttribute('type')).toBe('text/css')
    expect(el?.getAttribute('media')).toBe('screen')
    expect(el?.hasAttribute(STONE_DOM_ATTR)).toBe(true)
  })

  it('applies meta tag using property instead of name', () => {
    const doc = createTestDocument()

    applyHeadContextToDom(doc, {
      metas: [{
        property: 'og:title',
        content: 'OpenGraph Title'
      }]
    })

    const el = doc.head.querySelector('meta[property="og:title"]')
    expect(el?.getAttribute('content')).toBe('OpenGraph Title')
    expect(el?.hasAttribute('property')).toBe(true)
    expect(el?.hasAttribute(STONE_DOM_ATTR)).toBe(true)
  })

  it('adds missing boolean script attribute (e.g. async=true)', () => {
    const doc = createTestDocument()

    // 1. Add script without `async`
    applyHeadContextToDom(doc, {
      scripts: [{ src: '/test.js' }]
    })

    const el = doc.head.querySelector('script[src="/test.js"]')
    expect(el?.hasAttribute('async')).toBe(false)

    // 2. Re-apply with `async: true` → triggers `existing.setAttribute(key, '')`
    applyHeadContextToDom(doc, {
      scripts: [{ src: '/test.js', async: true }]
    })

    expect(el?.hasAttribute('async')).toBe(true)
  })

  it('omits script boolean attributes that are false (e.g. async: false)', () => {
    const html = '<html><head><!--app-head--></head></html>'

    const result = applyHeadContextToHtmlString({
      scripts: [{ src: '/skip.js', async: false }]
    }, html)

    const scriptTag = /<script([^>]*)><\/script>/.exec(result)?.[1] ?? ''
    expect(scriptTag).toContain('src="/skip.js"')
    expect(scriptTag).not.toContain('async') // ✅ async was false → not included
  })

  it('updates existing link tag when attribute changes', () => {
    const doc = createTestDocument()

    applyHeadContextToDom(doc, {
      links: [{ rel: 'icon', href: '/favicon.ico', type: 'image/png' }]
    })

    const el = doc.head.querySelector('link[href="/favicon.ico"]')
    expect(el?.getAttribute('type')).toBe('image/png')

    applyHeadContextToDom(doc, {
      links: [{ rel: 'icon', href: '/favicon.ico', type: 'image/svg+xml' }]
    })

    expect(el?.getAttribute('type')).toBe('image/svg+xml')
  })

  it('returns early if neither name nor property is defined (coverage)', () => {
    const doc = createTestDocument()

    applyHeadContextToDom(doc, {
      metas: [{ content: 'empty-meta' }] // no name or property
    })

    expect(doc.head.querySelectorAll('meta').length).toBe(0)
  })

  it('does not update meta content if already matching', () => {
    const doc = createTestDocument()

    applyHeadContextToDom(doc, {
      metas: [{ name: 'keywords', content: 'a,b,c' }]
    })

    const el = doc.head.querySelector('meta[name="keywords"]')
    // @ts-expect-error
    const spy = vi.spyOn(el, 'setAttribute')

    // Reapply same value
    applyHeadContextToDom(doc, {
      metas: [{ name: 'keywords', content: 'a,b,c' }]
    })

    expect(spy).not.toHaveBeenCalledWith('content', 'a,b,c')
  })
})
