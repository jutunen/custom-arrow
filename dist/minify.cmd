terser custom-arrow.js -m --mangle-props reserved=[l,w,constructor,observedAttributes,disconnectedCallback,attributeChangedCallback,connectedCallback,Customarrow] -o custom-arrow.min.js

terser custom-arrow-node.js -m --mangle-props reserved=[l,w,constructor,observedAttributes,disconnectedCallback,attributeChangedCallback,connectedCallback,Customarrow] -o custom-arrow-node.min.js
