<script>
  import { createEventDispatcher } from "svelte";
  import Ball from "./Ball.svelte";

  const dispatch = createEventDispatcher();

  export let entries = [];

  function handleBallClick(event) {
    dispatch("ballclicked", event.detail);
  }
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>

<div>
  {#each entries as entry}
    <Ball {entry} on:ballclicked={handleBallClick} />
  {/each}
</div>
