<script lang="ts">
  import NoSleep from '@uriopass/nosleep.js';
  import { browser } from '$app/environment';
  import Background from '../../components/background.svelte';

  let wakeLockEnabled = false;
  let noSleep: NoSleep;

  if (browser) {
    noSleep = new NoSleep();
  }

  async function enableNoSleep(minutes?: number) {
    try {
      noSleep.enable();
      wakeLockEnabled = true;
      if (minutes) {
        setTimeout(() => {
          disableNoSleep();
        }, minutes * 60 * 1000);
      }
    } catch (err) {
      wakeLockEnabled = false;
    }
  }

  function disableNoSleep() {
    noSleep.disable();
    wakeLockEnabled = false;
  }
</script>

<div class="foreground" class:foreground--active="{wakeLockEnabled}">
  <div class="panel">
    <button on:click={() => enableNoSleep()}>On</button>
    <button on:click={disableNoSleep}>Off</button>
    <button on:click={() => enableNoSleep(15)}>15 mins</button>
    <button on:click={() => enableNoSleep(30)}>30 mins</button>
  </div>
</div>

<Background />

<style lang="scss">
  .foreground {
    position: relative;
    z-index: 2;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(62, 30, 104, 1);
    transition: background-color 0.5s ease-in;

    &--active {
      background-color: rgba(62, 30, 104, 0);
    }
  }

  button {
    background: #fff;
    border: 0;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  }
</style>
