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
