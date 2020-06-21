# Data and Props

## Props

Before we get started here, remember where we left off? Yeah. We forgot to check out ```HelloWorld.vue``` . Well, 'forgot' might not be the right term. It was left intentionally for this page. Let's checkout the script part of that page as HTML part looks messy. Don't worry we'll break that down later

> ```vue
> <script>
> export default {
>   name: 'HelloWorld',
>   props: {
>     msg: String // props represented as an Object.
>   }
> }
> </script>
> ```

Quite easy isn't it? Only one new term, 'props'. Wonder what it might be? Wait..

> ```js
> <HelloWorld msg="Welcome to Your Vue.js App"/>
> ```

Remember this tag? You know what HelloWorld tag is, as we discussed it earlier. Now can you guess what is this 'msg' attribute? Of course! Those are the **```props```** passed to the component ```HelloWorld``` . Now what exactly are ```props```? ```props```, short term for properties, are data passed down from a parent component to a child component as attributes, in this case, The parent component is ```App``` and child component is ```HelloWorld``` and the prop or attribute is ```msg```. ```props``` can be represented as an Object or an array of strings. The object example is the one we've used in our original project.

```props``` as object:

```vue
<script>
export default{
    props:{
        // null and undefined values will pass any type validation)
        propA: Number, // Basic type check
        propB: [String, Number], // Can be either string or number
        propC: {
            type: String,
            required: true
        }, // String type required prop. Error if component called without this prop.
        propD: {
            type: Number,
            default: 100
        }, // A number type prop with default value 100.
        propE: {
            type: Object,
            default() {  // Note: default value is returned from a constructor
                return { name:'default' }
            } //An Object type prop with a default value 
        } 
    }
}
</script>
```

```props``` as array:

```js
export default{
    props:['propA','propB','propC']
    // Each string indicates the name of the attribute passed to the child
}
```

### What's the difference?

In ```props``` as an array,there's no type validation or default value specification. Where as in ```props``` as object, both are specifiable. So the most widely used way is registering ```props``` as an object.

Now let's breakdown the HTML section. Umm.. there are some ```<ul>``` and ```<li>``` tags with hyperlinks which we can ignore. That's just basic HTML. Let's see what's the relevant part

```html
    <h1>{{ msg }}</h1>
```

That seems new. Something inside double curly braces. Will the output be '{{ msg }}'? Nope. THIS is the syntax which you have to use to access Vue properties inside the DOM. Looks like a Mustache doesn't it. Obviously, it's called the **Mustache** syntax. The ```{{ msg }}``` will be replaced with the value of the ```msg``` property. It will also update whenever the value of ```msg``` property changes. So what's the value of the ```msg``` property? Well, it's a prop. That means, the value is passed from where the component is called. Remember?

> ```js
> <HelloWorld msg="Welcome to Your Vue.js App"/>
> ```

Yup. You guessed it right this time! The output will be 'Welcome to Your Vue.js App' 

Props is one of the methods by which a parent component can communicate to it's child. The other method is Vuex. Vuex is like a common state management which is accessible to all components. Also, we can't use props to communicate to parent from child. For that purpose, we can use Vuex or custom events. We'll discuss more about custom event triggering method and vuex later.

I guess we can skip the ```<script>``` tag of the ```HelloWorld``` component since it's just basic CSS and you should've already checked out our CSS section. If not, please do, so that you can learn the vast possibilities of styling a webpage from a well prepared note.

Shall we move on to the next topic now. You can take a ```<br/>``` anytime!

## Data

Hmm.. seems like our **hello world** project doesn't have any data defined. Let's make some modification on the ```App.vue``` ```<script>``` tag. Code's always nice to learn new things :wink:

```vue
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() { //This is the addition
    return {
      msg:'Welcome to Your Vue.js App'
    }  
  },
  components: {
    HelloWorld
  }
}
</script>
```

We registered a ```data``` function which returns an object with property ```msg```. Why not declare ```data``` as a property? Well, you can, but it returns an error.

```js
export default{
  data:{
    message:'Welcome to Your Vue.js App' //returns an error or does it? Try it out!
  }
}
```

There's a reason for everything. You're here for a reason. Like that, if you declare ```data``` as a property, it'll lead to unexpected errors.    
Imagine your facebook timeline filled with posts. Every facebook posts have the same outline and design but different owners, different contents, likes, reactions, etcetra no? But they all have the same HTML content and styling. Wonder how that's done? Just use the same Vue component multiple times with different data. See? That's the benefit of breaking down a page into multiple components. Let's get back to our original problem. Why ```data``` not as a property? The reason is that if you declare ```data``` as a property, all the instances of the component will share the same data. Imagine your facebook timeline filled with multiple copies of the same post. That's how critical the error is.

Now, let's see what's the data function used for. Data function is used to declare data for a single component. This data can be accessed inside the DOM just like you access props, using the **mustache** syntax. Like this:

```js
<div>
  <span>{{message}}</span>
</div>
```

Not that hard isn't it? Now we have to pass this data variable ```message``` instead of the string 'Welcome to Your Vue.js App' passed as props. Hmm.. HTML tag attributes are passed inside ```""``` isn't it? Let's try that.

```js
<HelloWorld msg="{{message}}">
``` 

Will this work though? **Nope**. Why? Because HTML treats the thing inside ```""``` as strings. Another mistake here is that you used the mustache syntax inside HTML attributes. You don't need to use mustache syntax inside HTML attributes. The value of the prop ```msg``` in HelloWorld Component will be '{{message}}' instead of the string inside the variable ```message```. 

Are you wondering how it's rightly done then? 

## v-bind

```v-bind``` is the answer. If you have to pass a data as an attribute, you use ```v-bind``` to bind the data. Here's how it's done:

```js
<HelloWorld v-bind:msg="message">
```

Or shortly, just put a colon ```:``` before the attribute(prop) name:

```js
<HelloWorld :msg="message">
```

That's it! This will work as expected and we get the value 'Welcome to Your Vue.js App' on the other side, that is, in the ```HelloWorld``` component. 

Now, more about ```v-bind```, you can bind any attribute programmatically to an HTML tag with ```v-bind```. Let's see an application:

```
<div :class=" success ? 'green' : 'red' ">
</div>
```

Let me break it down for you. Here, we use the ternary operator ```?:``` which returns 'green' if the variable ```success``` is true, and 'red' if it's false. The ```v-bind``` then binds the class name to the ```div```. Clear? If ```success``` is true, the ```div``` will be of class name 'green' and if ```success``` is false, ```div``` will be of class 'red'. Whenever the value of ```success``` changes, the class name is automatically updated. Another way of dynamically binding classes to tags. It's as follows:

```html
<div :class="{red:error}">
```

Here, if error is true, then the class 'red' will be binded to the ```div```. 

Congratulations! We have successfully completed our HelloWorld project, and took the babysteps on Vue.js. Now let's get a little serious to learn about more features and functionality of Vue.js.