<script>
  import Button from "./Button.svelte";
</script>

<div class="mxa-navbar-spacer"/>

<div class="mxa-navbar">
  <div class="mxa-inner-navbar">
    <a class="icon" href="https://marcxandre.dev/">
      <img
        width="28"
        height="28"
        src="/icons/apple-touch-icon-180x180.png"
        class=""
        alt="Marc Logo"
      />
      @marcXandre
    </a>
    <div
      class="mxa-button-group"
      style="display: flex; flex-flow: row wrap; justify-content: flex-start; gap: 8px 12px;"
    >
      <Button text="Website" href="https://marcxandre.dev/" />
      <Button text="Linkedin" href="https://linkedin.com/in/marc-x-andre/" />
      <Button text="Resume" href="https://cv.marcxandre.dev/" />
    </div>
  </div>
</div>

<style lang="scss">
  .mxa-navbar-spacer {
    height: 70px;
    width: 100%;
  }
  .mxa-navbar {
    z-index: 1000;
    width: 100vw;
    position: fixed;
    top: 0;
  }
  .mxa-inner-navbar {
    padding: 1rem 2rem;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .icon {
    font-family: Caveat, v-sans, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      Segoe UI Symbol;
    font-size: 1.5rem;
    display: flex;
    align-items: flex-end;
    color: #2f2f32;
    text-decoration: none;
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .icon:hover {
    color: #a855f7;
  }
  .icon img {
    margin-right: 1rem;
  }
  .mxa-button-group {
    display: flex;
    margin-left: auto;
  }
</style>
