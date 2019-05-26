<script>
  import Ball from "./Ball.svelte";

  export let names = ["Susan", "Dave", "Carol"];
</script>

<style>
  div {
    background-color: #f08c2b;
  }
</style>

<div>
  {#each names as name}
    <Ball {name} />
  {/each}
</div>
