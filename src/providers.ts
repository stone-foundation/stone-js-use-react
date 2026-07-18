/**
 * Design-system & provider integration for React apps, re-exported from `@stone-js/use-view`.
 *
 * Stone.js is designed to receive any design system with minimal friction:
 *
 * - **Tailwind CSS / plain-CSS design systems** — no code: add your Tailwind/PostCSS config
 *   and import the stylesheet from your CSS entry (`assets/css/index.css`) or a component.
 *   The CLI's Vite pipeline handles PostCSS/Tailwind out of the box, and asset aliases
 *   (`@css`, `@assets`) make imports clean.
 *
 * - **Component libraries with a provider** (MUI, Chakra, NoowowDesign System, …) — register
 *   their root provider once; it wraps the whole app tree (SSR and CSR):
 *
 * ```ts
 * import { defineViewProvider } from '@stone-js/use-react'
 * import { ThemeProvider, theme } from '@noowow/design-system'
 *
 * export const AppConfig = defineBlueprintConfig((blueprint) => {
 *   blueprint.add('stone.useReact.providers', [
 *     defineViewProvider(ThemeProvider, { priority: 10, props: { theme } })
 *   ])
 * })
 * ```
 *
 * Providers compose outermost-first by ascending `priority`. Use a factory for DI-aware
 * providers (`defineViewProvider((container) => MyProvider, { isFactory: true })`).
 */
export {
  defineViewProvider,
  isViewProvider,
  composeProviders
} from '@stone-js/use-view'

export type {
  MetaViewProvider,
  ViewProviderOptions
} from '@stone-js/use-view'
