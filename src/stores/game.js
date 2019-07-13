import { writable } from "svelte/store";

const { subscribe, set } = writable(false);

const start = () => set(true);
const stop = () => set(false);

export const playing = {
  subscribe,
  start,
  stop
};
