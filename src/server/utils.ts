import { IBlueprint } from '@stone-js/core'
import { STONE_SNAPSHOT } from '../constants'

/**
 * Get the HTML template for the React application.
 *
 * @param blueprint - The blueprint.
 * @returns The HTML template.
 */
export const htmlTemplate = async (blueprint: IBlueprint): Promise<string> => {
  const path = blueprint.get<string>('stone.useReact.htmlTemplatePath', '../client/index.html')
  return await (await import('node:fs/promises').then(v => v.readFile))(path, { encoding: 'utf-8' })
}

/**
 * Render Stone snapshot.
 *
 * @param snapshot - The snapshot to render.
 * @returns The script tag.
 */
export const renderStoneSnapshot = (snapshot: string): string => {
  return `<script id="${STONE_SNAPSHOT}" type="application/json">${snapshot}</script>`
}
