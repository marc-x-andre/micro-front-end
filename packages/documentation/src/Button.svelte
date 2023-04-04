<script>
  export let href;
  export let text;
</script>

<a
  class="mxa-button"
  type="button"
  {href}
  target="_blank"
  referrerpolicy="origin"
  alt={text + "button link"}
>
  {text}
</a>

<style lang="scss">
  .mxa-button {
    margin: 0;
    font-weight: 400;
    line-height: 1;
    font-family: inherit;
    padding: 0 14px;
    height: 34px;
    font-size: 14px;
    border-radius: 3px;
    color: #2f2f32;
    background-color: #eeeff1;
    white-space: nowrap;
    outline: none;
    position: relative;
    z-index: auto;
    border: none;
    display: inline-flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    user-select: none;
    -webkit-user-select: none;
    text-align: center;
    border: 1px solid #e0e0e6;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mxa-button:hover {
    border-color: #a855f7 !important;
    color: #a855f7 !important;
  }
  .mxa-button:active, .mxa-button:focus, .mxa-button:focus-within {
    border-color: #723aa5;
    color: #723aa5;
  }
</style>
