# ElementsTest
This is a little project to show basics of Angular Elements.
It is a step by step guide.

## What is Angular Elements
### Problem
Angular Modules and Components are great when using in Angular Environments and the Angular ecosystem.

Have you ever dreamed of using Angular components in just every HTML-Page and other environments like
REACT?

That is what custom-elements are designed for.
The custom-elements standard ist supported by most modern browsers.

From angular-io:
*A custom-element behaves like any other HTML element, and does not require any special knowledge of Angular terms or usage conventions.*
Sounds great.

Even if you stay in the Angular ecosystem, the **creation of dynamic components** gets much more easier with
Angular Elements. (Am i the only one not liking the ComponentFactory ? ;-))

**Summary Benefits**
- Angular independent
- Easy dynamic component creation

### Solution
Angular Elements is the key to transform Angular Components into standarized web-components.

This means that the Angular Framework (and everything else needed) is bundled into one package.

And with Angular we can transport every component into a custom-element with this function:
`createCustomElement()`.

### HowTo
Add needed stuff (polyfill) to you app.
Using this:
`ng add @angular/elements --name=elements-test`.

0. In tsconfig.json change target to `"target": "es2015",`

1. Create a common Angular component
2. Convert your new Angular component to a custom-element with `createCustomElement()`  (in your *app.ts*)
3. Register to the browsers CustomElement-Registry with js-function `customElements.define`
4. Add component to entry components in *app.module*  `entryComponents: [SendMessageComponent],`
   Add schema the folowing schema: `schemas: [ CUSTOM_ELEMENTS_SCHEMA ]`
5. Use the custom-element in *app.html*

### Transformation
*Input*
Since we have no upper/lower case distinction in html inputs will be transformed
to dash-separated lowercase.
Example:
`textInput -->   <  text-input=''>`

*Events*
Events will be tranformed to CustomEvents. Here we have upper/lower case.

HTML-Example:
```html
<send-message-element text-input="Custom element input text" (send)="dataSend($event)"></send-message-element>
```

### Dynamic creation
1. To create a custom element just use `document.createElement`
2. To get properties and typings add `NgElement & WithProperties<MyComponent>`
3. For Events add an event-listener with `addEventListener`
4. Add new element to the DOM wirh `appendChild`

Example:
```javascript
 const sendMessageElement =  document.createElement('send-message-element') as NgElement & WithProperties<SendMessageComponent>;

   sendMessageElement.textInput = 'Input for new one';
   sendMessageElement.addEventListener('send', ($event) => this.logSend($event));
   document.body.appendChild(sendMessageElement);
```
## Export for other languages
To use our custom element in other technologies (e.g. REACT) we have to create **one** single js file.

0. In our componentent change css encapsulation to `encapsulation: ViewEncapsulation.Native`
1. create an ng prod build with `ng build --prod --output-hashing false`
2. bundle all output  * *.bundle.js* from the *dist* folder files to a single js-file
3. Write a script and an npm command in package.json for steps 1 and 2

## Running unit tests
Actually i do not care for testing here (shame on me).
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help
[Quick introduction video](https://www.youtube.com/watch?v=4u9_kdkvTsc)

