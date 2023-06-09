<script lang="ts">
  import NoSleep from '@uriopass/nosleep.js';
  import { browser } from '$app/environment';

  let noSleep: NoSleep;

  if (browser) {
    noSleep = new NoSleep();
  }

  function enableNoSleep() {
    noSleep.enable();
  }

  function disableNoSleep() {
    noSleep.disable();
  }
</script>

<div class="foreground">
  <div class="panel">
    <button on:click={enableNoSleep}>Enable wake lock</button>
    <button on:click={disableNoSleep}>Disable wake lock</button>
  </div>
</div>

<div class="background">
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
</div>

<style lang="scss">
  $background: #3e1e68;

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

  @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }

  .foreground {
    position: relative;
    z-index: 2;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  .background {
    z-index: 1;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: $background;
    overflow: hidden;
  }

  .background span {
    width: 20vmin;
    height: 20vmin;
    border-radius: 20vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 45;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .background span:nth-child(0) {
    color: #583c87;
    top: 89%;
    left: 51%;
    animation-duration: 22s;
    animation-delay: -35s;
    transform-origin: -10vw 3vh;
    box-shadow: 40vmin 0 5.727230366520432vmin currentColor;
  }
  .background span:nth-child(1) {
    color: #583c87;
    top: 19%;
    left: 13%;
    animation-duration: 48s;
    animation-delay: -19s;
    transform-origin: -23vw -11vh;
    box-shadow: -40vmin 0 5.864277671727785vmin currentColor;
  }
  .background span:nth-child(2) {
    color: #ffacac;
    top: 45%;
    left: 8%;
    animation-duration: 52s;
    animation-delay: -23s;
    transform-origin: 17vw 2vh;
    box-shadow: -40vmin 0 5.404070760240785vmin currentColor;
  }
  .background span:nth-child(3) {
    color: #e45a84;
    top: 87%;
    left: 33%;
    animation-duration: 30s;
    animation-delay: -18s;
    transform-origin: -13vw -11vh;
    box-shadow: -40vmin 0 5.223184734605912vmin currentColor;
  }
  .background span:nth-child(4) {
    color: #e45a84;
    top: 33%;
    left: 8%;
    animation-duration: 25s;
    animation-delay: -21s;
    transform-origin: -16vw -13vh;
    box-shadow: 40vmin 0 5.982036581179694vmin currentColor;
  }
  .background span:nth-child(5) {
    color: #583c87;
    top: 38%;
    left: 79%;
    animation-duration: 34s;
    animation-delay: -38s;
    transform-origin: 3vw -24vh;
    box-shadow: 40vmin 0 5.7812159428170355vmin currentColor;
  }
  .background span:nth-child(6) {
    color: #583c87;
    top: 84%;
    left: 81%;
    animation-duration: 51s;
    animation-delay: -15s;
    transform-origin: 13vw 10vh;
    box-shadow: 40vmin 0 5.0342192285334875vmin currentColor;
  }
  .background span:nth-child(7) {
    color: #583c87;
    top: 85%;
    left: 40%;
    animation-duration: 8s;
    animation-delay: -17s;
    transform-origin: 4vw 17vh;
    box-shadow: 40vmin 0 5.209652000159499vmin currentColor;
  }
  .background span:nth-child(8) {
    color: #e45a84;
    top: 74%;
    left: 69%;
    animation-duration: 54s;
    animation-delay: -3s;
    transform-origin: -2vw 9vh;
    box-shadow: 40vmin 0 5.624091775233075vmin currentColor;
  }
  .background span:nth-child(9) {
    color: #583c87;
    top: 50%;
    left: 71%;
    animation-duration: 42s;
    animation-delay: -40s;
    transform-origin: 21vw -19vh;
    box-shadow: 40vmin 0 5.840404885376998vmin currentColor;
  }
  .background span:nth-child(10) {
    color: #e45a84;
    top: 48%;
    left: 52%;
    animation-duration: 27s;
    animation-delay: -31s;
    transform-origin: 8vw 1vh;
    box-shadow: 40vmin 0 5.195958029027844vmin currentColor;
  }
  .background span:nth-child(11) {
    color: #583c87;
    top: 38%;
    left: 38%;
    animation-duration: 27s;
    animation-delay: -4s;
    transform-origin: 1vw 23vh;
    box-shadow: 40vmin 0 5.894226976098112vmin currentColor;
  }
  .background span:nth-child(12) {
    color: #ffacac;
    top: 81%;
    left: 35%;
    animation-duration: 21s;
    animation-delay: -48s;
    transform-origin: -2vw 15vh;
    box-shadow: 40vmin 0 5.43665359458099vmin currentColor;
  }
  .background span:nth-child(13) {
    color: #e45a84;
    top: 10%;
    left: 90%;
    animation-duration: 10s;
    animation-delay: -47s;
    transform-origin: 22vw 7vh;
    box-shadow: -40vmin 0 5.215137480283117vmin currentColor;
  }
  .background span:nth-child(14) {
    color: #583c87;
    top: 60%;
    left: 89%;
    animation-duration: 31s;
    animation-delay: -29s;
    transform-origin: 7vw 11vh;
    box-shadow: -40vmin 0 5.7549837716224435vmin currentColor;
  }
  .background span:nth-child(15) {
    color: #ffacac;
    top: 62%;
    left: 75%;
    animation-duration: 22s;
    animation-delay: -29s;
    transform-origin: -20vw -15vh;
    box-shadow: 40vmin 0 5.725732274739509vmin currentColor;
  }
  .background span:nth-child(16) {
    color: #e45a84;
    top: 49%;
    left: 76%;
    animation-duration: 9s;
    animation-delay: -33s;
    transform-origin: -3vw 13vh;
    box-shadow: -40vmin 0 5.298623190797954vmin currentColor;
  }
  .background span:nth-child(17) {
    color: #ffacac;
    top: 76%;
    left: 43%;
    animation-duration: 7s;
    animation-delay: -5s;
    transform-origin: -8vw 25vh;
    box-shadow: -40vmin 0 5.768200209555981vmin currentColor;
  }
  .background span:nth-child(18) {
    color: #583c87;
    top: 23%;
    left: 80%;
    animation-duration: 11s;
    animation-delay: -37s;
    transform-origin: 7vw 3vh;
    box-shadow: 40vmin 0 5.733986685254876vmin currentColor;
  }
  .background span:nth-child(19) {
    color: #e45a84;
    top: 32%;
    left: 44%;
    animation-duration: 12s;
    animation-delay: -17s;
    transform-origin: -17vw 14vh;
    box-shadow: -40vmin 0 5.187364791054416vmin currentColor;
  }
</style>
