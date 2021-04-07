# Getting Started

## Prerequisites

- Node.js version v8.9.0+ (Recommended: v8.11.0+)

## Installation

    ~$ npm install -g @vue/cli

## Before we start..

I'd like to remember you one thing. If you don't have basic knowledge on HTML, CSS, or javaScript, just stop right here and go check out on our articles on each. The following article is prepared in pre-assumption that you know something about HTML, CSS and javaScript

[The Vue.js official documentation](https://vuejs.org/v2/guide/) is the best available source for deeper learning on Vue anyday. We're just covering the important features and necessary parts of those features. When you actually start to work on Vue, you will face new challenges and will be needing to know more about the features we're going to discuss here. You can find the help of Official Documentation when needed.

## Now let's create our first project...

We should start by taking babysteps so 'Hello World' should be our first project. Congratulations Sherlock, You deduced it!

Let's get into business.

    ~$ vue create hello-world

As simple as that. The following will be a nice CLI which prompts you to pick a preset, which would look like this:

![Pick a preset](/assets/cli-new-project.png)

You can either choose the default preset which comes with a basic Babel + ESLint setup, or select "Manually select features" to pick the features you need. The default setup is great for quickly prototyping a new project, while the manual setup provides more options that are likely needed for more production-oriented projects.

![Available features](/assets/cli-select-features.png)

Let's pick the default preset as we wouldn't be needing those extra features amirite? Great! Time to start our little project.

    ~$ cd hello-world
    ~$ npm run serve

That's it! We've just started our first project on Vue.js! Simple, right? What if I say there's even a better way which is more simpler and cool? Yup. The Vue GUI way. Of course get tired sometimes of using the terminal, so here comes the GUI to change the pace. A Simple yet Powerful way of handling your project, upgrading Vue and it's dependencies, run project on a single click, import projects etcetra etcetra, and you don't want to worry anymore with the eyecatching UI of simplicity.

    ~$ vue ui

Enjoy the beauty of Vue UI. Things can become more beautiful when you install the **Vue devtools** browser extension. It helps you to debug app while being inside the browser. Let's get back to the good old 'Hello World'.

When you hit `npm run serve` , you can see that the app is running on your localhost. Go on. Have a look at that. Beautiful isn't it? Now let's check what's inside the files that were automatically generated by vue-cli. Time to open VSCode, one of the best editors available in the market.

/src/main.js:

```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

See? It's importing two files. The main Vue.js file and another one named `App.vue`. `App.vue` is the top most vue component. Only the **root component** of the app comes above this. All other components comes or render inside the `App.vue`. You can see a new instance of Vue is being created and mounted to something ID'd 'app'. That's the div with id #app on the `index.html` , which you can find in the public directory of your hello-world project. I'm sorry, but what does that mean? It means that whatever you design or create on your vue app will be rendered on the div with ID #app.

Let's check the content of `App.vue`

App.vue:

```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
  margin-top: 60px;
}
</style>
```

Just concentrate on the 3 main parts of the vue file. The sign of three. The 3 tags. 

- The `<template>` tag
- The `<script>` tag
- The `<style>` tag

I don't know how to make it more easier than this. You see how simple it is? Isn't that Obvious? If you still didn't get it, let me break it down for you Watson. `App.vue` represents a page. The whole page. Still didn't get it? Look, the `<template>` tag contains the html part of page. `<script>` contains the script related that page and al last the style for the page is recorded in the `<style>` tag. 

Oh, I see.. you are still having one obvious question aren't you? Are vue files represent a whole page everytime? Short answer? No. Long answer? I hope you've been to many websites before reading this little article. Let's consider an Example which everyone will know about, which is none other than <https://www.facebook.com> . I'm not making this very long and dirty so let me go straight to the point. You can see a 2 Vertical Bars, one each on both sides of the page and these bars are almost on every pages. You're slowly catching up aren't you? Yes! A page can be divided into different individual components! And a `*.vue` file can represent any of the sections or components a page has. 

> ```js
> import HelloWorld from './components/HelloWorld.vue'
> ```

See this little line of code on our `App.vue` file? The page is importing another vue file into it. Yup. It's importing the Hello World component of the page. Before we move on to the Hello World page, shall we see what we missed on our `App.vue` page?

> ```vue
> <template>
>   <div id="app">
>     <img alt="Vue logo" src="./assets/logo.png">
>     <HelloWorld msg="Welcome to Your Vue.js App"/>
>   </div>
> </template>
> ```

Now this is really important. How many root tags you can see inside the `<template>` tag? 1 isn't it? Yes. It can't be zero, It can't be 2 or more. It should be exactly one. It's the basic rule. You want another root tag? Start another vue file and write in it. Just Kidding! Just make sure you wrap everything inside `<template>` tag in a single root tag. 

Saw something weird? Perhaps an HTML tag and an attribute you haven't heard of? Don't worry, I'm here. We'll see about that in a moment. Remember this place as you'll come back here to check a missed detail.

> ```vue
> <script>
> import HelloWorld from './components/HelloWorld.vue'
> export default {
>   name: 'App',
>   components: {
>     HelloWorld
>   }
> }
> </script>
> ```

Nothing much here, to be honest. Just importing a component to the page and registering it on the page. Just stop wondering what `export defaults{}` , just take it as a syntax for Vue instance definition. The other syntax is `new Vue()` . However, if you're still wondering what's what and what's the difference, check [this](https://frontendsociety.com/why-you-shouldnt-use-vue-component-ff019fbcac2e) out mate.

Okay, about that weird HTML tag.. we already saw how `App.vue` imported a component and registered it. The component was registered with the name 'HelloWorld' . Rings any bell? The weird HTML tag was also named 'HelloWorld' . Yes! You're seriously good at this, mate. That's how you use a component inside another component. Just import, register and use. 

> ```css
> <style>
> #app {
>   font-family: Avenir, Helvetica, Arial, sans-serif;
>   -webkit-font-smoothing: antialiased;
>   -moz-osx-font-smoothing: grayscale;
>   text-align: center;
>   color: #2c3e50;
>   margin-top: 60px;
> }
> </style>
> ```

Well, the most important thing to say here is that the style tag isn't scoped to this page only, by default. 

``` js
<style scoped>
...
</style>
```

Tadaa! The scoped attribute makes the style scoped to the component only.

You're stronger than I thought! 'Coz you made it till here! Here, have an applause :clap:

Prove that you're more stronger! See you in the next Page if you have it in you.