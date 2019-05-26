<script>
  import Ball from "./Ball.svelte";

  export let names = ["Susan", "Dave", "Carol"];
</script>

<style>
  div {
    background-color: #f08c2b;
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
