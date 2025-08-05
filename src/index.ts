/**
 * Main entry point for the TypeScript Strict Starter
 * @module index
 */

export * from './types'
export * from './utils'

/**
 * Example function demonstrating strict rules
 * @param input - Input string to process
 * @returns Processed string
 */
export const exampleFunction = (input: string): string => {
  return input.toUpperCase()
}

/**
 * Example class demonstrating strict TypeScript rules
 */
export class ExampleClass {
  private readonly value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Get the processed value
   * @returns Processed string value
   */
  public getValue(): string {
    return this.value.toUpperCase()
  }

  /**
   * Set a new value
   * @param newValue - New value to set
   */
  public setValue(newValue: string): void {
    // This would be a setter in a real implementation
    console.log(`Setting value to: ${newValue}`)
  }
} 