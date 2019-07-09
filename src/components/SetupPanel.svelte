<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let name = "";

  function handleKeyDown(event) {
    // When user hits enter and name has a value, fire event
    if (event.key == "Enter" && name) {
      dispatch("addname", name);
      name = "";
    }
  }

  function shuffleClicked(event) {
    dispatch("shuffle");
  }

  function startClicked(event) {
    dispatch("start");
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
  .start {
    background-color: rgb(166, 198, 102);
  }
  .start:hover {
    border-color: rgb(0, 128, 0);
  }
</style>

<div>
  <p>Type a name and hit enter. Repeat until you've entered everyone's name.</p>

  <input bind:value={name} on:keydown={handleKeyDown} />

  <p>Accidentally added someone? Click the ball and make it disappear!</p>

  <p>You'll likely want to shuffle the entries:</p>

  <button class="start" on:click={shuffleClicked}>Shuffle</button>

  <p>When you're done, click here:</p>

  <button class="start" on:click={startClicked}>Start</button>
</div>
