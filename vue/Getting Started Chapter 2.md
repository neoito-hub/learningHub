# Getting Started Chapter II

Welcome to the sequel of Getting Started, Chapter II - The Final problem. Alright, here we go. We'll be setting up Todo in the default route setup Homepage and an about page showing the purpose of the app. Let's take account of how many components needed for creating the app. 

1. ```App.vue```:
    1. A header component with title 'TodoList' and the Navbar, ```Header```

2. ```Home.vue```:
    1. A component which will contain all the pre-recorded tasks fetched from the vuex store, ```Todos.vue```
        1. A component template for each tasks, ```TodoItem.vue```.
    2. A component which have an input bar and Submit button to add new todo task, ```AddTodo.vue```
3. ```About.vue```

```
App
├─ Home
│  ├─ AddTodo
│  └─ Todos
│     └─ TodoItem
└─ About
```

Let's start by setting up Vuex. Modify the store ```index.js``` as follows:

/src/store/index.js:

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    todos:[
      {
          title:'Complete Vue.js Intro',
          completed:true
      },
      {
          title:'Hello Vue World',
          completed:true
      },
      {
          title:'Understand router',
          completed:true
      },
      {
          title:'Understand store',
          completed:false
      },
      {
          title:'Become a Vue.js pro',
          completed:false
      },
    ]
  },
  mutations:{
    addTask: function(state,{title,completed}){
      state.todos = [...state.todos,{title,completed,id:state.id++}]
    },
    deleteTask: function(state,id){
      state.todos = state.todos.filter(todo=> todo.id !== id)
    },
    markDone: function(state,id) {
      const index = state.todos.findIndex(todo=>todo.id===id)
      state.todos[index].completed=!state.todos[index].completed
    }
  },
  actions:{
    addTodo: function( context /*An Obj having all props. of store*/ ,newTodo){
      context.commit('addTask',newTodo) //calling a mutation
    },
    deleteTodo: function( {commit} /*Taking only the commit prop. of context*/ , id){
      commit('deleteTask',id)
    },
    markComplete: function({commit},id){
      commit('markDone',id)
    }
  }
})
```

There are 3 properties defined here for the ```vuex store``` object. 5 default todos are defined inside the state property of ```vuex store```, along with an id variable, to ID the future todos. The other properties are ```actions``` and ```mutations``` which are functions that'll modify the state objects when called. We shouldn't directly mutate or change state objects, cause the change won't be observed. We call ```actions``` by sending changes. The ```actions``` then commit the changes by calling ```mutations```. An ```action``` is called by the method ```store.dispatch('actionName',payload)``` and ```mutation``` is done by calling ```store.commit('mutationName',payload)```. Here 3 ```actions``` are declared, one for adding todo, one fore deleting and one for marking a todo as completed or not. There're also 3 corresponding ```mutations```.

```actions``` will have two arguments, ```context``` and ```payload```. ```context``` is an object which is received from ```vuex```, not function call, and has all the properties of the ```vuex store``` object. So you can access every actions, mutations and state with context object. If you look closely, in one of the methods of ```actions```, the first argument is ```context```, and in others, it's ```{commit}``` . What's happening in the second situation is that it's taking only the ```commit``` property of the ```context``` object. ```payload``` is the argument containing the data for mutation/change. 

```mutations``` also have two arguments, one being ```payload``` and the other being ```state```, which is the ```state``` object of ```vuex store```. ```mutations``` are the methods which actually modifies the state upon calling ```actions```.

You'll be wondering why we can't call ```commit``` directly to mutate and avoid ```actions```, aren't you? Well, you CAN call commit directly. Then why ```actions```? The answer is simple. ```mutations``` are meant to be synchronous transactions. The changes should be done synchronously, inorder to get the correct output. That's where ```actions``` come into the action. ```actions``` can handle asynchronous operations and keep ```mutations``` synchronous.

If you want to learn more about ```vuex```, check [this](https://vuex.vuejs.org/) out.

Now let's modify our ```App.vue```.

/src/App.vue:

```vue
<template>
  <div id="app">
    <Header /> <!-- Hey! A new component here.. Let's see what's this next. -->
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header';
export default {
  name:"app",
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
```

/src/components/layout/Header.vue:

```vue
<template>
  <header class="header">
    <h1>TodoList</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  .header a {
    color: #fff;
    text-decoration: none;
  }
</style>
```

So, ```Header.vue``` is imported inside ```App.vue```. There aren't many changes in there. Just some stylings applied to the previous Navbar, combined with a header and coupled it into a component just to show you that anything can be made a component and reused instead of boring Ctrl+c Ctrl+v. Vue CLI's hot reloading feature just refreshes and recompiles everytime your code changes on the disk(When you hit save). If your program is running, just go to the browser window and take a look at that beautiful Header. Beautiful isn't it? Okay, Let's edit the contents of ```Home.vue``` page next.

/src/views/Home.vue:

```vue
<template>
  <div class="home">
    <AddTodo v-on:add-todo="addTodo" /> //New one
    <Todos :todos="todos" @del-todo="deleteTodo" /> //Another
  </div>
</template>

<script>
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import { mapActions } from "vuex"; //Hmm..

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
  },
  methods:{ //functions used in a component are defined here.
    ...mapActions(['addTodo','deleteTodo'])//Another way of accessing store
  },
  computed:{
    todos: function(){
      return this.$store.state.todos //One way of accessing store
    },
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.home{
  padding-top: 15px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
```

The Homepage we planned has two things, an input bar and a submit button to add new task, and currently active todos. Our ```Home.vue``` has two components exactly for these purposes. ```AddTodo``` and ```Todos```. You can see ```v-bind``` being used in ```Todos``` to bind ```todos``` from Home Component. Hmm.. there's another thing which is new, ```v-on:add-todo``` and ```@del-todo```. The ```v-on``` is the vue alternative for listening to DOM events and run some javaScript when they're triggered. Here, a function is called on both ```v-on``` instances. The part coming after the colon ```:``` will be the event ```v-on``` listens to. For eg: ```v-on:click``` will listen to the mouse click event. ```@del-Todo``` is a shorter syntax for ```v-on:del-Todo```. Now, what's add-Todo and del-Todo? They are custom events. Ringing any bells? *The child component communicates with parent component by triggering custom events.* The parent component listens to that event where the child is embedded. That's what happening here. When a new todo is submitted in the ```AddTodo``` component, it triggers the event ```add-Todo```. Similarly, When one of the todos are deleted in the ```Todos``` component, it triggers ```del-todo``` event. The parent, i.e., ```Home``` component, adds and deletes todos whenever events are triggered. Simple as that. These events can take a ```payload``` along with them, which contains the data to processed on event occurence.

Now, check out the ```script``` part. The ```methods``` property is an Object which contains the functions of the component. The ```computed``` property is an object which holds some functions which returns some value after doing operations on a data.
What's the difference between computed properties and functions? Functions are invoked whenever it's called. But ```computed``` properties are invoked/updated every time the data used in it changes. Let's make this explanation simple with an example:

```vue
<template>
  ...
  <span>{{message.split('').reverse().join('')}}</span><!--Ugly isn't it?-->
  <span>{{reversedMessage}}</span><!--Neat-->
  ...
</template>
<script>
  ...
  computed:{
    reversedMessage(){
      return this.message.split('').reverse().join('')//reversing string
    }
  }
  ...
</script>
```

Check this out. That's what computed properties does. Also whenever the data ```message``` changes, the computed property ```reversedMessage``` updates. That makes computed properties really useful.

**This part is a bit important**. Inside the ```script``` part, the properties of a Vue instance are accessed by using ```this``` keyword. For eg: ```this.message = 'Hello'```. **This is really important because you tend to forget to use ```this```**. ```this``` used inside a vue instance represents the ```vm``` object which contains all the properties like data, methods, computed properties etc of that Vue instance and other properties like ```$parent```,```$store```,```$router```,```$route``` etc.

You can see a computed property ```todos``` which returns ```this.$store.state.todos```. This ```todos``` is passed to the child component ```Todos``` as props. You see the ```vuex store``` is accessed using the ```this.$store``` here. This is one way of accessing store inside components. If you looks inside the ```methods``` property, you can see ```...mapGetters(['addTodo','deleteTodo'])```. Also the ```mapActions``` being imported from vuex: ```import { mapActions } from 'vuex'```. What does ```...mapActions()``` do? It maps the `actions` provided as argument of the method as properties of the component. I'll explain the case here.

> ```js
>   methods:{
>     ...mapActions(['addTodo','deleteTodo'])
>   }
> ```

The actions ```addTodo``` and ```deleteTodo``` will be defined as the methods(```mapActions``` is used inside methods) of the ```Home``` component. So you can access the actions like you invoke a method of the component. This is another way of accessing the store. there's also ```mapState```,```mapMutations```, and ```mapGetters``` to access ```state```, ```mutations``` and ```getters``` of the store respectively. The method of usage is same. Let's see how the computed property todos can be rewritten in the second method.

From this:

```js
  todos: function(){
    return this.$store.state.todos
  }
```

To this:

```js
import { mapActions , mapState } from 'vuex'
...
  computed:{
    ...mapState(['todos'])
  }
```

Remember, don't forget to import the map functions before you use them :wink:

Aw, crap that's lengthy. Let's head to part 2. See you there!