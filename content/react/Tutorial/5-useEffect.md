#### useEffect Hook

useEffect is one of the hooks which was introduced into react from 16.8. The basic use of hooks is to manipulate state and other features of react without writing class components.

#### The Effect hook (useEffect)

This one helps you to perform side effects on a functional component. Side effects are basically anything that affects something outside of the scope of the current function that's being executed.

- API call to out backend service
- Writing something to DB etc

[check this out for more info](https://reactjs.org/docs/hooks-effect.html/)

useEffect hook helps to mimic the functionality of componentDidMount/componentDidUpdate and componentWillUnmount in class component

### How ?

Check the code snippet below

```
import React from 'react';

export default function Register(props) {
   
   const [name, setUsername] = React.useState();
   const [email, setEmail] = React.useState();


  return (
     <div>
      <input type="text" value={name} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
  Name is {name}<br />
  Email is {email} <br />
    </div>
  );
}
```

So whenever the use types in the field the state is updated, let's bring use effect into this.

```
import React from 'react';

export default function Register() {

  const [name, setUsername] = React.useState();
  const [email, setEmail] = React.useState();
  const [rString, setRString] = React.useState();


  //random string generator

  function randomString() {
    return Math.random().toString(36).substring(7);
  }

  React.useEffect(() => {
    console.log(randomString())
  });


  return (
    <div>
      <input type="text" value={name} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
  Name is {name}<br />
  Email is {email} <br />
  Random String : {rString}
    </div>
  );
}
```

When you run this, this one will log into console when ever there is a change in state, open developer tools and type in something in input field. Notice console being logged with random string, ignore rString for now.

So if you write hook like this it will run everytime when there is a state change. Lets change the behaviour. Change the useEffect hook as below
```
  React.useEffect(() => {
    setRString(randomString())
  }, []);
```

Notice the [] at the end is dependency array for useEffect hook, this mimics the function of componenetDidUpdate, that is it once run's once when the page is rendered.

So, let's say you wanna make a network call when someone types in input field, well useEffect covers it also, in the dependency array you can define on what change(state change) the useEffect hook should trigger. 

Let's dive into an example, when user type on user name field we gotta create a random string, so our code will be as follows.

```
import React from 'react';

export default function Register() {

  const [name, setUsername] = React.useState();
  const [email, setEmail] = React.useState();
  const [rString, setRString] = React.useState();


  //random string generator

  function randomString() {
    return Math.random().toString(36).substring(7);
  }

  React.useEffect(() => {
    setRString(randomString())
  },[name]);


  return (
    <div>
      <input type="text" value={name} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
  Name is {name}<br />
  Email is {email} <br />
  Random String : {rString}
    </div>
  );
}
```

Great :) , So the code is clean now, when the user types in username field the useEffect will trigger, this can be your search input, product id or anything. Type in the email field see, the rString is not changing :D , bingo 

So you can write your api call also here like as follows

```
  async function makeAPIcall() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`); 
    const data = await response.json()
    console.log(data);
  }
  
  React.useEffect(() => {
    makeAPIcall();
  }, []);

```
Cool, we will windup the doc's as now it's time to get your hand's dirty :D

Next is conclusion :)