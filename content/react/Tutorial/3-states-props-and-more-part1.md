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
  return(
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
  )
}
export default App;
````
Try typing a web series name, well not able to type right? well you need to add onChange event to to the input field, its the same onchange in javascript but camel-cased.

Then another problem ? we need to store the value of input field when onChange is triggered, right? 

#### The answer is State

we will be attaching a function to on change to store the value in state. so to use and manipulate state in functional component we will be using a hook called __useState__

*Hooks are the functions which "hook into" React state and lifecycle features from function components*

so lets use the useState hook, you can import it at the top like

```
import React, { useState } from 'react';
// {useState} is named import here
```
or we can access it by __React.useState__

Let's modify our code now, inside our App function write the following
```
  const [seriesName, setSeriesName] = useState('');
  
```
/* The useState function takes a default value, here its '' and returns two array elements containing the state variable and a function to set a value to the state variable.
  One major thing to note is that state in react should be immutable and react works in a one way binding mechanism
  */

  now we have to modify our code to incorporate the onChange event,

```
import React from 'react';

function App() {
    // state variable and a function to change the state
    const [seriesName, setSeriesName] = React.useState('');
return(
  <div className="row container">
        <form>
          <h4>Web Series App - {seriesName}</h4>
          <div className="row">
            <div className="col s9">
              <input value={seriesName} type="text" onChange={(e) => { setSeriesName(e.target.value) }}/>
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
)
}
export default App;
````
/* you may have noticied that we have put the state seriesName in some places in between curley braces, {state}. to access a state or function inside JSX you have to put it inside curley braces */

Now if you type some thing the onChange event will trigger and it updates the state using the setSeriesName function and the new state will set on seriesName. where ever you use the seriesName state inside the JSX the value will automatically change on update.

Head to the dev tools and inspect the input, when you type the state changes and it causes re render, but efficent re render only the place's where the state is used is updated :).

Great, so we now know about state and how to manipulate it.
Now for our series app we need to add these values to an array and loop through it somehwere in our code and show it.

so let's create another state to hold the values of the Series Names being submitted via form submit.

```
  const [seriesList, setSeriesList] = useState([]);
```

now define a function which will be triggered on onSubmit event of form

```

  const saveSeries = (e) => {
    e.preventDefault();
    const series = {
      name: seriesName,
      id: +new Date()
    }
    setSeriesList([...seriesList, series]);
    setSeriesName('');
  }
  /* we block the default behaviour of form submit here
  then makes an object which contains the name of series which is
  in the state, remember whenever we type in the input field, 
  that series name is being stored in the seriesName state.

  Then we use the setSeriesList function to add the new object to the list of series name. The  ... is called spread operator(JS stuff), basically here we spreads all data in the seriesList array and adds the new object to it and a new array of object is made and that is set o the seriesList state.
```
So our final code will be like

```
import React, {useState} from 'react';

function App() {
    // state variable and a function to change the state
    const [seriesName, setSeriesName] = React.useState('');
    const [seriesList, setSeriesList] = useState([]);

    //onsubmit we call this 
      const saveSeries = (e) => {
        e.preventDefault();
        const series = {
          name: seriesName,
          id: +new Date()
        }
        setSeriesList([...seriesList, series]);
        setSeriesName('');
      }
return(
  <div className="row container">
        <form onSubmit={saveSeries}> {/* here (saveSeries) we are refering to the function not invoking it*/}

          <h4>Web Series App - {seriesName}</h4>
          <div className="row">
            <div className="col s9">
              <input value={seriesName} type="text" onChange={(e) => { setSeriesName(e.target.value) }}/>
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
)
}
export default App;
````

Now we are going to show the series name in an ul so our unordered list becomes
```
<ul className="collection">
        {seriesList.map((item) => {
          return <li className="collection-item" key={item.id}>{item.name}</li>
        })}
</ul>
```

Perfect, so we learned how to use the useState hook, how to manipulate state, how to use events in JSX, how to access state in JSX and how to loop and show some array values inside JSX

Next we will move our ul to another component, which brings us the another two categories of components 

__Smart Components (Containers)__

__Dumb Components (Presentational Components)__

then

__Props__

__useEffect__

in the next session we will be exploring these, so try making this or varients of the code snippet and try converting it into class based component :).

check this link to figure out how to use state in class based component : [State in react](https://www.youtube.com/watch?v=34fE23aib1o)
