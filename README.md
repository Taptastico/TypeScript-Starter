# 🔧 TypeScript Starter

[![Node.js](https://img.shields.io/badge/Node.js-22+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> **Strict TypeScript Coding Rules Enforced** - A starter template that enforces strict TypeScript coding standards, ensuring consistent, maintainable, and production-ready code.

## 📋 Overview

This starter enforces **strict coding rules** while developing with TypeScript. No more debates about formatting, no more inconsistent code - just clean, strict, and professional TypeScript development.

---

## 🎯 Strict Coding Rules (Enforced)

### **TypeScript Rules**
```typescript
// ✅ ENFORCED: Strict mode always enabled
// ✅ ENFORCED: No implicit any types
// ✅ ENFORCED: No unused variables
// ✅ ENFORCED: All code paths must return
// ✅ ENFORCED: Explicit return types (warn)
// ✅ ENFORCED: No explicit any types (warn)

// ❌ This will fail:
function badFunction(input) {  // implicit any
  if (condition) return value  // not all paths return
  // unused variable warning
}

// ✅ This passes:
function goodFunction(input: string): string {
  if (condition) {
    return value
  }
  return defaultValue
}
```

### **Code Style Rules**
```typescript
// ✅ ENFORCED: Single quotes, no semicolons
// ✅ ENFORCED: 2-space indentation
// ✅ ENFORCED: No trailing commas
// ✅ ENFORCED: Required curly braces
// ✅ ENFORCED: Spaces inside object braces
// ✅ ENFORCED: No spaces inside array brackets

// ❌ This will fail:
const obj = {a: 1, b: 2,};  // trailing comma
const arr = [ 1, 2, 3 ];    // spaces in array
if(condition) return value;  // no curly braces, semicolon

// ✅ This passes:
const obj = { a: 1, b: 2 }
const arr = [1, 2, 3]
if (condition) {
  return value
}
```

### **Best Practices Rules**
```typescript
// ✅ ENFORCED: Prefer const over let/var
// ✅ ENFORCED: Arrow functions for callbacks
// ✅ ENFORCED: Template literals over concatenation
// ✅ ENFORCED: Object destructuring where applicable
// ✅ ENFORCED: No inline comments
// ✅ ENFORCED: Cognitive complexity ≤ 15

// ❌ This will fail:
var oldWay = "string" + variable;  // var, concatenation
function callback() { return value; }  // function instead of arrow
// inline comment  // inline comment

// ✅ This passes:
const newWay = `string ${variable}`
const callback = () => value
// Block comment for complex logic
```

### **Quality Rules**
```typescript
// ✅ ENFORCED: No duplicate strings
// ✅ ENFORCED: No identical functions
// ✅ ENFORCED: No redundant boolean expressions
// ✅ ENFORCED: Prefer immediate returns
// ✅ ENFORCED: No one-iteration loops

// ❌ This will fail:
const message = "Hello"
const greeting = "Hello"  // duplicate string

if (condition === true) {  // redundant boolean
  return value
}

// ✅ This passes:
const MESSAGES = {
  GREETING: "Hello"
} as const

if (condition) {
  return value
}
```

---

## 🚀 Quick Start

### Installation
```bash
# Clone and start coding with rules enforced
git clone https://github.com/NeaByteLab/TypeScript-Starter.git my-project
cd my-project
npm install
npm run dev
```

### Development Commands
```bash
# Write code (rules enforced automatically)
npm run dev              # Watch mode with strict checking

# Quality checks (strict rules)
npm run lint             # ESLint with strict rules
npm run lint:fix         # Auto-fix rule violations
npm run format           # Prettier with strict formatting
npm run type-check       # TypeScript strict checking

# Testing (required for quality)
npm run test             # Jest with coverage
npm run test:watch       # Watch mode for TDD

# Quality assurance (all checks)
npm run check-all        # Lint + Type-check + Test
```

## 📁 Project Structure

```
TypeScript-Starter/
├── src/                    # Source code
│   ├── types/              # Type definitions
│   ├── utils/              # Utility functions
│   └── index.ts            # Main entry point
├── tests/                  # Tests (required)
├── examples/               # Example usage
├── dist/                   # Build output
├── docs/                   # Auto-generated docs
└── Configuration Files     # Strict rules enforced
    ├── tsconfig.json       # Strict TypeScript
    ├── eslint.config.js    # Strict linting rules
    ├── .prettierrc         # Strict formatting rules
    └── jest.config.js      # Testing setup
```

## 🔧 Strict Rules in Action

### **TypeScript Configuration**
```json
{
  "strict": true,                     // All strict checks
  "noImplicitAny": true,              // No implicit any
  "noImplicitReturns": true,          // All paths return
  "noUnusedLocals": true,             // No unused variables
  "noUnusedParameters": true,         // No unused parameters
  "exactOptionalPropertyTypes": true  // Exact optional types
}
```

### **ESLint Rules (Strict Style)**
```javascript
// Code Style
'semi': ['error', 'never'],           // No semicolons
'quotes': ['error', 'single'],        // Single quotes
'comma-dangle': ['error', 'never'],   // No trailing commas
'curly': ['error', 'all'],            // Required curly braces

// Best Practices
'prefer-const': 'error',              // Prefer const
'no-var': 'error',                    // No var
'prefer-template': 'error',           // Template literals
'prefer-arrow-callback': 'error',     // Arrow functions

// TypeScript Specific
'@typescript-eslint/no-unused-vars': 'error',
'@typescript-eslint/explicit-function-return-type': 'warn',
'@typescript-eslint/no-explicit-any': 'warn'
```

### **SonarJS Quality Rules**
```javascript
'sonarjs/cognitive-complexity': ['error', 15],  // Max complexity
'sonarjs/no-duplicate-string': 'error',         // No duplicates
'sonarjs/no-identical-functions': 'error',      // No identical functions
'sonarjs/prefer-immediate-return': 'error'      // Immediate returns
```
---

## 📊 Code Quality Metrics

### **Cognitive Complexity Limit: 15**
```typescript
// ❌ Too complex (will fail)
function complexFunction(input: string): string {
  if (condition1) {
    if (condition2) {
      if (condition3) {
        if (condition4) {
          if (condition5) {
            return "too complex"
          }
        }
      }
    }
  }
  return "default"
}

// ✅ Simple and clear (passes)
function simpleFunction(input: string): string {
  if (!condition1) return "default"
  if (!condition2) return "default"
  if (!condition3) return "default"
  return "result"
}
```

### **Type Safety Guaranteed**
```typescript
// ❌ These will fail compilation
function badFunction(input) {           // implicit any
  if (condition) return value           // not all paths return
  const unused = "never used"           // unused variable
}

// ✅ These pass strict checking
function goodFunction(input: string): string {
  if (condition) {
    return value
  }
  return defaultValue
}
```

---

## 🧪 Testing (Required)

### **Test Structure**
```typescript
// tests/example.test.ts
import { exampleFunction } from '@/index'

describe('exampleFunction', () => {
  it('should follow strict rules', () => {
    const result = exampleFunction('test')
    expect(result).toBe('TEST')
  })
})
```

### **Coverage Requirements**
- **Lines**: 80% minimum
- **Functions**: 100% for public APIs
- **Branches**: 80% minimum
- **Statements**: 80% minimum

## 📚 Documentation (Enforced)

### **JSDoc Required for Public APIs**
```typescript
/**
 * Example function demonstrating strict rules
 * @param input - Input string to process
 * @returns Processed string in uppercase
 */
export const exampleFunction = (input: string): string => {
  return input.toUpperCase()
}
```

---

## 🔍 Path Aliases (Clean Imports)

```typescript
// ❌ Relative imports (messy)
import { utils } from '../../../utils/helper'

// ✅ Path aliases (clean)
import { utils } from '@/utils/helper'
import { types } from '@types/common'
import { helpers } from '@utils/helpers'
```

## 🛠️ Development Workflow

### **1. Start Coding**
```bash
npm run dev  # Rules enforced automatically
```

### **2. Write Tests**
```bash
npm run test:watch  # TDD approach
```

### **3. Quality Check**
```bash
npm run check-all  # All strict rules checked
```

### **4. Build & Deploy**
```bash
npm run build  # Production build
npm run docs   # Generate documentation
```

---

## 📋 Strict Rules Summary

### **✅ Enforced Rules**

**TypeScript:**
- Strict mode always enabled
- No implicit any types
- No unused variables or parameters
- All code paths must return
- Explicit return types (warn)

**Code Style:**
- Single quotes, no semicolons
- 2-space indentation
- No trailing commas
- Required curly braces
- Spaces in objects, no spaces in arrays

**Best Practices:**
- Prefer const over let/var
- Arrow functions for callbacks
- Template literals over concatenation
- Object destructuring where applicable
- No inline comments

**Quality:**
- Cognitive complexity ≤ 15
- No duplicate code
- No redundant logic
- Prefer immediate returns

### **🎯 Why These Strict Rules?**

1. **Consistency** - Same style across all files
2. **Readability** - Clean, predictable code
3. **Maintainability** - Easy to understand and modify
4. **Quality** - Prevents common mistakes
5. **Performance** - Optimized for modern JavaScript
6. **Team Collaboration** - No style debates

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.