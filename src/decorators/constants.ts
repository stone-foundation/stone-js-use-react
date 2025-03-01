/**
 * Constants are defined here to prevent Circular dependency between modules
 * This pattern must be applied to all Stone libraries or third party libraries.
 */

/**
 * A unique symbol key to mark classes as React Page component.
 */
export const REACT_PAGE_KEY = Symbol.for('ReactPage')

/**
 * A unique symbol key to mark classes as React Page layout component.
 */
export const REACT_PAGE_LAYOUT_KEY = Symbol.for('ReactPageLayout')

/**
 * A unique symbol key to mark classes as React Error handler component.
 */
export const REACT_ERROR_HANDLER_KEY = Symbol.for('ReactErrorHandler')

/**
 * A unique symbol key to mark classes as React Adapter Error handler component.
 */
export const REACT_ADAPTER_ERROR_HANDLER_KEY = Symbol.for('ReactAdapterErrorHandler')

/**
 * A unique symbol key to mark classes as React Stone application entry point.
 */
export const STONE_REACT_APP_KEY = Symbol.for('StoneReactApp')
