import { IBlueprint } from '@stone-js/core'
import { GlobalDataType } from '../declarations'
import { STONE_GLOBAL_DATA } from '../constants'

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
 * Render the global data as a script tag.
 *
 * @param data - The global data to render.
 * @returns The script tag.
 */
export const renderStoneGlobalData = (data: GlobalDataType): string => {
  return `<script id="${STONE_GLOBAL_DATA}" type="application/json">${JSON.stringify(data)}</script>`
}
