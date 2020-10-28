<script>
  import { createEventDispatcher } from "svelte";

  import Modal from "./Modal.svelte";

  const dispatch = createEventDispatcher();

  let name = "";

  let showMultiNameAdder = false;
  let listOfNames = "";

  function handleKeyDown(event) {
    // When user hits enter and name has a value, fire event
    if (event.key == "Enter" && name) {
      dispatch("addname", name);
      name = "";
    }
  }

  function addAllNames() {
    if (listOfNames) {
      const theList = listOfNames.split("\n");
      theList.forEach(name => {
        if (name) {
          dispatch("addname", name);
        }
      });
    }
    showMultiNameAdder = false;
    listOfNames = "";
  }

  function shuffleClicked(event) {
    dispatch("shuffle");
  }

  function startClicked(event) {
    dispatch("start");
  }

  function clearClicked(event) {
    dispatch("clear");
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

  .clear {
    background-color: rgb(229, 42, 29);
  }
  .clear:hover {
    border-color: rgb(83, 4, 4);
  }

  textarea {
    width: 100%;
  }
</style>

<div>

  {#if showMultiNameAdder}
    <Modal
      on:close={() => (showMultiNameAdder = false)}
      on:primaryAction={addAllNames}
      primaryAction="Add All">
      <h1 slot="header">Add Many</h1>
      <p>
        Add a list of names, separated by a line break ("Enter" or "Return" key)
      </p>
      <textarea bind:value={listOfNames} />
    </Modal>
  {/if}

  <p>Type a name and hit enter. Repeat until you've entered everyone's name.</p>

  <input bind:value={name} on:keydown={handleKeyDown} />

  <p>
    Want to add a bunch of names all at once, possibly copied from a list some
    where? Try this:
  </p>

  <button class="start" on:click={() => (showMultiNameAdder = true)}>
    Add Many
  </button>

  <p>Accidentally added someone? Click the ball and make it disappear!</p>

  <p>You'll likely want to shuffle the entries:</p>

  <button class="start" on:click={shuffleClicked}>Shuffle</button>

  <p>When you're done, click here:</p>

  <button class="start" on:click={startClicked}>Start</button>

  <p>But...</p>

  <p>Maybe you need to start over again in one fell swoop. Click here:</p>

  <button class="clear" on:click={clearClicked}>Clear</button>
</div>
