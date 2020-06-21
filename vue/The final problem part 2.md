# The Final Probblem Part II

Alright, Let's check what's left to do.

1. ```App.vue```: :white_check_mark:
    1. A header component with title 'TodoList' and the Navbar, ```Header``` :white_check_mark:

2. ```Home.vue```: :white_check_mark:
    1. A component which will contain all the pre-recorded tasks fetched from the vuex store, ```Todos.vue```
        1. A component template for each tasks, ```TodoItem.vue```.
    2. A component which have an input bar and Submit button to add new todo task, ```AddTodo.vue```
3. ```About.vue```

Okay. The About page is just there for the purpose of understanding routing.

/src/views/About.vue:

```vue
<template>
  <div class="about">
    <h1>About</h1>
    <p>This is the TodoList app. It is part of the Vue course on learn.neoito.com</p>
  </div>
</template>
```

We'll be creating the todo template next, i.e., the ```TodoItem``` component.

/src/components/TodoItem.vue:

```vue
<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete" v-bind:checked="todo.completed">
      {{todo.title}}
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.$store.dispatch('markComplete',this.todo.id)/*Accessing actions using    this.$store*/
    }
  }
}
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

input{
  cursor: pointer;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>

```

Let's check the ```<script>``` part first. ```TodoItem``` gets a prop ```todo``` from it's parent component ```Todos```, which will contain an individual todo item. Then one method ```markComplete``` is defined. markComplete dispatches for the action ```markComplete``` along with the id of todo item as ```payload```. Here the action is accessed using ```this.$store.dispatch()``` method. Just for demonstration purpose for you :smile:.

Now, onto the HTML part, the root element is a ```div``` of ```class``` 'todo-item' and ```class``` 'is-complete' is binded on the value of ```completed``` property of ```todo```. The div contains mainly a ```checkbox``` input to mark the todo item done or not, the title of the todo item and a button which deletes the todo item. Let's take a close look at each.

> ```js
> <input type="checkbox" v-on:change="markComplete" v-bind:checked="todo.completed">
> ```

There's an ```onChange``` listener which triggers ```markComplete()```. Also the ```checked``` attribute of ```checkbox``` is based on ```completed``` property of ```todo```. Perfect! The checkbox must be working perfectly.

> ```js
> <button @click="$emit('del-todo', todo.id)" class="del">x</button>
> ```

There's an ```onClick``` event which emits the event 'del-todo' event along with id of ```todo```. Remember, this component(```TodoItem```) will be used inside the ```Todos``` component. We've the listener to 'del-Todo' event inside the ```Home```. The event emitted here will only be listened at the direct parent component, which is ```Todos```. What should we do inorder to make sure the ```Home``` component gets the 'del-Todo' event and dispatch the ```deleteTodo``` action? Simple. Just listen for the event 'del-Todo' in ```Todos``` and re-propagate it to home with the todo id. We'll see that in action in ```/src/components/Todos.vue```.

/src/components/Todos.vue:

```vue
<template>
  <div class="todosContainer">
    <div class="counter" v-if="todos.length">
      <span>{{noOfTodos}} todos</span>
    </div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  data(){
    return {
      noOfTodos:this.todos.length
    }
  },
  props: ["todos"],
  watch:{
    todos: function(){
      this.noOfTodos=this.todos.length
    }
  }
}
</script>

<style scoped>
.todosContainer{
  width: 100%;
  max-width: 90vw;
  margin: 0 auto;
}

.counter{
  padding:10px;
  text-align: center;
  font-weight: 800;
}
</style>
```

As usual, ```<script>``` part first. Importing ```TodoItem``` component, receives props ```todos``` from parent component ```Home```, has a data item ```noOfTodos``` which is initialized with the value ```todos.length```, which is the no. of todo items inside ```todos``` array. Now, let's look at the new property of Vue instance, ```watch```.```watch``` is used when you have to change some data whenever another data changes. ```noOfTodos``` is assigned the value at declaration isn't it? Will it change when the no. of todo items in ```todos``` change? No. That's where ```watch``` comes to the rescue. We have to change ```noOfTodos``` whenever ```todos``` change. For this, we need to observe for changes on ```todos```. That is done by ```watch```. Now let's check what's inside of ```watch``` here:

> ```js
> todos: function(){
>   this.noOfTodos=this.todos.length
> }
> ```

Whenever ```todos``` change, the function is invoked which updates the value of ```noOfTodos``` with new length. Got it? Yeah, Of course you could've used a computed property which returns the length of ```todos```. But in certain cases, you would've to update some other data items on the change of some, where computed properties cannot be used. Also you could learn a new thing because I wrote it this way :wink:.

Is there something new inside HTML part? Yeah. The ```v-if``` and ```v-for``` directives. Yup. The if ladder and for loop in Vue style. The div with v-if will be rendered only when the condition specified in ```v-if``` directive is true. That is, The no. of todos will only be shown when there's at least one todo item.

The ```todos``` array contains todo items. We have to display all the items one by one using the ```TodoItem``` component. ```v-for``` directive is used to render a list of items based on an array. Let's simplify things with a simple example. You have to display the ```title``` of the ```todos``` array line by line. Let's see how it's done:

```html
<div v-for="todo in todos" :key="todo.id">
    <span>{{todo.title}}</span>
</div>
```

It's simple isn't it? ```todo``` represents a single array item. The only confusing thing here is the ```v-bind:key```(```:key```). A key attribute is **recommended** to be provided whenever ```v-for``` directive is used. The ```key``` should be **unique** for every item. This is done because it help vue to track each item's identity.

Now back to the original code, we can see that ```TodoItem``` component is used inside a div with ```v-for``` directive and passed an attribute ```todo``` using ```v-bind```. The result will be as many ```TodoItem``` components as the no. of todo items in the ```todos``` array, each ```TodoItem``` getting one todo item as props. Just as we wanted. Easy as that.

Remember the structure of our components? The ```TodoItem``` component comes inside the ```Todos``` component. We said that we have to re-propogate the event emitted by ```TodoItem``` from here to Home. Well, if you look closer:

> ```js
> <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
> ```

The same is done here. So our delete event should now properly reach the ```Home``` component. We still have one more thing to do, Create the ```AddTodo``` component.

/src/components/AddTodo.vue:

```vue
<template>
  <div>
    <form @submit.prevent="addTask">
      <input type="text" v-model="title" name="title" placeholder="Add Todo...">
      <input type="submit" value="Submit" class="btn" :disabled="!title">
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTask() {
      const newTodo = {
        title: this.title,
        completed: false
      }
      // Send up to parent
      this.$emit('add-todo', newTodo);

      this.title = '';
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
}

input{
  border-radius: 5px;
  border: 1px solid currentColor;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
}
</style>
```

Nothing new inside the ```<script>``` part. There's a data item ```title``` to get the value of input box and a method ```addTask``` which creates an object ```newTodo``` with properties ```title``` and ```completed:false```. And then, add-Todo event is emitted with the ```newTodo``` as ```payload```. Since the ```AddTodo``` component is used inside ```Home``` component, the event is properly caught and the ```actions``` is dispatched in ```Home```. So it should work perfectly.

There's somethings new inside the HTML part here. Do you see it? The ```v-model``` directive. Do you know about the ```value``` attribute of ```text input```? The ```text input``` will have a default value before user edits it and it'll be the value of the ```value``` attribute. The v-model functions exactly similar but the change on the ```text input```  value is reflected in the data item which is provided in ```v-model```. Let's see what happens here.

> ```js
> <input type="text" v-model="title" name="title" placeholder="Add Todo...">
> ```

The ```text input``` is modeled using ```title```. So it will get the default value of '' (empty string) which is the initial value of ```title```. When user types in something inside the ```input```, the change is immediately recorded in ```title``` and when user hits the submit button, ```title``` will have the current value of the ```text input```. The submit button triggers the ```onSubmit``` event when clicked, and the onSubmit event invokes the method ```addTask```. Also the button is disabled if ```title```, i.e., ```text input``` is empty. Perfect! It should now work as expected. Time to run the app! :smiley:

There're 5 default tasks. You can add, delete and check tasks, take a tour on vue devTools to see how things are placed, and the style parts of every components if you have doubt on how this or that style is applied. Play around on your first Vue.js feature App. We haven't learn everything yet. There's still more. And I think I should share my knowledge on some important and unmissable features that we haven't covered in this project.

## Life-cycle hooks

Each Vue instance goes through a series of initialization steps when it's created - for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages. The following diagram tells about the different lifecycle hooks and when they are invoked.

![Life Cycle](/assets/lifecycle.png)

Here's how they're made use of:

```js
export default{
    ...
    created(){
        console.log('created');
    }
    ...
}
```

## Navigation guards

Suppose you have to create a social media app. There'll be some routes which are not accessible to the users who are not logged in. To implement this functionality, navigation guards are used. Navigation guards are defined inside the ```router``` ```index.js``` file.

```js
router.beforeEach((to, from, next) => {
  // ...
})
```

Every guard function receives three arguments:

- ```to```: Route: the target Route Object being navigated to.

- ```from```: Route: the current route being navigated away from.

- ```next```: Function: this function must be called to resolve the hook. The action depends on the arguments provided to ```next```:

    - ```next()```: move on to the next hook in the pipeline. If no hooks are left, the navigation is confirmed.

    - ```next(false)```: abort the current navigation. If the browser URL was changed (either manually by the user or via back button), it will be reset to that of the from route.

    - ```next('/')``` or ```next({ path: '/' })```: redirect to a different location. The current navigation will be aborted and a new one will be started. You can pass any location object to ```next```, which allows you to specify options like ```replace: true```, ```name: 'home'``` and any option used in ```router-link```'s to prop or ```router.push```

    - ```next(error)```: if the argument passed to ```next``` is an instance of Error, the navigation will be aborted and the error will be passed to callbacks registered via ```router.onError()```.

There are other guard functions too. You can learn more about Navigation guards [here](https://router.vuejs.org/guide/advanced/navigation-guards.html)

## v-once and v-html

To perform one-time interpolations that do not update on data change, we can use the ```v-once``` directive. 

```html
<span v-once>This will never change: {{ msg }}</span>
```

The mustache syntax interprets data as plain text. In order to output real HTML processed from an HTML data, you will need to use the v-html directive.

```js
<span v-html="rawHtml"></span>
...
  data(){
    ...
    rawHTML:'<span>Message</span>'
    ...
  }
```

The output would be:

```
Message
```

## ref

Sometimes, you may need to access the methods or properties of child element inside the parent. That's where ```refs``` become useful. ```refs``` are similar to ```document.select```.

```js
<base-input ref="usernameInput"></base-input>
```

Once you give a child component a reference, you can access the child component properties like:

```js
this.$refs.usernameInput
```

## BootstrapVue

BootstrapVue has some built-in and awesome components which you can use after installing and using Bootstrap in your app. [Go check it out](https://bootstrap-vue.org/docs). The installation steps and way of using can be found on the provided link.

## Transition

This is not an important feature, but a cool feature which I liked. ```<transition>``` is a built-in component which is used to give special transition effects for entering and exiting components.

```vue
<template>
  <div id="example-1">
    <button @click="show = !show">
      Toggle render
    </button>
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>
...
<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(10px);
  opacity: 0;
}
</style>
```

The ```<p>``` inside ```<transition>``` is shown when the value of ```show``` is ```true```. The button toggles the value of ```show```. So when you click the button once, 'hello' appears, and on the next click, 'hello' disappears. What the ```<transition>``` component does is, It gives a transition when 'hello' appears and disappear. Here, the ```transition``` is named ```slide-fade```. The ```transition``` component takes 6 classes. They're:

- ```[name]-enter```
- ```[name]-enter-active```
- ```[name]-enter-to```
- ```[name]-leave```
- ```[name]-leave-active```
- ```[name]-leave-to```

```[name]``` stands for the name you give to the transition. ```[name]-enter``` and ```[name]-enter-to``` classes will be active when an element just enters into the transition state and when an element is just about to complete the entrance, or simply said, it denotes the starting position and end position. ```[name]-enter-active``` class will be active during transition and it denotes what transition is applied. Similarly, the other 3 classes are applied to the leaving element in the same manner. You can define your own custom transition for every element in your App. Interesting? You can always learn [more!](https://vuejs.org/v2/guide/transitions.html).

That's it. I believe we've covered most of the important parts here. Spare some time to read the conclusion.