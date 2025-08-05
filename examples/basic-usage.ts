/**
 * Basic usage example
 * @module examples/basic-usage
 */

import { exampleFunction, ExampleClass } from '@/index'
import { isNotEmpty, createSuccessResult, createErrorResult, delay } from '@/utils'

/**
 * Demonstrate basic functionality
 */
const demonstrateBasicUsage = (): void => {
  console.log('=== Basic Usage Example ===')

  // Function usage
  const result = exampleFunction('hello world')
  console.log('Function result:', result)

  // Class usage
  const instance = new ExampleClass('test value')
  const classResult = instance.getValue()
  console.log('Class result:', classResult)

  // Utility usage
  const validationResult = isNotEmpty('valid string')
  console.log('Validation result:', validationResult)

  const successResult = createSuccessResult({ message: 'Success!' })
  console.log('Success result:', successResult)

  const errorResult = createErrorResult<string>('Error occurred')
  console.log('Error result:', errorResult)
}

/**
 * Demonstrate async functionality
 */
const demonstrateAsyncUsage = async (): Promise<void> => {
  console.log('\n=== Async Usage Example ===')

  console.log('Starting delay...')
  await delay(1000)
  console.log('Delay completed!')
}

/**
 * Main example function
 */
const main = async (): Promise<void> => {
  try {
    demonstrateBasicUsage()
    await demonstrateAsyncUsage()
    console.log('\n=== Example completed successfully ===')
  } catch (error) {
    console.error('Example failed:', error)
  }
}

// Run the example if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error)
} 