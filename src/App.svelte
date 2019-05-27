<script>
  import ControlPanel from "./ControlPanel.svelte";
  import BallField from "./BallField.svelte";

  let entries = [];
  let id = 0;

  $: nonEliminatedEntries = entries.filter(entry => !entry.eliminated);

  function getRandom(min, max) {
    var x = Math.floor(Math.random() * (max - min + 1)) + min;
    return x;
  }

  function oneInNChances(numChances) {
    return getRandom(1, numChances) == 1;
  }

  function handleGo() {
    entries = entries.map(entry => {
      let calculatedEntry = entry;

      if (!entry.eliminated) {
        if (nonEliminatedEntries.length == 1) {
          calculatedEntry = { ...entry, winner: true };
        } else {
          calculatedEntry = { ...entry, eliminated: oneInNChances(4) };
        }
      }

      // ensure svelte updates reactive value nonEliminatedEntries
      entries = entries;

      return calculatedEntry;
    });
  }

  function handleReset() {
    entries = entries.map(entry => {
      return { ...entry, eliminated: false, winner: false };
    });
  }

  function handleAddName(event) {
    let entry = {
      name: event.detail,
      id: id++,
      eliminated: false,
      winner: false
    };
    entries = [...entries, entry];
  }

  function handleBallClick(event) {
    entries = entries.filter(entry => event.detail.id != entry.id);
  }
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
      on:go={handleGo}
      on:reset={handleReset}
      on:addname={handleAddName} />
  </section>
  <section class="main">
    <BallField {entries} on:ballclicked={handleBallClick} />
  </section>
</div>
