<script>
  let length = 125;
  let width = 125;
  let baseLength = 50;
  let baseWidth = 50;
  let rotation = 0;
  let contraction = 0;
  let strokeWidth = 1;
  let strokeColor = "#000000";
  let fillColor = "#ff0000";
  let bgColor = "#d3d3d3";// "lightgray";
  let peakCollapse = 0;
  let strokeLinejoin = "round";
  let peakLength = 0;
  let scaleFactor = 100;
  let unclosed = false;
  let styleHeight = 100;
  let styleWidth = 100;
  let attributeDimensionsDisabled = false;
  let elementRotation = 0;
  let absPeakLengthEnabled = false;
  let styleScale = 100;

  function changeAngle(angle) {
    rotation = rotation + angle;
  }

  function preset_1() {
    length = 750;
    width = 370;
    baseLength = 58;
    baseWidth = 100;
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
    baseLength = 57;
    baseWidth = 1;
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
    baseLength = 0;
    baseWidth = 100;
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
    baseLength = 42;
    baseWidth = 57;
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
    baseLength = 50;
    baseWidth = 50;
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
    baseLength = 16;
    baseWidth = 10;
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
    baseLength = 97;
    baseWidth = 64;
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
    baseLength = 0;
    baseWidth = 64;
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
    baseLength = 100;
    baseWidth = 100;
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
    baseLength = 50;
    baseWidth = 100;
    rotation = 0;
    contraction = 0;
    strokeWidth = 1;
    peakCollapse = 0;
    strokeLinejoin = "round";
    styleWidth = 500;
    styleHeight = 400;
    scaleFactor = 150;
  }

  function preset_11() {
    length = 425;
    width = 350;
    baseLength = 0;
    baseWidth = 50;
    rotation = 0;
    contraction = 0;
    strokeWidth = 1;
    peakCollapse = 0;
    strokeLinejoin = "round";
    styleWidth = 500;
    styleHeight = 400;
    scaleFactor = 100;
  }

  function preset_12() {
    length = 880;
    width = 310;
    baseLength = 2;
    baseWidth = 90;
    rotation = 0;
    contraction = 0;
    strokeWidth = 20;
    peakCollapse = 0;
    strokeLinejoin = "round";
    styleWidth = 880;
    styleHeight = 310;
    scaleFactor = 100;
  }

  function reset() {
    length = 125;
    width = 125;
    baseLength = 50;
    baseWidth = 50;
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
    margin-left: 100px;
    margin-bottom: 150px;
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
  }
  .controls_half {
    margin: 10px;
  }
  .control {
    display: flex;
    align-items: center;
    background-color: #ebf1f9;
    padding: 5px;
    box-shadow: 4px 4px 4px lightgrey;
  }

  .control_style {
    background-color: #ebfff9;
  }

  .control_title {
    font-size: 18px;
    font-weight: bold;
    justify-content: center;
  }

  button {
    display: block;
    margin: 10px;
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
        base length
        <input type="range" min="0" max="100" bind:value={baseLength} />
        <input type="text" bind:value={baseLength} size="1" />
      </div>

      <div class="control">
        base width
        <input type="range" min="0" max="100" bind:value={baseWidth} />
        <input type="text" bind:value={baseWidth} size="1" />
      </div>

      <div class="control">
        rotation
        <input type="range" min=-360 max=360 bind:value={rotation} />
        <input type="text" bind:value={rotation} size="1" />
      </div>

      <div class="control">
        <input type="checkbox" bind:checked={absPeakLengthEnabled} />
        peak length
        <input type="range" min="0" max="200" bind:value={peakLength} />
        <input type="text" bind:value={peakLength} size="1" />
      </div>

      <div class="control">
        base contraction
        <input type="range" min="0" max="100" bind:value={contraction} />
        <input type="text" bind:value={contraction} size="1" />
      </div>

      <div class="control">
        peak collapse
        <input type="range" min="0" max="100" bind:value={peakCollapse} />
        <input type="text" bind:value={peakCollapse} size="1" />
      </div>

      <div class="control">
        scale %
        <input type="range" min="0" max="200" bind:value={scaleFactor} />
        <input type="text" bind:value={scaleFactor} size="1" />
      </div>

      <div class="control">
        unclosed
        <input type="checkbox" bind:checked={unclosed} />
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
        rotation
        <input type="range" min=0 max=360 bind:value={elementRotation} />
        <input type="text" bind:value={elementRotation} size="1" />
      </div>

      <div class="control control_style">
        scale
        <input type="range" min=0 max=200 bind:value={styleScale} />
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

  <custom-arrow
    l={attributeDimensionsDisabled ? '' : length}
    w={attributeDimensionsDisabled ? '' : width}
    tail-l={baseLength}
    tail-w={baseWidth}
    rot={rotation}
    tail-cont={contraction}
    peak-coll={peakCollapse}
    peak-l={absPeakLengthEnabled ? peakLength : ''}
    {unclosed}
    scale={scaleFactor}
    style="stroke-width: {strokeWidth}px; stroke-linejoin: {strokeLinejoin}; stroke: {strokeColor}; fill: {fillColor};
    height: {styleHeight}px; width: {styleWidth}px; border-radius: 0%; transform: rotate({elementRotation}deg); transform:scale({styleScale/100},{styleScale/100}); background-color:{bgColor};">
  </custom-arrow>

</main>
