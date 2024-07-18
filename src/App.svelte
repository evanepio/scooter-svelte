<script lang="ts">
  import entries from "./stores/entries";
  import { playing, round, status } from "./stores/game";
  import { remainingEntries, winner } from "./stores/derived";
  import SetupPanel from "./components/SetupPanel.svelte";
  import ControlPanel from "./components/ControlPanel.svelte";
  import BallField from "./components/BallField.svelte";
</script>

<div>
  <section class="controls">
    {#if $playing}
      <ControlPanel
        on:go={() => {
          entries.playRound();
          round.increment();
        }}
        on:reset={() => {
          playing.stop();
          entries.reset();
          round.reset();
        }} />

      {#if $winner}
        <p>Congratulations, {$winner}!</p>
      {:else}
        <p>Round {$round}</p>
        {#if $status}
          <p>{$status}</p>
        {/if}
        <p>There are {$remainingEntries} entries remaining.</p>
      {/if}
    {:else}
      <SetupPanel
        on:start={() => playing.start()}
        on:shuffle={() => entries.shuffle()}
        on:clear={() => entries.clear()}
        on:addname={event => entries.addEntry(event.detail)} />
    {/if}
  </section>
  <section class="main">
    <BallField
      entries={$entries}
      on:ballclicked={event => {
        if (!$playing) {
          entries.removeEntry(event.detail);
        }
      }} />
  </section>
</div>