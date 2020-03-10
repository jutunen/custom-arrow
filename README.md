# custom-arrow
A web component for creating custom arrow HTML elements.

Component's custom attributes and CSS style together enable forming of various arrow figures.

Custom-arrow is a standalone vanilla JS web component that does not use shadow DOM.

Live demo available [here.](http://51.38.51.120/customarrow/)

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

2. Install custom-menu-wrapper NPM package:

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

## Usage example

Take a look at file arrow.html in examples folder

## License

Copyright (c) 2020 Jussi Utunen

Licensed under the MIT License

# Better documentation coming soon!
