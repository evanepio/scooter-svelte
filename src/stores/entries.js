import { writable } from "svelte/store";

import { oneInNChances, shuffleList } from "../util/random";

export default (function() {
  let id = 0;

  const { subscribe, set, update } = writable([]);

  const addEntry = name =>
    update(entries => [
      ...entries,
      {
        name,
        id: id++,
        eliminated: false,
        winner: false
      }
    ]);

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

  const shuffle = () => update(shuffleList);

  return {
    subscribe,
    playRound,
    addEntry,
    removeEntry,
    shuffle,
    reset,
    clear
  };
})();
