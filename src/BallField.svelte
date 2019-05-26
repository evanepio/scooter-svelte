<script>
  import Ball from "./Ball.svelte";

  export let names = [];
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>

<div>
  {#each names as name}
    <Ball {name} />
  {/each}
</div>
