[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/custom-arrow)
[![npm version](https://badge.fury.io/js/custom-arrow.svg)](https://badge.fury.io/js/custom-arrow)
[![minified](https://badgen.net/badge/minified/2.8%20kB/blue)](https://badgen.net/badge/minified/2.8%20kB/blue)
[![minified & compressed](https://badgen.net/badge/minified%20&%20compressed/1.5%20kB/blue)](https://badgen.net/badge/minified%20&%20compressed/1.5%20kB/blue)

# Note! This project has been migrated to https://github.com/vanillawc/wc-arrow. Custom-arrow won't be maintained anymore. Please use wc-arrow instead.

# custom-arrow
A web component for creating custom arrow HTML elements.

Component custom attributes and CSS style together enable forming of various arrow figures.

Custom-arrow is a standalone vanilla JS web component that does not use shadow DOM.

## Including the component to an HTML file

1. Import polyfill, this is not needed for modern browsers:

    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/custom-elements/1.2.4/custom-elements.min.js"></script>
    ```

2. Import custom element:

    ```html
    <script defer src='custom-arrow.min.js'></script>
    ```

3. Start using it!

    ```html
       <custom-arrow
         l=150 w=150 tail-w=40 peak-coll=50>
       </custom-arrow>  
    ```

## Including the component from NPM

1. Install and import polyfill, this is not needed for modern browsers:

   See https://www.npmjs.com/package/@webcomponents/custom-elements

2. Install custom-arrow NPM package:

    ```console
    npm i custom-arrow
    ```

3. Import custom element:

    ```javascript
    import 'custom-arrow'
    ```

4. Start using it:

   ```javascript
   var arrow = document.createElement('custom-arrow')
   arrow.setAttribute("l", "150")
   arrow.setAttribute("w", "150")
   arrow.setAttribute("tail-w", "40")
   arrow.setAttribute("peak-coll", "50")
   document.body.appendChild(menu)
   ```
## Display style

Element display style can be set to flex, inline-flex or none.

When the element renders itself, it sets its display style to flex, if the style is not flex, inline-flex or none.

## Attributes

### l

Defines arrow length in pixels.

HTML example:

```html
<custom-arrow l=100 w=100> </custom-arrow>
```

### w

Defines arrow width in pixels.

HTML example:

```html
<custom-arrow l=100 w=100> </custom-arrow>
```

### tail-l

Percentage value that defines arrow tail length in relation to arrow length.

Value must be a number between 0 and 100.

Default value is 50.

HTML example:

```html
<custom-arrow l=100 w=100 tail-l=20> </custom-arrow>
```

### tail-w

Percentage value that defines arrow tail width in relation to arrow width.

Value must be a number between 0 and 100.

Default value is 50.

HTML example:

```html
<custom-arrow l=100 w=100 tail-w=20> </custom-arrow>
```

### peak-l

Length of arrow peak in pixels.

If this attribute is defined, tail-l attribute has no effect.

HTML example:

```html
<custom-arrow l=100 w=100 peak-l=20> </custom-arrow>
```

### rot

Arrow rotation in degrees.

This attribute rotates only the arrow within the custom element.

To rotate both the arrow and the element, transform style definition must be applied to the custom element.

Value must be a number between -360 and 360.

Default value is 0.

HTML example:

```html
<custom-arrow l=100 w=100 rot=-90> </custom-arrow>
```

### tail-cont

Defines tail contraction with a proportional value from 0 to 100.

0 = no contraction at all

100 = complete contraction

Default value is 0.

HTML example:

```html
<custom-arrow l=100 w=100 tail-cont=20> </custom-arrow>
```

### peak-coll

Defines peak collapse with a proportional value from 0 to 100.

0 = no collapse at all

100 = complete collapse

Default value is 0.

HTML example:

```html
<custom-arrow l=100 w=100 peak-coll=20> </custom-arrow>
```

### unclosed

Defines whether the arrow rear stroke is visible or not.

By default the rear stroke is visible.

HTML example for setting the stroke invisible:

```html
<custom-arrow l=100 w=100 unclosed> </custom-arrow>
```
 Attribute can be disabled by assigning a string "false" as its value.

### scale

Defines the arrow scale.

Default value is 1.

Scaling is applied only to the arrow.

To scale both the arrow and the element, transform style definition must be applied to the custom element.

HTML example:

```html
<custom-arrow l=100 w=100 scale=0.5> </custom-arrow>
```
## Usage example

Take a look at file arrow.html in examples folder

## License

Copyright (c) 2020 Jussi Utunen

Licensed under the MIT License
