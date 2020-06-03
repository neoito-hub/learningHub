

# What is React JS ? 
It's JavaScript library for building user interfaces

### React is Declarative

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
Declarative views make your code more predictable and easier to debug.

### React is Component Based

Build encapsulated components that manage their own state, then compose them to make complex UIs.
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

(^ what facebook states: https://reactjs.org/)

### Why react ?
The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application and how is it done ? well by using the concept of Virtual DOM which makes react really fast, fast enough to build lightning fast apps 🚀 
#### The problem : DOM Manipulation
DOM manipulation is the heart of the modern, interactive web. Unfortunately, it is also a lot slower than most JavaScript operations.This slowness is made worse by the fact that most JavaScript frameworks update the DOM much more than they have to.

Modern websites can use huge amounts of DOM manipulation. Inefficient updating will become a serious problem.

#### The solution : Virtual DOM

A virtual DOM object is a representation of a DOM object, like a lightweight copy.In react for evey DOM object there is a corresponding Virtual DOM object. This virtual DOM has the same properties as the real dom but it lack's the power to change directly what's on the screen.

This guide explains the concept in simple english : https://programmingwithmosh.com/react/react-virtual-dom-explained/

### One more thing : JSX

JSX is an XML HTML kind of syntax which is used in react. JSX allows to put HTML into JS

```
const App =(
<ul>
<li><a href="#">Home</a></li>
<li><a href="#">Neoito</a></li>
</ul>)
```
Well JSX is not something which browser understands, so we got a buddy to help us and that's called Babel, Babel transfroms the code. Yeah babel creates React elemets out of this JSX, W.R.T our example the code will be like 
```
"use strict";

var App = /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Neoito")));
ReactDOM.render(App, document.getElementById('renderTarget'));
```
wanna play more with it ? [Hit this](https://babeljs.io/repl/#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=G4QwTgBAggDjEF4IAoBQEA8BXANgPlQxwEs8MQIALMAUwDMEAiAYkbwAkB7AWxowHoQZfiQJFS5KrQYs2AORqdiAF04ChA0YX64CASgDcqAEo0QAY2UARAPIBZAHS0AdgBMaYZLBgAaCK85zLF5nZQcAcxplAFEcGhDlACEATwBJV2QAchd3MAAVcEjlTL1DIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=false&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.10.2&externalPlugins=)

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.


We know it's boring to go a lot through the theory part, so from the next session onwards we will learn by getting our hand's dirty .😋


