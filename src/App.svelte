<script>
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

  button {
    color: white;
    display: block;
  }
  .go {
    background-color: #a7c766;
  }
  .reset {
    background-color: #e52a1d;
  }
</style>

<div>
  <section class="controls">
    <button class="reset">Reset</button>
    <button class="go">Go</button>
  </section>
  <section class="main">
    <BallField {names} />
  </section>

</div>
