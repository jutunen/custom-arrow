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
    //this.storedTailLength;
  }

  static get observedAttributes() {
    return [
      "length",
      "width", // <-- varattu!
      "tail-l",
      "tail-w",
      "peak-l",
      "rot",
      "tail-cont",
      "peak-collapse",
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
      //console.log("width:" + newValue);
      this.aWidth = parseFloat(newValue); //vai Number?
    } else if (name === "length") {
      //console.log("length:" + newValue);
      this.aLength = parseFloat(newValue); //vai Number?
    } else if (name === "tail-w") {
      this.tailWidth = Number(newValue) / 100;
    } else if (name === "tail-l") {
      this.tailLength = Number(newValue) / 100;
      this.storedTailLength = this.tailLength;
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
    } else if (name === "unclosed") {
      if (newValue === "false") {
        this.unClosed = false;
      } else {
        this.unClosed = true;
      }
    } else if (name === "peak-l") {
      this.peakLength = parseFloat(newValue);
      console.log("peakLength: " + this.peakLength);
    } else if (name === "scale") {
      this.scaleFactor = Number(newValue) / 100;
      //console.log(this.peakLength);
    }

    if (!isNaN(this.peakLength)) {
      this.tailLength = 1 - this.peakLength / this.aLength;
    } else {
      this.tailLength = this.storedTailLength;
    }

    if (!this.arrow) {
      return;
    }

    this.removeChild(this.querySelector("svg"));
    this._render();
  }

  _render() {
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
          if (
            ctx.strokeWidth !== parseFloat(window.getComputedStyle(ctx).strokeWidth)
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

  _setHeightAndWidth() {
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

    this.arrow.style.transform = "rotate(" + totalRotation + "deg)";
    //this.arrow.style.transformOrigin = "0% 50%";
    this.arrow.style.position = "absolute";
    let styleDisplay = window.getComputedStyle(this).display;
    //console.log(styleDisplay);
    if (styleDisplay !== "flex" && styleDisplay !== "inline-flex") {
      console.log("Setting display style");
      this.style.display = "flex";
    }
    this.style.justifyContent = "center";
    this.style.alignItems = "center";
  }

  _generateArrow() {

    this.strokeWidth = parseFloat(window.getComputedStyle(this).strokeWidth);
    let strokeWidthCompensation = this.strokeWidth * 0.5;
    let strokeWidthFactorY = 1 - (strokeWidthCompensation) / (this.aWidth / 2);
    let strokeWidthFactorX = 1 - (this.strokeWidth * this.tailLength) / this.aLength;
    let tailTopLeftY = strokeWidthCompensation + (this.aWidth / 2) * (1 - this.tailWidth) * strokeWidthFactorY;
    let tailBottomLeftY =
      this.aWidth - (this.aWidth / 2) * (1 - this.tailWidth) * strokeWidthFactorY - strokeWidthCompensation;
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

    let coord_1_x = strokeWidthCompensation;
    let coord_1_y = tailTopLeftY;
    let coord_2_x = tailRightX + strokeWidthCompensation + this.peakCollapse * (cathetus - this.strokeWidth);
    let coord_2_y = tailTopRightY;
    let coord_3_x = tailRightX + strokeWidthCompensation;
    let coord_3_y = strokeWidthCompensation;
    let coord_4_x = this.aLength - strokeWidthCompensation;
    let coord_4_y = this.aWidth / 2;
    let coord_5_x = tailRightX + strokeWidthCompensation;
    let coord_5_y = this.aWidth - strokeWidthCompensation;
    let coord_6_x = tailRightX + strokeWidthCompensation + this.peakCollapse * (cathetus - this.strokeWidth);
    let coord_6_y = tailBottomRightY;
    let coord_7_x = strokeWidthCompensation;
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
