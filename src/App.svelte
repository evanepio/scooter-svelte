<script>
  import ControlPanel from "./ControlPanel.svelte";
  import BallField from "./BallField.svelte";

  let entries = [];
  let id = 0;

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function oneInNChances(numChances) {
    return getRandom(1, numChances) == 1;
  }

  function handleGo() {
    entries.forEach(entry => {
      let nonEliminated = entries.filter(entry => !entry.eliminated).length;
      if (!entry.eliminated) {
        if (nonEliminated == 1) {
          entry.winner = true;
        } else {
          entry.eliminated = oneInNChances(4);
        }
      }
    });

    if (entries.filter(entry => !entry.eliminated).length == 1) {
      entries.forEach(entry => {
        if (!entry.eliminated) {
          entry.winner = true;
        }
      });
    }

    entries = entries;
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
