<script>
  import { entries } from "./stores/entries.js";
  import ControlPanel from "./ControlPanel.svelte";
  import BallField from "./BallField.svelte";

  function handleGo() {
    entries.playRound();
  }

  function handleReset() {
    entries.reset();
  }

  function handleAddName(event) {
    entries.addEntry(event.detail);
  }

  function handleBallClick(event) {
    entries.removeEntry(event.detail);
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
    <BallField entries={$entries} on:ballclicked={handleBallClick} />
  </section>
</div>
