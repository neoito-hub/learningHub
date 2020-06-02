#### State

Let's start with state

State can be defined as the heart of a componet, this is actually a javascript object. state is what allows us to make our components dynamic and interactive and __when the state object changes, component re renders__

#### And here come's Props

Props stands for properties. Props are also javascript object but the key difference is that props gets passed to the component where the state is managed with in the component.

😕😟😟, confused ? Let's spread it over some code

So we are gonna build our web-series-app from here onwards and we will be sticking to functional components.

we will be using materialize to style our html elements, so head to our index.html file and add the below snippet to the head section.
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

```
Styling react components itself can be made as a section but here for simplicity we are using materialize. There exist dedicated styling and UI libraries for react. we will take a look at it by the end of this quick intro course.

Now head to our App.js and make an HTML form, so our code is as follows 

```
import React from 'react';

function App() {
  <div className="row container">
        <form >
          <h4>Web Series App</h4>
          <div className="row">
            <div className="col s9">
              <input value="" type="text" />
            </div>
            <div className="col s3">
              <button className="btn" type="submit">Save</button>
            </div>

          </div>
        </form>
        <ul className="collection">
         <li>hai</li>
        </ul>
      </div>
}
export default App;
````
Try typing a web series name, well not able to type right? 