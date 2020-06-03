#### Prerequisite

Node JS >=8.1+ (LTS) and npm >= 5.6+

and one more thing, we prefer OS with terminal, you got it right :D

well that's it, the rest will be taken care by the boilerplate generator. 

Yup 💰 la casa de papel will be the first web series name which we will add.
#### Getting hand's dirty

Great, let's bootstrap our project
```
npx create-react-app web-series-app
cd web-series-app
npm start
```
Voila, it's running :D

Just change Learn react in Src/App.js to Neoito

Boom, live reloading is in action :) 

Let's look into the code now
At the top there are some imports, the key one is 
```
import React from 'react';
```
```
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Neoito
        </a>
      </header>
    </div>
  );
}

export default App;

```
But it's not used anywhere in this js file right ? hmm 🤨, it takes you to the what and why react section, remember we talked about babel doing some cool stuff. it transformed our code to React.createElement, This is where we need the imported 'React'. if you hit that link provided over there to see the babel transcompiler in action, you should have noticed an error poping up saying 'React is not defined'

One more thing you may have noticed is the use of "className" insted of "class" to style the div and other elements. that is because class is a keyword in JS, that's why we use className insted of class. 

Perfect, you may have noticed the function called App() and the return inside it, well what ever you return will be shown in your UI.

In react we have two kind's of component's __functionl component__ and __class based component__ . Now it's the age of functional components and this example is using a functional component that's why function App(). Try converting our simple example into a class based component and tinker it a bit.

At the end we are exporting our function using ES6 export syntax so that we can access it in other part's of our application.

Before going into the next section we gotta look into two more files.

*src/index.js*

*public/index.html*

in index.js 
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

we have imported the App which we exported above and hope you remember that we stated it as a component, a functional component. Our react app will be a combination of lot of components, that again has one more classification which we will discuss later.

Here ReactDom package provides DOM specific methods to use at the top level of our application, say rendering something to the actual DOM etc. The render method in this package renders the component inside it into the DOM. 

for more info on [react-dom](https://reactjs.org/docs/react-dom.html)

You will be wondering what is React.StrictMode, this one is completely optional. This is a tool used for highligting problems with your application. Don't worry it only runds in dev mode.

for more on [strict mode](https://reactjs.org/docs/strict-mode.html) 

Then 
```
  document.getElementById('root')
```
Eveything out of this render method is attached to an element with id "root", so where is this ? This is actually in the index.html file. There is one div with id root. again if you wanna change the id name, it's perfectly fine :)

Cool, now delete eveything from the App.js file except the React import and move to the next section.