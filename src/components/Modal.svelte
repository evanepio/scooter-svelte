<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let primaryAction;
</script>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal {
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100vw - 4em);
    max-width: 32em;
    max-height: calc(100vh - 4em);
    overflow: auto;
    transform: translate(-50%, -50%);
    padding: 1em;
    border-radius: 0.2em;
    background: white;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }

  .actions button {
    margin: 1em;
  }
</style>

<div class="modal-background" on:click={() => dispatch('close')} />

<div class="modal">
  <slot name="header" />
  <slot />

  <div class="actions">
    <button on:click={() => dispatch('close')}>Dismiss</button>
    {#if primaryAction}
      <button on:click={() => dispatch('primaryAction')}>
         {primaryAction}
      </button>
    {/if}
  </div>

</div>
