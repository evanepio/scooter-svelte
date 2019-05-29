<script>
  import { createEventDispatcher } from "svelte";
  import Ball from "./Ball.svelte";

  const dispatch = createEventDispatcher();

  export let entries = [];
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
    <Ball
      {entry}
      on:ballclicked={event => dispatch('ballclicked', event.detail)} />
  {/each}
</div>
