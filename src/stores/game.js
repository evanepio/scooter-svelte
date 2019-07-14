import { writable } from "svelte/store";

export const playing = (function() {
  const { subscribe, set } = writable(false);

  const start = () => set(true);
  const stop = () => set(false);

  return {
    subscribe,
    start,
    stop
  };
})();

export const round = (function() {
  const { subscribe, set, update } = writable(1);

  const reset = () => set(1);

  const increment = () => update(round => round + 1);

  return {
    subscribe,
    reset,
    increment
  };
})();

export const status = (function() {
  const { subscribe, set } = writable(null);

  const eliminatedThisRound = eliminatedThisRound => {
    let status;
    let allButLast = eliminatedThisRound.slice(
      0,
      eliminatedThisRound.length - 1
    );
    let last = eliminatedThisRound[eliminatedThisRound.length - 1];

    switch (eliminatedThisRound.length) {
      case 0:
        status = "No one eliminated! How exciting!";
        break;
      case 1:
        status = `${last} has been eliminated!`;
        break;
      case 2:
        status = `${eliminatedThisRound.join(" and ")} have been eliminated!`;
        break;
      default:
        status = `${allButLast.join(", ")}, and ${last} have been eliminated!`;
    }
    set(status);
  };

  return {
    subscribe,
    eliminatedThisRound
  };
})();
