<script>
  import { entries } from "./stores/entries.js";
  import { remainingEntries, winner } from "./stores/derived.js";
  import SetupPanel from "./components/SetupPanel.svelte";
  import ControlPanel from "./components/ControlPanel.svelte";
  import BallField from "./components/BallField.svelte";

  let playing = false;
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
    width: 20%;
  }
</style>

<div>
  <section class="controls">
    {#if playing}
      <ControlPanel
        on:go={() => entries.playRound()}
        on:reset={() => {
          playing = false;
          entries.reset();
        }} />

      {#if $winner}
        <p>Congratulations, {$winner}!</p>
      {:else}
        <p>There are {$remainingEntries} entries remaining.</p>
      {/if}
    {:else}
      <SetupPanel
        on:start={() => (playing = true)}
        on:shuffle={() => entries.shuffle()}
        on:clear={() => entries.clear()}
        on:addname={event => entries.addEntry(event.detail)} />
    {/if}
  </section>
  <section class="main">
    <BallField
      entries={$entries}
      on:ballclicked={event => {
        if (!playing) {
          entries.removeEntry(event.detail);
        }
      }} />
  </section>
</div>
