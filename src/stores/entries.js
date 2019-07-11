import { writable } from "svelte/store";

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function oneInNChances(numChances) {
  return getRandom(1, numChances) == 1;
}

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

const shuffle = () =>
  update(entries => {
    // Lifted from https://www.frankmitchell.org/2015/01/fisher-yates/
    let loopIndex = 0,
      randomIndex = 0,
      temp = null;

    for (loopIndex = entries.length - 1; loopIndex > 0; loopIndex -= 1) {
      randomIndex = Math.floor(Math.random() * (loopIndex + 1));
      temp = entries[loopIndex];
      entries[loopIndex] = entries[randomIndex];
      entries[randomIndex] = temp;
    }

    return entries;
  });

export const entries = {
  subscribe,
  playRound,
  addEntry,
  removeEntry,
  shuffle,
  reset,
  clear
};
