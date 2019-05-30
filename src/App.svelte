<script>
  import { entries, remainingEntries, winner } from "./stores/entries.js";
  import ControlPanel from "./components/ControlPanel.svelte";
  import BallField from "./components/BallField.svelte";
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
  }

  .controls {
    flex-grow: 0;
    flex-shrink: 0;
    flex-direction: column;
  }
</style>

<div>
  <section class="controls">
    <ControlPanel
      on:go={() => entries.playRound()}
      on:reset={() => entries.reset()}
      on:addname={event => entries.addEntry(event.detail)} />

    {#if $winner}
      <p>Congratulations, {$winner}!</p>
    {:else}
      <p>There are {$remainingEntries} entries remaining.</p>
    {/if}

  </section>
  <section class="main">
    <BallField
      entries={$entries}
      on:ballclicked={event => entries.removeEntry(event.detail)} />
  </section>
</div>
