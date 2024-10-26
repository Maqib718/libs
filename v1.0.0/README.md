<img src="https://maqib718.tiiny.site/uploads/LogJS-logo.jpg"/>
<a href="https://cdn.jsdelivr.net/gh/Mohammad-Aqib786/libs@1.0.0/Log.js"><img src="https://img.shields.io/badge/jsdelivr-Log.js-e74d3a?logo=jsdelivr" /></a>
      
Log.js is a lightweight JavaScript logging library that provides a simple and customizable way to log variables, objects, and errors. It also includes a function to display log messages in a div element. This library is useful for debugging and testing purposes.
## Table Of Content
- Introduction
- Functions
  - Log.formatObject
  - Log.formatVar
  - Log.print
  - Log.getCurrentTime
  - Log logInDiv
- **_How To Use_ Log.js**
## Functions
### Log.formatObject
```Log.formatObj```
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
>>> Object:
     {
        name: "John"
        age: 30
     }
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
### Log.print
Logs one or more variables to the console, making it easy to debug and test code. This function takes one or more variables as input and logs them to the console.
#### Tasks
- Logs one or more variables to the console
- Supports multiple variable types (string, number, boolean, object, array)
- Uses type-specific formatting (quotes for strings, padding for numbers)
#### Usage
```js
Log.print("hello", {name: "John"});
/// No need of console.log
```
```
Console Output:
>>> "hello"
>>> Object:
     {
        name: "John"
        age: 30
     }
```
> **Note!:**
> _```Log.print``` does not requires ```console.log``` instead it is a replacement for ```console.log```_
### Log.getCurrentTime
Returns the current time or date with time, allowing for easy logging and debugging. This function takes an optional type parameter to specify the format.
#### Tasks
- Returns the current time or date with time
- Optional type parameter specifies format (default: 'time', alternative: 'date')
- Supports two formats (time, date & time)
#### Usage
```js
const time = Log.getCurrentTime();
const dateAndTime = Log.getCurrentTime('date');
console.log(time,'\n',dateAndTime);
```
```
Console Output:
>>> 00:00:00
    12:12:2024 on 00:00:00
```
> **Note!:**
> _Time and date may vary_
### Log.logInDiv
Displays console output in a div element, making it easy to debug and test code. This function displays all logged messages in a div element on the page.
#### Tasks
- Displays console output in a div element
- Supports multiple console methods (debug, info, warn, error)
- Uses a customizable CSS style for the log div
#### Usage
```js
Log.logInDiv();
/// Now all console messages will be shown in a div on the page
```
## _How To Use_ Log.js
**It's easy**
1. Copy the code from [here](https://github/Mohammad-Aqib786/log-js/v1.0.0/Log.js)
2. Create a **`js file`** & link it to  your html before all the scripts (recommend in the head tag) and paste the copied code in your js file
3. Or use cdn
```js
<script src="https://cdn.jsdelivr.net/gh/Mohammad-Aqib786/libs@1.0.0/Log.js" crossorigin="anonymous" async="true"></script>
```

4. **Enjoy**








