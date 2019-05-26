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
    background-color: #a7c766;
  }
  .go:hover {
    border-color: green;
  }
  .reset {
    background-color: #e52a1d;
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
