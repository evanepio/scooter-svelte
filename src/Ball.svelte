<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let entry;

  function handleClick() {
    dispatch("ballclicked", entry);
  }
</script>

<style>
  div {
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

  .eliminated {
    background: rgb(124, 71, 38);
  }
</style>

<div on:click={handleClick} class:eliminated={entry.eliminated}>
  <span>{entry.name}</span>
</div>
