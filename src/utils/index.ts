/**
 * Utility functions
 * @module utils
 */

import type { Result } from '@/types'

/**
 * Validate if a string is not empty
 * @param value - String to validate
 * @returns True if string is not empty
 */
export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0
}

/**
 * Create a success result
 * @param data - Data to include in result
 * @returns Success result
 */
export const createSuccessResult = <T>(data: T): Result<T> => {
  return {
    success: true,
    data
  }
}

/**
 * Create an error result
 * @param error - Error message
 * @returns Error result
 */
export const createErrorResult = <T>(error: string): Result<T> => {
  return {
    success: false,
    error
  }
}

/**
 * Delay execution for specified milliseconds
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after delay
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

/**
 * Retry an operation with exponential backoff
 * @param operation - Operation to retry
 * @param maxRetries - Maximum number of retries
 * @param baseDelay - Base delay in milliseconds
 * @returns Promise with operation result
 */
export const retryWithBackoff = async <T>(
  operation: () => Promise<T>,
  maxRetries = 3,
  baseDelay = 1000
): Promise<T> => {
  let lastError: Error
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await operation()
    } catch (error) {
      lastError = error as Error
      if (attempt === maxRetries) {
        throw lastError
      }
      const delayMs = baseDelay * Math.pow(2, attempt)
      await delay(delayMs)
    }
  }

  throw lastError!
}
