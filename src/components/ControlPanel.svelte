<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function goClicked(event) {
    dispatch("go");
  }

  function resetClicked(event) {
    dispatch("reset");
  }
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
  }

  button {
    color: white;
    display: block;
  }
  .go {
    background-color: rgb(166, 198, 102);
  }
  .go:hover {
    border-color: rgb(0, 128, 0);
  }
  .reset {
    background-color: rgb(229, 42, 29);
  }
  .reset:hover {
    border-color: rgb(83, 4, 4);
  }
</style>

<div>
  <p>
    Click Go to play a round. Every round, remaining entries have a 1-in-4
    chance of elimination.
  </p>
  <button class="go" on:click={goClicked}>Go</button>

  <p>Click Reset to stop the current game and edit entries.</p>
  <button class="reset" on:click={resetClicked}>Reset</button>
</div>
