<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let name = "";

  function goClicked(event) {
    dispatch("go");
  }

  function resetClicked(event) {
    dispatch("reset");
  }

  function handleKeyDown(event) {
    // When user hits enter and name has a value, fire event
    if (event.key == "Enter" && name) {
      dispatch("addname", name);
      name = "";
    }
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
  <button class="reset" on:click={resetClicked}>Reset</button>
  <button class="go" on:click={goClicked}>Go</button>

  <input bind:value={name} on:keydown={handleKeyDown} />
</div>
