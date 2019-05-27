<script>
  import Ball from "./Ball.svelte";

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
    <Ball {entry} />
  {/each}
</div>
