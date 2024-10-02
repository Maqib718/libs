# Log.js
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
2. Create a ```<script>``` tag in your html before all the scripts (recommend in the head tag) and paste copied code in it.
```html
<!-- Or Copy this & Paste it before all the scripts-->
<script>
// Log.js /v1.0.0 CODE:)
  const Log=new Object;Log.formatObject=(n,e=1)=>{let o="";const t="   ".repeat(e);if("object"==typeof n&&null!==n){o+=`${t}{`;for(const r in n)n.hasOwnProperty(r)&&(o+=`\n${t+"    "}${r}: ${Log.formatObject(n[r],e+1)}`);o+=`\n${t}}`}else o="string"==typeof n?`${JSON.stringify(n)}`:"number"==typeof n||"boolean"==typeof n?`${n}`:"function"==typeof n?"function":void 0===n?"undefined":null===n?"null":"Anonymous type - "+typeof n,o+=`${t}`;return o},Log.formatVar=n=>{if("object"==typeof n&&null!==n){return`Object\n${Log.formatObject(n)}`}return"string"==typeof n?JSON.stringify(n):"number"==typeof n||"boolean"==typeof n?n:"function"==typeof n?`ƒ(${n.name||" [anonymous function] "}):\n\n${n||"function () { [undefined code] }"}`:null==n?typeof n:(console.error("Unsupported type: "+typeof n),"Unsupported type: "+typeof n)},Log.print=(...n)=>{n.forEach((n=>{let e=Log.formatVar(n);console.log(e)}))},Log.getCurrentTime=n=>{const e=new Date,o=e.getHours().toString(),t=e.getMinutes().toString(),r=e.getSeconds().toString(),c=e.getFullYear(),l=e.getMonth(),i=e.getDate();let u=o,d=t,s=r,a=l,p=i;if(o.length<2&&(u="0"+o),t.length<2&&(d="0"+t),r.length<2&&(s="0"+r),l.length<2&&(a="0"+l),i.length<2&&(p="0"+i),"date"===n){return`${c}-${a}-${p} on ${u}:${d}:${s}`}return`${u}:${d}:${s}`},Log.logInDiv=()=>{let n={console:0,error:0,warning:0,other:0,total:0};const e=document.createElement("div");e.id="debugDiv";const o=document.createElement("p");o.classList.add("summary"),o.textContent="MESSAGE: 0 ";const t=document.createElement("span");function r(e,o){const t=document.getElementById("debugDiv"),r=document.createElement("p");r.classList.add(e);const c=document.createElement("hr");return t.appendChild(c),r.textContent=o,n.total+=1,n.other=n.total-(n.console+n.error+n.warning)-1,r}function c(){document.querySelector("#debugDiv p.summary").textContent=`MESSAGE: ${n.total} (CONSOLE: ${n.console}, JS EROR: ${n.error}, WARNING: ${n.warning}, OTHER: ${n.other})`}t.textContent="(CONSOLE: 0, JS ERROR: 0, WARNING: 0)",o.appendChild(t),e.appendChild(o),document.body.appendChild(e),window.addEventListener("error",(function(e){if(e.error){const o=`🚫 JS EROR: ${e.message}`,t=Log.getCurrentTime(),l=e.filename||"unknown script",i=e.lineno||"unknown line",u=e.colno||"unknown column",d=r("error",`${o}\n`),s=function(n,e){const o=document.createElement("a");return o.href=n,o.innerText=e,o.style.color="red",o}(`${l}#${i}:${u}`,`// ${t} at ${l}:${i}:${u}`);d.appendChild(s),document.querySelector("#debugDiv").appendChild(d),n.error++,c()}}));const l=console.error;console.error=function(){const e=r("error",` ${[].join.call(arguments," ")}`);document.querySelector("#debugDiv").appendChild(e),n.error++,c(),l.apply(console,arguments)};const i=console.log;console.log=function(){const e=r("console",` ${[].join.call(arguments," ")}`);document.querySelector("#debugDiv").appendChild(e),n.console++,c(),i.apply(console,arguments)};const u=console.warn;console.warn=function(){const e=r("warning",` ${[].join.call(arguments," ")}`);document.querySelector("#debugDiv").appendChild(e),n.warning++,c(),u.apply(console,arguments)};const d=console.info;console.info=function(){const n=r("info",` ${[].join.call(arguments," ")}`);document.querySelector("#debugDiv").appendChild(n),c(),d.apply(console,arguments)};const s=console.debug;console.debug=function(){const n=r("debug",` ${[].join.call(arguments," ")}`);document.querySelector("#debugDiv").appendChild(n),c(),s.apply(console,arguments)};!function(n){const e=document.createElement("style");e.textContent=n,document.head.appendChild(e)}("#debugDiv{font-family:monospace;background-color:#000;padding:20px;overflow: hidden;line-height:20px;user-select:text;color:#FFFFFF;}#debugDiv hr{border-top:1px solid grey;}#debugDiv p{margin:0;white-space:pre;overflow-x:scroll;}#debugDiv p.summary{font-weight:bolder;color:#00DDFF;}.console,.info{color:#FFFFFF;.warning{color:#FFFF00;}.error{color:#FF0000;}.debug{color:grey;}")},console.log(`Log.js loaded successfully!!\non ${Log.getCurrentTime()}\nat your document (${document.location.href}) & happy coding!!`);
// CODE END:)<URL: https://codefile.io/f/yWYgEtmsKB />
/*
Log {
       formatObject: function
       formatVar: function
       print: function
       getCurrentTime: function
       logInDiv: function
    }
*/
// formatObject returns a string representation of an object
// formatVar returns a string representation of a variable
// print logs the formatted variable values & accepts infinite number of params
// returns current time and acepts a string: 'date' which when passed to function returns date with time
// logInDiv displays the console output in a div
/// 10-10-2024 /// & /// OTHER VERSIONS COMING SOON ///
</script>
<!-- Other script below it here -->
   ```
3. **ENJOY!!**
