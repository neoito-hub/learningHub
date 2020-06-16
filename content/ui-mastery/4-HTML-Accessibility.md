---
title: "HTML Accessibility"
---

### What HTML Accessibility?

Write HTML with accessibility in mind. Provide the user a good way to navigate and interact with your site. Make your HTML code as semantic as possible, so that the code is easy to understand for visitors and screen readers.

###  Semantic HTML

Semantic HTML means using correct HTML elements for their correct purpose as much as possible. Semantic elements are elements with a meaning; if you need a button, use the ```<button>``` element (and not a ```<div>```).

```<button>Click Me</button>```

Semantic HTML gives context to screen readers, which read the contents of a web page out loud.

With the button example in mind:

* Buttons have more suitable styling by default
* A screen reader identifies it as a button
* Focusable
* Clickable

A button is also accessible for people relying on keyboard-only navigation; it can be clickable with both mouse and keys, and it can be tabbed between (using the tab key on the keyboard).

Examples of non-semantic elements: ```<div>``` and ```<span>``` - Tells nothing about its content.

Examples of semantic elements: ```<form>```, ```<table>```, and ```<article>``` - Clearly defines its content.

### Headings Are Important

Headings are defined with the ```<h1>``` to ```<h6>```.  Search engines use the headings to index the structure and content of your web pages.

Users skim your pages by its headings. It is important to use headings to show the document structure and the relationships between different sections.

```<h1>``` headings should be used for main headings, followed by ```<h2>``` headings, then the less important ```<h3>```, and so on.

### Alternative Text

The alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).

The value of the alt attribute should describe the image, If a browser cannot find an image, it will display the value of the alt attribute.

```<img src="img_chania.jpg" alt="Flowers in Chania">```

### Declare the Language

Declaring a language is important for screen readers and search engines, and is declared with the lang attribute. Use the following to show a web page in English

```
<!DOCTYPE html>
<html lang="en">
<body>
...
</body>
</html>
```

### Use Clear Language

Use clear language that is easy to understand, and try to avoid characters that cannot be read clearly by a screen reader. For example:

*	Keep sentences as short as possible.
*	Avoid dashes. Instead of writing 1-3, write 1 to 3
*	Avoid abbreviations. Instead of writing Feb, write February
*	Avoid slang words

### Write Good Links

A link should explain clearly what information the reader will get by clicking on that link.

### Link Titles

The title attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.

```<a href="https://github.com/neoito-hub/" title="Go to Neoito Hub">Visit our Neoito Hub</a>```

