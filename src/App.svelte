<script>
  import ControlPanel from "./ControlPanel.svelte";
  import BallField from "./BallField.svelte";

  let entries = [];
  let id = 0;

  function handleGo() {
    console.log("Go!");
  }

  function handleReset() {
    console.log("Reset!");
  }

  function handleAddName(event) {
    let entry = {
      name: event.detail,
      id: id++
    };
    entries = [...entries, entry];
  }

  function handleBallClick(event) {
    entries = entries.filter(entry => event.detail.id != entry.id);
  }
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
  }

  .controls {
    flex-grow: 0;
    flex-shrink: 0;
    flex-direction: column;
  }
</style>

<div>
  <section class="controls">
    <ControlPanel
      on:go={handleGo}
      on:reset={handleReset}
      on:addname={handleAddName} />
  </section>
  <section class="main">
    <BallField {entries} on:ballclicked={handleBallClick} />
  </section>
</div>
