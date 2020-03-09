<script>
  let length = 125;
  let width = 125;
  let tailLength = 50;
  let tailWidth = 50;
  let rotation = 0;
  let contraction = 0;
  let strokeWidth = 1;
  let strokeColor = "#000000";
  let fillColor = "#ff0000";
  let bgColor = "#d3d3d3";// "lightgray";
  let peakCollapse = 0;
  let strokeLinejoin = "round";
  let peakLength = 0;
  let scaleFactor = 1;
  let unclosed = false;
  let styleHeight = 100;
  let styleWidth = 100;
  let elementRotation = 0;
  let absPeakLengthEnabled = false;
  let styleScale = 1;
  let borderRadius = 0;

  function changeAngle(angle) {
    rotation = rotation + angle;
  }

  function checkBoxHandler(event) {
    let elem = document.getElementById("peak_length");
    if(event.target.checked === true) {
      elem.style.opacity = 1;
    } else {
      elem.style.opacity = 0.3;
    }
  }

  function preset_1() {
    length = 750;
    width = 370;
    tailLength = 58;
    tailWidth = 100;
    rotation = 0;
    contraction = 100;
    strokeWidth = 32;
    peakCollapse = 63;
    strokeLinejoin = "round";
    styleWidth = 750;
    styleHeight = 370;
  }

  function preset_2() {
    length = 880;
    width = 430;
    tailLength = 57;
    tailWidth = 1;
    rotation = 0;
    contraction = 100;
    strokeWidth = 100;
    peakCollapse = 0;
    strokeLinejoin = "round";
    styleWidth = 880;
    styleHeight = 430;
  }

  function preset_3() {
    length = 880;
    width = 360;
    tailLength = 0;
    tailWidth = 100;
    rotation = 0;
    contraction = 0;
    strokeWidth = 100;
    peakCollapse = 100;
    strokeLinejoin = "round";
    styleWidth = 880;
    styleHeight = 360;
  }

  function preset_4() {
    length = 880;
    width = 310;
    tailLength = 42;
    tailWidth = 57;
    rotation = 0;
    contraction = 0;
    strokeWidth = 63;
    peakCollapse = 100;
    strokeLinejoin = "round";
    styleWidth = 880;
    styleHeight = 310;
  }

  function preset_5() {
    length = 670;
    width = 590;
    tailLength = 50;
    tailWidth = 50;
    rotation = 0;
    contraction = 0;
    strokeWidth = 100;
    peakCollapse = 0;
    strokeLinejoin = "round";
    styleWidth = 670;
    styleHeight = 590;
  }

  function preset_6() {
    length = 680;
    width = 490;
    tailLength = 16;
    tailWidth = 10;
    rotation = 0;
    contraction = 0;
    strokeWidth = 30;
    peakCollapse = 100;
    strokeLinejoin = "round";
    styleWidth = 680;
    styleHeight = 490;
  }

  function preset_7() {
    length = 880;
    width = 310;
    tailLength = 97;
    tailWidth = 64;
    rotation = 0;
    contraction = 0;
    strokeWidth = 35;
    peakCollapse = 100;
    strokeLinejoin = "round";
    styleWidth = 880;
    styleHeight = 310;
  }

  function preset_8() {
    length = 880;
    width = 310;
    tailLength = 0;
    tailWidth = 64;
    rotation = 0;
    contraction = 0;
    strokeWidth = 35;
    peakCollapse = 100;
    strokeLinejoin = "round";
    styleWidth = 880;
    styleHeight = 310;
  }

  function preset_9() {
    length = 600;
    width = 100;
    tailLength = 100;
    tailWidth = 100;
    rotation = 0;
    contraction = 0;
    strokeWidth = 25;
    peakCollapse = 0;
    strokeLinejoin = "round";
    styleWidth = 600;
    styleHeight = 100;
  }

  function preset_10() {
    length = 425;
    width = 350;
    tailLength = 50;
    tailWidth = 100;
    rotation = 0;
    contraction = 0;
    strokeWidth = 1;
    peakCollapse = 0;
    strokeLinejoin = "round";
    styleWidth = 500;
    styleHeight = 400;
    scaleFactor = 1.5;
  }

  function preset_11() {
    length = 425;
    width = 350;
    tailLength = 0;
    tailWidth = 50;
    rotation = 0;
    contraction = 0;
    strokeWidth = 1;
    peakCollapse = 0;
    strokeLinejoin = "round";
    styleWidth = 500;
    styleHeight = 400;
    scaleFactor = 1;
  }

  function preset_12() {
    length = 880;
    width = 310;
    tailLength = 2;
    tailWidth = 90;
    rotation = 0;
    contraction = 0;
    strokeWidth = 20;
    peakCollapse = 0;
    strokeLinejoin = "round";
    styleWidth = 880;
    styleHeight = 310;
    scaleFactor = 1;
  }

  function reset() {
    length = 125;
    width = 125;
    tailLength = 50;
    tailWidth = 50;
    rotation = 0;
    contraction = 0;
    strokeWidth = 1;
    strokeColor = "black";
    fillColor = "none";
    peakCollapse = 0;
    strokeLinejoin = "round";
  }

</script>

<style>

  main {
    font-family: Arial, Helvetica, sans-serif;
  }

  .html_example {
    font-family: "Courier New", Courier, monospace;
    font-stretch: extra-expanded;
    display:inline-block;
    background-color: #d8edf3;
    padding: 10px;
  }

  .bold_text {
  font-weight: bold;
  margin-bottom: 5px;
  }

  custom-arrow {
    background-color: lightgray;
    stroke-linejoin: round;
    /*stroke-dasharray: 5%;*/
    font-size: 20px;
    color: red;
    /* tämä aiheuttaa vasemman reunan reunimmaisen viivan puuttumisen 1px:n strokeWidthillä:  */
    stroke-linecap: round;
    /*transform:rotate(90deg);*/
    display: inline-flex;
    margin: 50px;
  }
  #container {
    border-radius: 50%;
    background-color: lightgray;
    height: 135px;
    width: 135px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .controls_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .controls_half {
    margin: 10px;
  }
  .control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ebf1f9;
    padding: 5px;
    box-shadow: 4px 4px 4px lightgrey;
  }
  .control_style {
    background-color: #ebfff9;
  }
  .together {
    display: flex;
    align-items: center;
  }
  .control_title {
    font-size: 18px;
    font-weight: bold;
    justify-content: center;
  }
  #peak_length {
    opacity: 0.3;
  }
  button {
    display: block;
    margin: 10px;
  }
  .custom_container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<main>
  <div class="controls_container">
    <div class="controls_half">

      <div class="control control_title">Element attributes</div>

      <div class="control">
        length
        <input type="range" min="0" max="1000" bind:value={length} />
        <input type="text" bind:value={length} size="1" />
      </div>

      <div class="control">
        width
        <input type="range" min="0" max="1000" bind:value={width} />
        <input type="text" bind:value={width} size="1" />
      </div>

      <div class="control">
        tail length
        <input type="range" min="0" max="100" bind:value={tailLength} />
        <input type="text" bind:value={tailLength} size="1" />
      </div>

      <div class="control">
        tail width
        <input type="range" min="0" max="100" bind:value={tailWidth} />
        <input type="text" bind:value={tailWidth} size="1" />
      </div>

      <div class="control">
        rotation
        <input type="range" min=-360 max=360 bind:value={rotation} />
        <input type="text" bind:value={rotation} size="1" />
      </div>

      <div class="control">
        <input type="checkbox" on:change={checkBoxHandler} bind:checked={absPeakLengthEnabled} />
        <div class="together" id="peak_length">
          peak length
          <input type="range" min="0" max="200" bind:value={peakLength} />
          <input type="text" bind:value={peakLength} size="1" />
        </div>
      </div>

      <div class="control">
        tail contraction
        <input type="range" min="0" max="100" bind:value={contraction} />
        <input type="text" bind:value={contraction} size="1" />
      </div>

      <div class="control">
        peak collapse
        <input type="range" min="0" max="100" bind:value={peakCollapse} />
        <input type="text" bind:value={peakCollapse} size="1" />
      </div>

      <div class="control">
        scale
        <input type="range" min="0" max="2" step=0.01 bind:value={scaleFactor} />
        <input type="text" bind:value={scaleFactor} size="1" />
      </div>

      <div class="control">
        <div class="together">
          <input type="checkbox" bind:checked={unclosed} />
          unclosed
        </div>
      </div>

    </div>
    <div class="controls_half">
      <div class="control control_style control_title">Element style</div>

      <div class="control control_style">
        stroke width
        <input type="range" min="0" max="100" bind:value={strokeWidth} />
        <input type="text" bind:value={strokeWidth} size="1" />
      </div>

      <div class="control control_style">
        stroke color
        <input type="color" bind:value={strokeColor} />
      </div>

      <div class="control control_style">
        fill color
        <input type="color" bind:value={fillColor} />
      </div>

      <div class="control control_style">
        background color
        <input type="color" bind:value={bgColor} />
      </div>

      <div class="control control_style">
        stroke linejoin
        <select bind:value={strokeLinejoin}>
          <option value="arcs">arcs</option>
          <option value="bevel">bevel</option>
          <option value="miter">miter</option>
          <option value="miter-clip">miter-clip</option>
          <option value="round">round</option>
        </select>
      </div>

      <div class="control control_style">
        border radius
        <input type="range" min=0 max=100 bind:value={borderRadius} />
        <input type="text" bind:value={borderRadius} size="1" />
      </div>

      <div class="control control_style">
        rotation
        <input type="range" min=0 max=360 bind:value={elementRotation} />
        <input type="text" bind:value={elementRotation} size="1" />
      </div>

      <div class="control control_style">
        scale
        <input type="range" step=0.01 min=0 max=2 bind:value={styleScale} />
        <input type="text" bind:value={styleScale} size="1" />
      </div>

      <div class="control control_style">
        height
        <input type="range" min="0" max="1000" bind:value={styleHeight} />
        <input type="text" bind:value={styleHeight} size="1" />
      </div>

      <div class="control control_style">
        width
        <input type="range" min="0" max="1000" bind:value={styleWidth} />
        <input type="text" bind:value={styleWidth} size="1" />
      </div>

    </div>
    <div class="controls_half">
      <button type="button" on:click={preset_1}>Preset 1</button>
      <button type="button" on:click={preset_2}>Preset 2</button>
      <button type="button" on:click={preset_3}>Preset 3</button>
      <button type="button" on:click={preset_4}>Preset 4</button>
      <button type="button" on:click={preset_5}>Preset 5</button>
      <button type="button" on:click={preset_6}>Preset 6</button>
      <button type="button" on:click={preset_7}>Preset 7</button>
      <button type="button" on:click={preset_8}>Preset 8</button>
      <button type="button" on:click={preset_9}>Preset 9</button>
      <button type="button" on:click={preset_10}>Preset 10</button>
      <button type="button" on:click={preset_11}>Preset 11</button>
      <button type="button" on:click={preset_12}>Preset 12</button>
      <button type="button" on:click={reset}>Reset</button>
      <!--button type="button" on:click={() => changeAngle(1)}>+1</button>
      <button type="button" on:click={() => changeAngle(-1)}>-1</button>
      <button type="button" on:click={() => changeAngle(10)}>+10</button>
      <button type="button" on:click={() => changeAngle(-10)}>-10</button-->
    </div>
  </div>
  <div class="custom_container">
    <custom-arrow
      l={length}
      w={width}
      tail-l={tailLength}
      tail-w={tailWidth}
      rot={rotation}
      tail-cont={contraction}
      peak-coll={peakCollapse}
      peak-l={absPeakLengthEnabled ? peakLength : ''}
      {unclosed}
      scale={scaleFactor}
      style="stroke-width: {strokeWidth}px; stroke-linejoin: {strokeLinejoin}; stroke: {strokeColor}; fill: {fillColor};
      height: {styleHeight}px; width: {styleWidth}px; border-radius: {borderRadius}%; transform: rotate({elementRotation}deg); transform:scale({styleScale},{styleScale}); background-color:{bgColor};">
    </custom-arrow>

    <div class="html_example">
    <div class="bold_text">HTML tag with all attributes:</div>
      {`<custom-arrow l=${length} w=${width} tail-l=${tailLength} tail-w=${tailWidth} rot=${rotation} tail-cont=${contraction}`}
    <br>
      {`peak-coll='${peakCollapse}' peak-l=${absPeakLengthEnabled ? peakLength : '""'} unclosed=${unclosed} scale=${scaleFactor}> </custom-arrow>`}
    </div>
  </div>
</main>
