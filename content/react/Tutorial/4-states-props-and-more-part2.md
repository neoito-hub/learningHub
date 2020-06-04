#### Smart Components - Containers

Smart components describe how things work, they are container or app level

#### Dump Components - Presentation components

They describe how things look, they mostly recieve props and callbacks.

[check this out for more info](https://jaketrent.com/post/smart-dumb-components-react/)

So we will make the listing of the series name a seperate component, which will receive data via props. Yup it's gonna be a presentational component.

Inside the src folder create a folder called Components and create a file named List.js
src-->Components-->List.js and put the below code inside it.
```
import React from 'react';

export default function List(props) {
    // this function is accepting a param called props,
    //which is passed from the parent component

  return (
    <ul className="collection">
      {props.series.map((item) => {
        return <li className="collection-item" key={item.id}>{item.name}</li>
      })}
    </ul>
  );
}
```

and now edit our App.js and import this List component into it 
```
import List from './Components/List'
// add this below react import
```

now replace the ul with the following
```
 <List series={seriesList}/>
```
our code becomes as follows 
```
import React from 'react';
import List from './Components/List'

function App() {
  // state variable and a function to change the state
  const [seriesName, setSeriesName] = React.useState('');
  const [seriesList, setSeriesList] = React.useState([]);

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
  return (
    <div className="row container">
      <form onSubmit={saveSeries}>
        {/* here (saveSeries) we are refering to the function not invoking it*/}
        <h4>Web Series App - {seriesName}</h4>
        <div className="row">
          <div className="col s9">
            <input value={seriesName} type="text" onChange={(e) => { setSeriesName(e.target.value) }} />
          </div>
          <div className="col s3">
            <button className="btn" type="submit">Save</button>
          </div>

        </div>
      </form>
      <List series={seriesList} />
    </div>
  )
}
export default App;
```
Here we are passing the seriesList state as props into the List component, the series used here is our props and we are accessing it in our List component as __props.series__

Great :) , So the code is clean now and we learned about presentational component, smart component and ofcourse passing properties from parent to child component as props.

So now your task is to add a delete button to every Series list rendered in our List component so that we can delete them :) 

Next we will explore about useEffect hook