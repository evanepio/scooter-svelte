import { writable, derived } from "svelte/store";

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function oneInNChances(numChances) {
  return getRandom(1, numChances) == 1;
}

let id = 0;

const { subscribe, set, update } = writable([]);

const addEntry = name => {
  update(entries => [
    ...entries,
    {
      name,
      id: id++,
      eliminated: false,
      winner: false
    }
  ]);
};

const removeEntry = entryToRemove =>
  update(entries => entries.filter(entry => entryToRemove.id != entry.id));

const reset = () =>
  update(entries =>
    entries.map(entry => {
      entry.eliminated = false;
      entry.winner = false;
      return entry;
    })
  );

const clear = () => set([]);

const playRound = () =>
  update(entries => {
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
    return entries;
  });

export const entries = {
  subscribe,
  playRound,
  addEntry,
  removeEntry,
  reset,
  clear
};

export const remainingEntries = derived(
  entries,
  $entries => $entries.filter(entry => !entry.eliminated).length
);

export const winner = derived(entries, $entries => {
  let list = $entries.filter(entry => entry.winner == true);
  return list.length === 1 ? list[0].name : null;
});
