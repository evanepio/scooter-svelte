<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let entry;

  function handleClick() {
    dispatch("ballclicked", entry);
  }
</script>

<style>
  .container {
    width: 160px;
    height: 160px;
    margin: 0.5em;
  }

  .ball {
    display: table;
    width: 150px;
    height: 150px;
    background: rgb(255, 255, 255);
    border: 8px solid rgb(124, 71, 38);
    border-radius: 50%;
    line-height: 40px;
    cursor: pointer;
    text-align: center;
  }

  span {
    display: table-cell;
    vertical-align: middle;
  }

  .winner {
    background: rgb(166, 198, 102);
  }
</style>

<div class="container">
  {#if !entry.eliminated}
    <div
      class="ball"
      on:click={handleClick}
      class:winner={entry.winner}
      transition:fade>
      <span>{entry.name}</span>
    </div>
  {/if}
</div>
