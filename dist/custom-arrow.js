class Customarrow extends HTMLElement {
  constructor() {
    super();
    this.tailWidth = 0.5;
    this.tailLength = 0.5;
    this.initRotation = 0;
    this.rotation = 0;
    this.tailContraction = 0;
    this.peakCollapse = 0;
    this.unClosed = false;
    this.scaleFactor = 1;
    this.dimensionsAsAttributes = false;
  }

  static get observedAttributes() {
    return [
      "length",
      "width",
      "tail-l",
      "tail-w",
      "peak-l",
      "rot",
      "tail-cont",
      "peak-collapse",
      "direction",
      "unclosed",
      "scale"
    ];
  }

  disconnectedCallback() {
    this.removeChild(this.querySelector("svg"));
    this.observer.disconnect();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "width") {
      console.log("width:" + newValue);
      this.aWidth = parseFloat(newValue);
    } else if (name === "length") {
      console.log("length:" + newValue);
      this.aLength = parseFloat(newValue);
    } else if (name === "tail-w") {
      this.tailWidth = Number(newValue) / 100;
    } else if (name === "tail-l") {
      this.tailLength = Number(newValue) / 100;
    } else if (name === "rot") {
      let rot = Number(newValue);
      if (!isNaN(rot)) {
        this.rotation = rot < 0 ? rot + 360 : rot;
      } else {
        this.rotation = 0;
      }
    } else if (name === "tail-cont") {
      this.tailContraction = Number(newValue) / 100;
    } else if (name === "peak-collapse") {
      this.peakCollapse = Number(newValue) / 100;
    } else if (name === "direction") {
      console.log("direction!");
      if (newValue === "right") {
        this.initRotation = 0;
      } else if (newValue === "down") {
        this.initRotation = 90;
      } else if (newValue === "left") {
        this.initRotation = 180;
      } else if (newValue === "up") {
        this.initRotation = 270;
      }
    } else if (name === "unclosed") {
      if (newValue === "false") {
        this.unClosed = false;
      } else {
        this.unClosed = true;
      }
    } else if (name === "peak-l") {
      this.peakLength = Number(newValue);
      console.log(this.peakLength);
    } else if (name === "scale") {
      this.scaleFactor = Number(newValue) / 100;
      console.log(this.peakLength);
    }

    if ( (name === "width" || name === "length") ) {
      if( !isNaN(this.aLength) && !isNaN(this.aWidth) ) {
        this.dimensionsAsAttributes = true;
      } else {
        this.dimensionsAsAttributes = false;
      }
    }

    if (!this.arrow) {
      return;
    }

    this.removeChild(this.querySelector("svg"));
    this._render();
  }

  _render() {
    console.log("dimensionsAsAttributes: " + this.dimensionsAsAttributes);
    this._getHeightAndWidthFromCss();
    this.appendChild(this._generateArrow());
    this.arrow = this.querySelector("#arrow");
    this._setHeightAndWidth();
  }

  connectedCallback() {
    this._render();

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: false, subtree: false };

    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer, ctx) {
      for (let mutation of mutationsList) {
        if (mutation.type === "attributes") {
          console.log("callback: ");
          console.log(ctx.style.width);
          console.log(ctx.style.height);
          if (
            ctx.strokeWidth !== parseFloat(window.getComputedStyle(ctx).strokeWidth) ||
            (ctx.w !== ctx.style.width && !ctx.dimensionsAsAttributes) ||
            (ctx.h !== ctx.style.height && !ctx.dimensionsAsAttributes)
          ) {
            console.log("re-rendering");
            ctx.removeChild(ctx.querySelector("svg"));
            ctx._render();
          }
        }
      }
    };

    // Create an observer instance linked to the callback function
    this.observer = new MutationObserver((x, y) => callback(x, y, this));

    // Start observing the target node for configured mutations
    this.observer.observe(this, config);
  }

  _getHeightAndWidthFromCss() {
    if (!this.dimensionsAsAttributes) {
      if (this.initRotation === 0 || this.initRotation === 180) {
        this.aLength = parseFloat(this.style.width);
        this.aWidth = parseFloat(this.style.height);
      } else {
        this.aLength = parseFloat(this.style.height);
        this.aWidth = parseFloat(this.style.width);
      }
      this.w = this.style.width;
      this.h = this.style.height;
    }
  }

  _setHeightAndWidth() {
    if (!this.dimensionsAsAttributes) {
      if (this.initRotation === 0 || this.initRotation === 180) {
        this.aLength = parseFloat(this.style.width);
        this.aWidth = parseFloat(this.style.height);
      } else {
        this.aLength = parseFloat(this.style.height);
        this.aWidth = parseFloat(this.style.width);
      }
    }
    let totalRotation = this.initRotation + this.rotation;
    let piInDegrees = 180;
    let radRotation =
      totalRotation < piInDegrees
        ? (totalRotation * Math.PI) / piInDegrees
        : totalRotation < piInDegrees * 2
        ? (totalRotation * Math.PI) / piInDegrees - Math.PI
        : totalRotation < piInDegrees * 3
        ? (totalRotation * Math.PI) / piInDegrees - Math.PI * 2
        : (totalRotation * Math.PI) / piInDegrees - Math.PI * 3;
    let cathetus = Math.sqrt(Math.pow(this.aLength, 2) + Math.pow(this.aWidth, 2));
    let angle = Math.atan2(this.aLength, this.aWidth);
    let rotatedWidth;
    let rotatedHeight;
    if (radRotation <= Math.PI / 2) {
      rotatedWidth = (Math.sin(Math.PI - (radRotation + angle)) * cathetus) / 2;
      rotatedHeight = (Math.sin(radRotation + (Math.PI / 2 - angle)) * cathetus) / 2;
    } else {
      rotatedWidth = (Math.sin(radRotation - angle) * cathetus) / 2;
      rotatedHeight = (Math.cos(radRotation - Math.PI + angle) * cathetus) / 2;
    }

    this.arrow.style.transform = "rotate(" + totalRotation + "deg)";
    this.arrow.style.position = "absolute";
    let styleDisplay = window.getComputedStyle(this).display;
    console.log(styleDisplay);
    if (styleDisplay !== "flex" && styleDisplay !== "inline-flex") {
      console.log("Setting display style");
      this.style.display = "flex";
    }
    this.style.justifyContent = "center";
    this.style.alignItems = "center";
    if (this.dimensionsAsAttributes) {
      this.style.width = 2 * rotatedWidth + "px";
      this.style.height = 2 * rotatedHeight + "px";
    }
  }

  _generateArrow() {
    if (!isNaN(this.peakLength) && this.peakLength > 0) {
      this.tailLength = 1 - this.peakLength / this.aLength;
    }

    this.strokeWidth = parseFloat(window.getComputedStyle(this).strokeWidth);
    let strokeWidthFactorY = 1 - (0.5 * (this.strokeWidth - 1)) / (this.aWidth / 2);
    let strokeWidthFactorX = 1 - ((this.strokeWidth - 1) * this.tailLength) / this.aLength;
    let tailTopLeftY = 0.5 * (this.strokeWidth - 1) + (this.aWidth / 2) * (1 - this.tailWidth) * strokeWidthFactorY;
    let tailBottomLeftY =
      this.aWidth - (this.aWidth / 2) * (1 - this.tailWidth) * strokeWidthFactorY - (this.strokeWidth - 1) * 0.5;
    let distanceBetweenTailLeftYs = tailBottomLeftY - tailTopLeftY;
    let tailTopRightY = tailTopLeftY + 0.5 * distanceBetweenTailLeftYs * this.tailContraction;
    let tailBottomRightY = tailBottomLeftY - 0.5 * distanceBetweenTailLeftYs * this.tailContraction;
    let tailRightX = this.aLength * strokeWidthFactorX - this.aLength * (1 - this.tailLength);

    let angle =
      Math.PI / 2 -
      Math.atan2(
        this.tailWidth * (this.strokeWidth - 1) + this.aWidth / 2,
        this.aLength - tailRightX + this.tailWidth * (this.strokeWidth - 1)
      );
    let cathetus = Math.tan(angle) * tailTopRightY;

    let coord_1_x = 1 + (this.strokeWidth - 1) * 0.5;
    let coord_1_y = tailTopLeftY;
    let coord_2_x = tailRightX + (this.strokeWidth - 1) * 0.5 + this.peakCollapse * (cathetus - this.strokeWidth);
    let coord_2_y = tailTopRightY;
    let coord_3_x = tailRightX + (this.strokeWidth - 1) * 0.5;
    let coord_3_y = (this.strokeWidth - 1) * 0.5;
    let coord_4_x = this.aLength - (this.strokeWidth - 1) * 0.5;
    let coord_4_y = this.aWidth / 2;
    let coord_5_x = tailRightX + (this.strokeWidth - 1) * 0.5;
    let coord_5_y = this.aWidth - (this.strokeWidth - 1) * 0.5;
    let coord_6_x = tailRightX + (this.strokeWidth - 1) * 0.5 + this.peakCollapse * (cathetus - this.strokeWidth);
    let coord_6_y = tailBottomRightY;
    let coord_7_x = 1 + (this.strokeWidth - 1) * 0.5;
    let coord_7_y = tailBottomLeftY;

    let uri = "http://www.w3.org/2000/svg";

    let svg = document.createElementNS(uri, "svg");
    svg.setAttributeNS(null, "id", "arrow");
    svg.setAttributeNS(null, "width", this.aLength * this.scaleFactor);
    svg.setAttributeNS(null, "height", this.aWidth * this.scaleFactor);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.aLength} ${this.aWidth}`);
    let path = document.createElementNS(uri, "path");
    let pathCoords =
      "M" +
      coord_1_x +
      " " +
      coord_1_y +
      " L" +
      coord_2_x +
      " " +
      coord_2_y +
      " L" +
      coord_3_x +
      " " +
      coord_3_y +
      " L" +
      coord_4_x +
      " " +
      coord_4_y +
      " L" +
      coord_5_x +
      " " +
      coord_5_y +
      " L" +
      coord_6_x +
      " " +
      coord_6_y +
      " L" +
      coord_7_x +
      " " +
      coord_7_y +
      (this.unClosed ? "" : " Z");
    path.setAttributeNS(null, "d", pathCoords);
    svg.appendChild(path);

    return svg;
  }
}

customElements.define("custom-arrow", Customarrow);
