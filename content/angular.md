title: "Angular"
---

1. Naming of variables should be 'VerbNoun' phrased with camel casing. The possible verb and noun naming for different modules will be there in each project ReadMe.
2. For Redux based applications, the store data should be run through a VO service which will be input to the presentation component
3. The logic to fetch and set data will be in container component while the presentation component will be dump and it will just show the data from inputs
4. In maximum possible cases use the change detection strategy onPush.
5. For singleton services take care to use root 'provideIn' to avoid multiple instantiations if not required.
6. Ideally a function should not be longer than 50-60 lines. Split the code and group them in a neat and readable way.
7. Every method should have its signature commented on top.
8. Strict typing should be ensured everywhere. Avoid use of 'any'.
9. Always have :TODO labelled for anything which is to be postponed to do later.
10. Use alias for import routes accordingly as need in tsconfig. This will make it easy to write imports. ex:
    "compilerOptions": {
    "paths": {
    "@app/_": ["app/_"],
    "@env/_": ["environments/_"]
    }
    }
11. Write business comments rather than short technical comments.
12. Every rxjs subscription handles should be pushed to an array / use subscription.add(), and unsubscribed accordingly(for components, it can be inside ngDestroy hooks)
13. Strictly follow the order of declaring class variables and methods in components as in the specified linting rule.
14. Components should always have subscriptions (no observable chaining is needed inside a component, such can be delegated to vo or va services.)
15. Event binding methods should return quickly to ensure short change detection cycles. If its doing heavy computations, make it async.
16. Avoid use of nested subscriptions, instead use proper observable chaining to get the job done.
17. Always use take(1) operator if we do not need to observe for further emissions.
18. Always use lazy loading of modules.
19. Have shared modules for sharing services and variables
20. Always have selector naming of components in a particular format(preferably prefixed with application name abbreviation)
21. Avoid making htmls smart by using expressions and pipes, rather use utility functions which can do the manipulations at VO level.
22. VO stands for View Object, which is the object that's made from the database object, which can be directly rendered with UI layer
23. VA stands for View Actions, which deals with handling the actions from the view layer.
24. DBO stands for the Database Object.
25. Module naming, service naming, component naming and route naming should be having a specific formatting which should be mentioned in the project readme. Default naming should be
    Module - entity name suffixed with 'Module', ex: ProductModule. here use the entity name as singular.
    Component - entity name suffixed with 'Component', ex: ProductComponent
26.

### NgRx guidelines

1. All actions description should follow a particular syntax, `[<module>] <Action description>`. The syntax should be specified in the readme.
2. Always remember to have the default case in all reducers.
3. Every reducer should have proper interfaces and initial values
4. Always have loaded and loading variables populated while doing side effects and have proper selectors for them.
5. Write selectors in a separate file always.
6. Avoid writing logic inside reducer methods, instead just add the data to the state.
7. Remember to clear state data and reset to initial state when logout occurs.
8. Side effect actions should have success and failure case handled.
9. integration with the apis should be done at different set of service files, which are in turn called from effects.
10. Data input to these service files might be vo, which should be converted to dbo before sending with the api.
11. Core module is the module which has Actions, reducers, api services, effects, and selectors.
12. Always have entities in the reducer than plain array and use ngrx entity adapter to fetch and add data.
13.
