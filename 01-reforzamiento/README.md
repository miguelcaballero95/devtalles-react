# JavaScript and TypeScript Recap

This project is a comprehensive recap of JavaScript and TypeScript fundamentals, serving as a foundation for React development.

## Study Notes

### 01 - Const and Let
- **Topic:** Variables and basic types.
- **Description:** Differences between `const` and `let` for variable declaration.
- **Notes:** Use `const` for values that won't change and `let` for those that will. Includes usage of string methods like `.includes()`.

### 02 - Template Strings
- **Topic:** String interpolation.
- **Description:** Using backticks for dynamic strings.
- **Notes:** Allows embedding expressions within `${}` for cleaner string concatenation.

### 03 - Object Literals
- **Topic:** Objects and Cloning.
- **Description:** Working with object structures and interfaces.
- **Notes:** Demonstrates deep cloning using `structuredClone()` to avoid reference issues, contrasting it with shallow copying.

### 04 - Arrays
- **Topic:** Array management.
- **Description:** Declaration and manipulation of arrays.
- **Notes:** Use of the spread operator `[...]` to create copies of arrays and TypeScript array typing.

### 05 - Functions
- **Topic:** Function types and syntax.
- **Description:** Standard functions vs. arrow functions.
- **Notes:** Covers returning objects directly from arrow functions using parentheses `() => ({})` and basic TypeScript function signatures.

### 06 - Object Destructuring
- **Topic:** Destructuring objects.
- **Description:** Extracting properties into variables.
- **Notes:** Supports renaming variables during extraction and destructuring nested objects.

### 07 - Array Destructuring
- **Topic:** Destructuring arrays.
- **Description:** Extracting elements based on position.
- **Notes:** Shows how to skip elements using commas and the use of `as const` for precise tuple typing in TypeScript.

### 08 - Imports and Exports
- **Topic:** Module system and Array methods.
- **Description:** Importing data and using utility methods.
- **Notes:** Practical use of `.find()` and `.filter()` to retrieve data from imported modules.

### 09 - Promises
- **Topic:** Asynchronous programming.
- **Description:** Handling delayed operations.
- **Notes:** Implementation of `resolve` and `reject`, and handling results with `.then()`, `.catch()`, and `.finally()`.

### 10 - Fetch API
- **Topic:** HTTP Requests.
- **Description:** Consuming external APIs.
- **Notes:** Basic usage of the `fetch` function combined with Promises to process JSON responses.

### 11 - Async and Await
- **Topic:** Modern Asynchronous syntax.
- **Description:** Syntactic sugar for Promises.
- **Notes:** Using `async` functions and the `await` keyword for more readable and linear asynchronous code.
