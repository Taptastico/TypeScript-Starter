/**
 * Common type definitions
 * @module types
 */

/**
 * Configuration options interface
 */
export interface ConfigOptions {
  readonly debug: boolean
  readonly timeout: number
  readonly retries: number
}

/**
 * Result type for operations
 */
export type Result<T> = {
  readonly success: boolean
  readonly data?: T
  readonly error?: string
}

/**
 * Event handler type
 */
export type EventHandler<T = unknown> = (event: T) => void

/**
 * Async operation type
 */
export type AsyncOperation<T> = () => Promise<T>

/**
 * Validation function type
 */
export type Validator<T> = (value: T) => boolean
