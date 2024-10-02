# Log.js
Log.js is a lightweight JavaScript logging library that provides a simple and customizable way to log variables, objects, and errors. It also includes a function to display log messages in a div element. This library is useful for debugging and testing purposes.
## Table Of Content
- Functions
  - Log.formatObject
  - Log.formatVar
  - Log.print
## Functions
### Log.formatObject
```Log.formatObject```
Formats an object into a string representation, making it easy to read and debug. This function takes an object as input and returns a string that represents the object's properties and values.
#### Tasks
- Takes an object as input and returns a string representation of its properties and values
- Optional indent parameter adds spaces for nested objects
- Supports nested objects and arrays
- Ignores non-enumerable properties
#### Usage
```js
const demo = Log.formatObject({name: "John", age: 30});
console.log(demo);
```
```
Console Output:
>>> {name: "John", age: 30}
```
### Log.formatVar
Formats a variable into a string representation, allowing for easy logging and debugging. This function takes a variable as input and returns a string that represents the variable's value.
#### Tasks
- Takes a variable as input and returns a string representation of its value
- Supports multiple variable types (string, number, boolean, object, array)
- Uses type-specific formatting (quotes for strings, brackets for objects)
#### Usage
```js
const demo = Log.formatVar("hello");
console.log(demo);
```
```
Console Output:
>>> "hello"
```
