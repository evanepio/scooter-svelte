import { derived } from "svelte/store";

import entries from "./entries";

export const remainingEntries = derived(
  entries,
  $entries => $entries.filter(entry => !entry.eliminated).length
);

export const winner = derived(entries, $entries => {
  let list = $entries.filter(entry => entry.winner == true);
  return list.length === 1 ? list[0].name : null;
});
