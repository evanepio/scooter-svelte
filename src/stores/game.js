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
