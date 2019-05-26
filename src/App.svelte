<script>
  import ControlPanel from "./ControlPanel.svelte";
  import BallField from "./BallField.svelte";

  let names = ["Susan", "Dave", "Carol", "Bill"];
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
  }

  .controls {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .main {
    flex-grow: 4;
  }
</style>

<div>
  <section class="controls">
    <ControlPanel />
  </section>
  <section class="main">
    <BallField {names} />
  </section>
</div>
