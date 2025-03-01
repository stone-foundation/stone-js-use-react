import { IBlueprint } from '@stone-js/core'

/**
 * Get the HTML template for the React application.
 *
 * @param blueprint - The blueprint.
 * @returns The HTML template.
 */
export const htmlTemplate = async (blueprint: IBlueprint): Promise<string> => {
  const path = blueprint.get<string>('stone.useReact.htmlTemplatePath', './index.html')
  return await (await import('node:fs/promises').then(v => v.readFile))(path, { encoding: 'utf-8' })
}
