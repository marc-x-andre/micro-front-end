<template>
  <n-layout-header bordered class="nav">
    <a class="nav-logo" href="https://marcxandre.dev/">
      <img width="28" height="28" src="https://mfe.marcxandre.dev/icons/apple-touch-icon-180x180.png" class=""
        alt="Marc Logo" />
      @marcXandre
    </a>
    <n-space style="align-items: center; justify-content: flex-end;">
      <n-button ghost tag="a" href="https://blog.marcxandre.dev/" target="_blank" referrerpolicy="origin">
        Blog
      </n-button>
      <n-button ghost tag="a" href="https://www.linkedin.com/in/marc-x-andre/" target="_blank" referrerpolicy="origin">
        Linkedin
      </n-button>
      <n-button ghost tag="a" href="https://cv.marcxandre.dev/" target="_blank" referrerpolicy="origin">
        Resume
      </n-button>
    </n-space>
  </n-layout-header>
</template>

<style lang="scss">
.nav {
  --side-padding: 32px;
  display: grid;
  grid-template-rows: calc(var(--header-height) - 1px);
  padding: 0 var(--side-padding);
  grid-template-columns: calc(272px - var(--side-padding)) 1fr auto;
}

.nav-logo {
  display: flex;
  align-items: center;
  font-family: Caveat, v-sans, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    Segoe UI Symbol;
  font-size: 1.5rem;
  display: flex;
  color: #2f2f32;
  text-decoration: none;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #a855f7;
  }

  img {
    margin-right: 1rem;
  }
}
</style>