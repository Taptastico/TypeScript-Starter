/**
 * Example test file demonstrating testing patterns
 * @module tests/example
 */

import { exampleFunction, ExampleClass } from '@/index'
import { isNotEmpty, createSuccessResult, createErrorResult } from '@/utils'

describe('exampleFunction', () => {
  it('should convert string to uppercase', () => {
    const result = exampleFunction('hello world')
    expect(result).toBe('HELLO WORLD')
  })

  it('should handle empty string', () => {
    const result = exampleFunction('')
    expect(result).toBe('')
  })

  it('should handle special characters', () => {
    const result = exampleFunction('hello@world#123')
    expect(result).toBe('HELLO@WORLD#123')
  })
})

describe('ExampleClass', () => {
  let instance: ExampleClass

  beforeEach(() => {
    instance = new ExampleClass('test value')
  })

  describe('getValue', () => {
    it('should return uppercase value', () => {
      const result = instance.getValue()
      expect(result).toBe('TEST VALUE')
    })
  })

  describe('setValue', () => {
    it('should log the new value', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
      
      instance.setValue('new value')
      
      expect(consoleSpy).toHaveBeenCalledWith('Setting value to: new value')
      consoleSpy.mockRestore()
    })
  })
})

describe('Utility Functions', () => {
  describe('isNotEmpty', () => {
    it('should return true for non-empty string', () => {
      expect(isNotEmpty('hello')).toBe(true)
    })

    it('should return false for empty string', () => {
      expect(isNotEmpty('')).toBe(false)
    })

    it('should return false for whitespace only', () => {
      expect(isNotEmpty('   ')).toBe(false)
    })
  })

  describe('createSuccessResult', () => {
    it('should create success result with data', () => {
      const data = { message: 'success' }
      const result = createSuccessResult(data)
      
      expect(result.success).toBe(true)
      expect(result.data).toBe(data)
      expect(result.error).toBeUndefined()
    })
  })

  describe('createErrorResult', () => {
    it('should create error result with message', () => {
      const errorMessage = 'Something went wrong'
      const result = createErrorResult<string>(errorMessage)
      
      expect(result.success).toBe(false)
      expect(result.error).toBe(errorMessage)
      expect(result.data).toBeUndefined()
    })
  })
}) 