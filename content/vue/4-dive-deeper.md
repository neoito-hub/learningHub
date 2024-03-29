# Diving deep into Vue.js

So, we've successfully completed the training project on Vue.js , which taught us some cool features of Vue.js . Now it's time to learn more and enjoy Vue.js. We're gonna make a to-do list app which will surely help you deep diver into Vue.js. Time to start the new project!

```
~$ vue create TodoApp
```

In the presets screen, this time we need more features. So let's manually select features this time. Select ```vuex``` and ```router``` from the available options other than the by default selected ```Babel``` and ```Linter/Formatter```. On the next screen, select 'use history mode'. The default mode is ```hash``` mode, which uses the url hash to simulate the full URL so that the page won't be reloaded when URL changes. Why select ```history``` mode? Well, ```history``` mode gets rid of the URL hash and implements the same functionality, i.e., preventing page reload when URL changes. It's made possible by the ```history.pushState``` API . However, you won't be needing to use ```history.pushState``` directly, coz, there's a build-in ```<router-link>``` component in Vue.js which makes routing easy for us, and we can use it.

On the next screen pick the defaut selected ```ESLint with error prevention only```. We only need that. Next screen will ask you something. Select ```package.json```. Done! We've created an App with the required features for our Todo App. Now we just have to edit the created app to implement a todo list.

```
~$ cd TodoApp
~$ npm run serve
```

Check out the page hosted on your localhost. You can see a Navbar which directs you to Home or About Page and the active page has a different color. Cool isn't it? Now we have to edit this to create our original todolist app. Before we clear out the current contents, let's head to the app directory/src/ and check what's new in it. 

We can see new directories named 'views', 'store' and 'router'. The 'views' directory is the place we store our single page components. The 'store' directory is the place where we handle the states. And finally, the 'router' directory contains a ```index.js``` file, which contains the details about the routes our app has. The ```main.js``` file now imports two new files, ```router``` and ```store```. Let's see how's the Navbar implemented inside the App.vue. 

App.vue:

```vue
<template> <!--Part of interest starts here-->
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
    color: #2c3e50;
  }

  #nav a.router-link-exact-active { /*Part of interest 2 starts here*/
    color: #42b983;
  }
</style>
```

We've got a 2 ```<router-link>``` tags and a ```<router-view>``` tag. Both are vue built-in components. We've discussed earlier that ```<router-link>``` is used for navigation without page refresh. Look at how the navigation is done. There's a ```to``` attribute in which we specify to where we should navigate. Now check inside the style tag for part of interest 2, you can see some style applied to ```a.router-link-exact-active```. This gives the style to the current active ```<router-link>``` in the Navbar. The ```router-link-exact-active``` is applied over the ```<router-link>``` in the navbar, when the current URL matches exactly with the route defined on the ```to``` attribute of the ```router-link```. There's also another class, which is ```router-link-active``` which is applied over a ```router-link``` when the current URL starts with the route path defined in the ```to``` attribute. Let's make it more clear with the current situation. One of the ```<router-link>``` tags here have been referenced to the path '/about' isn't it? The ```router-link-exact-active``` class is applied if and only if we are on the URL http://localhost:PORT/about. But the class ```router-link-active``` will be applied for the following URL:

- `http://localhost:PORT/about`
- `http://localhost:PORT/about/contact`
- `http://localhost:PORT/about/help`

## router-view

You'll be wondering what's ```<router-view>``` now. Don't worry, I'm here. Before that, let's check the contents of ```index.js``` inside the /src/router directory.

/src/router/index.js:

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```

This file imports 4 files. You can only find 3 no? One is inside the ```routes``` array. Two files, namely ```Vue``` and ```VueRouter```, are imported for the functional purpose of ```vue-router```. ```Vue.use(VueRouter)``` activates the router module in the app. Now, to the important path. The ```routes``` array. Each object inside the array defines a particular route. The first Object defines the properties of route '/'. The route is named 'Home'. Also there's ```component``` property which is defined as ```Home```. This ```Home``` or ```Home.vue``` is the component or page which will be rendered when we are on the URL http://localhost:PORT/. Easy isn't it? Look at the third imported file. No Magic there, it's the ```Home``` page imported from ```views``` directory, which contains all the single page components. The second route object named 'About' has the route ```path``` defined as '/about' and /src/views/About.vue file imported as ```component```. What did you learn from all this? **Every route is defined with a Vue Component which will be rendered when the browser is in the exact path which is defined in that route**. Also you've to import every component registered to each routes inside the ```index.js``` of ```/src/router/``` directory.

Now, back to ```<router-view```, what exactly does ```<router-view>``` do? The ```<router-view>``` is the placeholder tag where the component registered in the active route renders. Got it? Let's make it simple for you. When the URL is http://localhost:PORT/, the route named 'Home' is matched, and the component registered in that route, ```Home```, is rendered in the place of ```<router-view>``` tag. Similarly, On http://localhost:PORT/about, ```About``` component is rendered in place of the ```<router-view>```. If I'm still not clear, you can check the browser developer tools(Ctrl + Shift + I) in the Elements Tab, comparing to the App.vue file ```<template>```. That'll give you an approximate idea on what's happening. So, now you've learned how routing works. Just create your app with ```Vue-router``` feature, define your routes and components inside the router ```index.js``` file, use ```<router-link>``` to navigate between pages and ```<router-view>``` renders the current page inside the ```App.vue```. A nice little summary. You can use ```<router-link>``` to provide clickable links in the page for navigation. What about programmatically navigating? Suppose, you have to redirect from a page when a certain condition is satisfied. We cannot handle that situation with ```<router-link>```. For that purpose, we can use ```$router.push()``` API. The argument of ```$router.push()``` API can be the following:


- `$router.push('/') // Reroutes to Home Page`
- `$router.push({name:'About'}) // Reroutes to about page`
- `$router.push({path:'/about'}) // About page`

Simple as that. Things will become more handy when we go further forward. If you have time, just wander around in our app directory and try to link things together, understand how everything is placed and their positions. Now let's move on to actual programming than learning.
