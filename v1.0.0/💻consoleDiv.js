// Mohammad Aqib console Div code :)
 let messageCount = {
 console: 0,
 error: 0,
 warning: 0,
 other: 0,
 total: 0
 };
 
 function getCurrentTime() {
 const now = new Date();
 const hours = now.getHours();
 const minutes = now.getMinutes();
 const seconds = now.getSeconds()
 
 const formattedTime = `${hours}:${minutes}:${seconds}`;
 return formattedTime;
 }
 
 function createLink(url,linkText) {
 const a = document.createElement('a');
 a.href = url;
 a.innerText = linkText;
 a.style.color = 'red';
 
 return a;
 }
 
 function extractFilename(errorMessage) {
 const protocolRegex = /^([^:\s]+):\/\/(.+)/;
 const match = protocolRegex.exec(errorMessage);
 
 if (match) {
 return match[2]; // The captured group contains the filename
 } else {
 // Handle cases where the error message doesn't start with a protocol
 return errorMessage;
 }
 }
 
 const debugDiv = document.createElement('div');
 debugDiv.id = 'debugDiv';
 
 /*const image = document.createElement('img');
 image.src = "http://unsplash.it/1786/1786?random";
 image.style.width = '100%';
 image.style.height = '100%';*/
 const summaryParagraph = document.createElement('p');
 summaryParagraph.classList.add('summary');
 summaryParagraph.textContent = `MESSAGE: ${messageCount.total} `;
 
 const messageSpan = document.createElement('span');
 messageSpan.textContent = '(CONSOLE: 0, JS ERROR: 0, WARNING: 0, OTHER: 0)';
 summaryParagraph.appendChild(messageSpan);
 
 //debugDiv.appendChild(image);
 debugDiv.appendChild(summaryParagraph);
 document.body.appendChild(debugDiv);
 
 // Override console methods for differentiated display
 function logTypePrefix(type) {
 switch (type) {
 case 'warn':
 return '';
 case 'error':
 return ''; // Consistent prefix for errors
 default:
 return '';
 }
 }
 
 function createMessageElement(type, message) {
 const div = document.getElementById('debugDiv');
 const p = document.createElement('p');
 p.classList.add(type); // Correctly uses classList.add
 // Create the HR element and append it to the paragraph
 const hr = document.createElement('hr');
 div.appendChild(hr);
 
 p.textContent = message;
 messageCount.total+=1; //Increase total after creating a message element
 messageCount.other = messageCount.total-(messageCount.console+messageCount.error+messageCount.warning)-1;
 
 return p;
 }
 
 function updateSummary() {
 const summaryElement = document.querySelector('#debugDiv p.summary');
 summaryElement.textContent = `MESSAGE: ${messageCount.total} (CONSOLE: ${messageCount.console}, JS EROR: ${messageCount.error}, WARNING: ${messageCount.warning}, OTHER: ${messageCount.other})`;
 }
 
 // Capture errors from other scripts using the "error" event
 window.addEventListener('error', function(event) {
 if (event.error) { // Check if it's an error event
 const errorMessage = `JS EROR: ${event.error.message}`; // Get the error message
 const eventTime = getCurrentTime();
 const scriptUrl = event.filename || 'unknown script'; // Try to get script URL
 const scriptLineno = event.lineno || 'unknown line';
 const scriptColno = event.colno || 'unknown column'
 const errorMessageWithScript = `${errorMessage}\n`; // Add script URL if available
 const element = createMessageElement('error', errorMessageWithScript);
 const linkUrl = `${scriptUrl}#${scriptLineno}:${scriptColno}`;
 const link = createLink(linkUrl,`// ${eventTime} at ${scriptUrl}:${scriptLineno}:${scriptColno}`);
 element.appendChild(link);
 document.querySelector('#debugDiv').appendChild(element);
 messageCount.error++;
 updateSummary();
 }
 });
 
 // Modify console.error to use the new prefix
 const originalConsoleError = console.error;
 console.error = function() {
 const message = [].join.call(arguments, ' ');
 const element = createMessageElement('error', `${logTypePrefix('error')} ${message}`);
 document.querySelector('#debugDiv').appendChild(element);
 messageCount.error++;
 updateSummary();
 originalConsoleError.apply(console, arguments);
 };
 
 const originalConsoleLog = console.log;
 console.log = function() {
 const message = [].join.call(arguments, ' ');
 const element = createMessageElement('console', `${logTypePrefix('log')} ${message}`);
 document.querySelector('#debugDiv').appendChild(element);
 messageCount.console++;
 updateSummary();
 originalConsoleLog.apply(console, arguments);
 };
 
 const originalConsoleWarn = console.warn;
 console.warn = function() {
 const message = [].join.call(arguments, ' ');
 const element = createMessageElement('warning', `${logTypePrefix('warn')} ${message}`);
 document.querySelector('#debugDiv').appendChild(element);
 messageCount.warning++;
 updateSummary();
 originalConsoleWarn.apply(console, arguments);
 };
 
 const originalConsoleInfo = console.info;
 console.info = function() {
 const message = [].join.call(arguments, ' ');
 const element = createMessageElement('info', `${logTypePrefix('info')} ${message}`);
 document.querySelector('#debugDiv').appendChild(element);
 updateSummary();
 originalConsoleInfo.apply(console, arguments);
 };
 
 const originalConsoleDebug = console.debug;
 console.debug = function() {
 const message = [].join.call(arguments, ' ');
 const element = createMessageElement('debug', `${logTypePrefix('debug')} ${message}`);
 document.querySelector('#debugDiv').appendChild(element);
 updateSummary();
 originalConsoleDebug.apply(console, arguments);
 };
 
 //styles
 function createStyleTag(styles) {
 const styleTag = document.createElement('style');
 styleTag.textContent = styles;
 document.head.appendChild(styleTag);
 }
 
 // Example usage:
 const styles = `
 #debugDiv {
 font-family: monospace;
 background-color: #000;
 padding: 20px;
 overflow: hidden;
 line-height: 20px;
 color: #FFFFFF;
 }
 
 #debugDiv hr {
 border-top:1px solid grey;
 }
 
 #debugDiv p {
 margin: 0;
 white-space: pre;
 overflow-x: scroll;
 }
 
 #debugDiv p.summary {
 font-weight: bolder;
 color: #00DDFF;
 }
 /*
 .console,
 .info {
 color: #00FFFF;
 }
 */
 .warning {
 color: #FFFF00;
 }
 
 .error {
 color: #FF0000;
 }
 
 .debug {
 color: grey;
 }
 
 symbol {
 font-weight: bold;
 user-select: none;
 }
 `;
 
 createStyleTag(styles);
// CODE END