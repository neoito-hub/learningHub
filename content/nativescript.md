title: "Nativescript"

# {NativeScript} Performance Tips and Tricks for a Noobie

## 1. Layouts Layouts Layouts


The layout is the base for all views that provide positioning of the elements. 

You can use the various layouts to position elements. They evaluate the base properties of view such as width, height, minWidth, and alignments and expose additional properties for positioning child views. Different type of layouts are:-


#### StackLayout   ,   GridLayout  ,  FlexboxLayout ,  WrapLayout  , AbsoluteLayout  ,  DockLayout

Now the greatest question for all?

### ‘Which Layout do i use in the NS application?’

It’s a key question. Break it down to two sub-questions.  that is

  1. How does the content flow?
  2. Does any content span across varying heights or widths within the layout?

## 2. Flatten your layout 


We can create a UI skeleton using simple CSS style. Using the UI skeleton, we can find the complexity of the UI of the current page. Optimize the UI as much as possible, without losing the beauty. Always remind, nativescript is a single threaded framework. 

Simple CSS style for UI skeleton :-

```
StackLayout {
  border-color: red;
  border-width: 1;
}
WrapLayout {
  border-color: green;
  border-width: 1;
}

GridLayout {
  border-color : black;
  border-width: 1;
}
FlexboxLayout {
  border-color : blue;
  border-width: 1;
}
ScrollView {
  border-color: blueviolet;
  border-width: 1;
}
Label {
  border-color:olive;
  border-width: 1;
}
button {
  border-color:orange;
  border-width: 1;
}
ListView {
  border-color:orchid;
  border-width: 1;
}
```

## 3. Recycling view - The ListView

#### Which one is better?

1. With ListView

```
<ListView [items]="items" class="list-group">
        <ng-template let-item="item">
            <Label [text]="item.name" class="list-group-item"></Label>
        </ng-template>
</ListView>

```

2. Without ListView

```
<GridLayout *ngFor="let item of items" class="list-group">
            <Label [text]="item.name" class="list-group-item"></Label>
</GridLayout>

```
The First one is the answer!
### why?
Nativescript uses the native list controls to render Listview. The smooth as better scrolling using these controls depends on two major features:
#### UI Virtualization -  
View is created only for the items that are currently visible. Fewer elements in memory

#### View Recycling - 
whenever an item scrolls out of the viewport, the view that was rendering it is not destroyed. It is put in a pool of recycled views and reused when a new item scrolls into view.

So strongly recommend to use ListView as much as possible

## 4. Philosophy of constructor and life cycle hooks

The Constructor is a default method of the class that is executed when the class is instantiated and ensures proper initialization of fields in the class and its subclasses. 

ngOnInit is a life cycle hook called by angular framework after the creation of the component. The life cycle hook ngOnInit initializes the component and component variables.

We have to import OnInit from '@angular/core'

```
import {Component, OnInit} from '@angular/core';

```

then to use the method of OnInit() 

```
export class App implements OnInit { 
constructor(){ 
  //called initially before the ngOnInit() life cycle hook
   } 
ngOnInit(){ //called after the constructor and called after the first 

}
ngOnChanges() {

}
 
ngAfterViewInit() {

}
ngOnDestroy(){

}

```

#### Highly recommend to use ngOnInit and other life cycle hooks for all the initialization/declaration and avoid stuff to work in the constructor. The constructor should only be used to initialize class members but should not do actual "work".

So you should use constructor() method to setup and organise Dependency Injection and not much else. ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.

## 5. Use of workers

Workers can be super useful in some cases where the performance of the main thread is lacking. The best way to find the use of workers, you should test each individual scenarios and measure the performance of each scenario. 

### Why slowness in NS app?

Nativescript allows fast and efficient access to all natives platform APIs through Javascript.
It comes with a tradeOff - all javascript executes on the main thread, the UI thread. It means that the operations potentially take longer can lag the rendering of the UI and make the application look and feel slow and lagging.
 
To tackle the issues with slowness, developers can use Nativescript’s solution to multithreading - that is worker threads.

### What are the workers?

A worker is, a script running in the background. Worker thread model converts the single threaded NS app into multi-threaded one. The workers run in their own threads, allowing you to perform intensive tasks in the background, without blocking the fluid UI rendering. It improves the overall performance of the app, gives a better user experience. 